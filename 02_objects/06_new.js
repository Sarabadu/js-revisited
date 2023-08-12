/**
 * Utilizamos la palabra new para que la funcion constructora automaticamente 
 * realice el  Object.create(creaCliente.prototype)
 * y nos devuelva el objeto creado "this
 */

function Client(name, surname) {
    // let this = Object.create(createClient.prototype)
    this.name = name;
    this.surname = surname;
    this.nameLength = name.length;
    // return this;
}


let nue = new Client("Its", "me");


Client.prototype.sayHi  = function sayHi() {
    return "Hi " + this.name + ", " + this.surname;
};
Client.prototype.sayBye = function sayBye() {
    return "bye " + this.name + ", " + this.surname
}

