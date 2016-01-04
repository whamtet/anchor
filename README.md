# anchor

![Anchor](resources/public/anchor.png)

Value Investor Portfolio Management Suite

[Demo](http://www.anchor-demo.net)

[User Guide](http://whamtet.github.io/anchor)

## Building

Anchor can be run on both the JVM and Node!  First compile the browser clojurescript

    $ lein build-once

or for a watch script

    $ lein build

To start on the JVM you can either eval the commented out forms
at the bottom of `anchor.web.clj` from your editor or
launch from the command line:

    $ lein run -m anchor.web

To run with node you must first install the npm (node package manager) dependencies.

    $ lein npm install

next build the server side clojurescript

    $ lein build-node

finally launch the server

    $ node main.js

For more information please see the [User Guide](http://whamtet.github.io/anchor).

## License

Copyright © 2015 Matthew Molloy

Distributed under the Eclipse Public License, the same as Clojure.
