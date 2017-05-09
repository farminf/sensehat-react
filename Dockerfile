FROM node:6.10

RUN mkdir /sensehat-react-app
COPY . /sensehat-react-app
WORKDIR /sensehat-react-app

RUN npm config set proxy http://192.168.201.3:3128
RUN npm config set https-proxy http://192.168.201.3:3128

#RUN npm install


EXPOSE 8080

CMD [ "npm", "start" ]