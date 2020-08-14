FROM node:12.16.3

WORKDIR /app

RUN apt-get update && \
    apt-get install vim -y && \
    npm install && \
    npm install -g npm && \
    npm install -g vue-cli && \
    npm install -g create-nuxt-app

EXPOSE 8090
