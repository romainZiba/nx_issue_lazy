import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LazyLibModule } from "@nx-issue-lazy/lazy-lib";
import { Observable, of } from "rxjs";

@Injectable({providedIn: LazyLibModule})
export class WhateverGuard implements CanActivate {
    canActivate(): Observable<boolean> {
        return of(true);
    }
}
