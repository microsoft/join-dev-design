require("dotenv").config();

const fs = require("fs-extra");
const path = require("path");
const fetch = require("node-fetch");
// const unzip = require("unzipper");
// const extract = require('tar-stream').extract();
const tar = require("tar");
// const gunzip = require('gunzip-maybe');

const accessToken = process.env.ACCESS_TOKEN;
const query = `
{
  repository(owner:"Microsoft", name:"join-dev-design"){
    pullRequests(first: 100, states: MERGED) {
      edges {
        node {
          id
          title
          url
          mergedAt
          author {
            login
            avatarUrl
          }
          editor {
            login
            avatarUrl
          }
          mergeCommit {
            committedDate
            id
            tarballUrl
          }
          id
        }
      }
    }
  }
}`;

const historyFolderPath = path.resolve(
  __dirname,
  `../docs/time-travel/history`
);

/**
 * - Flush `.docs/time-travel/history` folder.
 */
const flushFolders = async data => {
  try {
    await fs.remove(historyFolderPath);
    await fs.ensureDir(historyFolderPath);
    console.log("`docs/time-travel/history` is flushed.");
    return data;
  } catch (err) {
    console.error(err);
  }
};

/**
 * getData from github
 * @return {Promise} A Promise that resolves to response
 */
const getDataFromGithub = () =>
  fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then(res => res.json())
    .catch(console.error);

/**
 * Write github response to a json so the front end can use it later.
 * @param {Object} data
 * @return {Object} same data object
 */
const writeJSONToDocs = data => {
  return fs
    .writeFile(
      path.resolve(__dirname, `../docs/time-travel/index.json`),
      JSON.stringify(data)
    )
    .then(() => data)
    .catch(console.error);
};

/**
 * Parse tar, keep 'docs/', remove 'docs/time-travel' and everything else
 * @param {String} options.url tarball url
 * @param {String} oprions.id id of merged pull request
 */
const parseTarball = async options => {
  const { url, id } = options;
  const tarball = await fetch(url);
  const tarballStream = tarball.body;
  const unzipPath = path.join(historyFolderPath, id);
  const parse = new tar.Parse();

  tarballStream
    .on("error", console.error)
    .pipe(parse)
    .on("entry", async function(entry) {
      const type = entry.type;
      const tpath = entry.path;
      const [root, subDir1, subDir2, ...rest] = tpath.split(path.sep);
      console.log(type, tpath);

      if (subDir1 === "docs" && subDir2 !== "time-travel" && type === "File") {
        const docsPath = path.join(unzipPath, subDir1, subDir2, rest.join(""));

        try {
          await fs.ensureFile(docsPath);
        } catch (err) {
          console.error(err);
        }

        entry.pipe(fs.createWriteStream(docsPath));
      } else {
        entry.resume();
      }

      // entry.on('end', () => { console.log(`${tpath} is written`) });
      entry.on("error", console.error);
    })
    .on("error", console.error);

  return new Promise(function(resolve, reject) {
    tarballStream.on("finish", () => {
      resolve(unzipPath);
    });
    tarballStream.on("error", reject);
  });
};

getDataFromGithub()
  .then(flushFolders)
  .then(writeJSONToDocs)
  .then(res => {
    const tarPromises = res.data.repository.pullRequests.edges.map(edge => {
      const url = edge.node.mergeCommit.tarballUrl;
      const id = edge.node.id;

      return parseTarball({
        id,
        url
      });
    });

    return Promise.all(tarPromises);
  })
  .then(paths => {
    console.log(
      `build complete. ${
        paths.length
      } folders has been written to ${historyFolderPath}.`
    );
  });
