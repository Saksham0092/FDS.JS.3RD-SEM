const fs = require('fs')

fs.statSync("notes.txt", (err,stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("information about [notes.txt]",typeof(stats))
    console.log("size of the file [notes.txt]", stats.size, "bytes")
    console.log("creation time of the file [notes.txt]", stats)
})