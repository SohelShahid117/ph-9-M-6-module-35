// 35-5 Promise, Async/Await

const myLoader = ()=>{
    return new Promise((resolve,reject)=>{
        // const success = true;
        // const success = false;
       
        // if(success){
        //     resolve(0.3);
        // }else{
        //     reject(0.7);
        // }
        const success = Math.random();
        if(success<0.5){
            resolve(success);
        }else{
            reject(success);
        }
    })
};

myLoader()
.then(data => console.log('resolved data value :',data))
.catch(err => console.error('rejected value :',err));


/*
let dataIsLoading = true;

promise
  .then(data => {
    // do something with data
    dataIsLoading = false;
  })
  .catch(error => {
   // do something with error
   dataIsLoading = false;
  })
  */