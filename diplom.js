let login = document.querySelector('.login');
let okno = document.querySelector('.vhod');

login.addEventListener('click' , loginclick);


function loginclick() {
    document.getElementsByTagName("ul")[0].style.transition = '0s';
    okno.classList.toggle('text-hidden')
    
}

let esc = document.querySelector('.exist');

esc.addEventListener('click' , escClick);

function escClick() {
    okno.classList.add('text-hidden')
}