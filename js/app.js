const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
	const visibility = nav.getAttribute("data-visible");
	document.body.classList.toggle("stop-scrolling");

	if (visibility === "false") {
		nav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	} else {
		nav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}

	navLinks.forEach((element) => {
		element.addEventListener("click", () => {
			nav.setAttribute("data-visible", false);
			navToggle.setAttribute("aria-expanded", false);
			document.body.classList.remove("stop-scrolling");
		});
	});
});

new ScrollBooster({
	viewport: document.querySelector(".solar"),
	content: document.querySelector(".solar__planets"),
	scrollMode: "transform", // use CSS 'transform' property
	direction: "horizontal", // allow only horizontal scrolling
	textSelection: "true",
});
