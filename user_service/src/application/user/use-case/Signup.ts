import User from "../../../domain/user/entity/User";
import UserRepositoryInterface from "../resository/UserRepositoryInterface";

export default class Signup {
    constructor(private ur: UserRepositoryInterface) {}

    public execute(name: string, id: string): void {
        if (this.ur.findByName(name)) {
            throw new Error("name already taken");
        }
        this.ur.save(new User(id, name));
    }
}
