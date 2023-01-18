FROM php:8.1.10-apache

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y \
        libonig-dev \
        zip \
        unzip && \
    docker-php-ext-install pdo_mysql mysqli && \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    rm composer-setup.php && \
    mv composer.phar /usr/local/bin/composer && \
    composer global require laravel/installer && \
    export PATH=$PATH:/var/www/html/.config/composer/vendor/bin && \
    mkdir /var/www/html/laravel
    # todo-api は持ってくるLaravelのプロジェクト
COPY todo-api/ /var/www/html/laravel/
RUN rm  /var/www/html/laravel/composer.lock && \
    rm -r /var/www/html/laravel/vendor && \
    cd /var/www/html/laravel && \
    composer update && \
    composer install 
    