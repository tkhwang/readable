# Readable

## Design Policy

#### Graphal

- One model for Graphql and DB entity.
- Code first. (Not schema first)

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

#### Server

```bash
yarn dev server
```

#### Client

```bash
yarn dev client
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
