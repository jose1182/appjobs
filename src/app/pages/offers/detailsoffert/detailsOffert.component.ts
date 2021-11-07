import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OffertService } from 'src/app/services/offer.service';

@Component({
    selector: 'app-detailsoffert',
    templateUrl: './detailsoffert.component.html',
    styleUrls: ['./detailsoffert.component.css']
})
export class DetailsOffertComponent implements OnInit {

    public sub: any;
    public details: any;
    message = '';
    bMessage = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private offertService: OffertService,
    ) { }

    ngOnInit(): void {
        this.message = ''
        this.bMessage =  false
        this.sub = this.route.paramMap.subscribe((params: Params) => {
            this.offertService.getOffertById(params.get('id')).subscribe(
                response => {
                    console.log(response)
                    this.details = response;
                },error => {
                    this.bMessage = true
                    console.log(error)
                    this.message = 'No existe la tarea'
                }
            )
        })
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();        
    }
}
