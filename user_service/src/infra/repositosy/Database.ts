import UserRepositoryInterface from "../../application/user/resository/UserRepositoryInterface";
import User from "../../domain/user/entity/User";

export const users: User[] = [
    new User("75a89149-acf6-44b9-9824-2e9bb06557f5", "gabriel")
];

export default class Database implements UserRepositoryInterface {
    findAll(): Promise<User[]> {
        return new Promise((resolve) => {
            return resolve(users);
        });
    }

    findByUsername(name: string): Promise<User> {
        return new Promise((resolve, reject) => {
            const user = users.filter((user) => user.getName() === name);
            if (!user[0]) {
                return reject(user);
            }

            return resolve(user[0]);
        });
    }

    save(user: User): void {
        throw new Error("Method not implemented.");
    }
}
