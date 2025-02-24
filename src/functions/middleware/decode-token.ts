export async function decodeToken(token: string): Promise<{
  progress: string
  progressCompletion: string
  email: string
  name: string
  id: string
}> {
  try {
    const payload = token.split('.')[1] // Pega a parte do payload (sem cabeçalho e assinatura)
    const decoded = JSON.parse(atob(payload)) // Decodifica de Base64 para JSON
    return decoded
  } catch {
    return {
      progress: '',
      progressCompletion: '',
      email: '',
      name: '',
      id: '',
    }
  }
}
