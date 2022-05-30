---
title: "Rustlang projector"
description: "Gophers be damned"
---


### The real language, doing the real work
Lets get rusty

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

### The ascii diagram again.

```
                                 v <-- you are here (still)
                                                    (but now you are a rustacean)
   +----------+    +----------+      +----------+    +----------+
   | cli opts | -> | project  | -+-> |  print   | -> | display  |
   +----------+    |  config  |  |   +----------+    +----------+
                   +----------+  |
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

### So lets create the file (src/projector.rs)

```bash
> src/projector.rs
```

RUST IT UP

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

### Here is what the code could look like

```rust
use std::{collections::HashMap, path::PathBuf};
use serde::{Deserialize, Serialize};
use crate::config::ProjectorConfig;

#[derive(Debug, Default, Deserialize, Serialize)]
struct ProjectorData {
    projector: HashMap<PathBuf, HashMap<String, String>>
}

pub struct Projector {
    config: ProjectorConfig,
    data: ProjectorData,
}

fn default_projector(config: ProjectorConfig) -> Projector {
    let data = ProjectorData::default();
    return Projector {
        config,
        data,
    }
}

impl From<ProjectorConfig> for Projector {
    fn from(config: ProjectorConfig) -> Self {
        if std::fs::metadata(&config.config).is_err() {
            return default_projector(config);
        }

        if let Ok(data) = std::fs::read_to_string(&config.config) {
            let data = serde_json::from_str(&data);
            if let Ok(data) = data {
                return Projector {
                    config,
                    data,
                }
            }
        }

        return default_projector(config);
    }
}

impl Projector {
    pub fn get_value(&self, key: &str) -> Option<&String> {
        let mut out = None;
        let mut curr = Some(self.config.pwd.as_path());

        while let Some(p) = curr {
            if let Some(dir) = self.data.projector.get(p) {
                let value = dir.get(key);
                if value.is_some() {
                    out = value;
                    break;
                }
            }
            curr = p.parent();
        }

        return out;
    }

    pub fn set_value(&mut self, key: &str, value: String) {
        self.data.projector
            .entry(self.config.pwd.clone())
            .or_insert_with(|| HashMap::new())
            .insert(key.to_string(), value);
    }

    pub fn delete_value(&mut self, key: &str) {
        self.data.projector
            .entry(self.config.pwd.clone())
            .or_insert_with(|| HashMap::new())
            .remove(key);
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

### Forgot the anniversary?
Testing Time

```bash
cargo add collection_macros
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

### Your tests could look like

```rust
#[cfg(test)]
mod test {
    use std::{path::PathBuf, collections::HashMap};

    use collection_macros::hashmap;

    use crate::config::{ProjectorConfig, Operation};

    use super::{ProjectorData, Projector};


    fn get_config(pwd: PathBuf) -> ProjectorConfig {
        return ProjectorConfig {
            config: PathBuf::from("/foo"),
            operation: Operation::Print(None),
            pwd,
        }
    }

    fn get_data() -> ProjectorData {
        return ProjectorData {
            projector: hashmap! {
                PathBuf::from("/") => hashmap! {
                    "foo".into() => "bar1".into(),
                    "bar".into() => "bazz".into(),
                },
                PathBuf::from("/foo") => hashmap! {
                    "foo".into() => "bar2".into()
                },
                PathBuf::from("/foo/bar") => hashmap! {
                    "foo".into() => "bar3".into()
                },
                PathBuf::from("/foo/bar/baz") => hashmap! {
                    "foo".into() => "bar3".into()
                },
            },
        }
    }

    #[test]
    fn get_value() {
        let proj = Projector {
            data: get_data(),
            config: get_config(PathBuf::from("/foo/bar")),
        };

        assert_eq!(proj.get_value("foo"), Some(&String::from("bar3")));
        assert_eq!(proj.get_value("bar"), Some(&String::from("bazz")));
        assert_eq!(proj.get_value("notehu"), None);
    }

    #[test]
    fn set_value() {
        let mut proj = Projector {
            data: get_data(),
            config: get_config(PathBuf::from("/foo/bar")),
        };

        assert_eq!(proj.get_value("foo"), Some(&String::from("bar3")));
        proj.set_value("foo", "hello, fem".into());
        assert_eq!(proj.get_value("foo"), Some(&String::from("hello, fem")));
    }

    #[test]
    fn delete_value() {
        let mut proj = Projector {
            data: get_data(),
            config: get_config(PathBuf::from("/foo/bar")),
        };

        assert_eq!(proj.get_value("foo"), Some(&String::from("bar3")));
        proj.delete_value("foo");
        assert_eq!(proj.get_value("foo"), Some(&String::from("bar2")));
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

### ONTO VICTORY!!!

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

