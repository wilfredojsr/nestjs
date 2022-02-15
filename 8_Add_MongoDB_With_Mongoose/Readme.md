### Add MongoDB with Mongoose

`npm i mongoose @nestjs/mongoose`

    /* Setup MongooseModule in AppModule */
    @Module({
        imports: [
            MongooseModule.forRoot('mongodb://localhost:27017/nest-course'),
        ],
    })
    export class AppModule {}

Reference: https://docs.nestjs.com/techniques/mongodb
___

Ready!
