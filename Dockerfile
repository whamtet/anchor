FROM heroku/nodejsv2

COPY out /app/user/out
COPY main.js /app/user/main.js
COPY resources/public/cljs /app/user/resources/public/cljs
COPY resources/public/pdf.js /app/user/resources/public/pdf.js
#COPY resources/public/reports /app/user/resources/public/reports
COPY resources/public/toast /app/user/resources/public/toast
COPY resources/public/tour /app/user/resources/public/tour
COPY resources/public/anchor.png /app/user/resources/public/anchor.png
COPY resources/public/jquery.js /app/user/resources/public/jquery.js
COPY resources/public/keymaster.js /app/user/resources/public/keymaster.js
COPY resources/public/loading_spinner.gif /app/user/resources/public/loading_spinner.gif
COPY resources/public/network1.png /app/user/resources/public/network1.png
COPY resources/public/network2.png /app/user/resources/public/network2.png
COPY resources/public/style.css /app/user/resources/public/style.css
COPY resources/404.html /app/user/resources/404.html
COPY resources/500.html /app/user/resources/500.html
COPY resources/bberg.txt /app/user/resources/bberg.txt
COPY resources/db.edn /app/user/resources/db.edn


#COPY node_modules /app/user/node_modules
WORKDIR /app/user
RUN apt-get update && apt-get install graphviz -y && cp /usr/bin/dot /app/user/dot

#Do we need to add node_modules?
#CMD node main.js
