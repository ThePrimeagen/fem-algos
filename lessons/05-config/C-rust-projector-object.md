---
title: "Rust : Projector Object"
description: "The greatest language ever created by man"
---


### Do you really need to see this?

```
   +----------+    +----------+
   | cli opts | -> | project  | -+->
   |  (done)  |    |  config  |  |
   +----------+    +----------+  |
                                 |
                                 +->
                                 |
                                 |
                                 |
                                 +->


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

#### We may not be doing this the canonical way, but its the fun way
We are going to do this a bit weird, but I think its fantastic.  It will really
show you the power of the trait system.

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

### Lets build the Projector object

```bash
src/projector/config.go
```

LETS BUILD!!!

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

#### The code!

```rust
use std::path::PathBuf;

use crate::opts::CLIOptions;
use anyhow::{Result, anyhow, Context};

pub enum Operation {
    Print(Option<String>),
    Add((String, String)),
    Remove(String),
}

pub struct ProjectorConfig {
    pub operation: Operation,
    pub config: PathBuf,
    pub pwd: PathBuf,
}

impl TryFrom<Vec<String>> for Operation {
    type Error = anyhow::Error;

    fn try_from(mut value: Vec<String>) -> Result<Self, Self::Error> {
        if value.len() == 0 {
            return Ok(Operation::Print(None));
        }

        let term = value.get(0).unwrap();

        if term == "add" {
            if value.len() != 3 {
                return Err(anyhow!("expected 2 arguments but you provided {}", value.len() - 1));
            }
            let mut drain = value.drain(1..=2);
            return Ok(Operation::Add((drain.next().unwrap(), drain.next().unwrap())));
        }

        if term == "rm" {
            if value.len() != 2 {
                return Err(anyhow!("expected 1 arguments but you provided {}", value.len() - 1));
            }
            let mut drain = value.drain(1..2);
            return Ok(Operation::Remove(drain.next().unwrap()));
        }

        if value.len() != 1 {
            return Err(anyhow!("expected 0 or 1 arguments but you provided {}", value.len()));
        }

        return Ok(Operation::Print(Some(term.clone())));
    }
}

fn get_config(config: Option<PathBuf>) -> Result<PathBuf> {
    if let Some(c) = config {
        return Ok(c);
    }

    if let Ok(home) = std::env::var("XDG_CONFIG_HOME") {

        let mut home = PathBuf::from(home);
        home.push("projector");
        home.push("projector.json");
        return Ok(home);
    }

    if let Ok(home) = std::env::var("HOME") {
        let mut home = PathBuf::from(home);
        home.push("projector");
        home.push("projector.json");
        return Ok(home);
    }

    return Err(anyhow!("unable to find config location"));
}

fn get_pwd(pwd: Option<PathBuf>) -> Result<PathBuf> {
    if let Some(p) = pwd {
        return Ok(p);
    }

    return std::env::current_dir().context("unable to get std::env::current_dir");
}

pub fn get_projector_config(opts: CLIOptions) -> Result<ProjectorConfig> {
    return Ok(ProjectorConfig {
        operation: opts.arguments.try_into()?,
        config: get_config(opts.config)?,
        pwd: get_pwd(opts.pwd)?,
    });
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

