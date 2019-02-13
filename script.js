function aleatorio(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
let numeroAleatorio = aleatorio(0, 2);

let numeroUsuario =  Number(prompt('Escolha um numero de 0 a 50...'));


let i= 0; 
while(i <= numeroUsuario){
    if(numeroAleatorio == numeroUsuario){
        alert("Você Acertou");
        i= 0;
    } else{
    prompt("Você Errou, tente novamente.")
    
    }
}
