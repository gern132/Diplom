let login = document.querySelector('.login');
let okno = document.querySelector('.vhod');

login.addEventListener('click' , loginclick);


function loginclick() {
    document.getElementsByTagName("ul")[0].style.transition = '0s';
    okno.classList.toggle('text-hidden');
    
}

let esc = document.querySelector('.exist');

esc.addEventListener('click' , escClick);

function escClick() {
    okno.classList.add('text-hidden');
}

let registr = document.querySelector('.poleregistra');
let okno1 = document.querySelector('.vhod1');


registr.addEventListener('click' , regClick);

function regClick() {
    okno1.classList.toggle('text-hidden1');
}

let esc1 = document.querySelector('.exist1')

esc1.addEventListener('click' , reg1Click);

function reg1Click() {
okno1.classList.add('text-hidden1');
}
function switcher() {
if (okno.classList('text-hidden') = true) {
    okno1.classList.add('text-hidden1') = false;

}else if (okno.classList('text-hidden') = false ) {
    okno1.classList.remove('text-hidden1') = true;
}
}

switcher();