// 35-4 Single-Threaded, Asynchronous Vs Synchronous
let res = fetch(`https://jsonplaceholder.typicode.com/posts/1`);
// let data = res.json();
let data = res.json;
console.log(data);
console.log(`-------------------------------`)

/*
let res2 = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
//SyntaxError: await is only valid in async functions and the top level bodies of modules
// let data = res.json();
let data2 = res2.json();
console.log('await use here',data2);
console.log(`-------------------------------`)
*/
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  console.log(`-------------------------------`)
  const loadPhone = async () => {
    // const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    // const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTexttt}`);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    const data = await res.json();
    console.log(data);
  }
loadPhone();