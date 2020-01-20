import { Component, OnInit, Input } from '@angular/core';
import Field from 'src/app/models/Field';
import Player from 'src/app/models/Player';
import { MonopolyService } from 'src/app/services/monopoly.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() field: Field;
  @Input() players: Array<Player>

  constructor(private ms: MonopolyService) { }

  ngOnInit() {
  }

}
