const buttonModalCall = document.querySelectorAll('.btn-call');
const buttonModalMessage = document.querySelectorAll('.btn-msg');
const menu = document.querySelector('.menu');
const modalCall = document.querySelector('.modal-call');
const modalMessage = document.querySelector('.modal-msg');
const containers = document.querySelectorAll('.container');
const modalMsgWrapper = document.querySelector('.modal-msg__wrapper');

const closaModalWindow = function(modalWindow, modalClassShow) {
    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
            modalWindow.classList.remove(modalClassShow);
        }
    });
};

modalMessage.addEventListener('click', (e) => {
    if (e.target == modalMessage) {
        modalMessage.classList.remove('modal-msg--show');
    }
});

modalCall.addEventListener('click', (e) => {
    if (e.target == modalCall) {
        modalCall.classList.remove('modal-call--show');
    }
});


buttonModalCall.forEach(elem => {
    elem.addEventListener('click', () => {
        let btnClose = document.querySelector('.modal-call__btn');
        closaModalWindow(modalCall, 'modal-call--show');
        btnClose.addEventListener('click', () => {
            modalCall.classList.remove('modal-call--show');
        });
        if (!modalCall.classList.contains('modal-call--show')) {
            modalCall.classList.add('modal-call--show');
        } else {
            modalCall.classList.remove('modal-call--show');
        }
    });
});

buttonModalMessage.forEach(elem => {
    elem.addEventListener('click', (e) => {
        let btnClose = document.querySelector('.modal-msg__btn');
        closaModalWindow(modalMessage, 'modal-msg--show');
        btnClose.addEventListener('click', () => {
            modalMessage.classList.remove('modal-msg--show');
        });
        if (!modalMessage.classList.contains('modal-msg--show')) {
            modalMessage.classList.add('modal-msg--show');
        } else {
            modalMessage.classList.remove('modal-msg--show');
        }

    });
});

console.log('modals');

