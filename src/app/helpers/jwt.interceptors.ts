import { AccounttService } from './../services/account.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        public accounttService:AccounttService
    ){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.accounttService.getToken()}`
              }
        });
        return next.handle(request);
    }
}