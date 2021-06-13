FROM node:16-alpine

WORKDIR /app

COPY dist ./dist
COPY node_modules ./node_modules
COPY views ./views
COPY public ./public

ENV PORT=8080

EXPOSE 8080

CMD [ "node", "./dist/bundle.js" ]