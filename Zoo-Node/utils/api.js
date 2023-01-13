import axios from 'axios'
import { Api_animals_url } from "./constans.js"

export const getAnimals = async () => {
    const { data } = await axios.get(Api_animals_url)
    return data
}