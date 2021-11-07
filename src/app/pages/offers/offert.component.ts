import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OffertService } from 'src/app/services/offer.service';

@Component({
    selector: 'app-offert',
    templateUrl: './offert.component.html',
    styleUrls: ['./offert.component.css'],
    providers:[OffertService]
})
export class OffertComponent implements OnInit {

    public arrayTittleOffert: Array<any>;
    message = '';
    bMessage = false;

    constructor(
        private offertService: OffertService,
        private router: Router
    ) { }

    ngOnInit(): void { 
        this.message = ''
        this.bMessage =  false
        this.retrieveOffers();
    }

    public retrieveOffers():void{
        this.offertService.getOffers().subscribe(
            response => {
                this.arrayTittleOffert = response;
            },error => {
                console.log(error);
            }
        )
    }

    public goToViewDetail(id): void{
        this.router.navigate(['/home/detailoffert', id]);
    }

    public goToDeleteOffert(id): void{
        this.offertService.deleteOffertById(id).subscribe(
            response =>{
                console.log(response)
                this.retrieveOffers();
                this.bMessage = true
                this.message = 'La oferta se borro correctamente'
            },error =>{
                this.bMessage = true
                console.log(error)
                this.message = 'No existe la tarea'
            }
        )
    }
}
