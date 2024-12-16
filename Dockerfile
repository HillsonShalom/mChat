FROM node:18-alpine AS client-builder

WORKDIR /app

COPY client .

RUN npm install
RUN npm run build

FROM node:18-alpine AS server-builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

#####################################################
FROM node:18-alpine

WORKDIR /app

COPY --from=client-builder /app/dist ./client/dist
COPY --from=server-builder /app/dist ./dist
COPY package*.json .
COPY .env .

RUN npm install --production

EXPOSE 7160

CMD ["npm", "start"]