import { IsNotEmpty, IsEmail, MinLength, MaxLength } from "class-validator";

class UserCreateDto {
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  password!: string;
}

export default UserCreateDto;
