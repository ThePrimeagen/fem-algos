---
title: "Time And Space"
description: "This is not the final frontier"
---

### Time and Space
Lets take the time to discuss time.

(whiteboard)
First, Let me draw up a bit of code

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
<br/>

### For non video viewers

```typescript
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
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
<br/>

### What is time and space complexity?
The simpliest way to put this its as your input grows, how fast does
computation or memory grow?

#### In the real world
obviously memory growing is not computationally free, but in the matter of
thinking about algorithms, we don't necessarily think about that.

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
<br/>

### How we measure complexity
all complexity is always related to input.  So if a function takes in 1
argument, then we can describe the complexity in terms of `N`.

Graphs, which have vertices (nodes) and edges are often described in `V` and
`E`.  This will make more sense as time goes on.

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
<br/>

### Lets go back to our example

#### For non video viewers
```typescript
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}
```

Its obvious to see that we have an `N` relationship.  But is that technically
true?

Lets be real, adding to a number costs some computation, lets say 1 unit of
computation.  calling `charCodeAt` costs 4 units of computation.  If that is
the case, we really have a `5N` function (`(4 + 1) * len(n)`).

How come we don't specify it with the number at the end?  5N is bigger than N,
right?

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
<br/>

### What is Big Oh?
This is because we use Big Oh notation, `O(N)` (pronounced Oh of N).  What BigO
is specifically, besides for sounding like a gas station name, is the UPPER
BOUNDS to the running time.  There are two things to consider.

1. the constant, often denoted with `k` or `c` is REALLY hard to determine.
1. in the end, the constant doesn't matter as much as the growth

So common practice is to _discover_ the WORST CASE scenario and measure its
scaling factor (relative to input).

### Lets do an example

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
<br/>

#### For non video viewers
```typescript
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        const charCode = n.charCodeAt(i);
        // Capital E
        if (charCode === 69) {
            return sum;
        }

        sum += charCode;
    }

    return sum;
}
```

### This is why we do worst case
It is obvious that if we have a string starting with capital E, for those that
don't know their char codes, that our function would only run 1 operation and
return.  It is effectively constant.

If the string has an E somewhere within, it is runtime would be `O(cN)`, where
`c` is less than 1.

If the string has no E, then we would simply say this function runs in `O(N)`.
In typical complexity measurement, the best case has no need to cover.  In the
real world though, you can make incredible improvements to time / space by
these types of optimizations.

In other words, academic classification does not mean one is slower than
another.

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
<br/>

### The common complexities
[Source](https://www.hackerearth.com/practice/notes/big-o-cheatsheet-series-data-structures-and-algorithms-with-thier-complexities-1/)
![Big O Notation](./images/big-o-face.png)

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
<br/>

### One thing people forget about big o
Big literally means the _UPPER BOUND_ running time.  Almost exclusively it also
refers to the _WORST CASE_.

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
<br/>


### Why so obviated?
There are other resources out there to dive deep into big o notation.  And I
just don't think we need Yet Another Big O explanation.  Instead I am going to
focus on actively looking at running times and we will determine things
together.

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
<br/>

