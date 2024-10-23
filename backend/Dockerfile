FROM debian:bullseye

RUN apt update && apt install -y curl wget lsb-release apt-transport-https ca-certificates

# PHP COMPOSER

RUN wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
RUN echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/php.list && apt update
RUN apt install -y php libapache2-mod-php php8.1-mysql php8.1-common php8.1-xml php8.1-xmlrpc
RUN apt install -y php8.1-curl php8.1-gd php8.1-imagick php8.1-cli php8.1-dev php8.1-imap php8.1-mbstring
RUN apt install -y php8.1-opcache php8.1-soap php8.1-zip php8.1-intl php8.3-dom php8.3-xml
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer

# SYMFONY

RUN curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | bash
RUN apt install symfony-cli -y 

WORKDIR /backend
CMD ["/bin/bash", "/backend/start.sh"]