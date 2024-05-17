import { UserRepository } from "./repositories/UserRepository";
import { UserService } from "./services/UserService";
import { UserController } from "./controllers/UserController";

export class Container {
  private instances: Map<string, any>;

  constructor() {
    this.instances = new Map();
  }

  register<T>(name: string, clazz: new (...args: any[]) => T) {
    const instance = new clazz(...this.resolveDependencies(clazz));
    this.instances.set(name, instance);
  }

  resolve<T>(name: string): T {
    const instance = this.instances.get(name);
    if (!instance) {
      throw new Error(`No instance found for ${name}`);
    }
    return instance;
  }

  private resolveDependencies<T>(clazz: new (...args: any[]) => T): any[] {
    const paramTypes = Reflect.getMetadata("design:paramtypes", clazz) || [];
    console.log("paramTypes", paramTypes);
    return paramTypes.map((param: any) => {
      const paramName = param.name;
      return this.resolve(paramName);
    });
  }
}

const container = new Container();
container.register("UserRepository", UserRepository);
container.register("UserService", UserService);
container.register("UserController", UserController);

export { container };
