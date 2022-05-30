## How we will crush such great feats
We are going to be cruising through a small cli program that will help you be
able to grasp these languages.

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

### Before we begin, lets take a quick poll.
* Who came here to learn rust, potentially better?
* How much rust do you know?
* Who came here to learn go, potentially better?
* How much go do you know?
* Who knows ts?

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

## Where did this course come from?
As I have mentioned i stream and make yt videos.  I get asked this question constantly.

* What should I learn next?
* How should I learn it?
* What should I build?
* Where do I start?

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

## I love building cli apps
They are a great way to get to learn the ecosystem.

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

## Roadmap
### Part 1 : Getting familiar
Go and its simplicity<br />
Rust and its complexity<br />
Testing in each language<br />
Strategies of testing<br />

<br />

### Part 2 : First look
Some basics about each language + some simple string parsing problems.  This
will help us just get acquainted with each language.

<br />

### Part 3 : CLI Application - Parsing command line arguments
We will start the cli program the best way we can, CLI arguments.  This is
where the rubber will meet the road.

<br />

### Part 4 : Building the core of the program
The operations our program needs to perform.

<br />

### Part 7 : Conclusion
Where to go next

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
<br />

## My One Regret
The hardest part about making this talk is that there isnt going to be
concurrency.  Which means we don't get the opportunity to explore go routines
and tokio tears.  This is where Golang will quickly become your most favorited
language of all time.

<br />

The main problem is that things quickly explode the moment you go into web
world with complexity.  If you are trying to learn rust, I do feel like web
world kind of sucks to start in.

<br />

### Why I didn't
Rust will likely eat up most of our time.  Not because we have to write a
significant amount of code, but because its so hard at first.  So to set us up
for success, I wanted confine this to a specific boundary set that is most
consumable from a typescript perspective.

<br />

### The second thing I omitted
I will not be doing any lifetimes with rust.  The primary reason is that you
don't run into them a lot until you really drill down for performance.  Since
the goal is to teach / expose we will stay more on the happy path.

<br />

### Canonical
I will try to create my code to be similar amoung the three languages for
learning purposes.  This means there will be a thing here or there that isn't
quite as canonical as it may be.  Also canonical tends to be a bit dependent on
the individual.

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

## So its time

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

## WAIT
do you have rust installed?
do you have go installed?

Now would be an excellent time to get that done.  In fact, I think we should
take a quick small break just to ensure it happens.

### Go
[Go Dev Docs](https://go.dev/doc/install)
- Install the one for your operating system
- You will want a later version of go.  1.18 has generics, very good.

### Rust
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
- You can rustup to get nightly to have more fun features, and there are some
  good features there.
- or just stick to stable for a stable journey.

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

