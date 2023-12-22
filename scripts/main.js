gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin);

ScrollTrigger.normalizeScroll(true)

let smoother = ScrollSmoother.create({
	smooth: 2,
	effects: true,
	normalizeScroll: true
  });

  gsap.to("#heroHiExtended", {
	scrollTrigger: {
		trigger: "h1",
		// markers: true,
		scrub: true,
		start: "center 50%",
		end: "+=40%"
	},
	duration: 2,
	text: "iiiiiii!!!!!!!!!!!!!!!!!!!!!!",
	ease: "power2.in"
});