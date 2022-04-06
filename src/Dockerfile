FROM node:latest

RUN mkdir -p /reactFilesInDocker/src

WORKDIR /reactFilesInDocker/src

COPY  package.json    .

RUN npm install

COPY    .     .

EXPOSE 3000
CMD ["npm" , "start"]