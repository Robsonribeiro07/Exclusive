'use server'
import axios from 'axios'

export async function getCep(cep: string) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Erro ao buscar o CEP:', error)
    throw error // Opcional: relançar o erro para que possa ser tratado em outro lugar
  }
}
