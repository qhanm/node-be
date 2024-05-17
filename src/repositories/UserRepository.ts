import { Repository } from "typeorm";
import AppDataSource from "../configs/data-source";
import { User } from "../entities/User";
import { Service } from "typedi";

@Service()
export class UserRepository {
  private repo: Repository<User>;
  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    return this.repo.find();
  }

  async findById(id: number): Promise<User | null> {
    return this.repo.findOneBy({ id });
  }

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this.repo.create(user);
    await this.repo.save(newUser);
    return newUser;
  }
}
