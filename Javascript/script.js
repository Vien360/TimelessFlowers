function toggleCard() {
    const card = document.getElementById('card');
    const buttonText = document.getElementById('button-text');
    var section = document.querySelector('.Poema-seccion');
    section.classList.toggle('triangulo-activo');
    
    card.classList.toggle('open');
    
    if (card.classList.contains('open')) {
        buttonText.textContent = "Cerrar Carta";
    } else {
        buttonText.textContent = "Abrir Carta";
    }
}


document.addEventListener("DOMContentLoaded", function(){
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        slides.forEach((slide, i) => {
            slide.style.opacity = i === currentSlide ? '1' : '0';
        });
        document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    window.nextSlide = function() {
        showSlide(currentSlide + 1);
    }
    
    window.prevSlide = function() {
        showSlide(currentSlide - 1);
    }
    
    showSlide(currentSlide);
});




document.addEventListener("DOMContentLoaded", function() {
    function detectDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /android|webos|iSecreto|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

        if (isMobile) {
            window.location.href = "Secreto.html";
            console.log("Estás usando un dispositivo móvil.");
        } else {
            console.log("Estás usando un PC.");
        }
    }

    detectDevice();

    const videoWrappers = document.querySelectorAll(".video-wrapper");
    const audioPlayer = document.getElementById('audioPlayer');
    const playButtonContainer = document.getElementById('playButtonContainer');

    let customButton;
    let activeVideo = null;

    if (playButtonContainer) {
        customButton = document.createElement('h1');
        customButton.textContent = '👆🏻Apretame!';
        customButton.classList.add('cyberpunk-button');
        playButtonContainer.appendChild(customButton);

        const songs = [
            "Recursos/Musica/Chachachá.mp3",
            "Recursos/Musica/Enamorado tuyo.mp3",
            "Recursos/Musica/Limón y Sal.mp3",
            "Recursos/Musica/Mon Amour - Remix.mp3",
            "Recursos/Musica/Piel Canela.mp3",
            "Recursos/Musica/Si Hay Algo.mp3",
            "Recursos/Musica/Snowman.mp3",
            "Recursos/Musica/this is what falling in love feels like - Leon Leiden Remix.mp3",
            "Recursos/Musica/Until I Found You.mp3",
            "Recursos/Musica/Vámonos a Marte.mp3",
            "Recursos/Musica/Laufey - From The Start (Official Audio).mp3"
        ];

        let currentSongIndex = 0;
        audioPlayer.src = songs[currentSongIndex];

        audioPlayer.addEventListener('ended', () => {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            audioPlayer.src = songs[currentSongIndex];
            audioPlayer.play();
            customButton.textContent = '▶️Reproduciendo';
        });

        customButton.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play();
                customButton.textContent = '▶️Reproduciendo';
            } else {
                audioPlayer.pause();
                customButton.textContent = '⏸Pausado';
            }

            if (activeVideo && !activeVideo.paused) {
                activeVideo.pause();
            }
        });
    } else {
        console.error('playButtonContainer not found in the DOM.');
    }

    videoWrappers.forEach(wrapper => {
        const video = wrapper.querySelector("video");
        const playButton = wrapper.querySelector(".play-button");

        playButton.addEventListener("click", function() {
            videoWrappers.forEach(otherWrapper => {
                const otherVideo = otherWrapper.querySelector("video");
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });

            if (video.paused) {
                video.play();
                playButton.style.display = 'none';
                activeVideo = video;
            } else {
                video.pause();
                playButton.style.display = 'flex';
                activeVideo = null;
            }

            if (customButton && !audioPlayer.paused) {
                customButton.textContent = '⏸Pausado';
                audioPlayer.pause();
            }
        });

        video.addEventListener("pause", function() {
            playButton.style.display = 'flex';
        });

        video.addEventListener("play", function() {
            playButton.style.display = 'none';
        });
    });

    const fechaObjetivo = new Date('2024-09-25T00:00:00').getTime();

    function actualizarContador() {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            document.getElementById('dias-value').textContent = '0';
            document.getElementById('horas-value').textContent = '0';
            document.getElementById('minutos-value').textContent = '0';
            document.getElementById('segundos-value').textContent = '0';
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById('dias-value').textContent = dias;
        document.getElementById('horas-value').textContent = horas;
        document.getElementById('minutos-value').textContent = minutos;
        document.getElementById('segundos-value').textContent = segundos;
    }

    setInterval(actualizarContador, 1000);
});

/*
__     ___          _____     
\ \   / (_)_  _____|__  /_  __
 \ \ / /| \ \/ / _ \ / /\ \/ /
  \ V / | |>  < (_) / /_ >  < 
   \_/  |_/_/\_\___/____/_/\_\ 
    .----.    
   / .-"-.`.  \v/
   | | '\ \ \_/ )
 ,-\ `-.' /.'  /
'---`----'----'
*/