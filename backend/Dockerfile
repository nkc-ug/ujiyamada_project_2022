FROM php:8.1.10-apache

RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y \
    libonig-dev \
    zip unzip && \
    docker-php-ext-install pdo_mysql mysqli && \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    rm composer-setup.php && \
    mv composer.phar /usr/local/bin/composer && \
    cd /var/www && \
    composer create-project "laravel/laravel=9.45.*" laratest
    