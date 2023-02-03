FROM node:latest

RUN apt-get update && \
    apt-get upgrade -y && \
    npm install -g create-react-app && \
    mkdir /usr/src/ujiyamada_project_2022

COPY ./ujiyamada_project_2022 /usr/src/ujiyamada_project_2022
COPY ./config/php/php.ini /usr/local/etc/php/

WORKDIR /usr/src/ujiyamada_project_2022
RUN npm update