
var tl=gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    duration:0.3,
    stagger:0.2,
    opacity:0,
    delay:0.5
})


tl.from('#main h1',{
    x:-50,
    duration:0.3,
    stagger:0.2,
    opacity:0,
    // delay:0.5

})
tl.from("img",{
    x:-50,
    opacity:0,
    duration:0.5,
    rotate:45,
    stagger:0.5

})


