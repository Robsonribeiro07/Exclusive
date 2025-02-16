"use client"
import { usePersonalInformationForm } from "@/hooks/signup/Personal-information-hook-form"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ButtonSubmitOrOnClick } from "../../button-submit-forms/button-submit-or-onclick"
import { useGetTokenDecode } from "@/hooks/signup/get-token-decode"
import { Input } from "../../input/input"
export function PersonalInformation() {
    const {
         register,
          handleSubmit, 
          errors, 
          isSubmitSuccessful,           
          isSubmitting} = usePersonalInformationForm()
    const { push } = useRouter()
    const [userStepComplete, setUserStepComplete] = useState(false)

    const {tokenDecode} = useGetTokenDecode()

    
    useEffect(() => {

        if(!tokenDecode) return
        if(tokenDecode?.progress !== "step1_Profile") {
            setUserStepComplete(true)
        }

    }, [tokenDecode])
    
    const handleNextPageWithUserCompleteStep = () => {
        if (userStepComplete) {
            push("/auth/sign-in/step2_andress")
        }
    }


    const STEP1_INPUTS = [
        { name: "firstName", placeholder: "Nome", type: "text", register: register("nome"), },
        { name: "lastName", placeholder: "Sobrenome", type: "text", register: register("sobrenome"), },
        { name: "senha", placeholder: "Senha", type: "password", register: register("senha"), },
        { name: "cpf", placeholder: "CPF/CNPJ", type: "number", register: register("cpf"), },
        { name: "phone", placeholder: "Telefone", type: "number", register: register("tel"),  },
    ] as const

    return (
        <div className="w-[23rem] h-[33.125rem] text-black">
            {errors.tel && <p className="text-red-500">{errors.tel.message}</p>}
            {errors.cpf && <p className="text-red-500">{errors.cpf.message}</p>}
            <h1 className="text-2xl font-medium text-black">Informações Pessoais</h1>
            <p className="text-[1rem]">Por favor, insira suas informações pessoais</p>

            <form className="flex gap-8 flex-col mt-8" onSubmit={handleSubmit}>
                {STEP1_INPUTS.map((input) => (
                    <Input       key={input.name} {...input} />
                ))}

                <ButtonSubmitOrOnClick isCompleteStep={userStepComplete} isPending={isSubmitting}  Sucess={isSubmitSuccessful} onClick={handleNextPageWithUserCompleteStep} disabled={isSubmitting} >
                Continue
               </ButtonSubmitOrOnClick>
            </form> 
        </div>
    )
}
