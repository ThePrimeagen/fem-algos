---
title: "Graphs"
description: "So much here"
---

### The most bestest of the data structures
SOOO many problems eventually become graph problems.  And this is by far the
largest section of algorithms.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### First, lets just describe a graph
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

### All trees are graphs, not all graphs are trees

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Terminology of Graphs
This is not an exhaustive list of terms, but it is the terms that we may end up
using today.<br/>

<br/>

#### Graph Terms
cycle: When you start at Node(x), follow the links, and end back at Node(x)<br/>
acyclic: A graph that contains no cycles<br/>
connected: When every node has a path to another node<br/>
directed: When there is a direction to the connections.  Think Twitter<br/>
undirected: !directed.  Think Facebook (i haven't been on in 10 years, it may have changed)<br/>
weighted: The edges have a weight associated with them.  Think Maps<br/>
dag: Directed, acyclic graph.<br/>

<br/>

#### Implementation Terms
node: a point or vertex on the graph<br/>
edge: the connection betxit two nodes<br/>

<br/>

#### Big O
BigO is commonly stated in terms of `V` and `E` where `V` stands for vertices
and `E` stands for edges

So `O(V * E)` means that we will check every vertex, and on every vertex we check
every edge

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### How are graphs represented
* adj list
* adj matrix
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

### Basic Searches
BFS and DFS still exist on a graph, and they are virtually no different than on
a tree.

<br/>
<br/>

(whiteboard + complexity)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Lets implement these!
* BFS on Adj. Matrix
* DFS on Adj. List

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Dijkstra's Shortest Path
* what is it?
* where is it used?
* variations of it
(don't whiteboard yet)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Probably your first graph algo after BFS/DFS
* don't forget to say non negative weights

(whiteboard)
* running time

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

