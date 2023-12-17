function imgSigno(signo){
    switch(signo){
        case "Capricornio":
            return "https://i.imgur.com/P9Vty3H.png";//
        case "Acuario":
            return "https://i.imgur.com/rzIFCYx.png";//
        case "Piscis":
            return "https://i.imgur.com/vt0gioY.png";//
        case "Aries":
            return "https://i.imgur.com/w9tOcUf.png";//
        case "Tauro":
            return "https://i.imgur.com/rqRBvgp.png";//
        case "Geminis":
            return "https://i.imgur.com/8gUoyta.png";//
        case "Cancer":
            return "https://i.imgur.com/cUjhPyy.png";//
        case "Leo":
            return "https://i.imgur.com/Sqi28L7.png";//
        case "Virgo":
            return "https://i.imgur.com/XMfyWc4.png";//
        case "Libra":
            return "https://i.imgur.com/C9fOoYN.png";//
        case "Escorpio":
            return "https://i.imgur.com/8nOeyuO.png";//
        case "Sagitario":
            return "https://i.imgur.com/9yl94Sv.png";//
    }
}

function calcSigno(d, m){
    let signo;
    switch(m) {
        case 1:
            if (d <= 20){
                signo = "Capricornio";}
            else{
                signo = "Acuario";}
          break;
        case 2:
            if (d <= 18){
                signo = "Acuario";}
            else{
                signo = "Piscis";}
          break;
        case 3:
            if (d <= 20){
                signo = "Piscis";}
            else{
                signo = "Aries";}
          break;
        case 4:
            if (d <= 20){
                signo = "Aries";}
            else{
                signo = "Tauro";}
          break;
        case 5:
            if (d <= 21){
                signo = "Tauro";}
            else{
                signo = "Geminis";}
          break;
        case 6:
            if (d <= 21){
                signo = "Geminis";}
            else{
                signo = "Cancer";}
          break;
        case 7:
            if (d <= 22){
                signo = "Cancer";}
            else{
                signo = "Leo";}
          break;
        case 8:
            if (d <= 23){
                signo = "Leo";}
            else{
                signo = "Virgo";}
          break;
        case 9:
            if (d <= 23){
                signo = "Virgo";}
            else{
                signo = "Libra";}
          break;
        case 10:
            if (d <= 23){
                signo = "Libra";}
            else{
                signo = "Escorpio";}
          break;
        case 11:
            if (d <= 22){
                signo = "Escorpio";}
            else{
                signo = "Sagitario";}
          break;
        case 12:
            if (d <= 21){
                signo = "Sagitario";}
            else{
                signo = "Capricornio";}
          break;
    }
    return signo
}

let calculadora = document.getElementById("calcular");
//Esto trae la informacion del boton con Id calcular
const ERROR = document.getElementById("error");
const RUEDA = document.getElementById("rueda");
const RESUL = document.getElementById("resultado");
const IMG = document.getElementById("img");
const H2 = document.getElementById("h2");
let dato;
let dia;
let mes;
let signo;

calcular.addEventListener("click", () =>{//Esto hace que el programa sepa cuando se hace click al boton
    dato = document.getElementById("dia"); 
    dia = dato.value * 1;
    dato = document.getElementById("mes"); 
    mes = dato.value * 1;
    if (dia == "0" || mes == "0"){
        ERROR.style.display = "block";//Esto hace que se muestre el mensaje de error
        RUEDA.style.display = "block";
        RESUL.style.display = "none";
        return; //Esto hace que el programa no ejecute el resto del codigo
    }
    else{
        ERROR.style.display = 'none'
        RUEDA.style.display = "none";
        RESUL.style.display = "block";
        IMG.style.display = "block";
        signo = calcSigno(dia, mes);
        IMG.src = imgSigno(signo);
        H2.innerHTML = signo;
    }
})