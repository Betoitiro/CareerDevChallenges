# Usa a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação para o container
COPY . .

# Expõe a porta que o app vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
