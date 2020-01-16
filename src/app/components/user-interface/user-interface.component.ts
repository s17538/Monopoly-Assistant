import { Component, OnInit } from '@angular/core';
import { MonopolyService } from 'src/app/services/monopoly.service';
import Field from 'src/app/models/Field';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.scss']
})
export class UserInterfaceComponent implements OnInit {
  
  constructor(private ms: MonopolyService) { }

  movePlayer() {
    this.ms.movePlayer();
  }

  ngOnInit() {
  }

}
