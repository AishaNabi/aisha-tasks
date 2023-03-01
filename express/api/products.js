import { Router } from "express"
import { productModel } from "../model.js"
const productRouter = Router()


productRouter.get('/', async (req, res) => {
    const products = await productModel.find()
    res.send(products)
})
productRouter.get('/:id', async (req, res) => {
    const _id = req.params.id
    const product = await productModel.findOne({ _id })
    res.send(product)
})
productRouter.post('/', async (req, res) => {
    const newProduct = req.body
    const { _id } = await productModel.create(newProduct)
    res.statusCode = 201
    res.send(_id)
})
productRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const changedProduct = req.body
    const { _id } = await productModel.findByIdAndUpdate(id, {
        $set: changedProduct
    }, { new: true })
    res.send(_id)
})
productRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    await productModel.findByIdAndDelete(id)
    res.send("Deleted")
})



export default productRouter