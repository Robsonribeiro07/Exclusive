export async function decodeToken(token: string) {
    try {
      const payload = token.split(".")[1]; // Pega a parte do payload (sem cabeçalho e assinatura)
      const decoded = JSON.parse(atob(payload)); // Decodifica de Base64 para JSON
      return decoded;
    } catch (error) {
      console.error("Erro ao decodificar token:", error);
      return null;
    }
  }
  