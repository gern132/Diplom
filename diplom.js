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
// смена экранов!
// function switcher() {
// if (okno.classList('text-hidden') = true) {
//     okno1.classList.add('text-hidden1') = false;

// }else if (okno.classList('text-hidden') = false ) {
//     okno1.classList.remove('text-hidden1') = true;
// }
// }

// switcher();
//-------------

let secreg = document.querySelector('.knop');
let win1 = document.querySelector('.vhod1');
let up = document.querySelector('.body');
secreg.addEventListener('click' , secclick);

function secclick() {
    win1.classList.toggle('text-hidden1');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
const getTop = () => window.scrollY;
let strela = document.querySelector('.arrow');
let hide = document.querySelector('.arrow-hidden');
let check = 300;

const updateDashoffset = () => {};
window.addEventListener('scroll', () => {
    updateDashoffset();

if (getTop() > check) {
    hide.classList.remove('arrow-hidden')
}else {
    hide.classList.add('arrow-hidden')
}
});

strela.addEventListener('click' , strelaClick);

function strelaClick() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});    
}


// const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
// let strela = document.querySelector('.arrow');
// let hide = document.querySelector('.arrow-hidden');
// let check = 300;

// const updateDashoffset = () => {};
// window.addEventListener('scroll', () => {
//     updateDashoffset();

// if (getTop() > check) {
//     hide.classList.remove('arrow-hidden')
// }else {
//     hide.classList.add('arrow-hidden')
// }
// });

// strela.addEventListener('click' , strelaClick);

// function strelaClick() {
// window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
// });    
// }
