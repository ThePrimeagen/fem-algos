---
title: "The gotchas"
description: "A couple quick tips"
---
### Go and pointer receivers
When defining methods on a struct you have two options

```go
type Foo struct {
    thing int
}

// value receiver
func (f Foo) fA() {
    ...
    f.thing = 5; // DOESNT DO ANYTHING
}

// pointer receiver
func (f *Foo) fB() {
    ...
    f.thing = 5; // CHANGES
}
```

my general rule of thumb is use a pointer receiver.  value receivers copy,
pointers don't.  For the most part, small structs there probably isn't going to
be any noticeable perf win, but it can bite you on mutation.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### One more on go structs vs rust structs
I have been had by this one, and I am sure that anyone with any go experience
has been had by this as well.

```go
type GoLangStruct struct {
    y int
    x int
}

func NewStruct(x, y int) GoLangStruct {
    return GoLangStruct{x, y}
}

func main() {
    fmt.Printf("%+v\n", NewStruct(9, 6));
}
```

```rust
#[derive(Debug)]
struct RustLangStruct {
    y i32
    x i32
}

fn new_struct(x i32, y i32) -> RustLangStruct {
    return RustLangStruct{x, y};
}

func main() {
    println!("{:?}\n", new_struct(9, 6));
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

### Errors
when you may encounter an error, your function should return pointer

```go
type Foo struct {}

func CreateFoo() (*Foo, error) {
    if some_err_condition {
        return nil, fmt.Error("Here is an error!")
    }

    return &Foo{}, nil
}

...
this is where the infamous

if err != nil {
    return nil, err
}

comes from
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

### Rust, once you have the basics down, is actually pretty footgunless
Its only when you go into async does it go terrible.  Luckily we are not doing
that.  I still suck at doing it well.

* Use traits where possible to define new behavior

```rust
impl Display for Foo {
    /** allows for println!("{}", foo) to display **/
}

impl From<String> for Foo {
    // allows for .into() operator to be used
}
```

* Iterators are really powerful

* Don't forget Option and Result `.map` function and on iterator `flat_map`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

