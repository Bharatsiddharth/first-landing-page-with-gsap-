var tl = gsap.timeline();


tl.from(".navbar", {
    y: -30,
    duration:2,
    opacity:0,
})

tl.from("content, h1", {
    scale: 0.5,
    duration:2,
    color:"white"
})

tl.from(".img1",{
    opacity:0,
    rotate: "45deg",
    duration:1
})

tl.from(".img2",{
    opacity:0,
    rotate: "45deg",
    duration:1
})

tl.from(".img3",{
    opacity:0,
    rotate: "45deg",
    duration:1
})

tl.from(".img4",{
    opacity:0,
    rotate: "45deg",
    duration:1
})