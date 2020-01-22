import { Component, OnInit, Input } from '@angular/core';
import Chance from 'src/app/models/Chance';
import { MonopolyService } from 'src/app/services/monopoly.service';

@Component({
    selector: 'app-chance-card',
    templateUrl: './chance-card.component.html',
    styleUrls: ['./chance-card.component.scss'],
})
export class ChanceCardComponent implements OnInit {
    @Input() visible: boolean;
    @Input() card: Chance;

    constructor(private ms: MonopolyService) {}

    closeWindow() {
        this.ms.activeCard = null;
    }

    ngOnInit() {}
}
