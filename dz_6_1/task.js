const modal = document.querySelectorAll('.modal');
console.log(modal);

const modalMain = document.getElementById('modal_main');
modalMain.classList.add("modal_active");


const cls = document.querySelectorAll('.modal__close_times');
console.log(cls);

cls.forEach((el) => {
    el.onclick = close;
})

function close () {
    modal.forEach((t) => {
        t.className = 'modal';
    })
}

const show = document.querySelector('.show-success');
const modalSuccess = document.getElementById ('modal_success');

show.onclick = open;
function open () {
    modalSuccess.classList.add("modal_active");
    modalMain.className = 'modal';
}