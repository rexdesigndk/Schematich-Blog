FROM php:8.0-fpm-alpine

RUN apk upgrade \
	&& apk update \ 
	&& apk --no-cache add pcre-dev ${PHPIZE_DEPS} \
	&& pecl install -o -f redis \
	&& pecl install swoole \
	&& apk add bash \
	&& apk add openssl \
	&& apk add zip \
	&& apk add unzip \
	&& apk add curl \
	&& apk add wget \
	&& apk add git \
	&& apk add mercurial \
	&& apk add subversion \
	&& apk add libbz2 \
	&& apk add nodejs \
	&& apk add npm \
	&& apk add bzip2-dev \
	&& apk add --no-cache file \
	&& apk --update add imagemagick \
	&& apk --no-cache add msttcorefonts-installer fontconfig \
	&& update-ms-fonts \
	&& fc-cache -f \
	&& apk add --no-cache freetype libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev \
	&& docker-php-ext-install bz2 \
	&& docker-php-ext-configure gd \
	--with-jpeg=/usr/include/ \
	--with-freetype=/usr/include/ \
	&&  NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) \
	&& docker-php-ext-install -j${NPROC} gd \
	&& apk del --no-cache freetype-dev libpng-dev libjpeg-turbo-dev \
	&& apk del pcre-dev ${PHPIZE_DEPS} \
	&& rm -rf /var/lib/apt/lists/* \
	&& rm -rf /tmp/pear

COPY config/php.ini /usr/local/etc/php/conf.d/php.ini

RUN docker-php-ext-install pdo pdo_mysql pcntl mysqli tokenizer

RUN docker-php-ext-enable redis swoole

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer