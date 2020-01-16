import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { FieldComponent } from './components/field/field.component';
import { GameViewComponent } from './components/game-view/game-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
import { PlayersFormComponent } from './components/players-form/players-form.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayersItemComponent } from './components/players-item/players-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FieldComponent,
    GameViewComponent,
    UserInterfaceComponent,
    PlayersFormComponent,
    PlayersListComponent,
    PlayersItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
