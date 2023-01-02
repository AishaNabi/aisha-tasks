const axios = require('axios')
const fs = require('fs')

// 1.
const { userInfo } = require('os')
fs.writeFileSync(`user_name.txt`, userInfo().username)


//2
const dataToString = ({ id, name, username }) => {
    return `data: ${id}, name: ${name}, username: ${username}\n`
}
for (let i = 1; i <= 10; i++) {
    axios.get('https://jsonplaceholder.typicode.com/users/' + i)
        .then(({ data }) => {
            fs.writeFileSync('data.txt', dataToString(data), {
                flag: 'a'
            })
        })
}

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
