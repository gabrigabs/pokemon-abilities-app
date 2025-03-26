# 🐉 Pokemon Abilities App 🐉


## 📖 Sobre o Projeto

O Pokemon Abilities App é uma aplicação completa que consome a api publica PokeAPI e retorna informações detalhadas sobre as habilidades de um Pokémon. Desenvolvida com um backend em Java Spring Boot e um frontend em Next.js com TypeScript.

## 🚀 Tecnologias Utilizadas

### Backend
- ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
- ![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

### Frontend
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
- ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC) 
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 🏗️ Arquitetura

A aplicação está dividida em dois componentes principais:

1. **pokemon-abilities-api**: Serviço backend em Spring Boot que fornece uma API RESTful para acessar dados de habilidades dos Pokémons consumindo a PokeAPI.
2. **pokemon-abilities-front**: Interface de usuário em Next.js que consome a API e apresenta as habilidades do pokémon pesquisado.

## 🚀 Deploy

O front-end da aplicação está hospedado [aqui](https://pokemon-abilities-app-production.up.railway.app)
O back-end da aplicação está hospedado [aqui](https://backend-production-96a5.up.railway.app/api/pokemon/charmander)

## 🔧 Pré-requisitos

Para executar este projeto, você precisará:

- Docker e Docker Compose instalados (opcional, mas recomendado)
- Git (para clonar o repositório)
- Java 21 +
- Maven
- Node 18 +
- NPM

## 🚦 Como Executar

### Usando Docker (Recomendado)
1. Clone o repositório:
   ```bash
   git clone https://github.com/gabrigabs/pokemon-api.git
   cd pokemon-api
   ```

2. Inicie os serviços com Docker Compose:
    ```bash
    docker-compose up
    ```
3. Acesse a aplicação:

    * Frontend: http://localhost:3000
    
    * API Backend: http://localhost:8080
    
### Execução Manual
### Backend (Spring Boot)
1. Navegue até o diretório do backend:
    ```bash
    cd pokemon-abilities-api
    ```
2. Execute a aplicação Spring Boot (requer Java e Maven instalados):
    ```bash
    ./mvnw spring-boot:run
    ```
4. Após isso, o backend estará disponível por padrão em http://localhost:8080
 
### Fronend (Next.js)
1. Navegue até o diretório do frontend:
    ```bash
    cd pokemon-abilities-front
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure o arquivo .env usando o .env.example como base

4. Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4. Após isso, o frontend estará disponível por padrão em http://localhost:3000
