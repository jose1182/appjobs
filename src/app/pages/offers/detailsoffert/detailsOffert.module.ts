import { RouterModule } from '@angular/router';
import { DetailsOffertComponent } from './detailsOffert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../../helpers/jwt.interceptors'

@NgModule({
    declarations: [ DetailsOffertComponent ],
    imports: [ CommonModule,
        RouterModule ],
    exports: [ 
        DetailsOffertComponent
     ],
     providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ],
})
export class DetailsOffertModule {}