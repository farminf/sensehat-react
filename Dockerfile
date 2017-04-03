FROM node:latest


RUN npm install

EXPOSE 8080

CMD [ "node", "app/index.js" ]