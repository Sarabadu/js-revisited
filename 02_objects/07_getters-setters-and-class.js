// ES6: Getters, Setters and Class

let obj1 = {
    get name() {
        return "no name";
    },
    set name(name) {
        this._name = name;
    }
}

console.log(obj1)





/*****************************************************************************/
/**
 * From ES6 we can use the keyword "class" to create objects that give us sugar syntax
 * to create objects with methods and properties
 * 
*/
// class Client {

//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//         this._title
//     }

//     get title() {
//         return this.name + "lalala"
//     }
//     set title(title) {
//         this._title = title
//     }

//     sayHi() {
//         return "Hi I am " + this.name + ", " + this.surname;
//     };

// }

// let client = new Client("juan", "perez");
// console.log(client.sayHi())