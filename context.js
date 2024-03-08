//35-3 JavaScript Execution Context And Call Stack
/*
    Execution context-2types
    1.Global Execution Context(GEC)
    2.Function Execution Context(FEC)
*/

let a = 5;
function add(num1,num2){
    const result = num1 + num2 + a;
    const b = 79;
    return result;
};
// console.log(b);
// console.log(b); function er bitorer jinis sorasori baire teke access kora jabena-->ReferenceError: b is not defined
const sum = add(2,33);
console.log(sum)

/* 
js er 2 t context take-
    1.global context
    2.functional context
*/