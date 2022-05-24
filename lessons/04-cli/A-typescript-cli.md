---
title: "TypeScript : CLI"
description: "Lets build the cli argument portion of the typescript program"
---

### REMEMBER: Breaking the problem up

```
   1. Creating the CLI options.  These are things we can parse
      from the command line interface.

   +----------+
   | cli opts | ->
   +----------+
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

### TypeScript
I am going to make some basic assumptions that everyone watching this is
familiar with TypeScript and there are probably some of you out there that are
even better than me at it.

### CLI Argument parsing
There is no reason why you cannot use any other argument parser.  I literally
saw about 15 of them and played a game of pick whichever one felt good in the
moment!

- NodeJS : command-line-args
  - simple, easy to use.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Lets setup our project
To make it easy, set it up any way you want.  Personally here is how my folder
structer will work.

```bash
~/projects/projector-typescript
~/projects/projector-go
~/projects/projector-rust
```

Reason being is that this will make it easiest for me to swap back and forth
betwixt the projects

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### I use a Kinesis 360, btw

<br />
<br />
<br />
<br />
<br />
<br />
<br />
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
yarn init -y
yarn add command-line-args @types/command-line-args
yarn add ts-node typescript @types/node
git init
echo "node_modules" > .gitignore
mkdir src
vim . # you can open up other less awesome editors
```

Yes, of course i am not going to setup a build to make this into an shebang'd
script.

### Example of CLI (wont match exactly)

Here is an example i'll be putting under `src/opts.ts`

```typescript
import cli from "command-line-args";

export type ProjectorOptions = {
    pwd?: string; // projector --pwd ...
    config?: string; // projector --config ...
    arguments?: string[];
}

export default function getOptions(): ProjectorOptions {
    return cli([
        { name: 'config', type: String },
        { name: 'pwd', type: String },
        { name: 'arguments', type: String, defaultOption: true, multiple: true },
    ]) as ProjectorOptions;
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

### So lets build it again, but in Go!
This is what I think is very valuable.  You have a concrete idea of what we are
doing, now we do it in a language you are not familiar.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

