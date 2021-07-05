FROM node:alpine

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run build

ENV OPENWEATHER_KEY=$OPENWEATHER_KEY

ENV PORT=$PORT

CMD npm run start