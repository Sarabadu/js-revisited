/**
 * 
 * We can replace the object "clientMethods" with the prototype property of the constructor function
 * all functions in Js have the "prototype" property and it is designed to have the properties aka methods
 * that we want our objects to reference
 * 
 */

function createClient(name, surname) {
    let client = Object.create(createClient.prototype)
    client.name = name;
    client.surname = surname;
    client.nameLength = name.length;
    return client;
}


createClient.prototype.sayHi = function sayHi() {
    return "Hi " + this.name + ", " + this.surname;
}
createClient.prototype.sayBye = function sayBye() {
    return "Bye " + this.name + ", " + this.surname
}
