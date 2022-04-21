---
title: "What are we building?"
description: "The what and how of what we are going to build"
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

   +----------+      +----------+    +----------+
   | cli args | -+-> |  print   | -> | display  |
   +----------+  |   +----------+    +----------+
                 |
                 |   +----------+    +----------+
                 +-> |   add    | -> |   save   |
                 |   +----------+    +----------+
                 |
                 |   +----------+    +----------+
                 +-> |    rm    | -> |   save   |
                     +----------+    +----------+

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

### Finding key
This is the fun part!  The _algorithm_ part.

```bash
/foo/bar/baz/path/to/folder projector

# look for entries with
/foo/bar/baz/path/to/folder
/foo/bar/baz/path/to
/foo/bar/baz/path
/foo/bar/baz
/foo/bar
/foo
/

# Merge each of the value set together from right to left,
# left being lowest priority
```

#### The algo is the same for specific keys

```bash
/foo/bar/baz/path/to/folder projector foo

# look for entries with
/foo/bar/baz/path/to/folder # no foo
/foo/bar/baz/path/to # no foo
/foo/bar/baz/path # found foo < return value now
```

### Deleting/Adding Key
For deleting/adding the key, we should probably only delete at the `pwd`.

#### Does deleting coming before adding trigger your ocd?
Buckle up

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

