/*menu hamburguesa */
let pressButton = false;
const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
let header = document.querySelector('header');
let welcome = document.querySelector('.welcome');

function changeHeaderColor() {
    header.style.backgroundColor = 
        header.style.backgroundColor === '#2F4F4F' ? 'transparent' : '#2F4F4F';
}

button.addEventListener('click', () => {
    nav.classList.toggle('activo');
    pressButton = !pressButton;
    changeHeaderColor(); // Llama a la función para cambiar el color del header
});

window.addEventListener('scroll', function() {
    if (!pressButton) {
        window.requestAnimationFrame(function() {
            // Obtener la posición del header y la sección de welcome
            let headerBottom = header.getBoundingClientRect().bottom;
            let welcomeTop = welcome.getBoundingClientRect().top;

            // Cambiar el color de fondo del header cuando llegue a la sección welcome
            if (headerBottom >= welcomeTop) {
                header.style.backgroundColor = '#2F4F4F'; // Cambia a tu color preferido
            } else {
                header.style.backgroundColor = 'transparent'; // O vuelve al color original
            }
        });
    }
});






const words = ["Calidad", "Compromiso", "Acebuche"]; // Pensar en otra palabra en sustitucion a Acebuche
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let delay = 200;

function type() {
    const currentWord = words[currentWordIndex];
    const displayText = currentWord.substring(0, currentCharIndex);
    
    document.getElementById('text').textContent = displayText;
    
    if (!isDeleting && currentCharIndex < currentWord.length) {
        currentCharIndex++;
        delay = 230;
    } else if (isDeleting && currentCharIndex > 0) {
        currentCharIndex--;
        delay = 100;
    } else if (!isDeleting && currentCharIndex === currentWord.length) {
        delay = 3000;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        delay = 500;
    }

    setTimeout(type, delay);
}

type();


/*Imagen cartas*/ 
function mostrarImagen() {
    document.getElementById('imagenFullScreen').style.display = 'block';
}

function ocultarImagen() {
    document.getElementById('imagenFullScreen').style.display = 'none';
}

/*Animación scroll hojas*/ 
document.addEventListener('scroll', () => {
    const screenWidth = window.innerWidth;
    const scrollDer = document.querySelector('.der');
    const scrollIzq = document.querySelector('.izq');
    const rect = scrollDer.getBoundingClientRect();
    if (screenWidth >= 800 && screenWidth <= 1800)
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            scrollDer.style.right = '-15%';
            scrollIzq.style.left = '-10%';
        } else {
            scrollDer.style.right = '0';
            scrollIzq.style.left = '0';
        }
});


/*Carrusel/Carousel */

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}