import { Component, OnInit } from '@angular/core';
import { MonopolyService } from 'src/app/services/monopoly.service';
import { FormBuilder, Validators } from '@angular/forms';
import Player from 'src/app/models/Player';

@Component({
  selector: 'app-players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.scss']
})
export class PlayersFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private ms:MonopolyService) { }

  player = this.fb.group({
    name: ["", [Validators.required]],
    pawnColour: ["", [Validators.required]]
  });

  ngOnInit() {
  }

  addPlayer(){
    this.ms.players.push(
      new Player(this.ms.players.length,
        this.player.controls.name.value,
        0,
        500,
        0,
        this.player.controls.pawnColour.value)
      )
  }

}
