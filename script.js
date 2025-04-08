gsap.to(".box1", { x: 500, duration: 5, ease: "bounce.out" });

gsap.from(".box2", { x: 500, duration: 5, ease: "bounce.out" });

gsap.to(".box3", {
  scale: 1.1,
  rotation: 360,
  x: 30,
  yPercent: 10,
  duration: 3,
  ease: "back",
  skew: 30,
  //   opacity: 0,
  repeat: -1,
  // yoyo: true,
});
