import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MonopolyService } from 'src/app/services/monopoly.service';

@Component({
    selector: 'app-user-interface',
    templateUrl: './user-interface.component.html',
    styleUrls: ['./user-interface.component.scss'],
})
export class UserInterfaceComponent implements OnInit {
    @Output() boardRotated = new EventEmitter<string>();

    constructor(private ms: MonopolyService) {}

    movePlayer() {
        this.ms.movePlayer();
        document.getElementById(this.ms.active.name).scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }

    rotate(direction: string) {
        this.boardRotated.emit(direction);
    }

    ngOnInit() {}
}
