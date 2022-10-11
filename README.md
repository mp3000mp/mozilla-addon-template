# Requirements

    npm install --global web-ext

# Dev

    npm run serve

# Build

    npm run lint
    npm run build

_Note: to test the build, open firefox and go to about:debugging#/runtime/this-firefox. 
Then load the zip file in the browser._

# Build/Deploy

    # get api key and secret from your addons.mozilla.org account and set it in .env file
    npm run sign
