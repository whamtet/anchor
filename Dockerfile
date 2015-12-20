FROM clojure
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN lein build-once
RUN apt-get update && apt-get install graphviz -y

CMD lein run -m anchor.web
