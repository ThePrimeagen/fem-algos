---
title: "Typescript Projector"
description: "So now its time to create the project"
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
                                 v <-- you are here
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

So this is where the bulk of the program will exist.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### So lets create the file (src/projector.ts)

```bash
> src/projector.ts
```

Lets get a codin!  Also remember, we want to build this is a way that makes it
easy to test.


Also, we will build the full projector object (more of a note for me than you)

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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

```typescript
import fs from "fs";
import path from "path";
import { ProjectorConfig } from "./config";

type ProjectorData = {
    // todo: if we had other top level items, we could put them here
    // such as settings or links
    projector: {
        [key: string]: {
            [key: string]: string
        }
    }
}

type Value = string | undefined;

const DEFAULT_VALUE = {projector: {}} as ProjectorData;
export class Projector {
    constructor(private config: ProjectorConfig,
                private data: ProjectorData = DEFAULT_VALUE) { }

    getValue(key: string): Value {
        // pwd
        // dirname(pwd) until empty
        let prev: Value = undefined;
        let curr = this.config.pwd;

        let out: Value = undefined;
        do {

            let val = this.data.projector[curr]?.[key];
            if (val !== undefined) {
                out = val;
                break;
            }

            prev = curr;
            curr = path.dirname(curr);
        } while (prev !== curr);

        return out;
    }

    setValue(key: string, value: string) {
        let pwd = this.config.pwd;
        if (!this.data.projector[pwd]) {
            this.data.projector[pwd] = {};
        }

        this.data.projector[pwd][key] = value;
    }

    deleteValue(key: string) {
        delete this.data.projector[this.config.pwd]?.[key];
    }

    static fromConfig(config: ProjectorConfig): Projector {
        let data: ProjectorData = undefined;
        try {
            if (fs.existsSync(config.config)) {
                data = JSON.parse(fs.readFileSync(config.config).toString());
            }
        } catch {
            data = undefined;
        }

        return new Projector(config, data);
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

### Did you eat your vegetables?
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

```typescript
import { Operation } from "../config";
import { Projector } from "../projector";

function getConfig(pwd: string) {
    return {
        pwd,
        config: "/foo/bar/baz",
        operation: Operation.Add,
        arguments: [],
    };
}

function getData() {
    return {
        projector: {
            "/foo/bar/baz/buzz": {
                "foo": "bar1"
            },
            "/foo/bar/baz": {
                "foo": "bar2"
            },
            "/foo/bar": {
                "foo": "bar3"
            },
            "/foo": {
                "foo": "bar4"
            },
            "/": {
                "foo": "bar5",
                "bar": "bazz1",
            },
        }
    }
}

test("getting values", function() {
    const projector = new Projector(getConfig("/foo/bar"), getData());

    expect(projector.getValue("foo")).toEqual("bar3");
    expect(projector.getValue("blaz")).toEqual(undefined);
    expect(projector.getValue("bar")).toEqual("bazz1");
});

test("setting values", function() {
    const projector = new Projector(getConfig("/foo/bar"), getData());

    expect(projector.getValue("foo")).toEqual("bar3");
    projector.setValue("foo", "barNever");
    expect(projector.getValue("foo")).toEqual("barNever");

    const p2 = new Projector(getConfig("/foo"), getData());
    expect(p2.getValue("foo")).toEqual("bar4");

    const p3 = new Projector(getConfig("/foo/bar/baz"), getData());
    expect(p3.getValue("foo")).toEqual("bar2");
});

test("deleting values", function() {
    const projector = new Projector(getConfig("/foo/bar/baz"), getData());

    expect(projector.getValue("foo")).toEqual("bar2");
    projector.deleteValue("foo");
    expect(projector.getValue("foo")).toEqual("bar3");
    projector.deleteValue("foo");
    expect(projector.getValue("foo")).toEqual("bar3");

    const p2 = new Projector(getConfig("/foo/bar"), getData());
    expect(p2.getValue("foo")).toEqual("bar3");
    p2.deleteValue("foo");
    expect(p2.getValue("foo")).toEqual("bar4");
});
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

### Onto the Gopher!

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


