export default class Player {
    id: number;
    name: string;
    location: number;
    money: number;
    roundsInJail:number;
    pawnColour:string;

    constructor(id: number, name: string, location: number, money: number,roundsInJail:number,pawnColour:string) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.money = money;
        this.roundsInJail = roundsInJail;
        this.pawnColour = pawnColour;
    }
} 