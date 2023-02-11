const btn_left = document.querySelector("#btn_left");
const btn_right = document.querySelector("#btn_right");
const btn_left2 = document.querySelector("#btn_left2");
const btn_right2 = document.querySelector("#btn_right2");
const imgs = document.querySelector("#imgs");
const info = document.querySelector("#info");
const close = document.querySelector("#close");
const hamburguesa = document.querySelector("#hamburguesa");
const menu = document.querySelector("#barra");
var pos = 0;
btn_right.addEventListener('click', () => {
    pos += 1;
    if (pos >= 2) pos = 2;
    let ope = pos * -(100 / 3);
    imgs.style.transform = `translateX(${ope}%)`;

    if (pos < 2) info.style.transform = `translateX(${parseInt(ope)}%)`;
    if (pos == 2) ope += 1.4;
    info.style.transform = `translateX(${ope}%)`;


});

btn_left.addEventListener('click', () => {
    pos -= 1;
    if (pos <= 0) pos = 0;
    let ope = pos * -(100 / 3);
    if (pos < 2) info.style.transform = `translateX(${parseInt(ope)}%)`
    if (pos == 2) ope += 1.4;
    imgs.style.transform = `translateX(${ope}%)`;


});

btn_right2.addEventListener('click', () => {
    pos += 1;
    if (pos >= 2) pos = 2;
    let ope = pos * -(100 / 3);
    imgs.style.transform = `translateX(${ope}%)`;

    if (pos < 2) info.style.transform = `translateX(${parseInt(ope)}%)`;
    if (pos == 2) ope += 1.4;
    info.style.transform = `translateX(${ope}%)`;


});

btn_left2.addEventListener('click', () => {
    pos -= 1;
    if (pos <= 0) pos = 0;
    let ope = pos * -(100 / 3);
    if (pos < 2) info.style.transform = `translateX(${parseInt(ope)}%)`
    if (pos == 2) ope += 1.4;
    imgs.style.transform = `translateX(${ope}%)`;


});

hamburguesa.addEventListener('click', () => {
    menu.style.display = 'block';
    hamburguesa.style.display = 'none'
    close.style.display = 'block';


});

close.addEventListener('click', () => {
    menu.style.display = 'none';
    hamburguesa.style.display = 'block'
    close.style.display = 'none';


});