const fs = require('fs')

// 1
// const readStream = fs.createReadStream("./a.txt")
// const writeStream = fs.createWriteStream("./b.txt")

// readStream.on("data", (text) => {
//     writeStream.write(text.toString().toUpperCase(), "ascii")
// })



// 2 
// const copy_write = (name1, name2) => {
//     const readStream = fs.createReadStream(`./${name1}.txt`)
//     const writeStream = fs.createWriteStream(`./${name2}.txt`)

//     readStream.pipe(writeStream)
// }

// copy_write("a", "b")
