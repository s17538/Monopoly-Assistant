import { Injectable } from '@angular/core';
import Player from '../models/Player';
import Field from '../models/Field';
import Chance from '../models/Chance';
import { LogService } from './log.service';

@Injectable({
    providedIn: 'root'
})
export class MonopolyService {

    fields: Array<Field>;
    players: Array<Player>;
    activePlayer: number;
    dice1: number;
    dice2: number;
    roundsLeft: number;
    cards: Array<Chance>;
    activeCard: Chance | null;
    activePlayerName: string;

    constructor(private ls: LogService) {
        this.players = [];
        this.fields = [

            new Field(0, "Start", "special-start", 0, 0, null),
            new Field(1, "McDonald's", "Purple", 60, 15, null),
            new Field(2, "Community chest", "special-chance", 0, 0, null),
            new Field(3, "Pepsi Co", "Purple", 60, 15, null),

            new Field(4, "Tax", "special-tax", 200, 0, null),
            new Field(5, "Serwerownia", "special-building", 200, 0, null),
            new Field(6, "Amazon", "Brown", 100, 25, null),
            new Field(7, "Community chest", "special-chance", 0, 0, null),
            new Field(8, "Microsoft", "Brown", 100, 25, null),
            new Field(9, "Google", "Brown", 120, 30, null),

            new Field(10, "Więzienie", "special-parking", 0, 0, null),
            new Field(11, "Mercedes", "Pink", 140, 35, null),
            new Field(12, "Elektrownia", "special-powerplant", 200, 0, null),
            new Field(13, "Audi", "Pink", 140, 35, null),
            new Field(14, "BMW", "Pink", 160, 40, null),

            new Field(15, "Księgowość", "special-building", 200, 0, null),
            new Field(16, "CD Projekt RED", "Orange", 180, 45, null),
            new Field(17, "Community chest", "special-chance", 0, 0, null),
            new Field(18, "Blizzard", "Orange", 180, 100, null),
            new Field(19, "Nintendo", "Orange", 200, 50, null),

            new Field(20, "Darmowy parking", "special-parking", 0, 0, null),
            new Field(21, "BNP Paribas", "Red", 220, 55, null),
            new Field(22, "Community chest", "special-chance", 0, 0, null),
            new Field(23, "Unicredit", "Red", 220, 55, null),
            new Field(24, "Standard Chartered", "Red", 200, 50, null),

            new Field(25, "Bufet", "special-building", 200, 0, null),
            new Field(26, "Steelseries", "Yellow", 260, 65, null),
            new Field(27, "Alienware", "Yellow", 260, 65, null),
            new Field(28, "Wodociągi", "special-powerplant", 120, 0, null),
            new Field(29, "Razer", "Yellow", 280, 70, null),

            new Field(30, "Idź do więzienia", "special-jail", 0, 0, null),
            new Field(31, "BP", "Green", 300, 75, null),
            new Field(32, "Exxon Mobil", "Green", 300, 75, null),
            new Field(33, "Community chest", "special-chance", 0, 0, null),
            new Field(34, "Gazprom", "Green", 320, 80, null),

            new Field(35, "Gabinet prezesa", "special-building", 200, 0, null),
            new Field(36, "Community chest", "special-chance", 0, 0, null),
            new Field(37, "Apple", "Blue", 360, 90, null),
            new Field(38, "Tax", "special-tax", 0, 0, null),
            new Field(39, "Samsung", "Blue", 400, 100, null)
        ];
        this.cards = [
            new Chance(0, "Urodziny", "To Twój dzień! Otrzymujesz 20$ od każdego gracza.", true),
            new Chance(1, "Pomyłka", "Bank pomylił się na Twoją korzyść, otrzymujesz 200$.", true),
            new Chance(2, "Spadek", "Otrzymujesz w spadku 100$", true),
            new Chance(3, "iDay", "Wydarzenie w iSpocie, udaj się na pole Apple.", true),
            new Chance(4, "Pechowy dzień", "Zobaczyłeś mema ze swoją osobą, udajesz się do więzienia w celu ukrycia.", false),
            new Chance(5, "Reklamacja", "Kupiłeś zepsutą lodówkę Samsunga, udajesz się na pole Samsung w celu reklamacji.", false),
            new Chance(6, "Gorączka piątkowej nocy", "Strasznie się upiłeś, a w Twoim portfelu brakuje 150$. Pamiętasz na co je wydałeś?", false),
            new Chance(7, "Zwolnienie", "Wyrzucili Cię z pracy i zaczynasz od nowa.Udaj się na pole startu", false),
            new Chance(8, "Głód", "Burczy w brzuchu i udajesz się do McDonalda.", false),
            new Chance(9, "Paliwko", "Podczas podróży zabrakło Ci paliwa, udaj się na stacje BP i zatankuj za 150$.", false)

        ];
        this.activePlayer = 0;
        this.dice1 = 0;
        this.dice2 = 0;
        this.roundsLeft = 30;
        this.activeCard = null;
    }

