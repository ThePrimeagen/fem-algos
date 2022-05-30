---
title: "Golang Projector"
description: "Now its time to unleash the inner gopher"
---


### We are entering into the actual project part
So now its time to do the actual application programming.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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
                                                    (but now you are a gopher)
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

### So lets create the file (pkg/projector/projector.go)

```bash
> pkg/projector/projector.go
```

GOPHER TIME

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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

```go
package projector

import (
	"encoding/json"
	"os"
	"path"
)

type Lookup = map[string]map[string]string
type ProjectorData struct {
    Projector Lookup `json:"projector"`
}

type Projector struct {
	data   ProjectorData
	config *ProjectorConfig
}

func (p *Projector) GetValue(key string) (string, bool) {
    found := false
    out := ""

    curr := p.config.Pwd
    prev := ""

    for {

        if dir, prs := p.data.Projector[curr]; prs {
            if value, prs := dir[key]; prs {
                found = true
                out = value
                break
            }
        }

        if curr == prev {
            break
        }

        prev = curr
        curr = path.Dir(curr)
    }

    return out, found
}

func (p *Projector) SetValue(key string, value string) {
    pwd := p.config.Pwd
    if _, prs := p.data.Projector[pwd]; !prs {
        p.data.Projector[pwd] = map[string]string{}
    }

    p.data.Projector[pwd][key] = value
}

func (p *Projector) DeleteValue(key string) {
    pwd := p.config.Pwd
    if dir, prs := p.data.Projector[pwd]; prs {
        delete(dir, key)
    }
}

func defaultProjector(config *ProjectorConfig) *Projector {
	return &Projector{
		config: config,
		data:   ProjectorData{},
	}
}

func FromConfig(config *ProjectorConfig) (*Projector, error) {
	if _, err := os.Stat(config.Config); os.IsNotExist(err) {
		return defaultProjector(config), nil
	}

	bytes, err := os.ReadFile(config.Config)
	if err != nil {
		return defaultProjector(config), nil
	}

	var data ProjectorData
	err = json.Unmarshal(bytes, &data)
	if err != nil {
		return defaultProjector(config), nil
	}
	return &Projector{
        data,
        config,
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

### Did you skip leg day?
Lets test

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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

```go
package projector_test

import (
	"testing"

	"github.com/theprimeagen/go-tem/pkg/projector"
)

func getData() *projector.ProjectorData {
    return &projector.ProjectorData{
        Projector: map[string]map[string]string{
            "/": {
                "bar": "buzz",
                "foo": "bar1",
            },
            "/foo": {
                "foo": "bar2",
            },
            "/foo/bar": {
                "foo": "bar3",
            },
            "/foo/bar/baz": {
                "foo": "bar4",
            },
        },
    }
}

func getConfig(pwd string) *projector.ProjectorConfig {
    return &projector.ProjectorConfig{
        Pwd: pwd,
        Config: "dnm",
        Operation: projector.Print,
        Arguments: []string{},
    }
}

func TestGetValue(t *testing.T) {
    p := projector.NewProjector(getConfig("/foo/bar"), getData())

    val, ok := p.GetValue("foo")
    if !ok {
        t.Error("couldn't find value")
    }

    if val != "bar3" {
        t.Errorf("expected bar3 but got %v", val)
    }

    _, ok = p.GetValue("bazbar")
    if ok {
        t.Error("expected to find no value")
    }


    val, ok = p.GetValue("bar")
    if !ok {
        t.Error("couldn't find value")
    }

    if val != "buzz" {
        t.Errorf("expected buzz but got %v", val)
    }
}

func TestSetValue(t *testing.T) {
    p := projector.NewProjector(getConfig("/foo/bar"), getData())
    p.SetValue("foo", "bar69")
    val, ok := p.GetValue("foo")

    if !ok {
        t.Error("couldn't find value")
    }

    if val != "bar69" {
        t.Errorf("expected bar69 but got %v", val)
    }
}

func TestRemoveValue(t *testing.T) {
    p := projector.NewProjector(getConfig("/foo/bar"), getData())
    p.DeleteValue("foo")
    val, ok := p.GetValue("foo")

    if !ok {
        t.Error("couldn't find value")
    }

    if val != "bar2" {
        t.Errorf("expected bar2 but got %v", val)
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

### Crab people
![Twitch](./images/pust.png)

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

