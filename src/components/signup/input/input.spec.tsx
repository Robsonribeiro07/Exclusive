import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Input } from './input'
import exp from 'constants'


describe("Input component", () => {

    afterEach(() => {
        cleanup()
    })

    it("Alterna o tipo do input entre password e text", () => {
        render(<Input placeholder="Digite seu nome" name="name" type="password" />)

        const input = screen.getByPlaceholderText("Digite seu nome")

        const buttonTogle = screen.getByRole("button")

        expect(input).toHaveAttribute("type", "password")
        fireEvent.click(buttonTogle)

        expect(input).toHaveAttribute("type", "text")

        fireEvent.click(buttonTogle)

        expect(input).toHaveAttribute("type", "password")


    })
    
    it("Renderiza corretamente o placeholder", () => {
            
        render(<Input placeholder="Digite seu nome" name="name" />)

        const input = screen.getByPlaceholderText("Digite seu nome")

        expect(input).toBeInTheDocument()
    })

    it("Renderiza corretamente o tipe password", () => {
        render(<Input placeholder="Digite seu nome" name="name" type="password" />)

        const input = screen.getByPlaceholderText("Digite seu nome")

        expect(input).toHaveAttribute("type", "password")

        
    })
    it("Renderiza corretamente o input com type text", () => {
        render(<Input placeholder="Digite seu nome" name="name" type="text" />)

        const inputText = screen.getByPlaceholderText("Digite seu nome")

        expect(inputText).toHaveAttribute("type", "text")
    })

})