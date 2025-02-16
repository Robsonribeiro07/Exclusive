import { Schema } from "mongoose";

export const LocationSchmema = new Schema({
    
    pais: { type: String, required: false },
    estado: { type: String, required: false },
    cidade: { type: String, required: false },
    endereco: { type: String, required: false },
    cep: { type: Number, required: false },

})
