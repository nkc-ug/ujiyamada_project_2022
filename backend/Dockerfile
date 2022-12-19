FROM php:7.4.8-apache

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y libonig-dev && \
    docker-php-ext-install pdo_mysql mysqli && \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    rm composer-setup.php && \
    mv composer.phar /usr/local/bin/composer