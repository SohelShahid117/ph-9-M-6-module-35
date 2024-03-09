// 35-7 JavaScript Event Loop And Concurrency
function a() {
    console.log('a');
    b();
    console.log('aa');
}
function b() {
    console.log('b');
    c();
    console.log('bb');
}
function c() {
    console.log('c');
    console.log('cc');
}
console.log(`-----------------------------------`);
function x() {
    console.log('x');
    y();
    console.log('xx');
}
function y() {
    console.log('y');
    z()
    console.log('yy');
}
function z() {
    console.log('z');
    console.log('zz');
}
setTimeout(() => {
    console.log('inside from set time out function')
}, 3000)

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

const evenLoop = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await res.json()
    console.log(data);
}
evenLoop()
a();
x();
// b();
// c();

/* Q:What is JS event loop ?
A:
JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub - tasks.This model is quite different from models in other languages like C and Java.
*/


function foo(b) {
    const a = 10;
    return a + b + 11;
}

function bar(x) {
    const y = 3;
    return foo(x * y);
}

const baz = bar(7);
console.log(baz)


const evenLoopFunc = () => {
    console.log("this is the start");

    setTimeout(() => {
        console.log("Callback 1: this is a msg from call back");
    }); // has a default time value of 0

    console.log("this is just a message");

    setTimeout(() => {
        console.log("Callback 2: this is a msg from call back");
    }, 0);

    console.log("this is the end");
};
evenLoopFunc()

//JSConf:https://youtu.be/8aGhZQkoFbQ?si=JZsV6vfeTNrYI5JD
//https://youtu.be/DbRXv5TXMEE?si=w63k6QTfDDAZyAgo
