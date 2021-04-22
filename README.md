# Magic Nuxt Demo

Live at https://magic-nuxt.vercel.app/login

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fshahbaz17%2Fmagic-nuxt&env=NUXT_ENV_MAGIC_PUBLISHABLE_KEY,MAGIC_SECRET_KEY) [![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shahbaz17/magic-nuxt)

# Quick Start Instructions

```bash
$ git clone https://github.com/shahbaz17/magic-nuxt
$ cd magic-nuxt
$ mv .env.example .env // enter your Magic API keys in your env variables
$ yarn install
$ yarn dev // starts app at http://localhost:3000
```

## Environment Variables

```
NUXT_ENV_MAGIC_PUBLISHABLE_KEY=pk_test_
MAGIC_SECRET_KEY=sk_test_
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
