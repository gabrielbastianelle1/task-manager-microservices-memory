import User from "../../../domain/user/entity/User";

export default interface UserRepositoryInterface {
    findAll(): ReadonlyArray<User>;
    findByName(name: string): User;
    save(user: User): void;
}
