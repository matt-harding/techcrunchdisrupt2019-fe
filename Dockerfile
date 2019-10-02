FROM node:10-jessie as build

ADD . /app
WORKDIR /app
RUN yarn install && yarn run build --mode dev

FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80