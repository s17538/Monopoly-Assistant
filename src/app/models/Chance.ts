export default class Chance {
    id: number;
    title: string;
    description: string;
    ifPositive: boolean;

    constructor(id: number, title: string, description: string, ifPositive: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.ifPositive = ifPositive;
    }
}
