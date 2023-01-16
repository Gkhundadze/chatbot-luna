const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
	const visibility = nav.getAttribute("data-visible");

	if (visibility === "false") {
		nav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	} else {
		nav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
});

new ScrollBooster({
	viewport: document.querySelector(".solar"),
	content: document.querySelector(".solar__planets"),
	scrollMode: "transform", // use CSS 'transform' property
	direction: "horizontal", // allow only horizontal scrolling
	textSelection: "true",
});
