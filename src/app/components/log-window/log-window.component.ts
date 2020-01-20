import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { MonopolyService } from 'src/app/services/monopoly.service';

@Component({
  selector: 'app-log-window',
  templateUrl: './log-window.component.html',
  styleUrls: ['./log-window.component.scss']
})
export class LogWindowComponent implements OnInit {

  @Output() boardRotated = new EventEmitter<string>();

  constructor(private ls:LogService, private ms:MonopolyService) { }

  ngOnInit() {
  }

  compareMoney(a, b) {
    if ( a.money < b.money ){
      return 1;
    }
    if ( a.money > b.money ){
      return -1;
    }
    return 0;
  }

  movePlayer() {
    this.ms.movePlayer();
    document.getElementById(this.ms.active.name).scrollIntoView({behavior: "smooth", inline: "start"})
  }

  rotateBoard(){
    this.boardRotated.emit("R");
  }

}
