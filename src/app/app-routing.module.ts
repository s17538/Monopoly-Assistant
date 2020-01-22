import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameViewComponent } from './components/game-view/game-view.component';
import { GameSetupComponent } from './components/game-setup/game-setup.component';
import { EntryGuardGuard } from './guards/entry-guard.guard';

const routes: Routes = [
    { path: '', component: GameSetupComponent },
    { path: 'game', component: GameViewComponent, canActivate: [EntryGuardGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
