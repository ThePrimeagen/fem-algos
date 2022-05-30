---
title: "Golang"
description: "We are finishing up the whole thing"
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

```go
func (p *Projector) Save() error {
    dir := path.Dir(p.config.Config)
    if _, err := os.Stat(dir); os.IsNotExist(err) {
        os.MkdirAll(dir, fs.FileMode(0755))
    }

    bytes, err := json.Marshal(p.data)
    if err != nil {
        return err
    }

    os.WriteFile(p.config.Config, bytes, fs.FileMode(0755))
    return nil
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
This is the file that is the executable, lets use that to put everything together.

```go
package main

import (
	"fmt"
	"log"
	"os"

	"github.com/theprimeagen/projector/pkg/projector"
)

func main() {
    opts, err := projector.GetOptions()
    if err != nil {
        log.Fatalf("error: %v", err)
    }

    config, err := projector.NewProjectorConfig(opts)
    if err != nil {
        log.Fatalf("error: %v", err)
    }

    prj, err := projector.FromConfig(config)
    if err != nil {
        log.Fatalf("error: %v", err)
    }

    switch config.Operation {
    case projector.Add:
        prj.SetValue(config.Arguments[0], config.Arguments[1])
        prj.Save(config)
    case projector.Remove:
        prj.RemoveValue(config.Arguments[0])
        prj.Save(config)
    case projector.Print:
        value, found := prj.GetValue(config.Arguments[0])
        if found {
            fmt.Print(value)
        } else {
            fmt.Fprintf(os.Stderr, "Could not find results for %v", config.Arguments[0])
        }
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

### Rust is the greatest, the bestest!!
GO FORTH WITH RUSTACEASOUSNESSES

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

