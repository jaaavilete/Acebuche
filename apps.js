//menu hamburguesa 
let pressButton = false;
const button = document.querySelector('.nav-btn');
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

const navLinks = document.querySelectorAll('.nav a');

// Añade un evento de clic a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Cierra el menú hamburguesa
        nav.classList.remove('activo');
        pressButton = false; // Reinicia el estado del botón
    });
});



// Pensar en otra palabra en sustitucion a Acebuche

const words = ["Calidad", "Sabor", "Acebuche"]; 
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


function startTyping(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            type();  // Comienza a escribir cuando el elemento es visible
            observer.unobserve(entry.target); // Deja de observar una vez que comienza
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    observer = new IntersectionObserver(startTyping, {
        threshold: 0.5 // El texto debe estar al menos un 50% visible
    });
    observer.observe(textElement);
});





//Imagen cartas 
function mostrarImagen() {
    document.getElementById('imagenFullScreen').style.display = 'block';
}

function ocultarImagen() {
    document.getElementById('imagenFullScreen').style.display = 'none';
}


//Animación scroll hojas
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

//Fumada de Javier

const xmenu1 = document.getElementById("xmenu1");
const xmenu = document.getElementById("xmenu");

xmenu1.addEventListener("click", ()=> {
    xmenu1.classList.replace("appearx", "hiddenx")
    xmenu.classList.replace("hiddenx", "appearx")
});

xmenu.addEventListener("click", ()=> {
    xmenu.classList.replace("appearx", "hiddenx")
    xmenu1.classList.replace("hiddenx", "appearx")
});


//   Volumen 

const volumeButton = document.getElementById("volume");
const volumeBarra = document.getElementById("volumeBarra"); 
const sound = new Audio("sounds/sound.mp3");


volumeBarra.style.display = "none";


function toggleAudio() {
  if (sound.paused) {
    sound.play();
    volumeButton.style.display = "block"; 
    volumeBarra.style.display = "none";  
  } else {
    
    sound.pause();
    volumeButton.style.display = "none"; 
    volumeBarra.style.display = "block"; 
  }
}


volumeButton.addEventListener("click", toggleAudio);
volumeBarra.addEventListener("click", toggleAudio);


sound.play() //Si descomentas esto el sonido se reproduce desde que el user entra en la web actualmente pa que suene le tieen que dar el user al botón asi que lo que mejor veas Pedro. El sonido lo puedes cambiar descargandote el video de Yt que le guste a tu padre y le pones sound.mp3 lo metes en la carpeta sound y ya estaría. Lo que mejor veas.





let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.carouselImgResponsive');
  const totalSlides = slides.children.length;

  // Actualiza el índice del slide
  currentSlide += direction;

  // Si el índice se sale del rango, vuelve al inicio o al final
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  // Cambia la posición del carrusel
  const slideWidth = slides.children[0].clientWidth;
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}