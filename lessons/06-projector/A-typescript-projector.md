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

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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

const fsp = fs.promises;

export type ProjectorData = {
    // other data globals.
    //
    projector: {
        // path     -> { key : value }
        [key: string]: {[key: string]: string}
    }
}

export default class Projector {
    constructor(private pwd: string, private data: ProjectorData) { }

    getValue(key: string): string | undefined {
        // /foo/bar/baz
        // ../baz
        // ../bar
        // /foo
        // /
        // done
        //
        let currentPath = this.pwd;
        let result = undefined;
        while (true) {
            const value = this.data.projector[currentPath]?.[key];
            if (value) {
                result = value;
                break;
            }

            const nextPath = path.dirname(currentPath);
            if (nextPath === currentPath) {
                break;
            }
            currentPath = nextPath;
        }

        return result;
    }

    setValue(key: string, value: string): void {
        let values = this.data.projector[this.pwd];
        if (!values) {
            values = this.data.projector[this.pwd] = {};
        }

        values[key] = value;
    }

    removeKey(key: string): void {
        const values = this.data.projector[this.pwd];
        if (values) {
            delete values[key];
        }
    }

    static async fromConfig(config: ProjectorConfig): Promise<Projector> {
        const dirname = path.dirname(config.config);
        // TODO: should i really make a dir?
        if (!fs.existsSync(dirname)) {
            await fsp.mkdir(dirname, { recursive: true });
        }

        const fd = await fsp.open(config.config, "a");
        try {
            const data = JSON.parse((await fd.readFile()).toString());
            fd.close();
            return new Projector(config.pwd, data);
        } catch (e) {
            fd.close();
        }

        return Projector.empty(config.pwd);
    }

    static empty(pwd: string): Projector {
        return new Projector(pwd, {projector: {}});
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

### Did you eat your veges?
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
import Projector from "../projector";

test("adding/finding keys", function() {
    const projector = Projector.empty("/foo/bar/baz");

    expect(projector.getValue("foo")).toEqual(undefined);
    projector.setValue("foo", "bar");
    expect(projector.getValue("foo")).toEqual("bar");
});

test("adding/finding keys adv", function() {
    const pData = {
        projector: {
            "/": {
                foo: "bar"
            },
            "/foo": {
                foo: "bar2"
            },
            "/foo/bar": {
                foo: "bar3"
            },
            "/foo/bar/baz": {
                foo: "bar4"
            },
        }
    };

    expect(new Projector("/foo/bar/baz", pData).getValue("foo")).toEqual("bar4");
    expect(new Projector("/foo/bar", pData).getValue("foo")).toEqual("bar3");
    expect(new Projector("/foo", pData).getValue("foo")).toEqual("bar2");
    expect(new Projector("/", pData).getValue("foo")).toEqual("bar");
});

test("rm keys", function() {
    const pData = {
        projector: {
            "/foo": {
                foo: "true",
            }
        }
    };

    let projector = new Projector("/foo/bar/baz", pData);
    projector.removeKey("foo");

    expect(projector.getValue("foo")).toEqual("true");

    projector = new Projector("/foo", pData);
    projector.removeKey("foo");
    expect(projector.getValue("foo")).toEqual(undefined);
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


