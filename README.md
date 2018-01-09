# Starter

A [Nuxt.js](https://github.com/nuxt/nuxt.js) starter project template without the distraction of a complicated development environment.

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ vue init shwld/nuxtfire.ts my-project
# install dependencies
$ yarn install
```

> Make sure to use a version of vue-cli >= 2.1 (`vue -V`).

## Usage

### Development

``` bash
# serve with hot reloading at localhost:3000
$ yarn run dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Production

``` bash
# build for production and launch the server
$ yarn build
$ yarn start
```

### Generate

``` bash
# generate a static project
$ yarn run generate
```

### Deploy to heroku

```bash
$ heroku config:set NPM_CONFIG_PRODUCTION=false
$ heroku config:set HOST=0.0.0.0
$ heroku config:set NODE_ENV=production
```
