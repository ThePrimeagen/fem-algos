---
title: "List DataStructures"
description: "So many lists!"
---

## The second datastructure!
This should be a time filled with exuberance!

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

### I said something weird earlier.
I said that JavaScript arrays, `const a = [];` is not an array.  We know have a
solid definition of an array, is it an array (yes someone answer)?  And why
not?

<br/>
<br/>

### Next you are going to say HTML isn't a programming language
* neovim is the only true editor
* rust is the greatest language
* linux is the only machine you should develop on

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
* Insertion (why?)
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

### We wont implement unless we have lots of time
But here is the api

```typescript
interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
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

