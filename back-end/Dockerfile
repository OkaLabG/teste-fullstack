FROM node:16

WORKDIR /usr/src/testapi

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "src/index.js" ]