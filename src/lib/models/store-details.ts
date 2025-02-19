import { Schema } from 'mongoose'

export const StoreDetailsSchema = new Schema({
  NameStore: { type: String, required: false, default: 'Nome da loja' },
  DescriptionStore: {
    type: String,
    required: false,
    default: 'Descrição da loja',
  },
  Categorias: { type: String, required: false, default: 'Categorias da loja' },
})
