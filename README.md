## Projeto Exclusive


## Instalação

### Configuração do Google OAuth 2.0

Para configurar o OAuth 2.0 com o Google, siga os passos abaixo:

### 1. Obtenha o **Client ID** e o **Client Secret**
- Acesse o [Google Cloud Console](https://console.cloud.google.com/).
- Crie um novo projeto ou use um existente.
- Ative a API do Google Identity ou Google+ API.
- Crie as credenciais OAuth 2.0 do tipo **Web application**.
- Defina os URI de redirecionamento e outras configurações necessárias.
- Copie o **Client ID** e o **Client Secret**.

### 2. Adicione ao seu código
- Coloque o **Client ID** e o **Client Secret** nas variáveis de ambiente do seu projeto:
  - `GOOGLE_CLIENT_ID=<seu-client-id>`
  - `GOOGLE_CLIENT_SECRET=<seu-client-secret>`

### 3. Configuração no código
- Exemplo de como usar no seu código:
