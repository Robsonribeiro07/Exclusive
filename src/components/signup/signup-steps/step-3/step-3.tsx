import { useStoreInformationForm } from '@/hooks/signup/store-information-hook-form'
import { Input } from '../../input/input'

export function StoreInformation() {
  const { register, handleSubmit, isSubmitting } = useStoreInformationForm()

  const STEP3_INPUTS = [
    {
      name: 'NameStore',
      placeholder: 'Nome da Loja',
      type: 'text',
      register: register('NameStore'),
    },
    {
      name: 'DescriptionStore',
      placeholder: 'Descrição da Loja',
      type: 'textarea',
      register: register('DescriptionStore'),
    },
    {
      name: 'Categorias',
      placeholder: 'Categorias Principais',
      type: 'select-multiple',
      register: register('Categorias'),
    },
  ] as const
  return (
    <div className="w-[23rem] h-[33.125rem] text-black">
      <h1 className="text-2xl font-medium text-black">Store Information</h1>
      <p className="text-[1rem]">Please enter your location details</p>

      <form className="flex gap-8 flex-col mt-8" onSubmit={handleSubmit}>
        {STEP3_INPUTS.map((input) => (
          <Input key={input.name} {...input} />
        ))}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          Continue
        </button>
      </form>
    </div>
  )
}
