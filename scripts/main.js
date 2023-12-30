gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin);

ScrollTrigger.normalizeScroll(true)

let smoother = ScrollSmoother.create({
	smooth: 2,
	effects: true,
	normalizeScroll: true
});

const cssVar = function (variable) {
	return getComputedStyle(document.documentElement).getPropertyValue(variable)
}

gsap.to("#hero h1", {
	scrollTrigger: {
		trigger: "#hero h1",
		// markers: true,
		scrub: true,
		start: "center 50%",
		end: "+=47%"
	},
	text: "Hiiiiiiiii!!!!!!!!!!!!!!!!!!!!!!",
	type: "diff",
	// letterSpacing: "3rem",
	ease: "power2.in"
});

gsap.to("#section1 span.harshit", {
	scrollTrigger: {
		trigger: "#section1 h2",
		scrub: true,
		start: "bottom 90%",
		end: "bottom center"
	},
	color: cssVar("--catppuccin-mocha-red")
})