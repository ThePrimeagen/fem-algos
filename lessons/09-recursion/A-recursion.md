---
title: "Recursion"
description: "The hardest part of DSA"
---

## Recursion
google gets it

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## What is Recursion?
The simplest way to think of recursion is a function that calls itself until
the problem is solved.  This usually involves what is referred to as a "base
case."  A base case is the point in which the problem is solved at.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Recursion is hard, I struggled
Do not feel bad if you are finding recursion hard.  We will try to go over as
much as we can to make this as clear as possible.  I also promise you, once you
understand it, it will become trivial.  Its such a weird feeling...

Unfortunately, before we can ever proceed to anything more awesome, we have to
know and understand recursion.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### The simplest example

```typescript
// I always hated this example, but I think its the simplest
function foo(n: number): number {
    // Base Case
    if (n === 1) {
        return 1;
    }

    // We shall Recurse!
    return n + foo(n - 1);
}
```

Lets draw what is happening here
* don't forget to describe the 2 steps to recursion

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## Questions?
I want to make sure we are clear here first.  I want to make sure we are clear
here first, as I said, the rest of this class is going to be heavy on
recursion.

<br/>
<br/>

Its ok if you don't quite get it yet, this example never helped me.  But it is
also the simplest way to display recursion.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### The biggest mistake of recursion
Don't put it into the 2 steps.
1. Base Case
2. Recurse

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Lets work through a problem that helped me understand recursion
I think its best to do something that we can understand, together.
(to the whiteboard)
(program a bit and white board a bit)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Hopefully you at least somewhat understand recursion better

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### When do I use recursion
* its not able to be done via for loop

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

