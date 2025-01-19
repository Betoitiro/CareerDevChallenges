# Sistema de Login e Registro - React com Redux

Este projeto é uma aplicação simples de autenticação de usuários, com funcionalidades de login e registro. A aplicação foi desenvolvida utilizando **React**, **Redux Toolkit**, **CSS** para estilização.

---

## Funcionalidades

- **Registro de Usuário**:
  - Validação de campos obrigatórios.
  - Validação de e-mail no formato correto.
  - Verificação de senha mínima de 8 caracteres.
  - Confirmação de senha.

- **Login de Usuário**:
  - Validação de e-mail e senha obrigatórios.
  - Exibição de mensagens de erro em caso de falha.
  - Gerenciamento de estado do login utilizando Redux.

- **Mensagens de Erro**:
  - Mensagens claras para orientar o usuário em caso de problemas no formulário ou autenticação.

---

## Pré-requisitos

- **Node.js** (v16 ou superior).
- Gerenciador de pacotes **npm** ou **yarn**.
- **Backend API** configurado para autenticação, como ficou opcional, fiz uma api basica, so para salvar os dados do usuario e fazer as funções e login e logout, que tambem não interfere nos requisitos abordados da tela de login e register. 

---

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **Redux Toolkit**: Para gerenciamento global de estado.
- **React Router**: Navegação entre as páginas de login e registro.
- **CSS**: Estilização básica da aplicação.
- **Express**: Utilizado para realizar o backend da aplicação.
- **Mongoose**: Banco de dados não relacional.



--

## Para inicializar o projeto:

 **Verificar dependências**: Certifique-se de que todas as dependências estão devidamente instaladas. A lista completa de dependências está disponível no final deste README.

**Node.js**: Verifique se o **Node.js** está instalado na máquina onde o projeto será executado. Caso deseje rodar a API junto com o frontend, instale também as dependências do backend (listadas no final do README).

**Ajustes finais**:  
   - Com todas as dependências instaladas, abra o terminal (ou Git Bash) e navegue até a pasta do projeto **`challengeAvati`**, onde o frontend está localizado. Execute o comando:  
     ```bash
     npm run dev
     ```  
     Isso iniciará o servidor de desenvolvimento do frontend.  
   - Para iniciar o backend, navegue até a pasta correspondente à API e execute o comando:  
     ```bash
     npm run server
     ```  

Pronto! O projeto estará configurado e pronto para ser executado e testado. 🎉

---

---
## Dependencias
**FrontEnd**
@reduxjs/toolkit: Biblioteca para gerenciamento de estado global utilizando Redux.
cra-template: Template para projetos criados com Create React App.
react: Biblioteca principal para construção de interfaces de usuário.
react-dom: Pacote para manipulação do DOM em projetos React.
react-icons: Biblioteca de ícones para React.
react-redux: Integração do React com Redux para gerenciamento de estado.
react-router-dom: Biblioteca para roteamento e navegação em projetos React.
react-scripts: Scripts padrão para projetos criados com Create React App.
web-vitals: Biblioteca para coleta de métricas de performance da web.
Desenvolvimento (devDependencies)
@eslint/js: Suporte ao JavaScript para ESLint.
@types/react: Tipagens para React em TypeScript.
@types/react-dom: Tipagens para React DOM em TypeScript.
@vitejs/plugin-react: Plugin oficial para integração do React com o Vite.
eslint: Ferramenta para análise e padronização de código.
eslint-plugin-react: Regras específicas para código React no ESLint.
eslint-plugin-react-hooks: Regras para garantir boas práticas com hooks no React.
eslint-plugin-react-refresh: Regras para recarregamento dinâmico no React.
globals: Biblioteca que lista variáveis globais conhecidas.
vite: Ferramenta moderna para construção de projetos web.


**Backend**
Produção (dependencies)
bcryptjs: Biblioteca para hash de senhas.
cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
dotenv: Carregamento de variáveis de ambiente a partir de um arquivo .env.
express: Framework para construção de servidores web com Node.js.
express-validator: Biblioteca para validação de requisições em projetos Express.
jsonwebtoken: Implementação de tokens JWT para autenticação.
mongoose: ODM (Object Data Modeling) para integração com MongoDB.
multer: Middleware para upload de arquivos em projetos Node.js.
pg: Cliente PostgreSQL para Node.js.
Desenvolvimento (devDependencies)
nodemon: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.