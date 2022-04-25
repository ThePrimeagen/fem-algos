---
title: "Golang : CLI"
description: "Lets build the cli argument portion of the golang program"
---

### Golang
I am going to make a new assumption.  Most of you are not familiar with golang,
therefore I'll go a bit slower and I'll hop back to TypeScript regularly.

### CLI Argument parsing
There are some pretty dang powerful CLI arg parsers, thinking of urfave/cli.
Its really awesome, but its just overkill for what we are doing here.  So I
picked the simpliest one for our benefit

- Golang : github.com/hellflame/argparse
  - A really nice api on this one

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### I use tmux, btw
Such fast swapping

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### I use vim, btw
Such fast editing

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### I use dvorak, btw
Such wrist non pain, but I also cannot use a coworkers computer...

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Before we get started, lets talk ptrs
TO THE WHITE BOARD

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### So to get started lets create the project
Create it where you like

```bash
go mod init github.com/theprimeagen/projector
go get github.com/hellflame/argparse
mkdir cmd
mkdir -p pkg/cli
vim . # you can open up other non coconut oil'd editors
```

Oh, and there is no terrible build experience like there is with ts.

### Example of CLI Options (pkg/cli/opts.go)

```go
// pkg/cli/opts.go
package cli

import (
	"github.com/hellflame/argparse"
)

type Operation = int

const (
    Print Operation = iota
    Add
    Remove
)

type ProjectorOpts struct {
    Pwd string // projector --pwd ...
    Config string // projector --config ...
    Operation Operation // print, add, remove
    Terms []string // <key>*, <key> <value>, <key>
}

func isOperationCommand(op string) bool {
    return op == "add" || op == "rm";
}

func getTerms(commands []string) []string {

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


func GetOptions() (*ProjectorOpts, error) {
    parser := argparse.NewParser("projector", "gets all the values", &argparse.ParserConfig{DisableDefaultShowHelp: true})
    terms := parser.Strings("f", "foo", &argparse.Option{
        Positional: true,
        Default: "",
        Required: false,
    })

    config := parser.String("c", "config", &argparse.Option{Required: false, Default: ""})
    pwd := parser.String("p", "pwd", &argparse.Option{Required: false, Default: ""})

    err := parser.Parse(nil)
    if err != nil {
        return nil, err
    }

    return &ProjectorOpts {
        Pwd: *pwd,
        Config: *config,
        Operation: getOperation(*terms),
        Terms: getTerms(*terms),
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

### So lets build it again, but in Rust!!!
This is the exciting part!  We get to use rust just for a moment!

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


