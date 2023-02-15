import User from '../model/user.js'

export const getUsers = async () =>{
    const users = await User.find({})
    return users
}