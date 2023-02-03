FROM php:8.1.10

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y \
        zip \
        unzip && \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" &&\
    php -r "if ( hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" &&\
    php composer-setup.php &&\
    php -r "unlink('composer-setup.php');" &&\
    mv composer.phar /usr/local/bin/composer &&\
    mkdir /var/www/html/todo-api

WORKDIR /var/www/html/todo-api

COPY ./todo-api .

RUN composer update && \
    composer install && \
    cp .env.example .env