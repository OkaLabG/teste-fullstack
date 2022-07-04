
# Teste Fullstack ImobPower

## Back-end
A API foi desenvolvida utilizando Express. Ela será criada com o docker-compose junto com o banco de dados.

O banco de dados foi criado através do Docker. Dentro do diretório `src/database` no código fonte da API existe um arquivo .sql que possui os scripts utilizados na criação do banco.

Para executar o docker-compose, abra o terminal e vá até o diretório raiz do código fonte da API. Execute:

`docker compose up`

Se tudo ocorrer corretamente, dois containers deverão ser criados (postgres e API).

Obs: a API utiliza a porta 8080 e o postgres a porta 5432.

## Front-End

O Front-End foi desenvolvido com TypeScript, SASS e React Router. Todos os componentes foram criados do zero.

Para executar este projeto em modo de desenvolvimento:
`npm start`

Para executar este projeto em modo de produção:
`npm run build` 
`npm install -g serve` (caso ainda não tenha o package serve)
`serve -s build`
