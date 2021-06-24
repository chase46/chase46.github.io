var close = document.querySelector('.contact__close');
var contact = document.querySelector('.contact');


function cls() {
    contact.style.display = "none"
    contact.style.display = "block"
}

close.addEventListener('click', cls)
