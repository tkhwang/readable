# Readable

[![Heroku](https://pyheroku-badge.herokuapp.com/?app=readable-2021&style=flat)](https://dashboard.heroku.com/apps/readable-2021)

## Design Policy

#### Graphal

- One model for Graphql and DB entity.
- GraphQL: Code first. (Not schema first)

## Prerequite

```bash
npm install -g @nrwl/cli    // nx
npm install -g @nestjs/cli  // nest
```

## Install

```bash
yarn
```

## Run

For local development, use `yarn dev server` and `yarn dev client`.<br />
Don't use `yarn start` and `yarn build`. (Ref to below caution notice.)

#### Server

```bash
yarn dev server
```

#### Client

```bash
yarn dev client
```

#### ⚠️⚠️⚠️ Caution !!!

Don't use `yarn start`, `yarn build` for local development.<br />
Now it's **only for heroku deployment.**

```bash
yarn build
yarn start
```

## Commit message

```
type (module): commit message
      client
      server

🚚 (client): Move app module to the top
📦 (server): Add typeorm and mysql package
```

#### VSCode

Search/Select emoji for indicating type of commit and write commit message.

[Gitmoji - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Vtrois.gitmoji-vscode)

## Deploy

### 1. Quick and Dirty

Before the AWS configuration, use heroku.

#### heroku

nest.js with production built static files (client)

```bash
yarn build
yarn start
```

#### 2. AWS

AKS using kubernete.

## Ref: Server/Port/DB

| Environment | `apps`   | DB          | URL                                         | Port   |
| ----------- | -------- | ----------- | ------------------------------------------- | ------ |
| development | `server` | development | http://localhost                            | `7000` |
|             | `client` |             | http://localhost                            | `4200` |
| heroku      | `server` | development | https://readable-2021.herokuapp.com/graphql |        |
|             | `client` |             | https://readable-2021.herokuapp.com         |        |
