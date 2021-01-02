FROM node:10
 
WORKDIR /usr/src/app
 
COPY ./frontReact/package*.json ./
 
RUN npm install
 
COPY ./frontReact .