// 35-4 Single-Threaded, Asynchronous Vs Synchronous
function one(){
    console.log('1');
    // two();
    setTimeout(two,3000);
    console.log('3');
}
one();
function two(){
    console.log('2');
}