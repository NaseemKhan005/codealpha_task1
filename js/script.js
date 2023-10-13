const closeIcon = document.getElementById("close-icon");
const menuIcon = document.getElementById("close-icon");
const menu = document.getElementById("menu");

function openMenu() {
	menu.classList.remove("-right-full");
	menu.classList.add("right-0");
}

function closeMenu() {
	menu.classList.add("-right-full");
	menu.classList.remove("right-0");
}

// current date
let date = document.getElementById("date");

const currentDate = new Date().getFullYear();

date.innerHTML = currentDate;
