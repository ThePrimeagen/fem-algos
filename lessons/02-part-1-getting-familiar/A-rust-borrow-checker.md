---
description: "Let me borrow that for a moment"
---

## The Borrow Checker in 5 minutes
Rust is famous for its borrow checker.  There are memes and I personally have
rage quit using rust because I didn't understand the basics of rust.

From the rearview mirror, this is simple

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

## Lets start with other programming languages

### JavaScript
```javascript
const a = [];
const b = a;
b.push(5);
console.log(a);
console.log(b);
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### C++
```cpp
std::vector<int> a;
std::vector<int> b = a;
b.push_back(5);

printf("a size: %zu\n", a.size());
printf("b size: %zu\n", b.size());
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Rust
```rust
let a: Vec<i32> = vec![];
let mut b = a;
b.push(5);

println!("a size: {}", a.len());
println!("b size: {}", b.len());
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

## The three types
* Value
* Reference
* Mutable Reference

### The three simple rules
#### Value
Only one var can point to a value at a time.

```rust
let x = 5;
let y = x;
// x cannot be referenced anymore.  its been moved.
```

#### Reference
You can have as many references as you like if no mutable references exist.

```rust
let x = 5;
let y = &x;

println!("here is {} and {}", x, y);
```

#### Mut Reference
You can have one mut reference and no reference at the same time.

```rust
let x = 5;
let y = &mut x;
let z = &x; // nope

println!("here is {} and {}", x, y);
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### I am terrible at looking at code and it connecting
For me I have to program it to really let it sink in.  So lets do this now!

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

