---
title: "Rust : Projector Tests"
description: "Lets test this bad boi"
---

### Wanna guess how i feel about rust testing?

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

### Fantastic

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

### Here is the code!

```rust

#[cfg(test)]
mod test {
    use anyhow::Result;

    use crate::{opts::CLIOptions, config::Operation};

    use super::get_projector_config;

    #[test]
    fn test_print() -> Result<()> {
        let opts = CLIOptions {
            config: None,
            pwd: None,
            arguments: vec![],
        };

        let config = get_projector_config(opts)?;

        assert_eq!(config.operation, Operation::Print(None));

        return Ok(());
    }

    #[test]
    fn test_add() -> Result<()> {
        let opts = CLIOptions {
            config: None,
            pwd: None,
            arguments: vec![
                "add".to_string(), "foo".into(), String::from("bar")
            ],
        };

        let config = get_projector_config(opts)?;

        assert_eq!(config.operation, Operation::Add((String::from("foo"), String::from("bar"))));

        return Ok(());
    }
}
```
