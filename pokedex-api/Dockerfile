FROM webdevops/php-apache:8.2

RUN apt update
RUN useradd -u 501 roberta -g staff

USER roberta

ENV PROVISION_CONTEXT "development"
#COPY ./docker_conf/vhost.conf /opt/docker/etc/httpd/
#COPY ./docker_conf/cert/lexhero-api.crt /opt/docker/etc/httpd/ssl
#COPY ./docker_conf/cert/lexhero-api.key /opt/docker/etc/httpd/ssl
#COPY ./docker_conf/vhost.ssl.conf /opt/docker/etc/httpd
#COPY ./docker_conf/.htaccess /app/public
# Configure volume/workdir
WORKDIR /app/
