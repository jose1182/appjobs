import { TitleOffersComponent } from './titleoffers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../../helpers/jwt.interceptors'

@NgModule({
    declarations: [TitleOffersComponent],
    imports: [ CommonModule ],
    exports: [TitleOffersComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ],
})
export class TitleOffersModule {}