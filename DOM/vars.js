var nombre = "Alfredo"
var email = "ajjimenez@gmail.com"
var edad = 21

function getNombre() {
    console.log(nombre)
    var myNameElement = document.getElementById("nombre");
    myNameElement.innerHTML = nombre
}

function getEmail() {
    console.log(email)
    var myNameElement = document.getElementById("email");
    myNameElement.innerHTML = email
}

function getEdad() {
    console.log(edad)
    var myNameElement = document.getElementById("edad");
    myNameElement.innerHTML = edad
}