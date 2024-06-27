let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
        console.log(typeof(numeroDeUsuario));
        console.log(numeroSecreto);
        console.log(typeof(numeroSecreto));
        console.log(numeroDeUsuario);
        console.log(numeroDeUsuario === numeroSecreto);
        console.log(intentos);
        
    if (numeroDeUsuario === numeroSecreto) {
        document.getElementById('reiniciar').removeAttribute('disabled');
        asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos == 1 ) ? "vez" : "veces"}!`);
        console.log('Acertaste el número!');
    } else { 
        //Si el usuario no acierta
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }
        else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
       
     //SI YA SORTEAMOS TODOS LOS NÚMEROS
        if( listaNumerosSorteados.length == numeroMaximo ){
            asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        } else {
       //SI EL NÚMERO GENERADO ESTÁ INCLUIDO EN LA LISTA 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }   else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        } 
    }
}

function condicionesIniciales(){

    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    asignarTextoElemento('h1','Juego del número secreto!');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar nuevo juego
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
