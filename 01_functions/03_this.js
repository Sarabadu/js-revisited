// # Who is this?

// ### globalThis (window)
// name = "juan";
// this.name = "juan";
// globalThis.name = "pepe";

function sayHi(message = "Hi", title = "") {
  console.log(`${message} ${title} ${this.name}`);
}

// sayHi();

/*****************************************************************************/
// const obj = {
//   name: "juan",
//   aka: this.name,
//   speak: sayHi,
// };

// obj.speak();
// console.log(obj.aka);

/*****************************************************************************/

const other = {
  name: "other",
  speak: null,
};

// other.speak = sayHi;

// other.speak();

// ### Bind
const otherSaysHi = sayHi.bind(other); // can also bind arguments

otherSaysHi();

// ### Apply

// sayHi.apply({ name: "apply" });

// ### Call

// sayHi.call({ name: "call" });

// ### call vs apply

// sayHi.call({ name: "call" }, "Hola", "mr");
// sayHi.apply({ name: "apply" }, ["Hola", "ms"]);

/*****************************************************************************/

// common use case for bind
// let f = {
//     0: "0",
//     1: "1",
//     2: "2",
//     length: 3
// }

// let arr = [1, 2, 3].map(x => console.log(x))
// function a(z) { console.log(z) }

// let map = Array.prototype.map.bind(f)

// map(a)