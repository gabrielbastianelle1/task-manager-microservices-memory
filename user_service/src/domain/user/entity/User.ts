export default class User {
    constructor(private id: string, private name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}
