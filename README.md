# Buscar de usuários no Github

Aplicação criada em Next.js para buscar de informações dos usuários do Github

# Funcionalidades
- Filtro por nome de usuário
- Exibição de informação por metadados (bio, localização, name, login, etc...)
- Design responsivo
- Cache local para armazenar buscas usando local storage nativo do browser
- Sistema de cache usando local storage do browser para armazenar histórico de buscas anteriores e melhorar a performance
- Permitir buscas apartir do cache do local storage
- Cenários de testes utilizando jest e react testing library

# Tecnologias
- Next.js
- React 18
- Axios para requisições HTTP
- jest + React testing library

# Como rodar e testes
- git clone url-do-repositório-do-projeto
- npm install (para instalar as dependências necessárias)
- npm run dev (para rodar o projeto) 
- npm run test (para rodar testes unitários)

# Proposta para escalabilidade
- Uso de Redux, Zustand ou Context API para melhor gerenciamento de estados globais
- Criar hooks para melhor extração da lógica, tornando assim os componentes menos acoplado
- Uso de Next.js API Router
- Filtragem e páginação para melhorar visualização e busca nos "Histórico de buscas"


# desafios
Desafio 1: Limitação de taxa da API do GitHub
- Solução: Adotar um cache diminuir as solicitações à API.


Desafio 2: Tipagem em TypeScript
- Solução: Interfaces claras e generics para serviços reutilizáveis

Desafio 3: Adaptabilidade
- Solução: CSS flexbox/grid com breakpoints mobile-first

# trade-offs
- Simplicidade vs Complexidade: Escolhi uma solução simples, porém expansível.

- Cache: Não implementei expiração para preservar 