FROM node:16.15-alpine
ENV APP_ROOT /usr/src/app

WORKDIR $APP_ROOT

COPY ./package.json $APP_ROOT
COPY ./yarn.lock $APP_ROOT

RUN yarn install

COPY . $APP_ROOT
