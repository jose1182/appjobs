import { NewOffertModule } from './offers/newOffert/newoffert.module';
import { ComponentsModule } from './../components/components.module';
import { LoginModule } from './login/login.module';
import { DetailsOffertModule } from './offers/detailsoffert/detailsOffert.module';
import { OffertModule } from './offers/offert.module';
import { TitleOffersModule } from './offers/titlteoffers/titleoffers.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [],
    imports: [ 
        HomeModule, 
        OffertModule, 
        TitleOffersModule,
        DetailsOffertModule,
        LoginModule,
        NewOffertModule
    ],
    exports: [ 
        HomeModule,  
        OffertModule, 
        TitleOffersModule,
        DetailsOffertModule,
        LoginModule,
        NewOffertModule
    ],
    providers: [],
})
export class PagesModule {}