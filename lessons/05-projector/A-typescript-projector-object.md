---
title: "TypeScript : Projector Object"
description: "The projector object will contain the operations"
---


### Breaking the problem up

```
   2.  Converting the options into something that we can use to
       get everything we need to make projector

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

### I am going to use classes
I know there are a lot of you out there that will be horrified as you were told
to never use classes.

#### Fun Side Note
If you use classes you can greatly improve the performance javascript using
managed memory techniques that are not available with other techniques.  Alas,
that can be for another time.

If you are curious [Blazingly Fast JavaScript](https://www.youtube.com/watch?v=Sp5_d6coiqU).

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### So lets go over what we need
What do we have right now?  We have a possible pwd, config path, and terms.  We
need to take these and create them into something useful.

- config should point to a config.  This means if none is provided we need a
  default location.
- pwd is either provided, or the cwd from the point of execution.
- terms.  This needs to be converted into two things.
  - Operation : the type of operation to perform (print, add, remove)
  - Arguments : the arguments to the operation.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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
src/projector.ts
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

#### Here is the likely very similar code

```typescript
import path from "path";
import { ProjectorOpts } from "./opts";

export enum Operation {
    Print,
    Add,
    Remove
}

export type Projector = {
    pwd: string;
    config: string;
    operation: Operation;
    arguments: string[];
}

function isOperationCommand(op?: string): boolean {
    return op === "add" || op === "rm";
}

function getTerms(args: ProjectorOpts): string[] {
    if (isOperationCommand(args.arguments?.[0])) {
        return args.arguments?.slice(1) || [];
    }

    return args.arguments || [];
}

function getOperation(args: ProjectorOpts): Operation {
    switch (args.arguments?.[0]) {
    case "add": return Operation.Add;
    case "rm": return Operation.Remove;
    default: return Operation.Print;
    }
}

function getConfig() {
    return path.join(process.env.XDG_CONFIG_HOME, "projector", "projector.json");
}

export default function projector(opts: ProjectorOpts): Projector {
    return {
        pwd: opts.pwd || process.cwd(),
        config: opts.config || getConfig(),
        operation: getOperation(opts),
        arguments: getTerms(opts),
    };
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

### Lets add some tests

```bash
src/__tests__/projector.ts
```

```bash
yarn add -D jest ts-jest @types/jest
npx jest --init
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

```typescript
import { isOperationCommand, getTerms, getOperation, Operation } from "../projector";

test("should ensure we get operations and terms", function() {
    expect(isOperationCommand("add")).toEqual(true);
    expect(isOperationCommand("rm")).toEqual(true);
    expect(isOperationCommand("print")).toEqual(false);
    expect(isOperationCommand("foo")).toEqual(false);


    expect(getTerms(["add", "foo", "bar"])).toEqual(["foo", "bar"]);
    expect(getTerms(["rm", "foo", "bar"])).toEqual(["foo", "bar"]);
    expect(getTerms(["print", "foo", "bar"])).toEqual(["print", "foo", "bar"]);

    expect(getOperation(["add", "foo", "bar"])).toEqual(Operation.Add);
    expect(getOperation(["rm", "foo", "bar"])).toEqual(Operation.Remove);
    expect(getOperation(["print", "foo", "bar"])).toEqual(Operation.Print);
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

