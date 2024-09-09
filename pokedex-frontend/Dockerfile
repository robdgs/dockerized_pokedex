FROM mhart/alpine-node:latest
RUN apk update && apk add bash

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /pokedex-frontend

COPY ./package*.json /pokedex-frontend
COPY ./package-lock.json /pokedex-frontend

RUN npm install

# Run the app when the container launches
CMD ["npm", "start"]
