const nav = document.querySelector(".nav");
const navOuter = document.querySelector("#nav-outer");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const openModal = document.querySelector(".about__btn");
const modal = document.querySelector(".instructions");
const modalClose = document.querySelector(".instructions__buttons__close");

openModal.addEventListener("click", () => {
	modal.showModal();
	document.body.classList.toggle("stop-scrolling");
});

modalClose.addEventListener("click", () => {
	modal.close();
	document.body.classList.toggle("stop-scrolling");
});

modal.addEventListener("click", (e) => {
	console.log(e.target);
	if (e.target === modal) {
		modal.close();
		document.body.classList.toggle("stop-scrolling");
	}
});

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

const tabs = document.querySelectorAll(".tabcontent");
const dots = document.querySelectorAll(".dots");
const nextButton = document.querySelector(".instructions__buttons__next");

let currentTab = 0;

dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		currentTab = index;
		updateTabs();
	});
});

nextButton.addEventListener("click", () => {
	currentTab = (currentTab + 1) % tabs.length;
	updateTabs();
});

function updateTabs() {
	tabs.forEach((tab, index) => {
		if (index === currentTab) {
			tab.style.display = "block";
			dots[index].classList.add("active");
		} else {
			tab.style.display = "none";
			dots[index].classList.remove("active");
		}
	});
}

updateTabs();
