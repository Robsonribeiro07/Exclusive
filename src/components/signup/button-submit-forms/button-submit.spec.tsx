import {render, screen} from '@testing-library/react'
import { ButtonSubmitOrOnClick } from './button-submit-or-onclick'




describe("Renderiza Botao submit" , () => {
    it("Deve renderiza o loading", () => {
        

        const {container} = render(<ButtonSubmitOrOnClick children="ola" isPending/>)


        const loading = container.querySelector(".loading-wave")
        expect(loading).toBeInTheDocument()

    })

    it("Deve renderiza o button Continuar", () => {
        render(<ButtonSubmitOrOnClick children="Continuar"/>)

        const button = screen.getByRole("button", {name: "Continuar"})
        expect(button).toBeInTheDocument()
    })

    it("deve renderiza o buton sucess" , () => {
        const {container} =  render(<ButtonSubmitOrOnClick children="Continuar" Sucess/>)

        const check = container.querySelector("svg")

        expect(check).toHaveClass("lucide-check")
    })

        
})