---
title: "Recursion"
description: "The hardest part of DSA"
---

### I honestly had the hardest time with this hurdle.
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

### To put it as simple as possible

```typescript
// I always hated this example, but I think its the simplest
function foo((n: number)n: number): number {
    // Base Case
    if (n === 1) {
        return 1;
    }

    // Recurse step
    return n + foo(n - 1);
}
```

There are two steps generally in recursion.
* The Base Case: This is the thing that makes you leave the recursion (no more
  calling the same function again).
* The Recursion: This step we will call ourselves again to help solve the question

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

### Lets whiteboard this out
(whiteboard)

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

### Lets program this out
TO THE TIPSCRIPTS

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

