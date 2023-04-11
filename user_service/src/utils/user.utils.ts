import IUser from "../model/IUser";

export function find(users: IUser[], name: string) {
    const filtered: IUser[] = users.filter((user) => user.name === name);
    if (filtered.length === 0) {
        null;
    }
    return filtered[0];
}
