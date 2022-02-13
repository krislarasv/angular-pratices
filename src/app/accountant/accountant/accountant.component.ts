import { Component } from "@angular/core";

@Component({
    selector: 'app-accountant',
    template: `
        <h1>{{title}}</h1>
        <h3>BASE: {{base}}</h3>

        <button (click)="sum(base)">+{{base}}</button>

        <span>{{num}}</span>

        <button (click)="sum(-base)">-{{base}}</button>
    
    `
})

export class AccountantComponent{
  public title : string = 'App Count';
  public num :number = 10;
  public base :number=5;

  sum(value:number){
    this.num+=value;
  }

}