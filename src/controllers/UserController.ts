import { JsonController, Post, Body } from "routing-controllers";
import { Service } from "typedi";
import { UserService } from "../services/UserService";
import UserCreateDto from "../dto/User/UserCreateDto";

@Service()
@JsonController("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userDto: UserCreateDto) {
    return this.userService.createUser(userDto);
  }
}
