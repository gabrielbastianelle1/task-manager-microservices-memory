import User from "../../../domain/user/entity/User";
import UserRepositoryInterface from "../resository/UserRepositoryInterface";

export default class CreateUserUseCase {
    constructor(private ur: UserRepositoryInterface) {}

    execute(user: User): void {
        if (this.ur.findByUsername(user.getName()) === null) {
            return;
        }
        this.ur.save(user);
    }
}
