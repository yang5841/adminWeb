FROM nginx
FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y wget
EXPOSE 80