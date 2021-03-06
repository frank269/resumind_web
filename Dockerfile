# Stage 1
FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY /dist/vuexy /app/dist/vuexy

# Stage 2
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-step /app/dist/vuexy .
COPY default.conf /etc/nginx/conf.d/
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
