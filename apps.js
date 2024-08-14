let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            var header = document.querySelector('header');
            var welcome = document.querySelector('.welcome');

            // Obtener la posición del header y la sección de welcome
            var headerBottom = header.getBoundingClientRect().bottom;
            var welcomeTop = welcome.getBoundingClientRect().top;

            // Cambiar el color de fondo del header cuando llegue a la sección welcome
            if (headerBottom >= welcomeTop) {
                header.style.backgroundColor = '#2F4F4F'; // Cambia a tu color preferido
            } else {
                header.style.backgroundColor = 'transparent'; // O vuelve al color original
            }

            ticking = false;
        });

        ticking = true;
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

// Iniciar el efecto
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
