import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewOffertComponent } from './newoffert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NewOffertComponent],
    imports: [ CommonModule,  FormsModule, ReactiveFormsModule ],
    exports: [NewOffertComponent],
    providers: [],
})
export class NewOffertModule {}