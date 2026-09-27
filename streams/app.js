import fs, { read } from 'fs'

//readable streams
const readStream = fs.createReadStream("input.txt",{encoding: "utf-8"})
readStream.on("data", (chunk)=>{
    console.log("data recieved");
    console.log("data:",chunk)
})
readStream.on("end" ,()=>{
    console.log('END')
})
readStream.on("error", (error)=>{
    console.log("Error:", error.message);
})

//create writable stream
const writeStream = fs.createWriteStream("output.txt")
writeStream.write("hello world\n")

writeStream.on("finish", ()=>{
    console.log("data written")
})    
writeStream.on("error", (error)=>{
    console.log("Error:", error.message);
})  

readStream.pipe(writeStream)