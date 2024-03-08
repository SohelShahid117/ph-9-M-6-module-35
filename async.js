// 35-4 Single-Threaded, Asynchronous Vs Synchronous
console.log(1);
console.log(2);
// console.log(3);
doSomething();
console.log(4);
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log(5);
console.log(6);
console.log(7);
setTimeout(doSomething)
setTimeout(doSomething,9000)
console.log(8);
console.log(9);
setTimeout(()=>{
    console.log('hello dear.How r u?')
},5000)
console.log(10);
// let res = fetch('https://jsonplaceholder.typicode.com/posts/1');
// // let data = res.json();
// let data = res.json();
// console.log(data);

function doSomething(){
    console.log('O/P from doSomething function',3);
}