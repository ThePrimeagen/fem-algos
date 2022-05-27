---
title: "TypeScript : Projector Tests"
description: "Lets test this bad boi"
---

### Lets add some tests

```bash
src/__tests__/config.ts
```

*NOTE* I had errors with jest v28 and ts-jest.  Make sure we use 27, unless its
fixed by the time i do this presentation or you are watching it and we can
ignore it :)

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

### When running npm run test

if you get the following error its likely because preset: "ts-jest" isn't added

```bash
src/__tests__/config.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not
 configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.                                                           • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.
    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation
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
import getProjectorConfig, { Operation } from "../config";

test("should create a print projector config", function() {
    const config = getProjectorConfig({});
    expect(config.operation).toEqual(Operation.Print);
});

test("should create an add projector config", function() {
    const config = getProjectorConfig({
        arguments: ["add", "foo", "bar"],
    });
    expect(config.operation).toEqual(Operation.Add);
    expect(config.arguments).toEqual(["foo", "bar"]);
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


