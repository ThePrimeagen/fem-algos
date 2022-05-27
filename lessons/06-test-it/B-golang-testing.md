---
title: "Golang : Projector Tests"
description: "Lets test this bad boi"
---

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

	"github.com/theprimeagen/go-tem/pkg/projector"
)

func TestConfigPrint(t *testing.T) {
    opts := projector.CLIOptions {
        Config: "",
        Pwd: "",
        Arguments: []string{},
    }

    config, err := projector.NewProjectorConfig(&opts)

    if err != nil {
        t.Errorf("error returned from projector config %v", err)
    }

    if config.Operation != projector.Print {
        t.Errorf("operation expected was print but got %v", config.Operation)
    }
}

func TestConfigAdd(t *testing.T) {
    opts := projector.CLIOptions {
        Config: "",
        Pwd: "",
        Arguments: []string{"add", "foo", "bar"},
    }

    config, err := projector.NewProjectorConfig(&opts)

    if err != nil {
        t.Errorf("error returned from projector config %v", err)
    }

    if config.Operation != projector.Add {
        t.Errorf("operation expected was add but got %v", config.Operation)
    }

    if config.Arguments[0] != "foo" || config.Arguments[1] != "bar" {
        t.Errorf("expected arguments to equal {'foo', 'bar'} but got %+v", config.Arguments)
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

### Time for the greatest..

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

