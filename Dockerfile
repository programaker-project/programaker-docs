FROM node:alpine as base

# Build dependencies
RUN npm install -g vuepress

# Build final app
FROM base as builder
ADD . /app
WORKDIR /app
RUN vuepress build docs && cp -Rv assets/  public/

# Copy final app to runner
FROM nginx:alpine as runner

COPY --from=builder /app/public/ /usr/share/nginx/html/

# Add nginx configuration
ADD config/simple-nginx.conf /etc/nginx/conf.d/default.conf

# Webserver port
EXPOSE 80

