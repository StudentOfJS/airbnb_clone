!# /bin/bash
yarn run build:server
heroku container:push web
heroku container:release web
