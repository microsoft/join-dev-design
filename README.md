# Join Microsoft Developer Design

Microsoft is hiring technical product designers and design leaders. [Learn more](https://microsoft.github.io/join-dev-design/).

## Development

```shell
$ npm install
$ npm start
```

### Time Travel

Time travel displays past versions of the repo based on merged pull requests.
The build script in `time-travel` folder fetchs each merged pull request's `docs` folder content (except for `docs/time-travel/`) and store them in `docs/time-travel/history`, then writes data to `docs/time-travel/index.json` for later use. Currently this process has to be done manually.

**Note**: Create a `.env` with your github's access token in order to fetch data from Github API.

```shell
# update build
$ npm run build-timetravel
```

The page for time-travel is intentionally kept separated from `docs/` (not reusing `docs/css/style.css`) so it's easier to maintain.

---

There's a [Figma file](https://www.figma.com/file/Nkddv9KabDaTFtqZ5vlSzUxr/Developer-Design-Recruiting-Site?node-id=1%3A2) for the design but it's currently Microsoft internal.

## Contributing

_We have to include these for legal reasons:_

- [Contributor License Agreement (CLA)](https://cla.microsoft.com).
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
