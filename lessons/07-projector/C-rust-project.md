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
    use std::{collections::HashMap, path::PathBuf};

    use collection_macros::hashmap;

    use super::{Projector, ProjectorData};

    // Showing the difference between explicitly using PathBuf::from vs .into
    fn test_data() -> ProjectorData {
        return ProjectorData {
            projector: hashmap! {
                PathBuf::from("/foo/bar/baz") => hashmap! {
                    String::from("foo") => String::from("bar1")
                },
                PathBuf::from("/foo/bar") => hashmap! {
                    String::from("foo") => String::from("bar2")
                },
                PathBuf::from("/foo") => hashmap! {
                    String::from("foo") => String::from("bar3")
                },
                PathBuf::from("/") => hashmap! {
                    String::from("foo") => String::from("bar4")
                },
            }
        };
    }

    fn test_projector(pwd: PathBuf) -> Projector {
        return Projector::from_data(pwd, test_data());
    }

    #[test]
    fn finding_values() {
        let projector = test_projector("/foo/bar/baz".into());
        assert_eq!(projector.get_value("foo"), Some(String::from("bar1")));

        let projector = test_projector("/foo/bar".into());
        assert_eq!(projector.get_value("foo"), Some(String::from("bar2")));

        let projector = test_projector("/foo".into());
        assert_eq!(projector.get_value("foo"), Some(String::from("bar3")));

        let projector = test_projector("/".into());
        assert_eq!(projector.get_value("foo"), Some(String::from("bar4")));

        let projector = Projector::from_data("/foo/bar/baz".into(), ProjectorData {
            projector: hashmap! {
                "/".into() => hashmap! {
                    "foo".into() => "bar".into()
                }
            }
        });

        assert_eq!(projector.get_value("foo"), Some(String::from("bar")));
    }

    #[test]
    fn adding_values() {
        let mut projector = Projector::from_data("/foo/bar/baz".into(), ProjectorData {
            projector: hashmap! {
                "/".into() => hashmap! {
                    "foo".into() => "bar".into()
                }
            }
        });

        assert_eq!(projector.get_value("foo"), Some(String::from("bar")));

        projector.set_value("foo", "new-bar".into());
        assert_eq!(projector.get_value("foo"), Some(String::from("new-bar")));
    }

    #[test]
    fn removing_values() {
        let mut projector = Projector::from_data("/foo/bar/baz".into(), ProjectorData {
            projector: hashmap! {
                "/".into() => hashmap! {
                    "foo".into() => "bar".into()
                },
                "/foo/bar/baz".into() => hashmap! {
                    "foo".into() => "bar2".into()
                }
            }
        });

        assert_eq!(projector.get_value("foo"), Some(String::from("bar2")));

        projector.remove_value("foo");
        assert_eq!(projector.get_value("foo"), Some(String::from("bar")));
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

