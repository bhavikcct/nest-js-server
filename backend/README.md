<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  A scalable and modular <a href="https://nodejs.org" target="_blank">Node.js</a> backend for a full-featured <strong>Task Management System</strong>, built with <a href="https://nestjs.com" target="_blank">NestJS</a>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://github.com/nestjs/nest" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="License" /></a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="Downloads" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/discord/520882832682228738?label=Discord&logo=discord&color=5865F2" alt="Discord"/></a>
</p>

---

## 📝 Description

This is the **backend API** for a Task Management System, built with the [NestJS](https://nestjs.com/) framework. It provides RESTful endpoints to manage tasks with secure JWT-based authentication.

> It works seamlessly with a modern [Next.js frontend](https://nextjs.org/) and uses PostgreSQL (or any TypeORM-supported DB) for persistence.

---

## ⚙️ Features

- ✅ CRUD APIs for task management
- ✅ JWT-based authentication
- ✅ Authorization via route guards
- ✅ TypeORM integration
- ✅ DTO validation with `class-validator`
- ✅ Scalable service/controller/repository structure
- ✅ Environment-based config using `.env`
- ✅ Ready for production deployment

---

## 📁 Project Structure

src/
├── auth/ # Auth logic (guards, strategies, login)
├── tasks/ # Task entity, service, controller, DTOs
├── entities/ # TypeORM entities (User, Task)
├── common/ # Shared pipes, filters, decorators
├── app.module.ts
├── main.ts
## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/your-username/task-backend-nestjs.git
cd task-backend-nestjs
npm install

2. Configure environment
Create a .env file:

DATABASE_URL=postgres://user:password@localhost:5432/taskdb
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600s


3. Run the app
# development
npm run start:dev

# production build
npm run build
npm run start:prod

🛡 Authentication & Middleware
This app uses @nestjs/passport with the passport-jwt strategy. Routes are protected via @UseGuards(AuthGuard('jwt')).

JWT is stored and passed via HTTP-only cookies in SSR apps (e.g., Next.js frontend).

🧱 Built With
NestJS

TypeORM

PostgreSQL

Passport

JWT

