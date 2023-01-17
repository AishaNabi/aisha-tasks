import { createReadStream, createWriteStream } from "fs"

// 1
// const readStream = createReadStream("./a.txt", {
//     highWaterMark: 10,
//     encoding: "ascii"
// })
// const writeStream = createWriteStream("./b.txt", {
//     highWaterMark: 10,
//     encoding: "ascii"
// })

// readStream.on("data", (text) => {
//     writeStream.write(text.toUpperCase(), "ascii")
// })
// readStream.on("end", () => {
//     writeStream.end()
// })



// 2
// const copy_write = (name1, name2) => {
//     const readStream = createReadStream(name1, {
//         highWaterMark: 100,
//         encoding: "ascii"
//     })
//     const writeStream = createWriteStream(name2, {
//         highWaterMark: 100,
//         encoding: "ascii"
//     })

//     readStream.pipe(writeStream)
// }

// copy_write("./a.txt", "./b.txt")
