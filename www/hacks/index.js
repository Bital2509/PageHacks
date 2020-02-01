let burger = document.getElementById('Burger');
let menu = document.getElementById('MenuList');
let body = document.getElementById('body');

burger.addEventListener('click', function () {
    menu.classList.toggle('menu-list_active');
    burger.classList.toggle('burger_active');
    body.classList.toggle('lock');
});

let cs = document.getElementById("cs");
let cs16 = document.getElementById("cs16");
let css = document.getElementById("css");
let apex = document.getElementById("apex");
let pubg = document.getElementById("pubg");
let fortnite = document.getElementById("fortnite");

let cardcs_go = document.getElementsByClassName("cardCSGO");
let cardcs_16 = document.getElementsByClassName("cardCS16");
let cardcs_s = document.getElementsByClassName("css");
let cardcs_apex = document.getElementsByClassName("apex");
let cardcs_pubg = document.getElementsByClassName("pubg");
let cardcs_fortnite = document.getElementsByClassName("fortnite");

cs.addEventListener('click', function () {
    cs.classList.toggle('card_active');
    if (cs.classList.contains("card_active")) {
        cs16.classList.remove('card_active');
        css.classList.remove('card_active');
        apex.classList.remove('card_active');
        pubg.classList.remove('card_active');
        fortnite.classList.remove('card_active');
        for (let i = 0; i < cardcs_16.length; i++) {
            cardcs_go[i].classList.remove('card_disable');
            cardcs_16[i].classList.add('card_disable');
            cardcs_s[i].classList.add('card_disable');
            cardcs_apex[i].classList.add('card_disable');
            cardcs_pubg[i].classList.add('card_disable');
            cardcs_fortnite[i].classList.add('card_disable');
        }
    } else {
        for (let i = 0; i < cardcs_16.length; i++) {
            cardcs_16[i].classList.remove('card_disable');
            cardcs_s[i].classList.remove('card_disable');
            cardcs_apex[i].classList.remove('card_disable');
            cardcs_pubg[i].classList.remove('card_disable');
            cardcs_fortnite[i].classList.remove('card_disable');
        }
    }
});

cs16.addEventListener('click', function () {
    cs16.classList.toggle('card_active');
    if (cs16.classList.contains("card_active")) {
        cs.classList.remove('card_active');
        apex.classList.remove('card_active');
        css.classList.remove('card_active');
        pubg.classList.remove('card_active');
        fortnite.classList.remove('card_active');
        for (let i = 0; i < cardcs_16.length; i++) {
            cardcs_16[i].classList.remove('card_disable');
            cardcs_go[i].classList.add('card_disable');
            cardcs_s[i].classList.add('card_disable');
            cardcs_apex[i].classList.add('card_disable');
            cardcs_pubg[i].classList.add('card_disable');
            cardcs_fortnite[i].classList.add('card_disable');
        }
    } else {
        for (let i = 0; i < cardcs_16.length; i++) {
            cardcs_go[i].classList.remove('card_disable');
            cardcs_s[i].classList.remove('card_disable');
            cardcs_apex[i].classList.remove('card_disable');
            cardcs_pubg[i].classList.remove('card_disable');
            cardcs_fortnite[i].classList.remove('card_disable');
        }
    }
});

css.addEventListener('click', function () {
    css.classList.toggle('card_active');
    if (css.classList.contains("card_active")) {
        cs.classList.remove('card_active');
        cs16.classList.remove('card_active');
        apex.classList.remove('card_active');
        pubg.classList.remove('card_active');
        fortnite.classList.remove('card_active');
        for (let i = 0; i < cardcs_s.length; i++) {
            cardcs_s[i].classList.remove('card_disable');
            cardcs_go[i].classList.add('card_disable');
            cardcs_16[i].classList.add('card_disable');
            cardcs_apex[i].classList.add('card_disable');
            cardcs_pubg[i].classList.add('card_disable');
            cardcs_fortnite[i].classList.add('card_disable');
        }
    } else {
        for (let i = 0; i < cardcs_s.length; i++) {
            cardcs_go[i].classList.remove('card_disable');
            cardcs_16[i].classList.remove('card_disable');
            cardcs_apex[i].classList.remove('card_disable');
            cardcs_pubg[i].classList.remove('card_disable');
            cardcs_fortnite[i].classList.remove('card_disable');
        }
    }
});

apex.addEventListener('click', function () {
    apex.classList.toggle('card_active');
    if (apex.classList.contains("card_active")) {
        cs.classList.remove('card_active');
        cs16.classList.remove('card_active');
        css.classList.remove('card_active');
        pubg.classList.remove('card_active');
        fortnite.classList.remove('card_active');
        for (let i = 0; i < cardcs_apex.length; i++) {
            cardcs_apex[i].classList.remove('card_disable');
            cardcs_go[i].classList.add('card_disable');
            cardcs_16[i].classList.add('card_disable');
            cardcs_s[i].classList.add('card_disable');
            cardcs_pubg[i].classList.add('card_disable');
            cardcs_fortnite[i].classList.add('card_disable');
        }
    } else {
        for (let i = 0; i < cardcs_apex.length; i++) {
            cardcs_go[i].classList.remove('card_disable');
            cardcs_16[i].classList.remove('card_disable');
            cardcs_s[i].classList.remove('card_disable');
            cardcs_pubg[i].classList.remove('card_disable');
            cardcs_fortnite[i].classList.remove('card_disable');
        }
    }
});

pubg.addEventListener('click', function () {
    pubg.classList.toggle('card_active');
    if (pubg.classList.contains("card_active")) {
        cs.classList.remove('card_active');
        cs16.classList.remove('card_active');
        css.classList.remove('card_active');
        apex.classList.remove('card_active');
        fortnite.classList.remove('card_active');
        for (let i = 0; i < cardcs_pubg.length; i++) {
            cardcs_pubg[i].classList.remove('card_disable');
            cardcs_go[i].classList.add('card_disable');
            cardcs_16[i].classList.add('card_disable');
            cardcs_s[i].classList.add('card_disable');
            cardcs_apex[i].classList.add('card_disable');
            cardcs_fortnite[i].classList.add('card_disable');
        }
    } else {
        for (let i = 0; i < cardcs_pubg.length; i++) {
            cardcs_go[i].classList.remove('card_disable');
            cardcs_16[i].classList.remove('card_disable');
            cardcs_s[i].classList.remove('card_disable');
            cardcs_apex[i].classList.remove('card_disable');
            cardcs_fortnite[i].classList.remove('card_disable');
        }
    }
});

fortnite.addEventListener('click', function () {
    fortnite.classList.toggle('card_active');
    if (fortnite.classList.contains("card_active")) {
        cs.classList.remove('card_active');
        cs16.classList.remove('card_active');
        css.classList.remove('card_active');
        apex.classList.remove('card_active');
        pubg.classList.remove('card_active');
        for (let i = 0; i < cardcs_fortnite.length; i++) {
            cardcs_fortnite[i].classList.remove('card_disable');
            cardcs_go[i].classList.add('card_disable');
            cardcs_16[i].classList.add('card_disable');
            cardcs_s[i].classList.add('card_disable');
            cardcs_apex[i].classList.add('card_disable');
            cardcs_pubg[i].classList.add('card_disable');
        }
    } else {
        for (let i = 0; i < cardcs_fortnite.length; i++) {
            cardcs_go[i].classList.remove('card_disable');
            cardcs_16[i].classList.remove('card_disable');
            cardcs_s[i].classList.remove('card_disable');
            cardcs_apex[i].classList.remove('card_disable');
            cardcs_pubg[i].classList.remove('card_disable');
        }
    }
});
