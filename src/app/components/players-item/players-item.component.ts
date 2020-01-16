import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Player from 'src/app/models/Player';

@Component({
  selector: 'app-players-item',
  templateUrl: './players-item.component.html',
  styleUrls: ['./players-item.component.scss']
})
export class PlayersItemComponent implements OnInit {

  @Input() player: Player;
  @Input() nr: number;
  @Output() playerRemoved = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removePlayer(){
    this.playerRemoved.emit(this.nr);
  }

}