let burger = document.querySelector('.burger');
let sidebar = document.querySelector('.sidebar');

burger.onclick = function() {
	burger.classList.toggle('burger_active');
	sidebar.classList.toggle('sidebar_active');
};