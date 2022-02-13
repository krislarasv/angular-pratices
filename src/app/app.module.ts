import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { AccountantModule } from './accountant/accountant.module';


@NgModule({
  declarations: [
    AppComponent,
 ],
  imports: [
    BrowserModule,
    HeroesModule,
    AccountantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
