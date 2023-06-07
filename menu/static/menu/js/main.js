
// script del menu responsive Abrir el menu
var btnMobile = document.getElementById('btn-mobile')
btnMobile.addEventListener('click', function (e) {
    e.preventDefault()
    let mySidenav = document.getElementById("mySidenav")
    mySidenav.classList.toggle("openOffCanvas")
})

// script del menu responsive sticky menu

var nav = document.getElementById('mySidenav')

window.addEventListener('scroll', function () {
    if (window.pageYOffset > nav.offsetTop) {
        nav.classList.add('nav-fixed')
    } else {
        nav.classList.remove('nav-fixed')
    }
})
// script del menu responsive effecto accordeon
var submenu = document.getElementsByClassName('link-submenu')

for (var i = 0; i < submenu.length; i++) {
    submenu[i].onclick = function () {
        var content = this.nextElementSibling

        if (content.style.maxHeight) {
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + "px"
        }

    }
}

// script del slider de producto
let activeImg = 0
function slider(n) {
    let images = document.getElementsByClassName("slider-item")

    for (i = 0; i < images.length; i++) {

        if (images[i].className.includes("active")) {
            images[i].className = images[i].className.replace("active", "")

            break
        }
    }

    activeImg = n
    images[n].className += " active"
}

function next() {
    activeImg++
    if (activeImg > 2) {
        activeImg = 0
    }
    slider(activeImg)
}

function previus() {
    activeImg--
    if (activeImg < 0) {
        activeImg = 2
    }
    slider(activeImg)
}


// script de la navegacipon por tabs
let tabs = Array.prototype.slice.apply(document.querySelectorAll('.tabs-item'))
let panels = Array.prototype.slice.apply(document.querySelectorAll('.tab-panel'))

document.getElementById('tabs').addEventListener('click', e => {
    if (e.target.classList.contains('tabs-item')) {
        let i = tabs.indexOf(e.target)
        tabs.map(tab => tab.classList.remove('active-tab'))
        tabs[i].classList.add('active-tab')
        panels.map(panel => panel.classList.remove('active-panel'))
        panels[i].classList.add('active-panel')
    }

})


const sendButton = document.querySelector('#send-button');
const emailInput = document.querySelector('#email-input');

sendButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente
    if (emailInput.checkValidity()) {
        // Enviar solicitud
        const messageElement = document.createElement('@');
        messageElement.innerText = 'La solicitud fue realizada por favor revise su correo';
        document.body.appendChild(messageElement);
    } else {
        // Mostrar mensaje de error
        alert('Por favor ingresa un email válido');
    }
});

<script>
$(document).ready(function () {
    $('#register-button').click(function (e) {
        e.preventDefault();

        var name = $('#name-input').val();
        var surname = $('#surname-input').val();
        var email = $('#email-input').val();
        var phone = $('#phone-input').val();
        var password = $('#password-input').val();
        var confirmPassword = $('#confirm-password-input').val();

        var nameRegex = /^[a-zA-Z]+$/;
        var emailRegex = /^\S+@\S+\.\S+$/;
        var phoneRegex = /^\d+$/;
        var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (name == '') {
            alert('Por favor ingresa tu nombre.');
            return false;
        } else if (!nameRegex.test(name)) {
            alert('El nombre solo puede contener letras.');
            return false;
        }

        if (surname == '') {
            alert('Por favor ingresa tu apellido.');
            return false;
        } else if (!nameRegex.test(surname)) {
            alert('El apellido solo puede contener letras.');
            return false;
        }

        if (email == '') {
            alert('Por favor ingresa tu correo electrónico.');
            return false;
        } else if (!emailRegex.test(email)) {
            alert('Ingresa un correo electrónico válido.');
            return false;
        }

        if (phone == '') {
            alert('Por favor ingresa tu número de teléfono.');
            return false;
        } else if (!phoneRegex.test(phone)) {
            alert('El número de teléfono solo puede contener números.');
            return false;
        }

        if (password == '') {
            alert('Por favor ingresa tu contraseña.');
            return false;
        } else if (!passwordRegex.test(password)) {
            alert('La contraseña debe contener al menos 8 caracteres, 1 número y 1 carácter especial.');
            return false;
        }

        if (confirmPassword == '') {
            alert('Por favor confirma tu contraseña.');
            return false;
        } else if (confirmPassword != password) {
            alert('Las contraseñas no coinciden.');
            return false;
        }

        // Si se llega a este punto, todos los campos están validados correctamente
        alert('Formulario validado correctamente.');
        return true;
    });
});
</script>