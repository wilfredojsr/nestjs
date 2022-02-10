### Application Configuration

It's a common best practice in the Node.js community
to store environments variables in a file called .env

@nestjs/config is a module which allows to do that 
task easily

`npm i @nestjs/config`

After install it, you will need to import ConfigModule in
your app module as following:

    import { ConfigModule } from '@nestjs/config';
    @Module({
        imports: [
            ConfigModule.forRoot(),
            ...,
        ],
    })

Reference: https://docs.nestjs.com/techniques/configuration

___
### Schema Validation

`npm install @hapi/joi`

`npm install --save-dev @types/hapi__joi`

Reference: https://docs.nestjs.com/techniques/configuration#schema-validation


Ready!
