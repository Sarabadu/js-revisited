/**
 *  Inline Object expression
 */

let cliente = {
    name: "Its",
    surname: "me",
    saludar: function () {
        return "Hey " + this.name + ", " + this.surname;
    },
    nameLength: 4
}

let result = cliente.saludar() // "hey its me"

console.log('result:', result);

