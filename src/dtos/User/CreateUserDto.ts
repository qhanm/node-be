import "reflect-metadata";
import {
  IsString,
  IsEmail,
  Length,
  MaxLength,
  IsDate,
  IsOptional,
} from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email!: string;

  @IsString()
  @Length(6, 60)
  password!: string;

  @IsOptional()
  @MaxLength(50)
  firstName?: string | null;

  @IsOptional()
  @MaxLength(50)
  lastName?: string | null;

  @IsOptional()
  @MaxLength(50)
  middleName?: string | null;

  @IsOptional()
  @MaxLength(10)
  timezone?: string | null;

  @IsOptional()
  @MaxLength(10)
  locale?: string | null;

  @IsDate()
  @IsOptional()
  emailVerifiedAt?: Date | null;

  @IsOptional()
  @MaxLength(255)
  avatar?: string | null;

  @IsOptional()
  @MaxLength(15)
  phone?: string | null;

  @IsOptional()
  @MaxLength(50)
  userRole?: string | null;

  @IsDate()
  @IsOptional()
  dob?: Date | null;

  @IsOptional()
  @MaxLength(20)
  country?: Date | null;

  @IsOptional()
  @MaxLength(20)
  gender?: string | null;
}
