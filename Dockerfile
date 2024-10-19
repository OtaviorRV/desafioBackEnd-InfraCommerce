# Fase de construção
FROM node:20-alpine as builder

# Definindo o diretório de trabalho no container
WORKDIR /app

# Copiando os arquivos de dependências para instalar as dependências primeiro
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante dos arquivos do projeto
COPY . .

# Rodando o build para transpilação do TypeScript para JavaScript
RUN npm run build

# Fase de produção
FROM node:20-alpine

# Definindo o diretório de trabalho no container
WORKDIR /app

# Copiando a pasta dist da fase de build
COPY --from=builder /app/dist /app/dist

# Copiando os arquivos package.json e package-lock.json
COPY --from=builder /app/package*.json ./

# Instalando apenas as dependências de produção
RUN npm install --only=production

# Expondo a porta 3000 no container
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "dist/main"]