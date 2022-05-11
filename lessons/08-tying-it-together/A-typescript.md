---
title: "Typescript Projector"
description: "So now its time to create the project"
---


### Time to tie it all together
The last part is to take this little library we wrote and make it do the actual
operations.

For add and remove, they both need to update the config file which may or may
not exist.

For print operations, we need to simply print off the results

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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
                                                        such clossness
                                                        much progress
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

### Lets work through the config saving first
This should be pretty simple since we have the path.

First lets convert the projector object into a string.

```typescript
class Projector {
    // ...
    toString(): string {
        return JSON.stringify(this.data);
    }
    // ...
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
I tend to like to do all the linking / printing / saving / whatever is "harder"
to test in the main file.  Its a personal style, you don't have to do it this
way or am I recommending it as a good way to go

```typescript
import fs from "fs";
import opts from "./opts";
import config, { Operation } from "./config";

import Projector from "./projector";

async function run() {
    const cfg = config(opts());
    const projector = await Projector.fromConfig(cfg);

    switch (cfg.operation) {
    case Operation.Add:
        projector.setValue(cfg.arguments[0], cfg.arguments[1]);
        fs.writeFileSync(cfg.config, projector.toString());
        break;
    case Operation.Remove:
        projector.removeValue(cfg.arguments[0]);
        fs.writeFileSync(cfg.config, projector.toString());
        break;
    case Operation.Print:
        const value = projector.getValue(cfg.arguments[0]);
        if (value) {
            console.log(value);
        } else {
            console.error(`Key ${cfg.arguments[0]} does not exist`);
        }
        break;
    }
}

run();
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

### Onto the gophers
Have i shown you this image? Gross huh?

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

