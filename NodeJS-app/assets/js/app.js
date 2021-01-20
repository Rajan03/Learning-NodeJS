const open = document.querySelector('#open'),
    close = document.querySelector('#close'),
    container = document.querySelector('.container');

open.addEventListener('click', () => {
    container.classList.add('show-nav');
    // container.classList.add('scroll');
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
    // container.classList.remove('scroll');
})