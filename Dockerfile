#FROM artifactory.dev.adskengineer.net/dynamo/dynamo-build-base:202210031217
FROM ubuntu:latest
USER root
WORKDIR /home/app

COPY ./ /home/app

RUN apt-get update
RUN apt-get install -y vim
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -
RUN apt-get -y install nodejs
RUN npm install
RUN npm install chromedriver selenium-webdriver
RUN apt-get install -y wget
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install --force-yes --yes ./google-chrome-stable_current_amd64.deb