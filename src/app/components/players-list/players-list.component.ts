import { Component, OnInit } from '@angular/core';
import { MonopolyService } from 'src/app/services/monopoly.service';
import Player from 'src/app/models/Player';

@Component({
    selector: 'app-players-list',
    templateUrl: './players-list.component.html',
    styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
    constructor(private ms: MonopolyService) {}

    ngOnInit() {}

    removePlayer(i: number) {
        this.ms.players.splice(i, 1);
    }
}
