import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  constructor() { }

boardDirection = 0;

rotateBoard(a){
  this.boardDirection+=90;
  if(this.boardDirection>=360){
    this.boardDirection=0;
  }
}

  ngOnInit() {
  }

}
