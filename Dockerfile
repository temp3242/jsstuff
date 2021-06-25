FROM node:16-alpine

WORKDIR /app

COPY dist ./dist
COPY node_modules ./node_modules
COPY views ./views
COPY public ./public

ENV PORT=$PORT
ENV OPENWEATHER_KEY=$OPENWEATHER_KEY

CMD [ "node", "./dist/main.js" ]