import { models, model, Schema, InferSchemaType, Types } from 'mongoose'

const productSchema = new Schema({
  productId: { type: String, required: true }, // ID do produto real
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: [String], required: true },
  quantity: { type: Number, required: true, default: 1 },
})

const cartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' }, // Associa o carrinho a um usuário
    products: { type: [productSchema] }, // Lista de produtos
  },
  { timestamps: true } // Adiciona `createdAt` e `updatedAt`
)

export interface CartType extends Document {
  userId: string
  products: Types.DocumentArray<{
    productId: string
    title: string
    price: number
    image: string[]
    quantity: number
  }>
}

export const Cart = models.Carts || model('Carts', cartSchema)
