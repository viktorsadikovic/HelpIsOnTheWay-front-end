# FROM node:10-alpine as build-step
# RUN mkdir -p /app
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# RUN npm run build --prod

# FROM nginx:1.17.1-alpine
# COPY --from=build-step /app/dist/dians-app-frontend /usr/share/nginx/html

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/dians-app-frontend /usr/share/nginx/html


