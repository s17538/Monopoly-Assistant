import { Component, OnInit } from '@angular/core';
import { MonopolyService } from 'src/app/services/monopoly.service';
import { FormBuilder, Validators, FormGroup, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import Player from 'src/app/models/Player';

@Component({
    selector: 'app-players-form',
    templateUrl: './players-form.component.html',
    styleUrls: ['./players-form.component.scss'],
})
export class PlayersFormComponent implements OnInit {
    constructor(private fb: FormBuilder, private ms: MonopolyService) {}

    player = this.fb.group({
        name: ['', [Validators.required, this.CapitalValidator]],
        pawnColour: [''],
    });

    ngOnInit() {}

    addPlayer() {
        if (this.ms.players.length <= 5) {
            this.ms.players.push(
                new Player(
                    this.ms.players.length,
                    this.player.controls.name.value,
                    0,
                    500,
                    0,
                    this.player.controls.pawnColour.value
                )
            );
        }
    }

    CapitalValidator(control: AbstractControl): { [key: string]: any } | null {
        if (/^[A-Z].+$/.test(control.value)) {
            return null;
        } else {
            return { CapitalValidator: false };
        }
    }
}
