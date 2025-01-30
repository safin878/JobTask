let tl = gsap.timeline();

tl.from(".vh", {
  opacity: 0,
  duration: 1,
  x: -500,
  delay: 0.1,
});
tl.from(".orp", {
  opacity: 0,
  duration: 0.8,
  x: 500,
});
tl.from(".di", {
  opacity: 0,
  duration: 0.8,
  x: -500,
});
tl.from(".dimg", {
  opacity: 0,
  duration: 0.8,
  y: 500,
});

gsap.from(".c2", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: ".c2",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.from(".work", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: ".work",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.from(".to", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: ".to",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});
