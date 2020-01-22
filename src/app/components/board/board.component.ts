import { Component, OnInit, Input } from '@angular/core';
import { MonopolyService } from 'src/app/services/monopoly.service';
import Player from 'src/app/models/Player';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
    @Input() boardDirection: number;
    player: Player;
    rotationClass: string;

    constructor(private ms: MonopolyService) {
        this.rotationClass = 'board-rotate-0';
    }

    playersOnField(i: number) {
        let arr = [];
        this.ms.players.forEach(player => {
            if (player.location === i) {
                arr.push(player);
            }
        });
        return arr;
    }

    ngOnInit() {}

    ngDoCheck() {
        this.rotationClass = 'board-rotate-' + this.boardDirection;
    }
}
