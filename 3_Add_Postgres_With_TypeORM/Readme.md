### Add Postgres with TypeORM

    version: "3"
    services:
      db:
        image: postgres
        ports:
          - "5432:5432"
        environment:
          POSTGRES_PASSWORD: pass123


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

___
###Running Migrations

Create a migration `npx typeorm migration:create -n <MigrationName>`

It needs to compile before run migrations `npm run build`

Run migration `npx typeorm migration:run`

Revert migration `npx typeorm migration:revert`

_____________________
###General Workflow

1.- Create the Entities what you need

2.- Create DOTs for each Entity

3.- Create an empty Controller

4.- Create a empty Service

5.- Create a module

6.- Adding Metadata to Module: 

    @Module({
      imports: [
        TypeOrmModule.forFeature([
          <Entity_1>,
          <Entity_2>,
          <Entity_N>,
        ]),
      ],
      controllers: [<YourController>],
      providers: [<YourService>],
    })
    export class <ModuleName> {}

7.- Start to coding

Ready!
