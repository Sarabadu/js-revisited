// ## Simple function arguments

// function simple(a, b) {

// }

// ## The misterius arguments object

// function args1() {
//     console.log("arguments: ", arguments)
//     // console.log(arguments.sort()) // Warning
// }

// ## Spread operator on function arguments

// function args2(...args) {
//     console.log("arguments: ", args[0])
// }

//args2(1, 2, 3, 4)

// function args3(a, ...args) {
//   console.log("arguments: ", a, args);
// }

//args3(1, 2, 3, 4)

// ## Default values
// function optional(a = 1, b = 1) {
//   console.log("a+b", a + b);
// }
//optional(3, 5)

// ## Destructuring
// function obj({ a, b, c }) {
//   console.log("a,b,c:", b, c, a);
// }
//obj({ a: "lala", b: "bababa", c: "fafafaf" })

// ## Destructuring with default values
// function opt({ a: b, b: a, c: c = "ss" }) {
//   console.log(a, b, c);
// }

// opt({ a: "pepe", b: "tito", c: "" });
