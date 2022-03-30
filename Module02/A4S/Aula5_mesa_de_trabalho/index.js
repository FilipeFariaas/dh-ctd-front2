const darkModeButton = document.querySelector(`.switch`);

const body = document.querySelector(`body`);
const header = document.querySelector(`.header`);
const items = document.querySelectorAll(`.item`);

const addDarkMode = () => {
	body.classList.toggle("dark");

	header.classList.toggle(`header--dark`);

	items.forEach((item) => {
		item.classList.toggle(`item--dark`);
	});
};
