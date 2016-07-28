FROM node:latest

MAINTAINER Steven Bakhtiari

RUN mkdir -p /opt/bot
WORKDIR /opt/bot

COPY package.json .
RUN npm install
COPY src ./src

EXPOSE ${PORT:-8080}

CMD [ "npm", "start" ]

