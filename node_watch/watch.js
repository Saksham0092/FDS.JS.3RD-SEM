const fs = require('fs')

fs.watch("intro.txt", (eventtype, filename)=>{
    console.log("event:" , eventtype)
    console.log("filename: ", filename)
})    

settimeout(()=>{
    watcher.close()
        console.log('watcher closed')
}, 5000)