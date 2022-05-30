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
lets have projector take care of saving.

```typescript
import fs from "fs";

// ..

class Projector {
    // ...
    save() {
        fs.writeFileSync(this.config.config, JSON.stringify(this.data));
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
import { parseCLIOptions } from "./opts";
import getProjectorConfig, { Operation } from "./config"
import { Projector } from "./projector";

const config = getProjectorConfig(parseCLIOptions());
const projector = Projector.fromConfig(config);

// we need to be able to operate on operations
switch (config.operation) {
case Operation.Print:
    const value = projector.getValue(config.arguments[0]);
    if (value !== undefined) {
        console.log(value);
    }
    break;

case Operation.Add:
    projector.setValue(config.arguments[0], config.arguments[1]);
    projector.save();
    break;

case Operation.Remove:
    projector.deleteValue(config.arguments[0]);
    projector.save();
    break;
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

