#!/bin/bash

echo 'extension=dom' >> /etc/php/8.1/cli/php.ini

symfony local:php:refresh

symfony server:start --allow-all-ip