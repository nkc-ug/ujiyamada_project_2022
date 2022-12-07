FROM php:7.4.8-apache

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y libonig-dev nodejs npm curl && \
    docker-php-ext-install pdo_mysql mysqli && \
    npm install stable n -g && n stable
RUN apt purge nodejs npm -y && \
    npm update -g npm && \
    npm install -g create-react-app && \
    npx create-react-app my-app

COPY ./config/php/php.ini /usr/local/etc/php/