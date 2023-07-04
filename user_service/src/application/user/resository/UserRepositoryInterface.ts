import User from "../../../domain/user/entity/User";

export default interface UserRepositoryInterface {
    findAll(): Promise<User[]>;
    findByUsername(name: string): Promise<User>;
    save(user: User): void;
}
