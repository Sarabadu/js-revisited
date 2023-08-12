/**
 * Function declaration
 * function a(){..}
 */

a();

function a() {
  console.log("easy peasy");
}
a();

/*-----------------------------------------------------------*/
/**
 * Function expresion
 * let f = function d(){..}
 *  */

// f = function () {
//     console.log("hello again")
// }

/*-----------------------------------------------------------*/
/**
 * Funcion as function argument
 * yada(function(){..})
 *  */

// function yada(fn) {
//     console.log(fn.name)
//     fn(elm)
// }

// function callb() { console.log("call me back") }

// yada(callb)   //?

/*-----------------------------------------------------------*/
/**
 * Function as object property (method)
 * {yada:function(){..}}
 *
 */

// let objeto = {
//     yada: function () { console.log("soy un metodo") }
// }

// objeto.yada()

/*-----------------------------------------------------------*/
/**
 * Function constructor
 * new Function(“a”,””)
 */

// let newF = new Function("a", "b", 'console.log("look ma" + a + b)');

/*-----------------------------------------------------------*/
/**
 * Arrow Function
 *   ()=>
 *  */

// let arrow = a => {
//     console.log("hola");
//     return "a"
// }
// console.log(arrow("a"))

/*-----------------------------------------------------------*/
/**
 * Function as return value
 * function a(){
 *     return function(){}
 *  }
 */

// function ret() {
//     return function () {
//         console.log("()()")
//     }
// }

/*-----------------------------------------------------------*/
/**
 * Recursive function
 * function a(){
 *     a()
 *     return ;
 *  }
 */

// function countDown(number) {
//     if (number <= 0) { // base case
//         console.log("BOOM!")
//     } else { // recursive case
//         console.log(number);
//         countDown(number - 1);
//     }
// }
// countDown(-5)
