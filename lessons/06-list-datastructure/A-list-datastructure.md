---
title: "List DataStructures"
description: "So many lists!"
---

### I said something weird earlier.
I said that JavaScript arrays, `const a = [];` is not an array.  We know have a
solid definition of an array, is it an array (yes someone answer)?  And why
not?

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

### So lets go to our real first data structure
Its hard to call Array a data structure because its so fundamental.  Its
something that is available in every language except the one in this course
because... JavaScript.

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

### So what sucks about an Array?
* Deletion (why?)
* Its ungrowable (why?)

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

### Lets talk LinkedList
So how does it work? (whiteboard)
* Singly Linked
* Doubly Linked

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

### Lets talk time / space complexity
* prepend / append
* Insertion in the middle
* Deletion from ends
* Deletion in the middle
* Get head / tail
* Get in general

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

### Lets implement
First the API so we can all be on the same page.

```typescript
interface LinkedList<T> {
    get length(): number;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}
```

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

