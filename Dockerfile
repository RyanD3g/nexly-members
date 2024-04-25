FROM node:18-alpine

WORKDIR /usr/app

COPY package*.json yarn.lock ./

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "start:dev" ]