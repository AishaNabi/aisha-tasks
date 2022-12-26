const fs = require('fs')
// 1.
const names = "aisha, lala, leila"
const name = names.split(',') 
name.forEach((elem)=>{
fs.writeFileSync(`user_name.txt`, elem, {
    flag: "a"
})
})

// 3.
const alphabet = "abcdefghijklmnopqrstuvwxyz"
let a = 0
let random_names = ""
while (a < 5) {
    const characters = alphabet[Math.floor(Math.random() * alphabet.length)]
    random_names += characters
    a++
}
fs.writeFileSync(`${random_names}`, '')
