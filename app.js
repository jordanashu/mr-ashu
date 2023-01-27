const words = ["Ashutosh Kumar Singh", " Frontend Developer."]

let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: -1}).pause()
let boxTl = gsap.timeline()

boxTl.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 1, text: word})
  masterTl.add(tl)
})












// ---------skills---------




gsap.registerPlugin(ScrollTrigger);

gsap.to(".mainoneleft",{
  x:30,
  duration:3,
  
  scrollTrigger:
  {
    trigger:".mainoneleft",
    start:300


}
})






gsap.registerPlugin(ScrollTrigger);

gsap.to(".mainoneright",{
  x:-30,
  duration:3,
  
  scrollTrigger:
  {
    trigger:".mainoneright",
    start:300


}
})