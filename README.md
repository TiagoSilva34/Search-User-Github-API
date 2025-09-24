# Buscar de usuários no Github

Aplicação criada em Next.js para buscar de informações dos usuários do Github

# Funcionalidades
- Filtro por nome de usuário
- Exibição de informação por metadados (bio, localização, name, login, etc...)
- Design responsivo
- Cache local para armazenar buscas usando local storage nativo do browser

# Tecnologias
- Next.js
- React 18
- Axios para requisições HTTP

# Como rodar
- git clone url-do-repositório-do-projeto
- npm install (para instalar as dependências necessárias)
- npm run dev (para rodar o projeto)

# Proposta para escalabilidade
- Uso de Redux, Zustand ou Context API para melhor gerenciamento de estados globais
- Criar hooks para melhor extração da lógica, tornando assim os componentes menos acoplado
- Uso de Next.js API Router