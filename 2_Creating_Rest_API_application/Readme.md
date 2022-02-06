### Creating Rest API application

Generating a Controller `nest g co coffees`

Generating a Service `nest g s coffees`

Generating a Module `nest g module coffees`

_____________________
###DTO: Data Transfer Objects

Generating a DTO `nest g class coffees/dto/create-coffee.dto --no-spec`

Generating a DTO `nest g class coffees/dto/update-coffee.dto --no-spec`

_____________________
###Validators

`npm i class-validator class-transformer`

_____________________
###Mapped Types

It reduces the code when an update dto and create dto are the same but optionals

`npm i @nestjs/mapped-types`

i.e:

    import { PartialType } from '@nestjs/mapped-types';
    import { CreateCoffeeDto } from './create-coffee.dto';
    export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

_____________________
###General Workflow

1.- Create a module

2.- Create a Controller

3.- Create a Service

4.- Use your Service within your Controller

5.- Using DOTs is a best practice

Ready!
