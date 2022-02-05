### Add Postgres with TypeORM

`docker-compose.yml`

`version: "3"`

`services:`

`db:`

`image:  postgres`

`restart: always`

`ports:`

`- "5432:5432"`

`environment:`

`POSTGRES_PASSWORD: pass123`

___
####Start containers in detached / background mode
`docker-compose up -d`

___
####Stop containers
`docker-compose down`

___
###Installing TypeORM

`npm i @nestjs/typeorm typeorm pg`

Reference: https://typeorm.io
