import { Component } from "@angular/core";

@Component({
    selector:'app-hero',
    templateUrl:"hero.component.html"
})
export class HeroComponent{
    heroName: string = "IronMan";
    age: number = 45;
    get upperCase(): string{
        return this.heroName.toUpperCase();
    }
    getName(): string{
        return `${ this.heroName } - ${ this.age} `;
    }
    changeName(): void{
        this.heroName= 'Spiderman';

    }
    changeAge(): void{
        this.age= 20;
    }
}