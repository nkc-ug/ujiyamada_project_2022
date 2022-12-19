FROM node:12

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs npm curl && \
    npm install stable n -g && n stable
RUN apt purge nodejs npm -y && \
    npm update -g npm && \
    npm install -g create-react-app 

COPY ./config/php/php.ini /usr/local/etc/php/