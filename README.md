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

Add gitemoji for Fun using VSCode plugin or CLI.

[carloscuesta/gitmoji-cli: A gitmoji interactive command line tool for using emojis on commits. 💻](https://github.com/carloscuesta/gitmoji-cli)

#### VSCode

Search/Select emoji for indicating type of commit and write commit message.

[Gitmoji - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Vtrois.gitmoji-vscode)

#### (Optional) CLI

```bash
brew install gitmoji
```

```bash
gitmoji -c
```

![img](https://user-images.githubusercontent.com/7629661/41189947-1de56124-6bd6-11e8-9567-e7f1a8e99500.png)
