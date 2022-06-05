---
title: "Project Structures"
description: "The way we shape our projects"
---
### TypeScript

```bash
node_modules/
  ... ~the weight of the universe~ ...
src/
  ... where we keep our source code ...
package.json
... other files ...
```

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Golang
Its a bit different, but here is a nice way to setup

```bash
cmd/
  main.go
pkg/
  export_name/
    thing.go
    ...
  ...
go.mod
```

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Rustlang

```bash
src/
  bin/
    binary_1.rs
    binary_2.rs
    ...
  lib.rs
  file_1.rs
  errors.rs
target/
  ... build stuff ...
Cargo.toml # who is tom anyways?
```

### Little note
lib.rs needs to contain all the files you are using.

```
pub mod file_1.rs
pub mod errors.rs
```

this way your `bin` folder can refer to these files.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

