import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { WhateverGuard } from "@nx-issue-lazy/lazy-lib";

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RouterModule.forRoot([{
    path:'',
    canActivate: [WhateverGuard],
    loadChildren: () => import('@nx-issue-lazy/lazy-lib').then((m) => m.LazyLibModule)
  }])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
