let burger = document.getElementById('Burger');
let menu = document.getElementById('MenuList');
let body = document.getElementById('body');

burger.addEventListener('click',function () {
   menu.classList.toggle('menu-list_active');
   burger.classList.toggle('burger_active');
   body.classList.toggle('lock');
});