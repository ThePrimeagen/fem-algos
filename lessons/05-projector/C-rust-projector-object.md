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

use crate::opts::ProjectorOpts;
use crate::error::ProjectorError;

pub struct ProjectorConfig {
    pub operation: Operation,
    pub pwd: PathBuf,
    pub config: PathBuf,
}

#[derive(Debug)]
pub enum Operation {
    Print(Vec<String>),
    Add((String, String)),
    Remove(String),
}

impl TryInto<Operation> for Vec<String> {
    type Error = ProjectorError;

    fn try_into(self) -> Result<Operation, Self::Error> {
        if self.len() == 0 {
            return Ok(Operation::Print(self));
        }

        if self[0] == "add" {
            if self.len() != 3 {
                return Err(ProjectorError::InvalidArguments{
                    count: self.len() - 1,
                    expected: 2
                })
            }

            return Ok(Operation::Add((
                self[1].clone(),
                self[2].clone(),
            )))
        }

        if self[0] == "rm" {
            if self.len() != 2 {
                return Err(ProjectorError::InvalidArguments{
                    count: self.len() - 1,
                    expected: 1
                })
            }

            return Ok(Operation::Remove(self[1].clone()))
        }

        return Ok(Operation::Print(self))
    }
}

fn get_pwd(pwd: Option<PathBuf>) -> Result<PathBuf, ProjectorError> {
    if let Some(pwd) = pwd {
        return Ok(pwd);
    }

    return Ok(std::env::current_dir()?);
}

fn get_config(config: Option<PathBuf>) -> Result<PathBuf, ProjectorError> {
    if let Some(config) = config {
        return Ok(config);
    }

    let mut config = PathBuf::from(std::env::var("HOME")?);
    config.push("projector");
    config.push("projector.json");
    return Ok(config);
}

pub fn to_config(opts: ProjectorOpts) -> Result<ProjectorConfig, ProjectorError> {
    return Ok(ProjectorConfig {
        pwd: get_pwd(opts.pwd)?,
        config: get_config(opts.config)?,
        operation: opts.arguments.try_into()?,
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

### Tests you are likely not familiar with
Testing is a delight with rust.

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

### Your code could look like this!

```rust
// ... rest of config.rs
#[cfg(test)]
mod test {
    use crate::error::ProjectorError;

    use super::Operation;

    #[test]
    fn test_operation() -> Result<(), ProjectorError> {
        let operation: Operation = vec![
            String::from("foo"),
            String::from("bar"),
            String::from("baz"),
        ].try_into()?;

        assert_eq!(operation, Operation::Print(vec![
            String::from("foo"),
            String::from("bar"),
            String::from("baz"),
        ]));

        let operation: Operation = vec![
            String::from("add"),
            String::from("bar"),
            String::from("baz"),
        ].try_into()?;

        assert_eq!(operation, Operation::Add((
            String::from("bar"),
            String::from("baz"),
        )));

        let operation: Operation = vec![
            String::from("rm"),
            String::from("bar"),
        ].try_into()?;

        assert_eq!(operation, Operation::Remove(
            String::from("bar"),
        ));

        let operation: Result<Operation, ProjectorError> = vec![
            String::from("rm"),
            String::from("bar"),
            String::from("baz"),
        ].try_into();

        assert_eq!(operation.is_err(), true);
        match operation {
            Err(ProjectorError::InvalidArguments{count, expected}) => {
                assert_eq!(count, 2);
                assert_eq!(expected, 1);
            },
            _ => unreachable!(),
        }

        let operation: Result<Operation, ProjectorError> = vec![
            String::from("add"),
            String::from("bar"),
        ].try_into();

        assert_eq!(operation.is_err(), true);
        match operation {
            Err(ProjectorError::InvalidArguments{count, expected}) => {
                assert_eq!(count, 1);
                assert_eq!(expected, 2);
            },
            _ => unreachable!(),
        }

        return Ok(());
    }
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


