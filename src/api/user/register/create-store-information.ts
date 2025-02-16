"use server";
import api from "@/lib/axios";
import { cookies } from "next/headers";

interface CreateStoreInformation {
    NameStore: string
    DescriptionStore: string
    Categorias: string

}

export async function CreateStoreInformation({
    NameStore,
    DescriptionStore,
    Categorias,
}: CreateStoreInformation) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");


    if (!token?.value) {
        throw new Error("Token não encontrado");
    }

    try {
        const response = await api.post(
            "/auth/store-information",
            { NameStore, DescriptionStore, Categorias }, // ✅ O body da requisição deve ser passado diretamente aqui
            {
                headers: {
                    Authorization: `Bearer ${token.value}`, // ✅ Headers devem estar no segundo argumento do axios.post
                },
            }
        );


        if(response.status === 200 && response.data.token) {
            console.log(response.data.token)
            const token = response.data.token
            cookieStore.set("token", token, {
                path: '/'
            })
        }

       

        return response.data;
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw new Error("Erro ao enviar informações do perfil");
    }
}
