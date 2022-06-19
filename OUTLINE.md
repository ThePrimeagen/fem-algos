## Intro
* blah blah blah something about me on twitch and yt and something like that.
* Roadmap
- how are we going to interweave content.  Algorithms / Data Structures
* Why TypeScript?

## Algorithms: Lingo and Definitions
* Time and Space complexity
- light introduction.
- big O notation.
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

## Sort
### First Algorithm
* Insertion sort
* Time and Space

### Second Algorithm
* Merge Sort
* Time and Space

### Third Algorithm, Last Sort
* Quick Sort
* A fun challenge I had with quicksort and how we can remove the recursive
  nature to it all.

### Check Point
* onto search!

## Search
* We have an unsorted array.  Does X exist?
* Linear search is our option.

### What if its sorted?
* Linear search
* Two Crystals
* Binary Search

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

### Questions?
