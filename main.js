"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const cartas = [
        // Cartas de trébol
        { nombre: 'asTrebol', img: 'src/clubs_ace.png' },
        { nombre: 'dosTrebol', img: 'src/clubs_2.png' },
        { nombre: 'tresTrebol', img: 'src/clubs_3.png' },
        { nombre: 'cuatroTrebol', img: 'src/clubs_4.png' },
        { nombre: 'cincoTrebol', img: 'src/clubs_5.png' },
        { nombre: 'seisTrebol', img: 'src/clubs_6.png' },
        { nombre: 'sieteTrebol', img: 'src/clubs_7.png' },
        { nombre: 'ochoTrebol', img: 'src/clubs_8.png' },
        { nombre: 'nueveTrebol', img: 'src/clubs_9.png' },
        { nombre: 'diezTrebol', img: 'src/clubs_10.png' },
        { nombre: 'jotaTrebol', img: 'src/clubs_jack.png' },
        { nombre: 'reinaTrebol', img: 'src/clubs_queen.png' },
        { nombre: 'reyTrebol', img: 'src/clubs_king.png' },

        // Cartas de pica
        { nombre: 'dosPica', img: 'src/spades_2.png' },
        { nombre: 'tresPica', img: 'src/spades_3.png' },
        { nombre: 'cuatroPica', img: 'src/spades_4.png' },
        { nombre: 'cincoPica', img: 'src/spades_5.png' },
        { nombre: 'seisPica', img: 'src/spades_6.png' },
        { nombre: 'sietePica', img: 'src/spades_7.png' },
        { nombre: 'ochoPica', img: 'src/spades_8.png' },
        { nombre: 'nuevePica', img: 'src/spades_9.png' },
        { nombre: 'diezPica', img: 'src/spades_10.png' },
        { nombre: 'jotaPica', img: 'src/spades_jack.png' },
        { nombre: 'reinaPica', img: 'src/spades_queen.png' },
        { nombre: 'reyPica', img: 'src/spades_king.png' },

        // Cartas de diamante
        { nombre: 'asDiamante', img: 'src/diamonds_ace.png' },
        { nombre: 'dosDiamante', img: 'src/diamonds_2.png' },
        { nombre: 'tresDiamante', img: 'src/diamonds_3.png' },
        { nombre: 'cuatroDiamante', img: 'src/diamonds_4.png' },
        { nombre: 'cincoDiamante', img: 'src/diamonds_5.png' },
        { nombre: 'seisDiamante', img: 'src/diamonds_6.png' },
        { nombre: 'sieteDiamante', img: 'src/diamonds_7.png' },
        { nombre: 'ochoDiamante', img: 'src/diamonds_8.png' },
        { nombre: 'nueveDiamante', img: 'src/diamonds_9.png' },
        { nombre: 'diezDiamante', img: 'src/diamonds_10.png' },
        { nombre: 'jotaDiamante', img: 'src/diamonds_jack.png' },
        { nombre: 'reinaDiamante', img: 'src/diamonds_queen.png' },
        { nombre: 'reyDiamante', img: 'src/diamonds_king.png' },

        // Cartas de corazón
        { nombre: 'asCorazon', img: 'src/hearts_ace.png' },
        { nombre: 'dosCorazon', img: 'src/hearts_2.png' },
        { nombre: 'tresCorazon', img: 'src/hearts_3.png' },
        { nombre: 'cuatroCorazon', img: 'src/hearts_4.png' },
        { nombre: 'cincoCorazon', img: 'src/hearts_5.png' },
        { nombre: 'seisCorazon', img: 'src/hearts_6.png' },
        { nombre: 'sieteCorazon', img: 'src/hearts_7.png' },
        { nombre: 'ochoCorazon', img: 'src/hearts_8.png' },
        { nombre: 'nueveCorazon', img: 'src/hearts_9.png' },
        { nombre: 'diezCorazon', img: 'src/hearts_10.png' },
        { nombre: 'jotaCorazon', img: 'src/hearts_jack.png' },
        { nombre: 'reinaCorazon', img: 'src/hearts_queen.png' },
        { nombre: 'reyCorazon', img: 'src/hearts_king.png' },

        // Joker
        { nombre: 'jokerNegro', img: 'src/joker_black.png' },
        { nombre: 'jokerRojo', img: 'src/joker_red.png' }
    ];

    const juego = document.getElementById("juego");

    // Sonidos usados
    const sonidoVoltear = new Audio('sound/voltear.mp3');
    const sonidoDesaparecer = new Audio('sound/desaparecer.mp3');
    const sonidoVictoria = new Audio('sound/victoria.mp3');

    // Variables globales
    let paresAcertados = 0;
    let intentosTotales = 0;
    let totalPares = 0;
    let tiempoIniciado = false;
    let tiempo = 0;
    let intervalo;
    let bloqueo = false;

    estilosJuego(); // Genera los estilos del div "juego"
    integrarBarraLateral(); // Introduce la barra lateral de información
    crearTablero(); // Crea el tablero vacío y la introduce

    function estilosJuego() {
        juego.style.width = "100vh";
        juego.style.height = "80vh";

        juego.style.margin = "10vh";

        juego.style.border = "2px solid grey";

        juego.style.display = "flex";
        juego.style.alignItems = "center";
        juego.style.justifyContent = "center";
    }

    function crearBarraLateral() {
        const barraLateral = document.createElement("div");
        barraLateral.style.width = "33.33%";
        barraLateral.style.height = "100%";

        barraLateral.style.display = "flex";
        barraLateral.style.flexDirection = "column";
        barraLateral.style.justifyContent = "space-evenly";
        barraLateral.style.alignItems = "center";

        barraLateral.style.borderRight = "1px solid grey";

        barraLateral.style.backgroundImage = "url(./src/pizarraBackground.jpg";

        return barraLateral;
    }

    function crearTitulo() {
        const titulo = document.createElement("div");
        titulo.style.margin = "0 auto";
        titulo.style.padding = "0";
        titulo.style.display = "flex";
        titulo.style.flexDirection = "column";
        titulo.style.alignItems = "center";
        titulo.style.justifyContent = "center"; // Centra los elementos dentro del contenedor
    
        // Crear y añadir el nombre del juego
        titulo.appendChild(crearNombreJuego());
    
        // Crear y añadir los créditos
        titulo.appendChild(crearCreditos());
    
        // Crear y añadir las reglas
        titulo.appendChild(crearReglas());
    
        return titulo;
    }
    
    function crearNombreJuego() {
        const nombreJuego = document.createElement("h1");
        nombreJuego.innerText = "MEMORY";
        nombreJuego.style.fontSize = "6.5vh";
        nombreJuego.style.height = "8vh";
        nombreJuego.style.color = "white";
        nombreJuego.style.textAlign = "center";
        nombreJuego.style.textShadow =
            "2px 2px 0px rgba(0, 0, 0, 0.75), " +
            "-2px -2px 0px rgba(0, 0, 0, 0.75), " +
            "2px -2px 0px rgba(0, 0, 0, 0.75), " +
            "-2px 2px 0px rgba(0, 0, 0, 0.75)";
    
        nombreJuego.style.margin = "0"; // Elimina el margen extra entre el título y los demás elementos
    
        return nombreJuego;
    }
    
    function crearCreditos() {
        const creditos = document.createElement("p");
        creditos.style.fontFamily = "'Arial', sans-serif";
        creditos.style.fontSize = "1.5vh"; // Ajuste de tamaño de texto para los créditos
        creditos.style.textAlign = "center"; // Centra el texto dentro de su contenedor
    
        // Crear el enlace dentro de los créditos
        const enlaceCreditos = document.createElement("a");
        enlaceCreditos.href = "https://github.com/vicjurado";
        enlaceCreditos.innerText = "@vicjurado on GitHub";
        enlaceCreditos.style.color = "white";
        enlaceCreditos.style.fontWeight = "1000";
        enlaceCreditos.style.textDecoration = "none";
        creditos.appendChild(enlaceCreditos);
    
        creditos.style.margin = "0"; // Elimina el margen extra entre los créditos y las reglas
    
        return creditos;
    }
    
    function crearReglas() {
        const reglas = document.createElement("p");
        reglas.style.padding = "3vh 0 0 0";
    
        const tituloReglas = document.createElement("h2");
        tituloReglas.innerText = "¿Cómo jugar?";
        tituloReglas.style.borderTop = "1px solid grey";
        tituloReglas.style.fontSize = "2vh";
        tituloReglas.style.color = "white";
        tituloReglas.style.padding = "1vh 5vh";
    
        reglas.appendChild(tituloReglas);
    
        // Crear la lista de reglas
        const listaReglas = document.createElement("ul");
        listaReglas.style.color = "white";
        listaReglas.style.fontFamily = "Arial, sans-serif";
        listaReglas.style.fontSize = "1.5vh";
        listaReglas.style.padding = "0 5vh";
    
        // Crear los elementos de la lista
        listaReglas.appendChild(crearRegla("El objetivo principal es encontrar todas las parejas de cartas iguales lo más rápido posible."));
        listaReglas.appendChild(crearRegla("Las cartas se barajan y exponen en cuadrícula según el modo de juego seleccionado (4x4 - 6x6)."));
        listaReglas.appendChild(crearRegla("El juego termina cuando se hayan encontrado todas las parejas."));
    
        // Añadir la lista de reglas al contenedor de reglas
        reglas.appendChild(listaReglas);
    
        reglas.style.margin = "0"; // Elimina el margen extra entre las reglas y otros elementos
    
        return reglas;
    }
    
    function crearRegla(texto) {
        const regla = document.createElement("li");
        regla.innerText = texto;
        return regla;
    }

    function crearMarcador() {
        const marcador = document.createElement("div");
        marcador.style.width = "100%";
        marcador.style.height = "5%";

        marcador.style.color = "white";
        marcador.style.fontSize = "2vh";

        marcador.style.display = "flex";
        marcador.style.justifyContent = "center";
        marcador.style.alignItems = "center";

        marcador.innerText = `Aciertos: ${paresAcertados}/${totalPares}`;
        marcador.id = "marcador";

        return marcador;
    }

    function crearTemporizador() {
        const temporizador = document.createElement("div");
        temporizador.style.width = "100%";
        temporizador.style.height = "5%";

        temporizador.style.color = "white";
        temporizador.style.fontSize = "2vh";

        temporizador.style.display = "flex";
        temporizador.style.justifyContent = "center";
        temporizador.style.alignItems = "center";

        temporizador.innerText = `Tiempo: ${tiempo}s`;
        temporizador.id = "temporizador";

        return temporizador;
    }

    function crearIntentos() {
        const intentos = document.createElement("div");
        intentos.style.width = "100%";
        intentos.style.height = "5%";

        intentos.style.color = "white";
        intentos.style.fontSize = "2vh";

        intentos.style.display = "flex";
        intentos.style.justifyContent = "center";
        intentos.style.alignItems = "center";

        intentos.innerText = `Intentos: ${intentosTotales}`;
        intentos.id = "intentos";

        return intentos;
    }

    function crearBotones() {
        const botones = document.createElement("div");
        botones.style.width = "100%";
        botones.style.height = "20%";
        botones.style.display = "flex";
        botones.style.justifyContent = "space-evenly";
        botones.style.alignItems = "center";

        botones.appendChild(crearBoton("botonCuatroPorCuatro", "4X4"));
        botones.appendChild(crearBoton("botonSeisPorSeis", "6X6"));
        botones.appendChild(crearBoton("botonReiniciar", "Reiniciar"));

        return botones;
    }


    function crearBoton(id, texto) {
        const boton = document.createElement("div");
        boton.setAttribute("id", id);
        boton.style.width = "25%";
        boton.style.height = "4vh";
        boton.style.background = "white";
        boton.style.display = "flex";
        boton.style.justifyContent = "center";
        boton.style.alignItems = "center";
        boton.style.cursor = "pointer";
        boton.style.borderRadius = "10px";
        boton.style.fontSize = "2vh";
        boton.innerText = texto;

        boton.addEventListener("mouseover", () => {
            boton.style.background = "#ddd";
            boton.style.transform = "scale(1.05)";
        });

        boton.addEventListener("mouseout", () => {
            boton.style.background = "white";
            boton.style.transform = "scale(1)";
        });

        return boton;
    }

    function integrarBarraLateral() {
        const barraLateral = crearBarraLateral();
        barraLateral.appendChild(crearTitulo());
        barraLateral.appendChild(crearMarcador());
        barraLateral.appendChild(crearIntentos());
        barraLateral.appendChild(crearTemporizador());
        barraLateral.appendChild(crearBotones());

        juego.appendChild(barraLateral);
    }

    function crearTablero() {
        // Verificamos si ya existe un tablero antes de crearlo
        const tableroExistente = document.getElementById("tablero");
        if (tableroExistente) {
            tableroExistente.remove();  // Si ya existe, lo eliminamos
        }

        // Creamos un nuevo tablero
        const tablero = document.createElement("div");
        tablero.setAttribute("id", "tablero");
        tablero.style.width = "66.66%";
        tablero.style.height = "100%";
        tablero.style.backgroundImage = "url(./src/background.jpg)";
        tablero.style.backgroundSize = "cover";
        tablero.style.backgroundPosition = "center";
        tablero.style.padding = "2.5vh";
        tablero.style.boxSizing = "border-box";

        // Añadimos el tablero al contenedor de "juego"
        juego.appendChild(tablero);

        return tablero;  // Retornamos el tablero para que pueda ser manipulado luego
    }

    function configurarTablero(modoJuego) {
        // Crear el tablero y obtener su referencia
        const tablero = crearTablero();
        tablero.style.display = "grid";
        tablero.style.gridTemplateColumns = `repeat(${modoJuego}, 1fr)`;
        tablero.style.gridTemplateRows = `repeat(${modoJuego}, 1fr)`;
        tablero.style.alignItems = "center";
        tablero.style.justifyItems = "center";
        tablero.style.gap = "1%";
    
        let cartasAleatorias = barajarCartas(modoJuego);
        actualizarContadorAciertos();
        actualizarContadorIntentos();
        let seleccionadas = [];
    
        // Crear las cartas
        for (let i = 0; i < modoJuego * modoJuego; i++) {
            const carta = document.createElement("img");
    
            // Estilos de carta
            carta.style.width = "80%";
            carta.style.height = "95%";
            carta.style.boxShadow = "10px 2px 5px rgba(0, 0, 0, 0.2)";
            carta.style.cursor = "pointer";
    
            // Datos de la carta.
            carta.src = "src/trasera.png";  
            carta.setAttribute("carta-nombre", cartasAleatorias[i].nombre);
            carta.setAttribute("carta-img", cartasAleatorias[i].img);
    
            // Agregar cada carta al tablero
            tablero.appendChild(carta);
    
            carta.addEventListener("click", () => {
                if (bloqueo) return; // No permite hacer clic si el juego está bloqueado
                
                if (!tiempoIniciado) {
                    tiempoIniciado = true;
                    iniciarContadorTiempo();
                }
    
                if (seleccionadas.length < 2 && !carta.classList.contains('descubierta')) {
                    carta.setAttribute('src', carta.getAttribute('carta-img'));
                    carta.classList.add('descubierta');
                    reproducirSonido(sonidoVoltear);
                    seleccionadas.push(carta);
    
                    if (seleccionadas.length === 2) {
                        bloqueo = true; // Bloquea nuevos clics mientras se evalúa la pareja
                        setTimeout(() => {
                            verificarPareja(seleccionadas);
                            seleccionadas = [];
                            bloqueo = false; // Desbloquea cuando se termina la verificación
                        }, 1000);
                    }
                }
            });
        }
    }

    function verificarPareja(cartas) {
        const [carta1, carta2] = cartas;
        const nombreCarta1 = carta1.getAttribute('carta-nombre');
        const nombreCarta2 = carta2.getAttribute('carta-nombre');

        if (nombreCarta1 === nombreCarta2) {
            manejarAcierto(carta1, carta2);
        } else {
            manejarFallo(carta1, carta2);
        }

        intentosTotales++;
        actualizarContadorIntentos();

        carta1.classList.remove('descubierta');
        carta2.classList.remove('descubierta');
    }

    function manejarAcierto(carta1, carta2) {
        sonidoDesaparecer.volume = 0.8;
        sonidoDesaparecer.play();
        carta1.style.visibility = 'hidden';
        carta2.style.visibility = 'hidden';
        paresAcertados++;
        actualizarContadorAciertos();

        if (paresAcertados === totalPares) {
            manejarVictoria();
        }
    }

    function manejarFallo(carta1, carta2) {
        carta1.setAttribute('src', 'src/trasera.png');
        carta2.setAttribute('src', 'src/trasera.png');
    }

    function manejarVictoria() {
        reproducirSonido(sonidoVictoria);
        clearInterval(intervalo);
        setTimeout(() => {
            mostrarMensajeVictoria();
        }, 500);
    }

    function mostrarMensajeVictoria() {
        // Crear un div para el mensaje de victoria
        const mensajeVictoria = document.createElement("div");
        mensajeVictoria.style.position = "absolute";
        mensajeVictoria.style.top = "50%";
        mensajeVictoria.style.left = "50%";
        mensajeVictoria.style.transform = "translate(-50%, -50%)";
        mensajeVictoria.style.padding = "2vh";
        mensajeVictoria.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        mensajeVictoria.style.color = "white";
        mensajeVictoria.style.fontSize = "3vh";
        mensajeVictoria.style.textAlign = "center";
        mensajeVictoria.style.borderRadius = "10px";
        mensajeVictoria.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.5)";
        mensajeVictoria.style.zIndex = "999";
    
        // Crear el mensaje con los detalles
        mensajeVictoria.innerHTML = `
            <h2>¡VICTORIA!</h2>
            <p>Intentos: ${intentosTotales}</p>
            <p>Tiempo: ${tiempo} segundos</p>
        `;
    
        // Obtener el tablero y añadir el mensaje
        const tablero = document.getElementById("tablero");
        tablero.appendChild(mensajeVictoria);
    }

    function barajarCartas(modoJuego) {
        let cartasBarajadas = cartas.sort(() => Math.random() - 0.5); // Ordena en función de si el Random da menor, igual o mayor que cero.
        let cartasSeleccionadas = [];

        // Iteramos la cantidad de pares que deben haber.
        for (let i = 0; i < modoJuego * modoJuego / 2; i++) {
            cartasSeleccionadas.push(cartasBarajadas[i], cartasBarajadas[i]); // Añado dos veces las cartas en orden
        }

        return cartasSeleccionadas.sort(() => Math.random() - 0.5); // Devuelvo las cartas seleccionadas barajadas de nuevo.
    }

    function iniciarContadorTiempo() {
        if (intervalo) {
            clearInterval(intervalo); // Evitar múltiples temporizadores activos
        }
        
        tiempo = 0;  // Reiniciar tiempo
        intervalo = setInterval(() => {
            tiempo++;
            const temporizadorElemento = document.getElementById("temporizador");
            if (temporizadorElemento) {
                temporizadorElemento.innerText = `Tiempo: ${tiempo}s`;
            }
        }, 1000);
    }

    function actualizarTiempo() {
        const temporizador = document.getElementById("temporizador");
        temporizador.innerText = `Tiempo: ${tiempo}s`;
    }

    function actualizarContadorIntentos() {
        const marcadorIntentos = document.getElementById("intentos");
        marcadorIntentos.innerText = `Intentos: ${intentosTotales}`;
    }

    function actualizarContadorAciertos() {
        const marcador = document.getElementById("marcador");
        marcador.innerText = `Aciertos: ${paresAcertados}/${totalPares}`;
    }

    function reproducirSonido(sonido) {
        sonido.currentTime = 0;
        sonido.volume = 0.2;
        sonido.play();
    }

    // Botones para configurar el tablero
    const botonCuatroPorCuatro = document.getElementById("botonCuatroPorCuatro");
    botonCuatroPorCuatro.addEventListener("click", function () {
        tiempo = 0;
        tiempoIniciado = false;
        clearInterval(intervalo);
        actualizarTiempo();
        intentosTotales = 0;
        paresAcertados = 0;
        totalPares = 8;
        configurarTablero(4);  // Crea el tablero 4x4
    });

    const botonSeisPorSeis = document.getElementById("botonSeisPorSeis");
    botonSeisPorSeis.addEventListener("click", function () {
        tiempo = 0;
        tiempoIniciado = false;
        clearInterval(intervalo);
        actualizarTiempo();
        intentosTotales = 0;
        paresAcertados = 0;
        totalPares = 13;
        configurarTablero(6);  // Crea el tablero 6x6
    });

    const botonReiniciar = document.getElementById("botonReiniciar");
    botonReiniciar.addEventListener("click", function () {
        location.reload();  // Recarga la página y reinicia el juego
    });

});
