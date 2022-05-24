---
title: "Rustlang - CLI"
description: "Lets build the arguments parsing for rust"
---

### Rust
I am going to make the assumption that rust will be a foreign invader to your
brain and feel very hard.

If you stick with rust, you will soon say its the most fun and least fun
language you have ever worked in.

### CLI Argument parsing
Rust has the best.  Hands down.

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

### I use tmux, btw
Such fast swapping

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

### So to get started lets create the project
Create it where you like

#### Before you get started
`cargo add` is not a default feature, instead you need to add it.

#### github.com/killercup/cargo-edit
Install: [Cargo Edit](https://github.com/killercup/cargo-edit)

```bash
cargo init
cargo add clap --features=derive
vim . # you can open up other moderately slow editor of your choice
```

This is the rust time... it will be a bit interesting.

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

### Project Structure

After cargo init
```bash
.git
.gitignore
src/main.rs
Cargo.toml
Cargo.lock
```

Change it
```bash
src/main.rs -> src/bin/projector.rs
src/lib.rs
src/opts.rs
```

### Lets program it!

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

### Example of the opts.rs

```rust
// src/opts.rs
use std::path::PathBuf;

use clap::Parser;

#[derive(Parser, Debug)]
#[clap()]
pub struct ProjectorOpts {

    #[clap(short = 'p', long = "pwd")]
    pub pwd: Option<PathBuf>,

    #[clap(short = 'c', long = "config")]
    pub config: Option<PathBuf>,

    #[clap(default_value = "")]
    pub operation: Vec<String>,
}
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

