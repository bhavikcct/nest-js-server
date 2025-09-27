<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  A scalable and modular <a href="https://nodejs.org" target="_blank">Node.js</a> backend for a full-featured <strong>Product Management System</strong>, built with <a href="https://nestjs.com" target="_blank">NestJS</a>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://github.com/nestjs/nest" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="License" /></a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="Downloads" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/discord/520882832682228738?label=Discord&logo=discord&color=5865F2" alt="Discord"/></a>
</p>

---

## 📚 Table of Contents
- [📝 Description](#-description)
- [⚙️ Features](#️-features)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🐳 Run with Docker](#-run-with-docker)
- [🛡 Authentication & Middleware](#-authentication--middleware)
- [🧱 Built With](#-built-with)
- [📖 API Documentation](#-api-documentation)
- [🧪 Testing](#-testing)

---

## 📝 Description
This is the **backend API** for a Product Management System, built with the [NestJS](https://nestjs.com/) framework.  
It provides RESTful endpoints to manage products with secure JWT-based authentication.

> Works seamlessly with a modern [Next.js frontend](https://nextjs.org/) and uses PostgreSQL for persistence.

---

## ⚙️ Features
- ✅ CRUD APIs for product management  
- ✅ JWT-based authentication  
- ✅ Role-based authorization via guards  
- ✅ TypeORM integration with PostgreSQL  
- ✅ DTO validation with `class-validator`  
- ✅ Environment-based configuration using `.env`  
- ✅ Scalable service/controller/repository structure  
- ✅ Production-ready with Docker  

---

## 📁 Project Structure
src/
├── auth/ # Auth logic (guards, strategies, login)
├── products/ # Product entity, service, controller, DTOs
├── entities/ # TypeORM entities (User, Product)
├── common/ # Shared pipes, filters, decorators
├── app.module.ts
└── main.ts


---

## 🚀 Getting Started
DATABASE_URL=postgres://postgres:postgres@db:5432/cp_database
NODE_ENV=development
PORT=3001
JWT_SECRET=secret
CLIENT_URL=http://localhost:5001

# development
npm run start:dev

# production build
npm run build
npm run start:prod


Run with Docker
1. Start with Docker Compose

If the database does not exist, it will be created with name cp_database.

docker compose up --build

This will start:

PostgreSQL on port 5432

NestJS API on port 3030
🛡 Authentication & Middleware

Uses @nestjs/passport with passport-jwt strategy.

Routes are protected via @UseGuards(AuthGuard('jwt')).

JWT is stored and passed via HTTP-only cookies (useful for SSR apps like Next.js).

🧱 Built With

NestJS

TypeORM

PostgreSQL

Passport

JWT

