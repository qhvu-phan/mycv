FROM node:21-alpine3.18 as build
WORKDIR /app
COPY . /app
RUN npm i && npm run build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html