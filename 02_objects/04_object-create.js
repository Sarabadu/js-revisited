/**
 * We use Object.create to relate the objects created with the methods
 * in this way our objects will delegate the execution of the methods to the object that we relate
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/create
 */

const clientMethods = {
    sayHi: function sayHi() {
        return "Hi " + this.name + ", " + this.surname;
    },
    sayBye: function sayBye() {
        return "Bye " + this.name + ", " + this.surname
    }
}


function createClient(name, surname) {
    let client = Object.create(clientMethods)
    client.name = name;
    client.surname = surname;
    client.nameLength = name.length;
    return client;
}

/*
const createClient.methods = {
    sayHi: function sayHi() {
        return "Hi " + this.name + ", " + this.surname;
    },
    sayBye: function sayBye() {
        return "Bye " + this.name + ", " + this.surname
    }
}
*/


let client = createClient("maxi", "meza")
console.log(client)
 console.log(client.sayHi(), client.nameLength)


// console.log(Object.getPrototypeOf(client)) 