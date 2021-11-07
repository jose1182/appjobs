import { AccounttService } from './services/account.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptors'
import { CanActivateViaAuthGuard } from './helpers/CanActivateViaAuthGuard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [
    CookieService,
    AccounttService,
    CanActivateViaAuthGuard,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },
    {
      provide: JWT_OPTIONS, useValue:JWT_OPTIONS
    },
    JwtHelperService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
