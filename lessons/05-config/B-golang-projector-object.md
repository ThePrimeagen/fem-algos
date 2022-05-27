---
title: "TypeScript : Projector Object"
description: "The projector object will contain the operations"
---


### The problem (again)

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

#### Interested in go vs typescript
If you are curious [Go - TS](https://www.youtube.com/watch?v=h7UEwBaGoVo).
With rust included! [TS - Go - Rust](https://www.youtube.com/watch?v=Z0GX2mTUtfo).

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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

```go
package projector

import (
	"os"
	"path"
)

type Operation = int

const (
    Print Operation = iota
    Add
    Remove
)

type ProjectorConfig struct {
    Pwd string // projector --pwd ...
    Config string // projector --config ...
    Operation Operation // print, add, remove
    Arguments []string // <key>*, <key> <value>, <key>
}

func getConfig(config string) (string, error) {
    if config == "" {
        configDir, err := os.UserConfigDir()
        if err != nil {
            return "", err
        }

        return path.Join(configDir, "projector", "projector.json"), nil
    }

    return config, nil
}

func getPwd(pwd string) (string, error) {
    if pwd == "" {
        wd, err := os.Getwd()
        return wd, err
    }

    return pwd, nil
}

func isOperationCommand(op string) bool {
    return op == "add" || op == "rm";
}

func getArguments(commands []string) []string {

    if (len(commands) > 0 && isOperationCommand(commands[0])) {
        return commands[1:]
    }

    return commands
}

func getOperation(commands []string) Operation {
    if len(commands) == 0 {
        return Add
    }

    switch (commands[0]) {
    case "add": return Add
    case "rm": return Remove
    }
    return Print
}

func NewProjectorConfig(opts *ProjectorOpts) (*ProjectorConfig, error) {
    pwd, err := getPwd(opts.Pwd)
    if err != nil {
        return nil, err
    }

    config, err := getConfig(opts.Config)
    if err != nil {
        return nil, err
    }

    return &ProjectorConfig {
        Operation: getOperation(opts.Arguments),
        Arguments: getArguments(opts.Arguments),
        Pwd: pwd,
        Config: config,
    }, nil
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

### Onto the Lords language
no i am not talking about Php

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

