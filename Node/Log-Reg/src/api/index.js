import axios from 'axios'
import { entryPoint } from '../index.js'

export const Base_url = `http://localhost:3050/`
const userUrl = Base_url.concat('users')

export const registerUsers = async (body) => {
    await axios.post(userUrl, body)
        .then(() => {
            console.log('User registered')
            entryPoint()
        })
}
export const getUser = async (username) => {
    const { data } = await axios.get(`${userUrl}?username=${username}`)
    return data[0]
}
