import Player from './Player';

export default class Field {
    id: number;
    name: string;
    colour: string;
    cost: number;
    tax: number;
    owner: Player | null;
    
    constructor(id: number,name: string,colour: string,cost: number,tax: number,owner:Player | null){
        this.id=id;
        this.name=name;
        this.colour=colour;
        this.cost=cost;
        this.tax=tax;
        this.owner = owner;
    }
}