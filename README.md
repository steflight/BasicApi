
# API

Basic Api To start building your own API

<a href="https://github.com/SoualmiMohamedDjamel/BasicApi/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/badge/license-GPL--3.0_License-blue.svg?style=flat" /></a>

## Concepts
- Using docker containers to deploy the Api

  - `Redis`: to stock users sessions 
  - `Mysql`: As relational DB for the Api
  - `Admine`: To access DB in Dev mode

## Getting started

### Development

```shell
$ git clone https://github.com/SoualmiMohamedDjamel/BasicApi.git
$ cd Api
$ yarn install
$ yarn run dev
```

### Production

```shell
$ git clone https://github.com/SoualmiMohamedDjamel/BasicApi.git
$ cd Api
$ # Edit password in docker-compose.yml
$ docker-compose up -d
# Your API is now running locally on http://127.0.0.1:3000
# Recommended: install a reverse proxy to handle authentification and authorizations
```

## API

- _**GET** /time_: Server time
- _**GET** /isUp_: Check data base connection

### Examples

<details><summary>GET /isup</summary><p>

```bash
$ curl http://127.0.0.1:3000/isup
{
  "success": true,
  "isDatabaseConnected": true
}

# OR  (connection problem)
{
  "success": true,
  "isDatabaseConnected": false
}
```

</p></details>

## LICENSE

<a href="https://github.com/SoualmiMohamedDjamel/BasicApi/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/badge/license-GPL--3.0_License-blue.svg?style=flat" /></a>

This project is based on Micro,Docker,Mysql,NodeJs