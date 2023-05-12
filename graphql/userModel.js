import { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,   
    username: String,   
    email: String,  
    company: String,    
})

export default model('user', userSchema)