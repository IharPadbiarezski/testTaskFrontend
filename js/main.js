let menuIcon = document.querySelector('.menu__icon');
let nav = document.querySelector('.nav');

document.addEventListener('DOMContentLoaded', () => {
	menuIcon.addEventListener('click', () => {
		nav.classList.add('os-animation', 'animated', 'fadeInLeft');
		nav.style.display = 'block';
	});
});
