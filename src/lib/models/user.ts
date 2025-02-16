    import { InferSchemaType, Schema, model, models } from 'mongoose';

    const UserSchema = new Schema({
        name: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: false },
        sobrenome: { type: String, required: false },
        cpf: { type: String, required: false },
        tel: { type: Number, required: false },
        progressCompletion: { type: String, required: true, default: 'false'},

        pais: { type: String, required: false },
        estado: { type: String, required: false },
        cidade: { type: String, required: false },
        endereco: { type: String, required: false },
        cep: { type: Number, required: false },

        NameStore: { type: String, required: false },
        DescriptionStore: { type: String, required: false },
        Categorias: { type: String, required: false },



    }, { timestamps: true });

    export type UserType = InferSchemaType<typeof UserSchema>

    const User = models.UserSchemapp || model('UserSchemapp', UserSchema);

    export default User;
