const buttonModalCall = document.querySelectorAll('.btn-call');
const buttonModalMessage = document.querySelectorAll('.btn-msg');

const modalCall = document.querySelector('.modal-call');
const modalMessage = document.querySelector('.modal-msg');

buttonModalCall.forEach(elem => {
    elem.addEventListener('click', (e) => {
        console.log(e.target);
        if (!modalCall.classList.contains('modal-call--show')) {
            modalCall.classList.add('modal-call--show');
            bluringElements(containers);
        } else {
            modalCall.classList.remove('modal-call--show');
            unBluringElements(containers);
        }
    });
});

buttonModalMessage.forEach(elem => {
    elem.addEventListener('click', (e) => {
        if (!modalMessage.classList.contains('modal-msg--show')) {
            modalMessage.classList.add('modal-msg--show');
            bluringElements(containers);
        } else {
            modalMessage.classList.remove('modal-msg--show');
            unBluringElements(containers);
        }

    });
});

console.log('modals');

