import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MonopolyService } from '../services/monopoly.service';

@Injectable({
    providedIn: 'root',
})
export class EntryGuardGuard implements CanActivate {
    constructor(private ms: MonopolyService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.ms.players.length >= 2 && this.ms.players.length <= 6) {
            return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }
}
