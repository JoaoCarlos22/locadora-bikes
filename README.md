# Locadora de Bicicletas

Sistema simples para cadastro de bicicletas, clientes e aluguel de bikes, feito em Node.js com Express e Handlebars.

## Funcionalidades

- Cadastro de bicicletas e clientes
- Upload de foto do cliente
- Listagem de bicicletas e clientes
- Aluguel de bicicletas para clientes
- Visualização de bicicletas disponíveis e alugadas

## Como rodar

1. Instale as dependências:

   ```sh
   npm install
   ```

2. Inicie o servidor:

    ```sh
   npm start
   ```

3. Acesse no navegador

   ```
   http://localhost:5000/bicicleta/cadastrar
   ```

## Estrutura

- app.js: Arquivo principal da aplicação

- routes/: Rotas da aplicação

- services/: Lógica de negócio (cadastro, listagem, aluguel)

- views/: Templates Handlebars

- public/imagens/: Fotos dos clientes