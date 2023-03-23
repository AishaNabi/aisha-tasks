import roomModel from '../models/room.js'

export const createR = async (req, res) => {
    const { roomNumber, roomType, occupancy, price, availability, isActive } = req.body
    const obj = await roomModel.create({
        roomNumber, roomType, occupancy, price, availability, isActive
    })
    res.send(obj)
}

export const updateR = async (req, res) => {
    const { id } = req.params
    const $set = req.body
    const newR = await roomModel.findByIdAndUpdate(id, { $set }, { new: true })
    res.send(newR)
}

export const deleteR = async (req, res) => {
    const { id } = req.params
    const room = await roomModel.findById(id)
    if(room.isActive === false){
        res.send('It is already deactivated')
    }else{
        const newR = await roomModel.findByIdAndUpdate(id, { $set: {isActive:false} }, { new: true })
        res.send(newR)
    }
}

export const allR = async (req, res) => {
    const rooms = await roomModel.find()
    res.send(rooms)
}

export const rById = async (req, res) => {
    const { id } = req.params
    const room = await roomModel.findById(id)
    res.send(room)
}

export const availableR = async (req, res) => {
    const rooms = await roomModel.find({ isActive: true })
    res.send(rooms)
}