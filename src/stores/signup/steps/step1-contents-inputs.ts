import { create } from 'zustand'

interface InputsContents {
  nome: string
  senha: string
  sobrenome: string
  cpf: string
  tel: string
}
interface Step1ContentsInputsProps {
  data: InputsContents
  handleContentInputs: (data: InputsContents) => void
}

export const useStep1ContentsInputs = create<Step1ContentsInputsProps>(
  (set) => ({
    data: {
      nome: '',
      senha: '',
      sobrenome: '',
      cpf: '',
      tel: '',
    },
    handleContentInputs: (data: InputsContents) => set({ data }),
  })
)
