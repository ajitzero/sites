---
title: Abstract more, better
publishDate: 2020-04-16
tags:
---

I have one rule when abstracting code: create one abstraction per problem.

If you say "and" when describing an abstraction, you aren't done abstracting.

Unfortunately, people are sneaky with "and".  
They use "with" instead.

> This is a dropdown component with accessibility and style baked in. Aren't you so lucky that I made it so easy?

Don't fall for it.

Repeat it with "and"...

> Dropdown _and_ accessibility _and_ styling huh? Sounds overreach-y.

Yes, it's hard to separate abstractions well.  
No, it's not impossible.  
No, separating at "and"s doesn't preclude you from exporting a standard composition.

While it might sound sweet to avoid understanding the individual complexities of all three problems _and_ their intersection, accepting overreaching abstractions exchanges the momentary discomfort of learning something with a long-term dependency on a personality or preference.

Do you trust this personality?  
Will they be a fair collaborator?  
Will they intelligently add capabilities as you need them?  
Can they be trusted with the keys to all the "and"s?

No.

The salesperson puts all their energy into the sale, not support.

Stable abstractions are those with personalities removed.  
They should live and die by their utility.

Solutions that are properly separated by "and"s can compose, recompose, and decompose gracefully.

Like evolution, useless abstractions fade away while useful ones replicate and extend their reach.

Isolated accessibility tools can be remixed into new, unanticipated expressions of dropdowns.  
Isolated styles can be partially applied to default browser elements and reach beyond the zeitgeist of framework.

Mark might have you believe that I'm [anti-abstraction](https://twitter.com/markdalgleish/status/1250625893891891200), I'm not.  
The problem is that we don't make enough, cleanly isolated abstractions.

I want abstractions — with standard interfaces — that can compose, recompose, and decompose gracefully over time.
And I want lots of them so that product is never beholden to personality or preference.

_(A [less popular version of "Hot Garbage: Clean Code is Dead"](https://www.youtube.com/watch?v=7ri10aE-Idc) covers this with code.)_

<br />

_UppublishDate: [Mark and I agreed all along](https://twitter.com/markdalgleish/status/1250913016587018242). [My favorite kind of fight](https://twitter.com/chantastic/status/1250568765839863809)._ 😂
