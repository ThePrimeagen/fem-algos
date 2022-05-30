---
title: "Rust is the bestest"
description: "finally back to the best programming ever"
---

### Some intro i didn't write
TODO: the thing we leave in which we never fix

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

### We will write it in two phases
* Saving the data
* The main control file

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

### The projector file
this is where i feel our good decisions start to compound

```rust
pub fn save(&self) -> Result<()> {
    let result = serde_json::to_string(&self.data)?;
    // todo... mkdir
    if let Some(p) = self.config.config.parent() {
        if std::fs::metadata(p).is_err() {
            std::fs::create_dir_all(p).ok();
        }
    }

    std::fs::write(&self.config.config, result)?;

    return Ok(());
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

### The main file
Tying it all together

```rust
use clap::StructOpt;
use rust::{opts::ProjectorOpts, config::{ProjectorConfig, Operation}, error::ProjectorError, projector::Projector};

fn main() -> Result<(), ProjectorError> {
    let config: ProjectorConfig = ProjectorOpts::parse().try_into()?;
    let mut proj = Projector::load_from_disk(&config)?;

    match &config.operation {
        Operation::Add((k, v)) => {
            proj.set_value(k, v.clone());
            proj.save(&config)?;
        },
        Operation::Print(k) => {
            match proj.get_value(k) {
                Some(v) => println!("{}", v),
                None => eprintln!("key {} not found", k),
            }
        }
        Operation::Remove(k) => {
            proj.remove_value(k);
            proj.save(&config)?;
        }
    }

    return Ok(());
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

### Wowza!
We actually finished!

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

