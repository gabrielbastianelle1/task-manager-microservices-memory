import UserRepositoryInterface from "../../application/user/resository/UserRepositoryInterface";
import User from "../../domain/user/entity/User";

export default class Database implements UserRepositoryInterface {
    private static users: Map<string, User> = new Map<string, User>([
        ["gabriel", new User("75a89149-acf6-44b9-9824-2e9bb06557f5", "gabriel")]
    ]);

    findAll(): ReadonlyArray<User> {
        return [...Database.users.values()];
    }

    findByName(name: string): User {
        return Database.users.get(name);
    }

    save(user: User): void {
        Database.users.set(user.getName(), user);
    }
}
