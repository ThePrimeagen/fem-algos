---
title: "Graphs"
description: "So much here"
---

### The most bestest of the data structures
SOOO many problems eventually become graph problems.  And this is by far the
largest section of algorithms.  Since this is more of an introduction course
into algorithms, we are going to keep the information shorter on the graph side.

<br/>
<br/>
<br/>
<br/>
<br/>
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
using today.

#### Graph Terms
cycle: When you start at Node(x), follow the links, and end back at Node(x)
acyclic: A graph that contains no cycles
connected: When every node has a path to another node
directed: When there is a direction to the connections.  Think Twitter
undirected: !directed.  Think Facebook (i haven't been on in 10 years, it may have changed)
dag: Directed, acyclic graph.

#### Implementation Terms
node: a point or vertex on the graph
edge: the connection betxit two nodes


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

### Lets go over graphs just in general
* basics of graph
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
BFS and DFS still exist on a graph, but it looks different now.

<br/>
<br/>
<br/>
<br/>
<br/>
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

### What is the running time of BFS or DFS?

<br/>
<br/>
<br/>
<br/>
<br/>
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
Probably one of the first algorithms most people encounter when it comes to
learning about graphs.
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
