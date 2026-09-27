 import fs from "fs";

// setTimeout(() => {
//     console.log("setTimeout");
// }, 1000);

// fs.readFile("intro.txt", "utf8", (err, data) => {
//     console.log("file read completed");
// });

// setInterval(() => {
//     console.log("set Interval after 5 ms");
// }, 5000);

// setImmediate(() => {
//     console.log("set Immediate");
// });


 fs.readFile("intro.txt", "utf8", (err, data) => {
    console.log("file read completed");
    setTimeout(() => {
        console.log("setTimeout");
        }, 0);
    setImmediate(() => {
        console.log("set Immediate");
    });  
})