
function Client(name, surname) {
    // let this = Object.create(createClient.prototype)
    this.name = name;
    this.surname = surname;
    this.nameLength = name.length;
    // return this;
}


Client.prototype.sayHi  = function sayHi() {
    return "Hi " + this.name + ", " + this.surname;
};

/**
 * Editing from this line replace the keyword "new" with a function
 * so that:
 * New(Cliente,["Juan","Garcia"])  ~= new Cliente("Juan","Garcia")
 * 
 * */








































//  function New(objetoCreate, properties) {
//     let objeto = Object.create(objetoCreate.prototype);
//     objetoCreate.apply(objeto, properties);
//     return objeto;
// }

// let cliente = New(Cliente, ["Juan", "Garcia"]);
// console.log(New(Cliente, ["Juan", "Garcia"]) == new Cliente("Juan", "Garcia"));