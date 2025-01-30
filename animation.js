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
