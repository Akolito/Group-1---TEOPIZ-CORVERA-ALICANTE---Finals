const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0)
})

left menu = document.querySelector('#menu-icon');
left navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x')
	navbar.classList.remove('active')
}
