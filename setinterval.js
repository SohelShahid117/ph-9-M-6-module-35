// // 35-6 Settimeout, SetInterval And ClearInterval
// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//     console.log(3);
// })
// setTimeout(() => {
//     console.log(33);
// }, 5000)
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// setInterval(() => {
//     console.log('i love u');
// }, 2000);
// console.log(8);
// console.log(9);

// let num = 0;
// setInterval(() => {
//     num++
//     console.log(num);
// }, 2000);

// let qty = 1
let qty = 0;
const clockId = setInterval(() => {
    qty = qty + 1;
    console.log(clockId, qty);
}, 3000);

let qty2 = 0;
const clockId2 = setInterval(() => {
    qty2 = qty2 + 1;
    // if (qty2 > 3) {
    //     clearInterval(clockId2)
    // }
    console.log(clockId, qty2);
    if (qty2 > 3) {
        clearInterval(clockId2)
    }
}, 3000);


// setTimeout vs setInterval