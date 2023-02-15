import { connect } from 'mongoose'
import { createServer } from 'http'
import Anml from './model/anml.js'

const connectionString = `mongodb+srv://Task:17may2004@cluster0.sttsvse.mongodb.net/?retryWrites=true&w=majority`
connect(connectionString)

createServer((req, res) => {
    const baseUrl = req.url.split('/')
    res.setHeader('content-type', 'application/json')
    if (req.url.startsWith('/Anml')) {
        const _id = baseUrl[2]
        switch (req.method) {
            case 'GET':
                (async () => {
                    let obj = _id ? { _id } : null;
                    const data = await Anml.find(obj)
                    res.end(JSON.stringify(_id ? data[0] : data))
                })()
                break;
            case 'POST':
                req.on("data", (chunk) => {
                    (async () => {
                        const { _id } = await Anml.create(JSON.parse(chunk.toString()))
                        res.end(JSON.stringify({ _id }))
                    })()
                })
                break;
            case 'PUT':
                req.on('data', (chunk) => {
                    (async () => {
                        const $set = JSON.parse(chunk.toString())
                        const data = await Anml.findOneAndUpdate({ _id }, { $set }, { new: true })
                        res.end(JSON.stringify(data))
                    })()
                })
                break;
            case 'DELETE':
                (async () => {
                    let obj = _id ? { _id } : null;
                    Anml.deleteMany(obj)
                    res.end('Deleted')
                })()
                break;
        }
    }else {
        res.end('route is not defined')
    }
}).listen(5050)


// Anml.find({}).then((data)=>{
//     console.log(data)
// })
