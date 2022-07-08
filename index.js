var calc = document.getElementById("calculadora");

calc.style.width = "200px";
calc.style.height = "220px";
calc.style.background = "#5D6D7E";
calc.style.borderWidth = "thick";
calc.style.borderStyle = "outset";
calc.style.margin = "auto";
calc.style.display = "flex";
calc.style.alignItems = "center";
calc.style.justifyContent  = "center";
calc.style.color = "white";

calc.innerHTML = `<div id="comandos">
        <p id="display"><> </p>
        <p>
            <button id="siete">7</button>
            <button id="ocho">8</button>
            <button id="nueve">9</button>
            <button id="cuadrado">x^2</button>
            <button id="clear">C</button>
        </p>
        <p>
            <button id="cuatro">4</button>
            <button id="cinco">5</button>
            <button id="seis">6</button>
            <button id="resta">-</button>
        </p>
        <p>
            <button id="uno">1</button>
            <button id="dos">2</button>
            <button id="tres">3</button>
            <button id="suma">+</button>
        </p>
        <p>
            <button id="cero">0</button>
            <button id="multiplicacion">x</button>
            <button id="division">/</button>
            <button id="igual">=</button>
        </p>
    </div>`;
var comandos = document.getElementById("comandos");
var display = document.getElementById("display");
var cero = document.getElementById("cero");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var division = document.getElementById("division");
var multiplicacion = document.getElementById("multiplicacion");
var cuadrado = document.getElementById("cuadrado");
var clear = document.getElementById("clear");
var igual = document.getElementById("igual");

display.style.background = "grey";
display.style.borderWidth = "thin";
display.style.borderStyle = "inset";
resta.style.width = "36px";
igual.style.width = "67px";
suma.style.width = "36px";
division.style.width = "24px";
cuadrado.style.width = "36px";
clear.style.marginLeft = "5px"; 

var accion = "";
var x = "";
var num1 = 0;
var num2 = 1;
var total = 0;

cero.addEventListener("click", function(){
    display.textContent += "0";
    x += "0";
    num1 = parseInt(x);
    num2 = parseInt(x);
});
uno.addEventListener("click", function(){
    display.textContent += "1";
    x += "1";
    num1 = parseInt(x);
    num2 = parseInt(x);
});
dos.addEventListener("click", function(){
    display.textContent += "2";
    x += "2";
    num1 = parseInt(x);
    num2 = parseInt(x);
});
tres.addEventListener("click", function(){
    display.textContent += "3";
    x += "3";
    num1 = parseInt(x);
    num2 = parseInt(x);
});
cuatro.addEventListener("click", function(){
    display.textContent += "4";
    x += "4";
    num1 = parseInt(x);
    num2 = parseInt(x);
});
cinco.addEventListener("click", function(){
    display.textContent += "5";
    x += "5";
    num1 = parseInt(x);
    num2 = parseInt(x);
});
seis.addEventListener("click", function(){
    display.textContent += "6";
    x += "6";
    num1 = parseInt(x);
    num2 = parseInt(x);
});
siete.addEventListener("click", function(){
    display.textContent += "7";
    x += "7";
    num1 = parseInt(x);
    num2 = parseInt(x);
});
ocho.addEventListener("click", function(){
    display.textContent += "8";
    x += "8";
    num1 = parseInt(x);
    num2 = parseInt(x);
});
nueve.addEventListener("click", function(){
    display.textContent += "9";
    x += "9";
    num1 = parseInt(x);
    num2 = parseInt(x);
});
suma.addEventListener("click", function(){
    accion = "suma";
    x = "";
    display.textContent = display.textContent.concat(" + ");       
    if(total == 0)
        total = num1;
    else
        total += num1;
    num1 = 0; 
});
resta.addEventListener("click", function(){
    accion = "resta";
    x = "";
    display.textContent = display.textContent.concat(" - ");
    if(total == 0)
        total = num1;
    else
        total -= num1;
    num1 = 0;
});
division.addEventListener("click", function(){
    accion = "division";
    x = "";
    display.textContent = display.textContent.concat(" / ");
    if(total == 0)
        total = num2;
    else
        total = total / num2;
    num2 = 1;
});

multiplicacion.addEventListener("click", function(){        
    accion = "multiplicacion",
    x = "";
    display.textContent = display.textContent.concat(" * ");
    if(total == 0)
        total = num2;
    else
        total = total * num2;
    num2 = 1;
});

cuadrado.addEventListener("click", function(){
    x = "";
    display.textContent = display.textContent.concat("^2 ");
    if(total == 0)
        total = num1 * num1;
    else
        total = total * total;
});

clear.addEventListener("click", function(){
    num1 = 0;
    num2 = 1;
    total = 0;
    x = "";
    display.textContent = "<>";
});

igual.addEventListener("click", function(){
    switch(accion){
        case "suma":
            total += num1;
            display.textContent = "<> " + String(total);
            break;
        case "resta":
            total -= num1;
            display.textContent = "<> " + String(total);
            break;
        case "division":
            total = total / num2;
            display.textContent = "<> " + String(total);
            break;
        case "multiplicacion":
            total = total * num2;
            display.textContent = "<> " + String(total);
            break;    
        case "cuadrado":
            total = total * total;
            display.textContent = "<> " + String(total);
            break;
        default:
            display.textContent = "<> " + String(total);
    }
    num1 = 0;
    num2 = 1;
});
