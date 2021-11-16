console.log('test');

// получить элемент с селектором .main_cover_items button
const navBtnOpen = document.querySelector('.search .menu');
const navBtnOpen2 = document.querySelector('.logo button');
// получить элемент с селектором button.close
const navBtnClose = document.querySelector('button.close');
const navBtnClose1 = document.querySelector('.panel_menu .close');
const navBtnClose2 = document.querySelector('.header_menu span');
const navBtnClose3 = document.querySelector('.panel_menu span');
// получить элемент с селектором nav.nav
const nav = document.querySelector('.header_navigation .header_menu');
const nav2 = document.querySelector('.panel_navigation .panel_menu');

console.log(navBtnOpen);
console.log(navBtnClose);
console.log(nav);
console.log(navBtnOpen2);
console.log(navBtnClose2);
console.log(navBtnClose3);
console.log(nav2);


// слушаем событие клик по кнопке navBtnClose
navBtnClose.addEventListener('click', function() {
	nav.classList.remove('flex');
	nav.classList.add('hide');
})
navBtnClose1.addEventListener('click', function() {
	nav2.classList.remove('flex');
	nav2.classList.add('hide');
})
navBtnClose2.addEventListener('click', function() {
	nav.classList.remove('flex');
	nav.classList.add('hide');
})
navBtnClose3.addEventListener('click', function() {
	nav2.classList.remove('flex');
	nav2.classList.add('hide');
})

// слушаем событие клик по кнопке navBtnOpen
navBtnOpen.addEventListener('click', function() {
	nav.classList.remove('hide');
	nav.classList.add('flex');
})
navBtnOpen2.addEventListener('click', function() {
	nav2.classList.remove('hide');
	nav2.classList.add('flex');
})