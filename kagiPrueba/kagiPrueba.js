var selection = +prompt("Introduzca el tipo de operación a realizar. 1 Multi, 2 Mayor, 3 Encabezado");
switch(selection){
    case 1:
        Multiplicar();
        break;

    case 2: 
        Mayor();
        break;
    
    case 3: 
        Encabezado();
        break;

    default:
        alert("¡ERROR!");
}

function Multiplicar(){
    var num1 = prompt("Introduzca un numero:");
    var num2 = prompt("Introduzca otro numero:");
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var resultado = num1 * num2;

    if(isNaN(num1) || isNaN(nnum2)){
        alert("ERROR NINGUN VALOR INTRODUCIDO");
    }else{
        document.write(num1 + ' x ' + num2 + ' = ' + resultado);
    }
}

function Mayor(){
    var num1 = prompt("Introduzca un numero:");
    var num2 = prompt("Introduzca otro numero:");
    if(num1 > num2){
        document.write(num1 + ' es mayor que ' + num2);
    }else if(num1 < num2){
        document.write(num2 + ' es mayor que ' + num1);
    }else if(num1 == num2){
        document.write(num1 + ' es igual que ' + num2);
    }else{
        alert("¡ERROR!");
    }
}

function Encabezado(){
    var texto = prompt("INtroduzca un texto");
    var num = +prompt("Introdzca un numero entre 1 y 6");

    if(isNaN(num)){
        alert("Error, no ha introducido valor");
    }else if( num < 1 || num > 6){
        alert("El numero introducido está fuera de rango");
    }else{
        document.write("Encabezado: <h" + num +">" + texto +"</h" + num + ">");
    }
}