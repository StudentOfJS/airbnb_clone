!# /bin/bash
yarn run build:server
docker build -t studentofjs/airbnb_clone:latest .
docker push studentofjs/airbnb_clone:latest
ssh root@167.99.11.233 "docker pull studentofjs/airbnb_clone:latest && docker tag studentofjs/airbnb_clone:latest dokku/airbnb_clone:latest && dokku tags:deploy airbnb_clone latest"
