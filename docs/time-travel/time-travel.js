/**
 * compile with `babel`, sourcemap inline & preset `babel-preset-env`.
 */

const timeTravel = async () => {
  class DisplayCount {
    constructor(length = 0) {
      this.max = length - 1;
      this.count = this.max;
    }
    validate(v) {
      const parsedV = parseInt(v, 10);
      if (isNaN(parsedV)) {
        console.warn(
          `DisplayCount: invalid value (${v} has to be a finite number.)`
        );
        return this.max;
      }
      return parsedV;
    }
    reset() {
      this.count = 0;
      return this.count;
    }
    maximize() {
      this.count = this.max;
      return this.count;
    }
    limit(v) {
      v = this.validate(v);
      if (v > this.max) v = this.max;
      if (v < 0) v = 0;
      return v;
    }
    add(v = 0) {
      v = this.validate(v);
      this.count = this.limit(this.count + v);
      return this.count;
    }
    jumpTo(v) {
      v = this.validate(v);
      this.count = this.limit(v);
      return this.count;
    }
    isFirst() {
      return this.count === 0;
    }
    isLast() {
      return this.count === this.max;
    }
  }

  const getPullRequests = () =>
    fetch("./index.json")
      .then(res => res.json())
      .then(res => res.data.repository.pullRequests.edges)
      .catch(err => console.warn(err));

  const getEl = id => document.getElementById(id);

  const $buttonFirst = getEl("js-button-first");
  const $buttonNext = getEl("js-button-next");
  const $buttonPrevious = getEl("js-button-previous");
  const $buttonLast = getEl("js-button-last");
  const $historyOverview = getEl("history-overview");

  const $display = getEl("js-display");
  const $historyId = getEl("js-history-id");
  const $historyMax = getEl("js-history-max");

  const $prTitle = getEl("js-pr-title");
  const $prAuthor = getEl("js-pr-author");
  const $prAuthorAvatar = getEl("js-pr-author-avatar");
  const $prEditor = getEl("js-pr-editor");
  const $prEditorAvatar = getEl("js-pr-editor-avatar");
  const $prMergedAt = getEl("js-pr-mergedAt");
  const $prUrl = getEl("js-pr-url");

  const onKeyPress = (key, callback) => {
    window.addEventListener("keyup", e => {
      if (e.key === key) {
        callback();
      }
    });
    return callback;
  };

  const updateDisplay = count => {
    const pr = pullRequests[count];
    const { id, title, author, editor, mergedAt, url } = pr.node;

    // https://stackoverflow.com/a/2257295
    $display.contentWindow.location.replace(`./history/${id}/docs/`);

    $historyId.textContent = count + 1;
    $prTitle.textContent = title;

    $prAuthor.textContent = author.login;
    $prAuthorAvatar.src = author.avatarUrl;
    $prAuthorAvatar.setAttribute("alt", `Author: ${author.login}`);

    if (editor) {
      $prEditor.textContent = editor && editor.login;
      $prEditorAvatar.src = editor.avatarUrl;
      $prAuthorAvatar.setAttribute("alt", `Author: ${author.login}`);
    } else {
      $prEditor.textContent = "No editor";
      $prEditorAvatar.src = "";
      $prAuthorAvatar.setAttribute("alt", `No editor`);
    }

    $prMergedAt.textContent = `Merged at ${mergedAt}`;
    $prUrl.href = url;

    // update the navigable overview of all commits
    // please note: the whole historyOverview div has
    // its own eventListener (see EOF)
    while ($historyOverview.lastChild) {
      $historyOverview.removeChild($historyOverview.lastChild);
    }
    let fragment = document.createDocumentFragment();
    for (let i = 1; i <= pullRequests.length; i++) {
      let j = i - 1;
      let elButton = document.createElement("button");
      elButton.appendChild(document.createTextNode(i));
      elButton.setAttribute("data-commit", j);
      if (j === count) elButton.className = "currentCommit";
      fragment.appendChild(elButton);
    }
    $historyOverview.appendChild(fragment);
  };

  const updateHashURL = hash => {
    window.history.pushState(null, null, `#${hash + 1}`);
  };

  const updateView = currentCount => {
    updateHashURL(currentCount);
    updateDisplay(currentCount);
  };

  const pullRequests = await getPullRequests();
  const count = new DisplayCount(pullRequests.length);

  // get hash link
  const getHashCount = () => {
    if (window.location.hash) return window.location.hash.split("#")[1];
    return null;
  };
  // pop back
  window.onpopstate = () => {
    console.log(`state popped: ${window.location.hash}`);
    updateDisplay(count.jumpTo(getHashCount()));
  };

  // start
  $historyMax.textContent = count.max + 1;
  updateView(count.jumpTo(getHashCount()));

  // button control
  $buttonFirst.onclick = () => {
    if (!count.isFirst()) {
      updateView(count.reset());
    }
  };
  $buttonPrevious.onclick = onKeyPress("ArrowLeft", () => {
    if (!count.isFirst()) {
      updateView(count.add(-1));
    }
  });
  $buttonNext.onclick = onKeyPress("ArrowRight", () => {
    if (!count.isLast()) {
      updateView(count.add(1));
    }
  });
  $buttonLast.onclick = () => {
    if (!count.isLast()) {
      updateView(count.maximize());
    }
  };
  $historyOverview.addEventListener("click", e => {
    const commitNr = e.target.dataset.commit;
    if (commitNr) updateView(count.jumpTo(commitNr));
  });
};

window.onload = timeTravel;
