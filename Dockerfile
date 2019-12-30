FROM node:11.13.0-alpine As builder

#Build phase
MAINTAINER Pathfinders <RoundhousePathfinders@dish.com>

WORKDIR /parkifi-web
COPY . .

RUN apk add git
RUN npm install
RUN npm rebuild node-sass
RUN npm run build

#Run phase
FROM nginx:1.14.2-alpine
RUN rm /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/
EXPOSE 80
COPY --from=builder /parkifi-web/dist/  /usr/share/nginx/html
