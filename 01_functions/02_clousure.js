// ## Function scope

// function copyrighter(by) {
//     return function (a) {
//         return a + by
//     }
// }

// let cc = copyrighter(" by you")

/******************************************************************/
// ### Private internal state

// function counter() {
//     let count = 0;

//     return function () {
//         return ++count;
//     }
// }

// let count = counter();

// console.log('count():', count());
// console.log('count():', count());

/******************************************************************/
// ### Partial application

// function addMaker(a) {
//     return function (b) {
//         return a + b; // a is in the scope of the returned function
//     }
// }
// console.log(addMaker(2)(18))
// let add2 = addMaker(2);

// console.log('add2(18):', add2(18));
// console.log('add2(1):', add2(1));
// console.log('add2(27):', add2(27));

/******************************************************************/

// ## Only call once

// function onlyOnce() {
//     let called = false
//     return function () {
//         if (!called) {
//             called = true
//             console.log("do something once")
//         }
//         else {
//             throw "already called"
//         }
//     }
// }

// let once = onlyOnce();
// once()
// once()

/******************************************************************/
// ## dealay result 1 execution ()

// function fifo(a) {
//     let b = [a];
//     return function (c) {
//         let d = b.pop()
//         b.push(c)
//         return d;
//     }
// }

// let a = fifo(1);

/******************************************************************/
// ## Add call counter to a function

// function counter(fn) {
//     let count = 0
//     return function (...args) {
//         count++
//         return [fn(...args), count]
//     }
// }

// let b = counter(fifo(1));

// console.log(b(2))
