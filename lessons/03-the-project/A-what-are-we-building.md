---
title: "CSS"
description: "CSS is for styling"
---

### Projector
A simple CLI application that stores, deletes, or presents variables based on
the current working directory or a path provided.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

#### Simple Example

##### Print All Values
```bash
> cd /foo/bar
> /foo/bar> projector
> {}
```

##### Add/Get Value
```bash
> /foo/bar> projector add foo bar
> /foo/bar> projector
> {"foo": "bar"}
> /foo/bar> projector foo
> bar
```

##### Merging Data
```bash
> /foo/bar> cd baz
> /foo/bar/baz> projector
> {"foo": "bar"}
> /foo/bar/baz> projector foo
> bar
> /foo/bar/baz> projector add foo twitch
> /foo/bar/baz> projector
> {"foo": "twitch"}
> cd ..
> /foo/bar> projector
> {"foo": "bar"}
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Breaking the problem up

```

   +----------+      +----------+
   | cli args | -+-> |  print   |
   +----------+  |   +----------+
                 |
                 |   +----------+
                 +-> |   add    |
                 |   +----------+
                 |
                 |   +----------+
                 +-> |    rm    |
                     +----------+

```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### CLI Arg Parsing
we are going to use libraries for these.

- NodeJS : command-line-args
  - simple, easy to use.

- Golang : github.com/hellflame/argparse
  - A bit of config, but becomes easy once you get it

- Rust : clap
  - The greatest CLI parser by the mostest

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

