FROM node:alpine

WORKDIR /app

COPY package*.json .

Run npm install -g npm@10.2.0

RUN npm install --force

COPY . .

RUN npm run build 

EXPOSE 3000

CMD ["npm", "start"]