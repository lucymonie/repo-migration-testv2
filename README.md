# guui [![Build Status](https://travis-ci.org/guardian/guui.svg?branch=master)](https://travis-ci.org/guardian/guui) [![Known Vulnerabilities](https://snyk.io/test/github/guardian/guui/badge.svg?targetFile=package.json)](https://snyk.io/test/github/guardian/guui?targetFile=package.json)

              

Frontend rendering framework for theguardian.com. It uses [react](https://reactjs.org) and [emotion](https://emotion.sh).

Slack channel: [#dotcom-future](https://theguardian.slack.com/messages/C0JES5PEV)

## Setup
### Node

The only thing you need to make sure you have installed before you get going is Node. 

We recommend [nvm](https://github.com/creationix/nvm) (especially combined with [this handy gist](https://gist.github.com/sndrs/5940e9e8a3f506b287233ed65365befb)). It is great at managing multiple versions of Node on one machine.

If you prefer to [install Node manually](https://nodejs.org/en/), 
check the [.nvmrc](https://github.com/guardian/guui/blob/master/.nvmrc) for the current required version. 

That's it – everything else should be installed for you on demand.

## Development
`make dev` starts the development server.

## Build
`make build` creates production-ready bundles.

## Other tasks

### Code quality
- `make lint`
- `make flow`
- `make test`

`make validate` runs all of the above, plus a final `make build`.

If you get lint errors, `make fix` will attempt to automatically fix them for you.

See [the makefile](https://github.com/guardian/guui/blob/master/makefile) for the full list.

## IDE setup

### VSCode
We use [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) to allow us to import things cleanly. If you're using VSCode, adding the following to a `./jsconfig.json` file will help it resolve modules usefully:

```json
{
    "compilerOptions": {
        "baseUrl": "src/",
    }
}
```

The following extensions may also make life a bit easier:

- [css-in-js autocomplete/conversion](https://marketplace.visualstudio.com/items?itemName=paulmolluzzo.convert-css-in-js)
- [colour highlighting in JS](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
