let burger = document.getElementById('Burger');
let menu = document.getElementById('MenuList');
let body = document.getElementById('body');

burger.addEventListener('click', function () {
    menu.classList.toggle('menu-list_active');
    burger.classList.toggle('burger_active');
    body.classList.toggle('lock');
});

let offsetHeight = document.getElementById('imagesOne');
console.log(offsetHeight.width);
document.getElementById('left').onclick = sliderLeft;
let left = 0;

function sliderLeft() {
    let polosa = document.getElementById('polosa');
    left = left - 1280;
    if (left < -3840) {
        left = 0
    }
    polosa.style.left = left + 'px';
}