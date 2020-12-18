FROM node:10
 
WORKDIR /usr/src/app
 
COPY ./front/package*.json ./
 
RUN npm install
 
COPY ./front .