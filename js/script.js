    var randomNumber = Math.floor(Math.random() * 100) + 1;
    const adivinanzas = document.querySelector('.adivinanzas');
    const ultimoResultado = document.querySelector('.ultimoResultado');
    const bajoOAlto = document.querySelector('.bajoOAlto');
    const adivinaSubmit = document.querySelector('.adivinaSubmit');
    const campoAdivina = document.querySelector('.campoAdivina');
    var contadorAdivinanzas = 1;
    var resetButton;
    var imagen;
    
    function checaAdivinanza() {
        var AdivinanzaUsuario = Number(campoAdivina.value);
        //Funcion Number convienrte string a si el argumento no puede ser
        //convertido a un número, devuelve NaN.
        if (contadorAdivinanzas ==1) {
            adivinanzas.textContent = 'Adivinanzas Previas: ';
        }
        adivinanzas.textContent += AdivinanzaUsuario + ' ';
        if (AdivinanzaUsuario == randomNumber) {
            ultimoResultado.textContent = 'Felicidades! Estás en lo correcto!';
            ultimoResultado.style.backgroundColor = 'green';
            imagen = document.createElement('img');
            imagen.src = "img/win.gif";
            bajoOAlto.textContent = '';
            empezarJuego();
        } else if (contadorAdivinanzas == 10) {
            ultimoResultado.textContent = '!!!GAME OVER!!!';
            imagen = document.createElement('img');
            imagen.src = "img/takel.gif";
            bajoOAlto.textContent = '';
        empezarJuego();
        } else {
            ultimoResultado.textContent = 'Error!';
            ultimoResultado.style.backgroundColor = 'red';
        if(AdivinanzaUsuario < randomNumber)
            bajoOAlto.textContent = 'El último número es demasiado bajo!' ;
        else if(AdivinanzaUsuario > randomNumber)
            bajoOAlto.textContent = 'El último número es demasiado alto!';
    }
    contadorAdivinanzas++;
    campoAdivina.value = '';
    campoAdivina.focus();
    }

    adivinaSubmit.addEventListener('click', checaAdivinanza);
    
    function empezarJuego() {
        campoAdivina.disabled = true;
        adivinaSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Iniciar nuevo Juego';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetJuego);
        document.getElementById("img").appendChild(imagen);
        document.getElementById("img").style.alignItems("center");
    }
    
    function resetJuego() {
        contadorAdivinanzas = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(var i = 0 ; i < resetParas.length ; i++)
            resetParas[i].textContent = '';
            resetButton.parentNode.removeChild(resetButton);
            imagen.parentNode.removeChild(imagen);
            campoAdivina.disabled = false;
            adivinaSubmit.disabled = false;
            campoAdivina.value = '';
            campoAdivina.focus();
            ultimoResultado.style.backgroundColor = 'blanchedalmond';
            randomNumber = Math.floor(Math.random() * 100) + 1;
    }