# packages/service-a/Dockerfile
FROM node:18

WORKDIR /app

COPY packages/service-a/package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "packages/service-a/src/index.js"]