var calc = document.getElementById("calculadora");

calc.style.width = "200px";
calc.style.height = "220px";
calc.style.background = "pink";
calc.style.margin = "auto";

calc.innerHTML = `<div>
        <p id="display"></p>
        <p>
            <button id="siete">7</button>
            <button id="ocho">8</button>
            <button id="nueve">9</button>
            <button id="suma">+</button>
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
            <button id="cuadrado">x^2</button>
        </p>
        <p>
            <button id="cero">0</button>
            <button id="multiplicacion">x</button>
            <button id="division">/</button>
            <button id="igual">=</button>
        </p>
    </div>`;

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

var accion = "";
var x = "0";
var num1 = 0;
var num2 = 0;

cero.addEventListener("click", function(){
    display.textContent += "0";
    x.textContent += "0";
});
uno.addEventListener("click", function(){
    display.textContent += "1";
    x += "1";
});
dos.addEventListener("click", function(){
    display.textContent += "2";
    x += "2";
});
tres.addEventListener("click", function(){
    display.textContent += "3";
    x += "3";
});
cuatro.addEventListener("click", function(){
    display.textContent += "4";
    x += "4";
});
cinco.addEventListener("click", function(){
    display.textContent += "5";
    x += "5";
});
seis.addEventListener("click", function(){
    display.textContent += "6";
    x += "6";
});
siete.addEventListener("click", function(){
    display.textContent += "7";
    x += "7";
});
ocho.addEventListener("click", function(){
    display.textContent += "8";
    x += "8";
});
nueve.addEventListener("click", function(){
    display.textContent += "9";
    x += "9";
});
suma.addEventListener("click", function(){
    accion.textContent = "suma";
    num1 = parseInt(x);
    x = "0";
    display.textContent = "";
});
resta.addEventListener("click", function(){
    accion.textContent = "resta";
    num1 = parseInt(x);
    x = "0";
    display.textContent = "";
});
division.addEventListener("click", function(){
    accion.textContent = "division";
    num1 = parseInt(x);
    x = "0";
    display.textContent = "";
});
multiplicacion.addEventListener("click", function(){
    accion.textContent = "multiplicacion";
    num1 = parseInt(x);
    x = "0";
    display.textContent = "";
});
cuadrado.addEventListener("click", function(){
    accion.textContent = "cuadrado";
    num1 = parseInt(x);
    num2 = num1*num1;
    display.textContent = String(num2);
    x.textContent = String(num2);
});

igual.addEventListener("click", function(){
    switch(accion){
        case "suma":
            break;
        case "resta":
            break;
        case "division":
            break;
        case "multiplicacion":
            break;
    }
});
