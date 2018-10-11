AOS.init({
    startEvent: 'DOMContentLoaded'
});

let close = document.querySelector('.aviso-icon');

close.addEventListener('click', (e) => {
    document.querySelector('.aviso').classList.add('hidden');
});