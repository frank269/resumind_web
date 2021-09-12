# Stage 1
FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY /dist/vuexy /app/dist/vuexy

# Stage 2
FROM nginx:1.20.1
COPY --from=build-step /app/dist/vuexy /usr/share/nginx/html
