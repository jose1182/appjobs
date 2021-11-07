import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffertComponent } from './offert.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../helpers/jwt.interceptors'

@NgModule({
    declarations: [
        OffertComponent
    ],
    imports: [ CommonModule, RouterModule ],
    exports: [ OffertComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ],
})
export class OffertModule {}