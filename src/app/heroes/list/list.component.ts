import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes: string[]=['Spiderman','Ironman','Hulk','Thor'];
  heroDeleted: string="";
  showArea: boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }
  deleteHero() : string{
    this.heroDeleted = this.heroes.shift() || "Empty list";
    this.showArea = true;
    return this.heroDeleted;
  }

}
