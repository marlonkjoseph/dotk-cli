dotk
====

A simple DevOps Toolkit.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dotk.svg)](https://npmjs.org/package/dotk)
[![Downloads/week](https://img.shields.io/npm/dw/dotk.svg)](https://npmjs.org/package/dotk)
[![License](https://img.shields.io/npm/l/dotk.svg)](https://github.com/marlonkjoseph/dotk-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dotk
$ dotk COMMAND
running command...
$ dotk (-v|--version|version)
dotk/0.0.0 darwin-x64 node-v12.14.1
$ dotk --help [COMMAND]
USAGE
  $ dotk COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dotk hello [FILE]`](#dotk-hello-file)
* [`dotk help [COMMAND]`](#dotk-help-command)
* [`dotk init [FILE]`](#dotk-init-file)

## `dotk hello [FILE]`

describe the command here

```
USAGE
  $ dotk hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dotk hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/marlonkjoseph/dotk-cli/blob/v0.0.0/src/commands/hello.ts)_

## `dotk help [COMMAND]`

display help for dotk

```
USAGE
  $ dotk help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `dotk init [FILE]`

describe the command here

```
USAGE
  $ dotk init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/init.ts](https://github.com/marlonkjoseph/dotk-cli/blob/v0.0.0/src/commands/init.ts)_
<!-- commandsstop -->
