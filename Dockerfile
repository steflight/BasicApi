FROM node:10.6.0-alpine

WORKDIR /home/node/app
RUN apk add --no-cache --virtual builds-deps build-base python # for bcrypt
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production
COPY src src/

EXPOSE 3000

CMD [ "yarn", "start" ]
