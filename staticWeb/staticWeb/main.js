
var participants = [];


//Creo una funcion
//function showParticipants(data){}

//Funcion para enseñar los participantes
const showParticipants = (data) => {
    let arrayAuxiliar = [];

    //Recorre cada elemento del array y añade a arrayAuxiliar el elemento nombre
    data.   forEach(element => {
        arrayAuxiliar.push(element.name)
    });

    //Lo añado al parrafo #users del HTML
    $("#users").text("Participants: " + arrayAuxiliar);
    $("#users").html("<strong>Participants: </strong>"  + arrayAuxiliar)
}

//Funcion para coger una partcicipante al azar
const getWinner = (data) => {
    const aleatorio = Math.floor(Math.random() * data.length);

    $("#selected").html("<strong>Seleccionado: </strong>" + data[aleatorio].name);
}

$(function(){
    //Para hacer una peticion http a un API
    $.ajax ({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/json",

        //response es la data que recogemos
        success: function(response){
            participants = response;
            showParticipants(participants);
        },
        error:function(error){
            console.log(error);
            alert(error);
        }
    });

    $(".botonSelect").click(function(){
        getWinner(participants);
    });

});