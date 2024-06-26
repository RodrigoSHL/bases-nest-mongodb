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

5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en el ```.env```

7. Ejecutar app en dev
```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla
```
GET localhost:3001/api/v3/seed
```

## Stack usado
* Mongo
* NestJS
