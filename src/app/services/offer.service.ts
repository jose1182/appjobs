import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";

const baseUrl = `${environment.apiUrl}/api`;

@Injectable()
export class OffertService{

    constructor(
        private _http: HttpClient
    ){}


    public getOffers():Observable<any>{
        return this._http.get(`${baseUrl}/ofertas`)
    }

    public getOffertById(id):Observable<any>{
        return this._http.get(`${baseUrl}/ofertas/${id}`)
    }

    public deleteOffertById(id):Observable<any>{
        return this._http.delete(`${baseUrl}/ofertas/${id}`,{})
    }

    public createNewOffert(offert):Observable<any>{
        return this._http.post(`${baseUrl}/ofertas`,offert)
    }
}