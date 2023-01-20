import { IsEmail, MinLength } from 'class-validator';
import { IsNumberString, IsOptional } from '@nestjs/class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @MinLength(10)
  password: string;

  @IsOptional()
  @IsNumberString()
  tfaCode?: string;
}
