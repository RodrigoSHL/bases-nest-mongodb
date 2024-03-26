<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Running the app

1. Clonar el repositorio

2. Ejecutar
```
$ yarn install
```
3. Tener CLI instalado

```bash
$ npm i -g @nestjs/cli
```

4. Levantar base de datos
```bash
$ docker-compose up -d
```

5. Reconstruir la base de datos con la semilla
```
GET localhost:3001/api/v3/seed
```

## Stack usado
* Mongo
* NestJS
