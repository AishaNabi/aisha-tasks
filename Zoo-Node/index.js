import { createServer } from 'http'
import { readFileSync, readFile, writeFile } from "fs"
import { createHtmlFile } from "./utils/index.js"
import url from 'url'
import { getAnimals } from './utils/api.js'

// async function createHtmlFiles() {
    const animalsData = await getAnimals()
    animalsData.forEach((animalName) =>{
        writeFile(`pages/${animalName.animal}.html`, createHtmlFile(animalName), (err) =>{
            if(err){
                console.log("Error")
                // console.log('----------------')
                // console.log(err.data)
            }
        })
    })
// }
// createHtmlFiles()


function checkHtml(name) {
    return name.endsWith(".html")
}

const server = createServer((req, res) => {
    const pageName = url.parse(req.url).pathname
    let fileName = `pages${pageName}`
    if (pageName === "/") fileName = `pages/home.html`
    if (!checkHtml(fileName)) fileName += ".html"
    const navbar = readFileSync(`pages/navbar.html`, "utf-8")
    res.write(`<div>${navbar}`)
    if (pageName !== '/favicon.ico') {
        readFile(fileName, (err, data) => {
            if (err) {
                console.log('pages/index.html')
            } else
                res.end(data + '</div>')
        })
    }
})
server.listen(5050)