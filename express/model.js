import { model } from "mongoose"
import { productSchema } from "./schema.js"

export const productModel = model('product', productSchema)