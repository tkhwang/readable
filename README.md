# Readable

Read and share anything readable in **Readable** !

[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=readable)](https://vercel.com/tkhwang/readable)

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

#### Server: nx nest.js app

```bash
yarn dev server
```

#### Client: nx next.js app

```bash
yarn dev client-next
```

#### ⚠️⚠️⚠️ Caution !!!

Don't use `yarn start`, `yarn build` for local development.<br />
Now it's **only for deployment.**

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

Before the AWS configuration, use quick and dirty.

- heroku for `server` nx nest.js app
- vercel for `client-next` nx next.js app

#### heroku

nest.js with production built static files (client)

```bash
yarn build
yarn start
```

#### 2. AWS

AKS using kubernete.

## Ref: Server/Port/DB

| Environment      | `apps`        | `NODE_ENV`    | DB          | Port     | URL                                         |
| ---------------- | ------------- | ------------- | ----------- | -------- | ------------------------------------------- |
| development      | `server`      | `development` | development | `7000`   | http://localhost:7000/graphql               |
|                  | `client-next` | `development` | development | `4200`   | http://localhost:4200                       |
|                  | `client`      | `development` | development | `4200`   | http://localhost:4200                       |
| (1st) production | `server`      | `production`  | development | `80/443` | https://readable-2021.herokuapp.com/graphql |
|                  | `client-next` | `production`  | development | `80/443` | https://readable-2021.vercel.app            |
