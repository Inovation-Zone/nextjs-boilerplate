FROM node:12-alpine

WORKDIR /opt/app

ENV NODE_ENV production

COPY package*.json ./

RUN npm install --dev && npm ci

COPY . /opt/app

RUN npm run build

CMD [ "npm", "start" ]