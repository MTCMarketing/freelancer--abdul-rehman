# Containerization
Each container will be its own component. 

## Conceptulization
The container is meant to be desined for moduality, i.e I want to have the ability to reuse a websites section containers like these in other websites in the future. 

Okay to include 
- background colors
- background gradients
- abstract background shapes and/or animations
- background images
- media-queries to be responsive

Not Okay to include
- align
- max width
- font-family
- font-size
- etc...

These are just barebones building blocks that can be used across projects easily.  


For example when cloaning the following...

<img width="700px" src="/assets/background-clone-example-before.png"/>

The would be a component that looks something like this...

<img width="700px" src="/assets/background-clone-example-after.png"/>

For example...
```tsx
<HeroContainer>
...
<HeroContainer/>

```
