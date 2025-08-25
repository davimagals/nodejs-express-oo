# nodejs-express-oo

Estudando Programação Orientada a Objetos com NodeJS + Express

# passos

1. Iniciar um projeto NodeJS
   npm init -y

2. Instalar o Express
   npm install --save-dev typescript @types/node @types/express express ts-node nodemon

3. Instalar a interface para o Banco de Dados
   npm install mysql2

4. Ajustar o package.json
   "scripts": {
   "start": "node dist/index.js",
   "build": "tsc",
   "dev": "nodemon --watch src --ext ts --exec ts-node src/index.ts"
   }

   "type": "module",

5. Criar o tsconfig e editar
   npx tsc --init

   "verbatimModuleSyntax": false,
   "esModuleInterop": true,
   "moduleResolution": "node",
   "types": ["node"],
   Comentar // "jsx": "react-jsx",

6. Criar pasta src e configurar isso no package em "main"

7. Criar pastas models, controllers, routes, database

8. Criar o index.js

9. Criar a primeira rota
