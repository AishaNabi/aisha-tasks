import express from 'express'
import userModel from './schema.js'

const r = express.Router()

r.post('/users', async (req, res) => {
    const user = req.body
    const newUser = await userModel.create(user)
    res.status(201).json(user);
})

r.get('/users', async (req, res) => {
    const user = await userModel.find()
    res.send(user)
})

r.get('/users/:id', async (req, res) =>{
    const {id }= req.params
    const user = await userModel.findOne({_id: id})

    res.send(user)
})

r.put('/users/:id', async (req, res)=>{
    const { id } = req.params;
    const updateUser = await userModel.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true });
    res.send(updateUser)
})

r.delete('/users/:id', async (req, res)=>{
    const { id } = req.params;
    await userModel.findOneAndDelete({ _id: id})
    res.send('deleted')
})

export default r