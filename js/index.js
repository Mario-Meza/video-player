//Seleccion de elemento del doom
const $video = document.querySelector('#video');
const $backward = document.querySelector('#backward');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');


//Asignación de manejadores de eventos a los botones
$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

$video.addEventListener('click', handleTogglePlayPause);
$video.addEventListener('ended', handleEndVideo);
console.log('EventListener para ended agregado correctamente.');

$video.addEventListener('loadedmetadata', handLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput);


//Funcion que se ejecuta al hacer clic en el boton de reproduccion
function handlePlay() {
    $video.play();//Indica la reproduccion del video
    $play.hidden = true;//Oculta el boton de reproduccion
    $pause.hidden = false;//Muestra el boton de pausa
}
//Funcion que se ejecuta al hacer clic en el boton de pausa.
function handlePause() {
    $video.pause();//Pausa la reprodcuccion del video
    $pause.hidden = true;//Oculta el boton de pausa
    $play.hidden = false;// Muestra el boton de reproduccion.
}

// Función para alternar entre reproducir y pausar cuando se hace clic en el video
function handleTogglePlayPause() {
    if ($video.paused) {
        handlePlay(); // Si está pausado, lo reproduce
    } else {
        handlePause(); // Si está reproduciendo, lo pausa
    }
}

//Funcion que ese ejecuta al hacer clic en el boton de retroceder 10 segundos
function handleBackward() {
    $video.currentTime -= 10;
    let tiempo_actual = $video.currentTime
    console.log('Retroceder 10 segundos', tiempo_actual)
}

// Funcion que se ejecuta al hacer clic en el boton de avanzar 10 segundos
function handleForward() {
    $video.currentTime += 10
    let tiempo_actual = $video.currentTime
    console.log('Avanzar 10 segundos', tiempo_actual)
}

function handleEndVideo() {
    console.log('handleEndVideo called');
    $video.pause();
    $video.currentTime = 0;
    $pause.hidden = true;
    $play.hidden = false;
    console.log('El video ha terminado, listo para reproducir nuevamente.');
}


function handLoaded() {
    $progress.max = $video.duration
    let duracion_video = $video.duration
    console.log('ha cargado mi video', duracion_video);
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
    //let tiemo_actual = $video.currentTime;
    if($video.currentTime >= $video.duration) {
        handleEndVideo();
    }

}

function handleInput() {
    $video.currentTime = $progress.value;
    console.log($progress.value);
}



