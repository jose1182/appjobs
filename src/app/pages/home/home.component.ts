import { OffertService } from './../../services/offer.service';
import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css'],
    providers:[OffertService]
})

export class HomeComponent{

    constructor(
        private offertService: OffertService
    ){

    }

    ngOnInit(): void {
        this.offertService.getOffers().subscribe(
            response => {
                console.log(response)
            },error => {
                console.log(error);
            }
        )
    }

}