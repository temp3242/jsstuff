FROM node:alpine

WORKDIR /app

COPY pages pages

COPY styles styles

COPY fonts fonts

COPY public public

COPY next.config.js .eslintrc ./

RUN npm i next eslint eslint-config-next

RUN npx next build

RUN apk --no-cache add curl

RUN curl -sf https://gobinaries.com/tj/node-prune | sh

RUN node-prune

ENV OPENWEATHER_KEY=$OPENWEATHER_KEY

ENV PORT=$PORT

CMD npx next start