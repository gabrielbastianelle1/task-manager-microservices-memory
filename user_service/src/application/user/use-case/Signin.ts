import User from "../../../domain/user/entity/User";
import UserRepositoryInterface from "../resository/UserRepositoryInterface";

export default class Signin {
    constructor(private ur: UserRepositoryInterface) {}

    public execute(name: string): User {
        const user: User = this.ur.findByName(name);
        if (user) return user;
        throw new Error("name invalid");
    }
}
