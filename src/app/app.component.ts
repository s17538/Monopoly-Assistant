import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    boardDirection = 0;

    rotateBoard() {
        this.boardDirection += 90;
        if (this.boardDirection === 450) this.boardDirection = 90;
        console.log(this.boardDirection);
    }
}
