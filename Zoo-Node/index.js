import { createServer } from 'http'
import { readFileSync, readFile } from "fs"
import { parse } from 'url'

function checkHtml(name) {
    return name.endsWith(".html")
}

const server = createServer((req, res) => {
    const pageName = parse(req.url).pathname
    let fileName = `pages${pageName}`
    if (pageName === "/") fileName = `pages/home.html`
    if (!checkHtml(fileName)) fileName += ".html"
    const navbar = readFileSync(`pages/navbar.html`, "utf-8")
    res.write(`<div>${navbar}`)
    if (pageName !== '/favicon.ico') {
        readFile(fileName, "utf-8", (err, htmlFile) => {
            if (err) {
                const page = readFileSync(`pages/not_found.html`, "utf-8")
                res.end(page + '</div>')
            }
            res.end(htmlFile)
        })
    }
})
server.listen(5050)