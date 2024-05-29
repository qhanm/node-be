import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { AppDataSource } from "../data-source";
import { CreateUserDto } from "../dto/user/CreateUserDto";

export class UserService {
  private userRepo: Repository<User>;

  constructor() {
    this.userRepo = AppDataSource.getRepository(User);
  }

  async create(modelDto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(modelDto);
    return user;
  }
}
