# Imagem base
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala o servidor estático
RUN npm install -g serve

# Expõe a porta 3000
EXPOSE 3000

# Comando de execução — serve o conteúdo da pasta public
CMD ["serve", "-s", "public", "-l", "3000"]