    movePlayer() {

        if (this.active.roundsInJail == 0) {
            this.dice1 = Math.floor((Math.random() * 6) + 1);
            this.dice2 = Math.floor((Math.random() * 6) + 1);

            this.ls.logs.push("Tura gracza " + this.active.name + " (" + "Posiada: " + this.active.money + "$)");
            let x = this.active.location;

            this.active.location += this.dice1 + this.dice2;

            if (this.active.location >= this.fields.length) {
                this.active.money += 100;
                this.active.location = this.active.location - this.fields.length;
            }

            this.ls.logs.push(this.active.name + " wylosował kości o wartościach " + this.dice1 + " oraz " + this.dice2 + " , i przemieszcza się na pole " + this.fields[this.active.location].name);
            let y = this.fields[this.active.location].owner == null ? 'nikogo' : this.fields[this.active.location].owner.name;
            this.ls.logs.push(this.fields[this.active.location].name + " jest w posiadaniu " + y);

            this.executeField();

            if (this.dice1 === this.dice2) {
                this.movePlayer();
            }
            else {
                if (this.activePlayer === this.players.length - 1) {
                    this.activePlayer = 0;
                    this.roundsLeft--;
                }
                else this.activePlayer++;
            }
        }
        else {
            this.active.roundsInJail--;
            if (this.activePlayer === this.players.length - 1) {
                this.activePlayer = 0;
                this.roundsLeft--;
            }
            else this.activePlayer++;
        }


    }

    executeField() {
        let polenormalne = !this.fields[this.active.location].colour.includes('special');
        if (polenormalne) {
            if (this.fields[this.active.location].owner == null) {
                this.buyField();
            }
            else {
                this.ls.logs.push(this.active.name + " płaci " + this.fields[this.active.location].tax + " $ " + " dla " + this.fields[this.active.location].owner.name);
                this.active.money -= this.fields[this.active.location].tax;
                this.fields[this.active.location].owner.money += this.fields[this.active.location].tax;
            }
        }
        else {
            let colour = this.fields[this.active.location].colour
            // railroad, wiezienie, start, parking, karta, podatek, elektrownia/wodociagi
            if (colour.includes('building')) {
                if (this.fields[this.active.location].owner == null) {
                    this.buyField();
                }
                else {
                    let taxSum = 0;
                    let activeFieldOwner = this.fields[this.active.location].owner.id;
                    if (this.fields[5].owner != null) {
                        if (activeFieldOwner === this.fields[5].owner.id) {
                            taxSum += 50;
                        }
                    }
                    if (this.fields[15].owner != null) {
                        if (activeFieldOwner === this.fields[15].owner.id) {
                            taxSum += 50;
                        }
                    }
                    if (this.fields[25].owner != null) {
                        if (activeFieldOwner === this.fields[25].owner.id) {
                            taxSum += 50;
                        }
                    }
                    if (this.fields[35].owner != null) {
                        if (activeFieldOwner === this.fields[35].owner.id) {
                            taxSum += 50;
                        }
                    }


                    this.active.money -= taxSum;
                    this.fields[this.active.location].owner.money += taxSum;
                    this.ls.logs.push(this.active.name + " płaci " + taxSum + " $ " + " dla " + this.fields[this.active.location].owner.name);
                }
            }
            else if (colour.includes('powerplant')) {
                if (this.fields[this.active.location].owner == null) {
                    this.buyField();
                }
                else {

                    this.ls.logs.push(this.active.name + " płaci " + this.fields[this.active.location].tax + " $ " + " dla " + this.fields[this.active.location].owner.name);

                    let multiplier = 1;
                    let activeFieldOwner = this.fields[this.active.location].owner;

                    if (this.active.location === 12) {
                        // jestesmy na elektrowni - sprawdzamy ownera wodociagow
                        if (activeFieldOwner === this.fields[28].owner) {
                            multiplier = 2;
                        }
                    }
                    else {
                        // jestesmy na wodociagow - sprawdzamy ownera elektrowi
                        if (activeFieldOwner === this.fields[12].owner) {
                            multiplier = 2;
                        }
                    }

                    this.active.money -= ((this.dice1 + this.dice2) * multiplier);
                    this.fields[this.active.location].owner.money += this.fields[this.active.location].tax;

                }
            }
            else if (colour.includes('jail')) {
                this.imprison();
            }
            else if (colour.includes('tax')) {
                this.active.money -= 200;
            }
            else if (colour.includes('chance')) {
                this.drawChance();
            }
        }
    }

    buyField() {
        let decision = confirm("[" + this.active.name + "]" + " " + "Czy chcesz kupić " + this.fields[this.active.location].name + " za " + this.fields[this.active.location].cost + " $ " + "?");
        if (decision) {
            this.fields[this.active.location].owner = this.active;
        }
    }

    imprison() {
        this.active.location = 10;
        this.active.roundsInJail = 2;
    }

    drawChance() {
        let randomChance = Math.floor((Math.random() * this.cards.length));
        this.ls.logs.push('Karta szansy!');
        this.ls.logs.push(this.cards[randomChance].title);
        this.ls.logs.push(this.cards[randomChance].description);
        if (randomChance === 0) {
            this.players.forEach(player => {
                player.money -= 20;
                this.active.money += 20;
            })
        }

        else if (randomChance === 1) {
            this.active.money += 200;
        }

        else if (randomChance === 2) {
            this.active.money += 100;
        }

        else if (randomChance === 3) {
            this.active.location = 37;
        }

        else if (randomChance === 4) {
            this.imprison();
        }

        else if (randomChance === 5) {
            this.active.location = 39;
        }

        else if (randomChance === 6) {
            this.active.money -= 150;
        }

        else if (randomChance === 7) {
            this.active.location = 0;
        }

        else if (randomChance === 8) {
            this.active.location = 1;
        }

        else if (randomChance === 9) {
            this.active.location = 31;
            this.active.money -= 150;
        }
        this.activeCard = this.cards[randomChance];
        this.activePlayerName = this.active.name;
    }

    get active() {
        return this.players[this.activePlayer];
    }

}
