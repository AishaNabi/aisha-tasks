import reserveModel from '../models/reservation.js'
import roomModel from '../models/room.js'

export const reserve = async (req, res) => {
    const { userId, roomNumber, checkInDate, checkOutDate, isActive } = req.body
    const roomReserve = await roomModel.findOne({ roomNumber })
    if (roomReserve) {
        res.send("Room already reserved")
    }
    const inTime = new Date(checkInDate)
    const outTime = new Date(checkOutDate)
    let totalAmount = 0
    if (outTime > inTime) {
        const date = (outTime - inTime) / (1000 * 3600 * 24)
        if (roomNumber < 100) {
            totalAmount = date * 50
        } else {
            totalAmount = date * 100
        }
        const newRes = await reserveModel.create({
            userId, roomNumber,
            checkInDate: inTime, checkOutDate: outTime,
            totalAmount, isActive
        })
        res.send(newRes)
    } else {
        res.send("Check date")
    }
}

export const cancelR = async (req, res) => {
    const { roomNumber } = req.params
    const reserve = await reserveModel.findById(roomNumber)
    if (reserve.isActive === false) {
        res.send('It is already deactivated')
    }
    const { _id, userId, isActive } = await reserveModel.findByIdAndUpdate(roomNumber, { $set: { isActive: false, totalAmount: 0 } }, { new: true })
    res.send({ _id, userId, isActive })
}

export const allRes = async (req, res) => {
    const allReserve = await reserveModel.find({ isActive: true })
    res.send(allReserve)
}

export const availableRes = async (req, res) => {
    const { roomNumber } = req.params
    const newR = await roomModel.findByIdAndUpdate(roomNumber, { $set: { availability: false } }, { new: true })
    res.send(newR)
}