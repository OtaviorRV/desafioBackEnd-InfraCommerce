
# Pokémon API - NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjs" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjs" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjs" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
</p>

## Descrição

A **Pokémon API** é uma API desenvolvida utilizando o framework [NestJS](https://nestjs.com/) com o adaptador [Fastify](https://www.fastify.io/), permitindo operações como busca de Pokémons por cor, ID, nome e paginação. Esta API foi projetada com uma arquitetura escalável e de fácil manutenção.

## Tecnologias Utilizadas

- **NestJS** - Framework Node.js para construção de aplicações escaláveis
- **Fastify** - Adaptador para melhorar a performance de servidores HTTP
- **TypeScript** - Linguagem utilizada no desenvolvimento
- **Swagger** - Documentação automática dos endpoints da API

## Requisitos

- Node.js (versão 16+)
- NPM (ou Yarn)
- Docker (opcional, se utilizar os comandos relacionados a Docker)

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Instale as dependências:

```bash
npm install
```

## Executando a Aplicação

### Modo Desenvolvimento

```bash
npm run start:dev
```

### Modo Produção

```bash
npm run build
npm run start
```

### Utilizando Docker

Para executar a aplicação com Docker, utilize o seguinte comando:

```bash
npm run docker:up
```

Para parar o container:

```bash
npm run stop
```

## Endpoints Disponíveis

### Listar Pokémons por Cor
```
GET /pokemon/color-id/:colorId
```
**Descrição**: Retorna os Pokémons baseados no ID da cor (ex.: `1` para `red`).

### Buscar Pokémon por Nome ou ID
```
GET /pokemon/name-or-id/:idOrName
```
**Descrição**: Retorna os dados de um Pokémon específico com base no nome ou ID.

### Listar Pokémons Paginados
```
GET /pokemon/page/:page
```
**Descrição**: Retorna uma lista de Pokémons de forma paginada. Cada página contém até 10 Pokémons.

## Documentação da API com Swagger

A API está documentada usando Swagger. Para acessar a documentação interativa, rode a aplicação e acesse:

```
http://localhost:3000/api
```

## Contribuição

Se desejar contribuir com o projeto, siga as instruções abaixo:

1. Crie uma branch nova com sua feature ou correção de bug (`git checkout -b minha-feature`)
2. Faça o commit das suas mudanças (`git commit -am 'Minha nova feature'`)
3. Faça o push para a branch (`git push origin minha-feature`)
4. Crie um Pull Request

## Licença

Este projeto está licenciado sob a licença UNLICENSED.
