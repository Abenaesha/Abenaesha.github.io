// const array = [
//   { x: 'foo', y: 8 },
//   { x: 'bar', y: 3 },
//   { x: 'baz', y: 7 },
// ];

// const foo = array.reduce((a,b) => ({
//   ...a,
//   [b.x]: b.y,
// }),
// {}
// )

// console.log(foo)

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	let scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});


function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  if (this.scrollY >= 500) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});