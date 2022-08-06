---
title: "Time And Space"
description: "This is not the final frontier"
---

### Time and Space
Lets take the time to discuss time.

<br/>
<br/>

Quick Definition of Big O.  It is a way to measure the space and time
complexity of your algorithm.

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

### So when someone says Oh of N
They literally mean your algorithm runs in linear time

<br/>
<br/>

In other words, its a way to describe how your algorithm will perform in a
general sense.

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


First, Lets consider the following code.

```typescript
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}
```

### For those that know big o, this is easy
But those who have never even classified a function, this may be a complete
mystery.  That is fine.

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

### First Lets define Space & Time
* Space is how much memory your algorithm needs to run with respect to the input.
* Time is how much time your algorithm needs to run with respect to the input.

<br/>
<br/>

### With Respect To The Input
^--- this is very important

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

### Important concepts
1) growth is with respect to the input

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

### To say it differently
The simpliest way to put this its as your input grows, how fast does computation or memory grow?

<br>

### In the real world
obviously memory growing is not computationally free, but in the matter of thinking about algorithms, we don't necessarily think about that.

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
If all complexity is measured based on input, then where is the input used?

<br/>
<br/>

### Lets go back to our example
```typescript
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}
```

Me> It may or may not be obvious, but we have an `N` relationship.  `O(N)` time complexity

<br>

You> How can you tell?

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

### Simplest trick for complexity
Look for loops

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

### What's the running time

```typescript
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

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

![It 2N?](./images/2n.jpg)

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

### In Big O
We drop constants

`O(2N)` -> `O(N)` and this makes sense.  That is because Big O is meant to
describe the upper bound of the algorithm.  The constant eventually becomes
irrelevant.

<br/>
<br/>

Take the following:

N = 1, O(10N) = 10, O(N^2) = 1

<br/>

N = 5, O(10N) = 50, O(N^2) = 25

<br/>

N = 100, O(10N) = 1,000, O(N^2) = 10,000

<br/>

N = 1000, O(10N) = 10,000, O(N^2) = 1,000,000

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

### There is practical vs theoretical differences
Just because N is faster than N^2, doesn't mean practically its always faster

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

### Important concepts
1) growth is with respect to the input
2) Constants are dropped

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

### Lets do another example
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

### In BigO we often consider the worst case
E = 69

Therefore any string with E in it will terminate early (unless E is the last item in the list).

ITS STILL `O(N)`

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

### Important concepts
1) growth is with respect to the input
2) Constants are dropped
3) Worst case is _usually_ the way we measure

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

### Some examples

## O(N^2)
```typescript
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            sum += charCode;
        }
    }

    return sum;
}
```

## O(N^3)
```typescript
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            for (let k = 0; k < n.length; ++k) {
                sum += charCode;
            }
        }
    }
    return sum;
}
```

## O(n log n)
* Quicksort (we will implement and explain)

## O(log n)
* Binary search trees

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

### There is one time that we will see today, that hasn't been mentioned
O(sqrt(n))

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

## Why so obviated?
There are other resources out there to dive deep into big o notation.  And I
just don't think we need Yet Another Big O explanation.  Instead I am going to
focus on actively looking at running times and we will determine things
together.

<br>

### Important concepts
1) growth is with respect to the input
2) Constants are dropped
3) Worst case is _usually_ the way we measure


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

TODO: SPELLING
### Space the final Frontier
We pretty much wont be going over space in this course.  The thing is, memory
in algorithms is unfair.  Especially in TS.  The garbage collection throws a
whole wrench into things.

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

### Before we go
Questions?

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

