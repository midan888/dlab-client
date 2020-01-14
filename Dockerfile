FROM nginx:stable

WORKDIR /usr/src/app

COPY build .
COPY nginx.conf /etc/nginx/conf.d/dlab-client.conf

EXPOSE 80
