import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import { rootValue, schema } from './type.js'
import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://Task:LNJto9vD68jIXZLr@cluster0.sttsvse.mongodb.net/?retryWrites=true&w=majority")
const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

app.listen(5050, ()=>{
    console.log('Server is up...')
})