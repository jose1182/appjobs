import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CookieService } from "ngx-cookie-service";
import {JwtHelperService} from '@auth0/angular-jwt';


const baseUrl = `${environment.apiUrl}/api`;

@Injectable()
export class AccounttService{

    constructor(
        private _http: HttpClient,
        private cookies: CookieService,
        private jwtHelper: JwtHelperService
    ){

    }

    login(username: string, password: string, remenberMe: boolean):Observable<any>{
        return this._http.post(`${baseUrl}/authenticate`,{username,password,remenberMe})
    }

    setToken(token: string){
        this.cookies.set("token", token)
    }

    public getToken(){
        return this.cookies.get("token");
    }

    logout(){
        this.cookies.delete("token")    
    }

    public isAuthenticated():boolean{
        const token = this.getToken();
        return this.jwtHelper.isTokenExpired(token)
    }
}