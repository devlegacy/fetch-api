FROM node:lts-alpine

LABEL maintainer="devlegacy.mx@gmail.com"

ENV CONTAINER_PATH /usr/src/app/

RUN apk update && apk add --no-cache curl vim wget bash

WORKDIR $CONTAINER_PATH

COPY package*.json $CONTAINER_PATH

RUN npm install && npm audit fix

COPY . $CONTAINER_PATH

EXPOSE 8080 8000

CMD ["npm", "start"]
