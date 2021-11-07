import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ HomeComponent ],
    imports: [ RouterModule],
    exports: [ HomeComponent ],
    providers: [],
})
export class HomeModule {}