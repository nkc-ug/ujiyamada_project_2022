FROM php:7.4.8-apache

RUN apt-get update && apt-get install -y \
    libonig-dev nodejs npm \
    && docker-php-ext-install pdo_mysql mysqli

COPY ./config/php/php.ini /usr/local/etc/php/