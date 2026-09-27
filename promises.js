function fetchUserData(){
    return new Promise((resolve, reject) => { 
    let success = false;
     if (success) {
        resolve({
            id: 295724 ,
            name: "John Doe"
        })
     }else{
        reject(new Error("User not found"))
     }
   });
}

async function getUserData(){
try{
   const user = await fetchUserData();
   console.log(user.name);
}catch(error){
   console.log(`Error: ${error.message}`);
}
}
getUserData();
// .then((response2) => {
//     console.log(response2.name);
// })
// .catch((error) => {
//    console.log(error.message);
// });

// const promise2 = new Promise((resolve, reject) => { 
//     let success = false;
//      if (success) {
//         resolve({
//             deliveryId: 295724 ,
//             status: "Delivered"
//         })
//      }else{
//         reject(new Error("id not found"))
//      }
// })

// promise2
// .then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.error(error);
// });


// Promise.all([promise1, promise2])
// .then((response) => {
//     console.log(response);
// })
// .catch ((error) => {
//     console.error(error);
// });

// Promise.race([promise1, promise2])
// .then((response) => {
//     console.log(response);
// })
// .catch ((error) => {
//     console.error(error);
// });

// Promise.allSettled([promise1, promise2])
// .then((response) => {
//     console.log(response);
// })
// .catch ((error) => {
//     console.error(error);
// });


// Promise.any([promise1, promise2])
// .then((response) => {
//     console.log(response);
// })
// .catch ((error) => {
//     console.error(error);
// });