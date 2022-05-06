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

type ProjectorData struct {
    Projector map[string]map[string]string `json:"projector"`
}

type Projector struct {
    pwd string
    data ProjectorData
}

func (p *Projector) GetValue(key string) (string, bool) {

    var result string
    found := true

    var currentDirectory = p.pwd
    for {
        if values, found := p.data.Projector[currentDirectory]; found {
            if value, found := values[key]; found {
                result = value
                break;
            }
        }

        nextDirectory := path.Dir(currentDirectory)
        if nextDirectory == currentDirectory {
            found = false
            break;
        }

        currentDirectory = nextDirectory
    }

    return result, found
}

func (p *Projector) SetValue(key string, value string) {
    _, ok := p.data.Projector[p.pwd]
    if !ok {
        p.data.Projector[p.pwd] = map[string]string{}
    }
    p.data.Projector[p.pwd][key] = value
}

func (p *Projector) RemoveValue(key string) {
    _, ok := p.data.Projector[p.pwd]
    if ok {
        delete(p.data.Projector[p.pwd], key)
    }
}

func Empty(pwd string) *Projector {
    return &Projector{
        pwd: pwd,
        data: ProjectorData{
            Projector: map[string]map[string]string{},
        },
    }
}

func FromConfig(config *ProjectorConfig) (*Projector, error) {
    if _, err := os.Stat(path.Dir(config.Config)); os.IsNotExist(err) {
        err := os.Mkdir(path.Dir(config.Config), 0755)
        if err != nil {
            return nil, err
        }
    }

    if _, err := os.Stat(config.Config); os.IsNotExist(err) {
        return Empty(config.Pwd), nil
    }

    // it does exist, we have to marshal
    dat, err := os.ReadFile(config.Config)
    if err != nil {
        return nil, err
    }

    var data ProjectorData;

    err = json.Unmarshal(dat, &data)
    if err != nil {
        return nil, err
    }

    return &Projector{
        pwd: config.Pwd,
        data: data,
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

	"github.com/theprimeagen/projector/pkg/projector"
)

func runKeyTest(t *testing.T, pjtr *projector.Projector, key, value string) {
    val, found := pjtr.GetValue("foo")
    if !found {
        t.Error("unable to find value for \"foo\"")
    }

    if val != value {
        t.Errorf("expected value to be %v but received %v", value, val)
    }
}

func TestAddValue(t *testing.T) {
    data := projector.ProjectorData {
        map[string]map[string]string{
            "/foo/bar/baz": {
                "foo": "bar1",
            },
            "/foo/bar": {
                "foo": "bar2",
            },
            "/foo": {
                "foo": "bar3",
            },
            "/": {
                "foo": "bar4",
            },
        },

    }

    runKeyTest(t, projector.New("/foo/bar/baz/buzz", data), "foo", "bar1")
    runKeyTest(t, projector.New("/foo/bar/baz", data), "foo", "bar1")
    runKeyTest(t, projector.New("/foo/bar", data), "foo", "bar2")
    runKeyTest(t, projector.New("/foo", data), "foo", "bar3")
    runKeyTest(t, projector.New("/", data), "foo", "bar4")
}

func TestRemoveValue(t *testing.T) {
    data := projector.ProjectorData {
        map[string]map[string]string{
            "/foo/bar/baz": {
                "foo": "bar1",
            },
            "/foo/bar": {
                "foo": "bar2",
            },
            "/foo": {
                "foo": "bar3",
            },
            "/": {
                "foo": "bar4",
            },
        },

    }

    prj := projector.New("/foo/bar/baz/buzz", data)
    runKeyTest(t, prj, "foo", "bar1")
    prj.RemoveValue("foo")
    runKeyTest(t, prj, "foo", "bar1")

    prj = projector.New("/foo/bar/baz", data)
    runKeyTest(t, prj, "foo", "bar1")
    prj.RemoveValue("foo")
    runKeyTest(t, prj, "foo", "bar2")

    prj = projector.New("/foo/bar", data)
    runKeyTest(t, prj, "foo", "bar2")
    prj.RemoveValue("foo")
    runKeyTest(t, prj, "foo", "bar3")
}

func TestSetValue(t *testing.T) {
    data := projector.ProjectorData {
        map[string]map[string]string{
            "/foo/bar/baz": {
                "foo": "bar1",
            },
            "/foo/bar": {
                "foo": "bar2",
            },
            "/foo": {
                "foo": "bar3",
            },
            "/": {
                "foo": "bar4",
            },
        },

    }

    prj := projector.New("/foo/bar/baz/buzz", data)
    runKeyTest(t, prj, "foo", "bar1")
    prj.SetValue("foo", "bar0")
    runKeyTest(t, prj, "foo", "bar0")
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

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />



