# Use Node 20 Alpine
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3030

CMD ["npm", "run", "start:dev"]
