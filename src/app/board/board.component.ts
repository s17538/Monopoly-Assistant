import { Component } from '@angular/core';

import {
  faLongArrowAltLeft,
  faQuestion,
  faBuilding,
  faCube,
  faFrownOpen,
  faLightbulb,
  faCar,
  faTint,
  faGavel,
  faGem,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  faLongArrowAltLeft = faLongArrowAltLeft;
  faQuestion = faQuestion;
  faBuilding = faBuilding;
  faCube = faCube;
  faFrownOpen = faFrownOpen;
  faLightbulb = faLightbulb;
  faCar = faCar;
  faTint = faTint;
  faGavel = faGavel;
  faGem = faGem;
}
