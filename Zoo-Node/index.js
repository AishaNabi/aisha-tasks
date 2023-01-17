import { createServer } from 'http'
import { readFileSync, readFile, writeFile } from "fs"
import { createHtmlFile } from "./utils/index.js"
import url from 'url'
import { getAnimals } from './utils/api.js'

const animalsData = await getAnimals()
animalsData.forEach((animalName) => {
    writeFile(`pages/${animalName.animal}.html`, createHtmlFile(animalName), (err) => {
        if (err) {
            console.log(err)
        }
    })
})

function checkHtml(name) {
    return name.endsWith(".html")
}

const server = createServer((req, res) => {
    const pageName = url.parse(req.url).pathname
    let fileName = `pages${pageName}`
    if (pageName === "/") fileName = `pages/home.html`
    if (!checkHtml(fileName)) fileName += ".html"
    if (pageName !== '/favicon.ico') {
        readFile(fileName, (err, data) => {
            if (err) {
                console.log('pages/index.html')
            } else
                res.end(data + '</div>')
        })
    }
    if (pageName !== '/favicon.ico') {
        readFile(`pages/background.png`, (err, buf) => {
            if (err) console.log(err)
            res.end(buf)
        })
    }
})
server.listen(5050)