FROM php:8.1.10-apache

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y \
        zip \
        unzip \
        iputils-ping net-tools && \
        docker-php-ext-install pdo_mysql
WORKDIR /var/www/

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" &&\
    php -r \
        "if ( hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') \
        { \
            echo 'Installer verified'; \
        } \
        else \
        { \
            echo 'Installer corrupt'; \
            unlink('composer-setup.php'); \
        } \
        echo PHP_EOL;" &&\
    php composer-setup.php &&\
    php -r "unlink('composer-setup.php');" &&\
    mv composer.phar /usr/local/bin/composer 

ENV COMPOSER_ALLOW_SUPERUSER=1

COPY ./todo-api/ ./todo-api/
COPY ./default.conf /etc/apache2/sites-enabled/000-default.conf

WORKDIR /var/www/todo-api/

RUN composer update && \
    composer install && \
    composer require azuyalabs/yasumi && \
    cp .env.example .env

#WORKDIR /var/www/html/SampleProject

#RUN php artisan serve