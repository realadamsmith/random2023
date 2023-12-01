FROM node:latest

RUN mkdir -p /usr/src/pokemonapp

WORKDIR /usr/src/pokemonapp

COPY package.json /usr/src/pokemonapp

RUN npm install

COPY . /usr/src/pokemonapp

EXPOSE 3000

CMD [ "npm", "start"]q