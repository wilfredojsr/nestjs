import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../app.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        useFactory: () => ({
          type: 'postgres', // type of our database
          host: process.env.DATABASE_HOST, // database host
          port: +process.env.DATABASE_PORT, // database host
          username: process.env.DATABASE_USER, // username
          password: process.env.DATABASE_PASSWORD, // user password
          database: process.env.DATABASE_NAME, // name of our database,
          autoLoadEntities: true, // models will be loaded automatically
          synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
        }),
      },
    ),
    ConfigModule.forRoot({
      load: [
        appConfig,
      ],
    }),
    CoffeesModule,
    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
