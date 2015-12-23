FROM heroku/nodejs
COPY out /usr/src/app/out
COPY main.js /usr/src/app/main.js
WORKDIR /usr/src/app
RUN apt-get update && apt-get install graphviz -y

CMD node main.js
