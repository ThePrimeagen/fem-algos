## Intro
* blah blah blah something about me on twitch and yt and something like that.
* Roadmap
- how are we going to interweave content.  Algorithms / Data Structures
* Why TypeScript?

## Algorithms: Lingo and Definitions
* Time and Space complexity
- light introduction.
- big O notation.
 * we mostly talk about worst case scenarios
- explain constant, logn, n, nlogn, n^2, k^n, !n
* Recursion
- perhaps one of the hardest hurdles in all programming to get over.
- perhaps one of the most useful programming concepts.
- simple examples of recursion
- where recursion is great

## Our first data structure set
I am considering an Array to be our first data structure, because i assume
most people don't even know what an array is.

### Array
*White boarding only*

You probably actually just thinking list.  An array is a specified sized array
in which you can store elements.  Each type in that array takes up the space,
and they are layed out contiguously in memory.

## Search
### First Algorithm: Linear Search
### Second Algorithm: Binary Search
### Third Algorithm: 2 Crystal Ball Problem

## Sort
### Fourth Algorithm: Bubble Sort

#### How do we measure how fast this is?
* Time and Space

----------------------------------

### Second Data Structure
### Linked Lists
* Singly Linked
* Doubly Linked
* Implement each one in TS

### Flavors
* LinkedList
* Queue
* Stack
* Implement each one in TS

### Comparing Array vs List (WHITEBOARD ONLY)
Standard linked list.  How would we search?

* Lets start with a LinkedList and lets search for 7.
** Is there anything we can do to make this faster?
** What if its sorted?

Lists aren't great for searching.. huh.  Why is that?

### Compare
What is a major difference we are seeing right now between list and array?

### ACCESS!!
An array has O(1) access whereas linkedlist has O(n).  This is an important
feature.

* Starting with Array,
How would we remove an element from the end?
How would we remove an element from the beginning?
Now compare this with a linked list!

### Can we get the best of both worlds? (WHITEBOARD ONLY)
Lets create a wrapper class around array.

ArrayList

* Weakness we still cannot remove from front easily.
* Removing from end actually becomes pretty straight forward.
* O(1) Access
* Resizing is the issue.

### From ArrayList to RingBuffer!
One of my favorite structures of all time.  It is absolutely the greatest.  So
what is a ring buffer?  In some sense, its a great way to have a queue without
having a queue's requirement for allocations.

*Lets whiteboard* an ring buffer.
* Go over adding, removing, and expanding the buffer

----------------------------------

### Second Algorithm
* Merge Sort
* Time and Space

### Third Algorithm, Last Sort
* Quick Sort
* A fun challenge I had with quicksort and how we can remove the recursive
  nature to it all.

### Check Point
* onto search!


### Questions?

## Part 2 -- Recursion
This is going to be its own section, though it really shouldn't be.

Recursion isn't an algorithm or a data structure, its simply a technique of
calling a function inside the function.  The easiest way of thinking of
recursion is a by visually all recursion as the following.

```typescript
function foo(...) {
    if (base_case) {
        return ...
    }

    // potentially logic or conditions.
    return foo(...);
}
```

### the obvious problems
* factorial
* fibanoci

You are probably thinking... why are not using a loop here?  This seems like a
waste of time.  That is because it is and these are terrible examples of
recursion.  Lets do a proper recursive example.

* Maze solving.

### Questions?

## Part 3: Trees
Where are trees used?
* Your filesystem is a tree
* The dom is a tree
* Trees are massively important in compilers.  You have probably mininumly
  heard the term Abstract Syntax Tree.

(whiteboard only)
### Think of lists
What if our list, every now and then, has an extra path.  What if we have to
search that list?  how do we do it?

### The Tree
Effectively this is a tree.  Lets invert it and put it in a spot in which makes
it look like a tree.

Definition of tree with examples.
* general tree
* binary tree
* there are others, and we will address at least one later.

### Traversals
Lets start with some traversals and searching techniques.

### in, pre, and post order traversals
each of these are used to describe a way in which you identify which nodes you
"visit" first.  For our sake it will just be printing the data value, which
will be an integer.

### Ordered traversals are specific implementations of DFS
You have probably heard this term, depth first search.

* To relate this back to our first data structure, it is using a stack as means
  of searching.

** draw it out as a stack of returns.

### IMPLEMENT A DFS and GENERAL TREE

### The next travesal
If our previous one used a stack, what do you think the next one will use as
its primary structure for holding information?

Yes!  A queue!

Instead of letting the stack (call stack), you will explicitly add it to a
queue.  This is known as Breadth First Search (BFS)

(whiteboard it)

### IMPLEMENT A BFS on GENERAL TREE FROM PREVIOUS

### Binary Trees
Binary trees are very frequently used.  They make amazing.  They are used in
syntax trees often.  Huffman encoding, which powers say http2 hpack encoding
using static huffman encoding tree.

#### What is a binary tree
(whiteboard it)

##### Lets do a "typical" interview question.
Compare two binary trees to see if they are identical in value and shape.

(Whiteboard it)
(Implement it)

#### Binary Search Tree
So specific implementation of a binary tree is a Binary Search Tree (BST).
They are used frequently, I have even implemented more than one in my job over
the last decade.

(whiteboard it)
(Implement it)

How much easier is it search a binary tree than binary searching an array?  A
lot, because the bounds are built in.

But we have problems.  We are only using premade binary trees... How do we make
binary trees?  And worse... what if they become unbalanced...

Two primary algoriths used for binary tree balancing are redblack and AVL. They
are both fantastic algorithms.  Redblack tends to be the one that is used more
frequently in the real world.

AVL: (Whiteboard it)
RedBlack: (Whiteboard it)

We are going to implement avl, because its fun and I am running the course.

### There are more trees. ... More and more trees.
So there are still more ways in which we can implement trees.  Lets talk heaps.

(whiteboard them)

They are very interesting and they always get asked in a google interview.  I
think I have been asked this question at least 2x in google interviews.

median calculation with a constant moving list.

(implement it)

### Questions?

### Graphs
The problem with euler and prussia!  What an interesting way to start the idea
of graph theory

"The definition of a graph is wide so that it can be represented as things connected to other things."
Algorithms - Panos Souridas

#### Representation of graphs
(whiteboard)
* types of graph
* directed
* undirected
* weighted
* acyclic
* strongly connected components
* topological sorting

(whiteboard)
Adjacency List
Adjacency Matrix

(whiteboard)
* Breadth first search
* Depth first search
* Prim's, Kruskals algorithm (MST)
* Dijkstra's Algorithm
* Bellman-Fords
* Ford-Fulkerson (MaxFlow)
* Topological sort
* Strongly Connected Component

(implementing?)
* DFS
* BFS
* Dijkstra
* Prims

### Questions

### MashHaps
(whiteboarding)
* The basics of a map
* collisions
* underlying representation

(implementing?)
I think we should just create one for sure
