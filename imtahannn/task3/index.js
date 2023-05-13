import fs from 'fs'
function createFile() {
    let mass = ['a', 'b', 'c', 'd', 'e']
    let name = ''
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * mass.length);
        name += mass[randomIndex];
    }
    fs.writeFile(`${name}.txt`, 'hii', (err) => {
        if (err) {
            throw new Error
        }
        console.log('created')
    })
}
createFile()

