import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffertService } from 'src/app/services/offer.service';

@Component({
    selector: 'app-titleoffers',
    templateUrl: './titleoffers.component.html',
    styleUrls: ['./titleoffers.component.css'],
    providers:[OffertService]
})
export class TitleOffersComponent implements OnInit {

    public arrayTittleOffert: Array<any>;

    constructor(
        private offertService: OffertService,
        private router: Router
    ) { }

    ngOnInit(): void { 
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
}
