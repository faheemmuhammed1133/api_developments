import  express   from "express";

import productModel from '../models/productModel.js'

const router = express.Router()

router.post("/", (req, res) => {
   const product = req.body

   productModel.create(product)
      .then(() => {
         res.send({ message: "successfully added product "+ product.name})
      })
      .catch((err) => {
         res.send({ message: "falied to add product" })
      })
})

export default router