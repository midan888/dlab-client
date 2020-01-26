FROM nginx

WORKDIR /var/www/app

COPY build .
