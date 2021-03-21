const mobileMenu = document.getElementById("mobile-menu");
const hamburger = document.getElementById("hamburger");

function toggleClass(el, className) {
	el.classList.toggle(className);
}
function openMenu() {
	toggleClass(mobileMenu, "mobile__menu--active");

	console.log(
		'mobileMenu.classList.contains("mobile__menu--active") :>> ',
		mobileMenu.classList.contains("mobile__menu--active")
	);

	if (mobileMenu.classList.contains("mobile__menu--active")) {
		hamburger.src = "images/icon-close.svg";
	} else {
		hamburger.src = "images/icon-hamburger.svg";
	}
}

hamburger.addEventListener("click", openMenu);
