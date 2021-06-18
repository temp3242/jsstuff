FROM node:16-alpine

WORKDIR /app

COPY dist ./dist
COPY node_modules ./node_modules
COPY views ./views
COPY public ./public

ENV PORT=$PORT

CMD [ "node", "./dist/main.js" ]