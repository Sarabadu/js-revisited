/**
 * We create an Object clientMethods that contains all the functions
 * in this way we refer to the functions instead of creating a new one with each client
 * and we are grouped in an object
 *  
 * */

let clientMethods = {
    sayHi: function sayHi() {
        return "Hi " + this.name + ", " + this.surname;
    },
    sayBye: function sayBye() {
        return "Bye " + this.name + ", " + this.surname
    }
}


function createClient(name, surname) {
    let client =
    {
        name: name,
        surname: surname,
    }
    client.sayBye = clientMethods.sayBye,
    client.nameLength = name.length
    client.sayHi = clientMethods.sayHi;
    return client;
}

let client = createClient("maxi", "meza")
console.log(client.sayHi(), client.nameLength)
