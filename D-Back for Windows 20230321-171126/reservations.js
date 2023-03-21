import { model, Schema } from "mongoose";

const reservModel = new Schema({
    userId: { type: Schema.Types.ObjectId, require: true, },
    roomNumber: { type: Number, require: true, },
    checkInDate: { type: Date, require: true, },
    checkOutDate: { type: Date, require: true, },
    totalAmount: { type: Number, require: true, },
    isActive: { type: Boolean, required: true }
}, { versionKey: false })

export default model('reservation', reservModel)