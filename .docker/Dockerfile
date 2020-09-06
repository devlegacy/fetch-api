FROM node:lts

LABEL maintainer="devlegacy.mx@gmail.com"

ENV CONTAINER_PATH /usr/src/app/

COPY package*.json $CONTAINER_PATH

WORKDIR $CONTAINER_PATH

RUN apt-get update -y --fix-missing && \
    apt-get upgrade -y && \
    apt-get dist-upgrade -y && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -Rf  /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm install && npm audit fix

COPY . $CONTAINER_PATH

EXPOSE 8080 8000

CMD ["npm", "start"]
