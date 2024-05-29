import { Body, JsonController, Post } from "routing-controllers";
import { UserService } from "../service/user.service";
import { CreateUserDto } from "../dto/user/CreateUserDto";
import { validateOrReject } from "class-validator";

@JsonController("/users")
export class UserController {
  private userService = new UserService();

  @Post("/")
  async create(@Body() createUserDto: CreateUserDto) {
    await validateOrReject(createUserDto);
    return this.userService.create(createUserDto);
  }
}
