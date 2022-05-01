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

### Tests you are likely not familiar with

There are some libraries you can use with golang to make this nicer, but real
talk, go testing sucks.

```bash
go get -u github.com/google/go-cmp/cmp
```

```bash
pkg/projector/config_test.go
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

### Your code could look like this!

```go
package projector_test

import (
	"testing"

	"github.com/google/go-cmp/cmp"
	"github.com/theprimeagen/projector/pkg/projector"
)

func TestProjectorInit(t *testing.T) {
    args := []string{"foo", "bar", "baz"}
    config, err := projector.NewProjectorConfig(&projector.ProjectorOpts{
        Config: "",
        Pwd: "",
        Arguments: args,
    })

    if err != nil {
        t.Errorf("Unable to create config: %v", err)
    }

    if config.Operation !=  projector.Print {
		t.Errorf("incorrect config.Operation expected Print but got %v", config.Operation)
	}

    if diff := cmp.Diff(config.Arguments, []string{"foo", "bar", "baz"}); diff != "" {
		t.Error("config.Arguments were not equal (-want +got)", diff)
	}
}

func TestProjectorInitAdd(t *testing.T) {
    args := []string{"add", "bar", "baz"}
    config, err := projector.NewProjectorConfig(&projector.ProjectorOpts{
        Config: "",
        Pwd: "",
        Arguments: args,
    })

    if err != nil {
        t.Errorf("Unable to create config: %v", err)
    }

    if config.Operation !=  projector.Add {
		t.Errorf("incorrect config.Operation expected Add but got %v", config.Operation)
	}

    if diff := cmp.Diff(config.Arguments, []string{"bar", "baz"}); diff != "" {
		t.Error("config.Arguments were not equal (-want +got)", diff)
	}
}

func TestProjectorInitRm(t *testing.T) {
    args := []string{"rm", "bar", "baz"}
    config, err := projector.NewProjectorConfig(&projector.ProjectorOpts{
        Config: "",
        Pwd: "",
        Arguments: args,
    })

    if err != nil {
        t.Errorf("Unable to create config: %v", err)
    }

    if config.Operation !=  projector.Remove {
		t.Errorf("incorrect config.Operation expected Remove but got %v", config.Operation)
	}

    if diff := cmp.Diff(config.Arguments, []string{"bar", "baz"}); diff != "" {
		t.Error("config.Arguments were not equal (-want +got)", diff)
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

