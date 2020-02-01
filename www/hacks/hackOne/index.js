let burger = document.getElementById('Burger');
let menu = document.getElementById('MenuList');
let body = document.getElementById('body');

burger.addEventListener('click', function () {
    menu.classList.toggle('menu-list_active');
    burger.classList.toggle('burger_active');
    body.classList.toggle('lock');
});

let offsetHeight = document.getElementById('imagesOne');
let width;

offsetHeight.onload = function () {
    width = this.width;
};

document.getElementById('left').onclick = sliderLeft;
document.getElementById('right').onclick = sliderRight;

let polosa = document.getElementById('polosa');
polosa.style.left = 0 + "px";
let left = 0;
let right = 0;
let totallength = 0;

function sliderLeft() {
    totallength = width * 3;
    left = parseInt(polosa.style.left);
    left = left + width;
    if (left > 0) {
        left = -totallength;
    }
    polosa.style.left = left + 'px';
}

function sliderRight() {
    totallength = width * 3;
    right = parseInt(polosa.style.left);
    right = right - width;
    console.log('left ' + left);
    if (right < -totallength) {
        right = 0
    }
    polosa.style.left = right + 'px';
}