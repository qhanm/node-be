// services/UserService.ts
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import UserCreateDto from "../dto/User/UserCreateDto";

class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userDto: UserCreateDto): Promise<User> {
    return this.userRepository.createUser(userDto);
  }
}

export { UserService };
