console.log("====== synchronous start ======");
for(let i=1; i<=10; i++){
    console.log(`${i}`)
}
console.log("====== synchronous end ======");

console.log("====== Asynchronous start ======");
settimeout(() => {
    console.log("hello world");
}, 1000);
console.log("====== asynchronous end ======");