import { NgModule } from "@angular/core";
import { AccountantComponent } from './accountant/accountant.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        AccountantComponent
    ],
    exports:[
        AccountantComponent
    ],
    imports:[
        CommonModule
    ]

})

export class AccountantModule{

}