document.addEventListener("DOMContentLoaded", function() {
    function detectDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

        if (isMobile) {
            window.location.href = "Phone.html";
            console.log("Estás usando un dispositivo móvil.");
            
        } else {
            console.log("Estás usando un PC.");
            
        }
    }

    detectDevice();
});

document.addEventListener('DOMContentLoaded', function() {
    const tokito = document.querySelector('.Tokito');
    const cinnamoroll = document.querySelector('.Cinnamoroll');
    const audio1 = new Audio('Recursos/SFX/Cinnamoroll.mp3');
    const audio2 = new Audio('Recursos/SFX/Tokito.mp3');

    function playAnimation(element, animationClass) {
        element.classList.add(animationClass);
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, 1000);
    }

    tokito.addEventListener('click', () => {
        audio2.play();
        playAnimation(tokito, 'bounce');
    });

    cinnamoroll.addEventListener('click', () => {
        audio1.play();
        playAnimation(cinnamoroll, 'squeeze');
    });
});


async function Probar(event) {
    event.preventDefault();

    const passInput = document.getElementById("Clave").value;

    try {
        const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(passInput));
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const mwibm012MAIDV103MFARMÑLDASGsvsdwdahj = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        
        const gduD87aGRQDFWAcgmaut52c = '249b66c7a0a1c57179f3d1125ab85ef5f15b3debe33fb4989ad421d7a6ec5f35'; 

        if (mwibm012MAIDV103MFARMÑLDASGsvsdwdahj === gduD87aGRQDFWAcgmaut52c) {
            window.location.href = "PaginaPrincipal.html";
        } else {
            alert("Contraseña incorrecta!");
            
        }
    } catch (error) {
        console.error("Error al procesar la contraseña:", error);
        alert("Hubo un error al procesar la contraseña. Por favor, inténtelo de nuevo.");
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.Contraseña input');

    inputs.forEach(input => {
        if (input.value.length > 0) {
            input.classList.add('has-text');
        }

        input.addEventListener('input', function () {
            if (this.value.length > 0) {
                this.classList.add('has-text');
            } else {
                this.classList.remove('has-text');
            }
        });
    });
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