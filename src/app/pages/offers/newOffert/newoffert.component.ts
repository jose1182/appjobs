import { Component, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffertService } from "src/app/services/offer.service";


@Component({
    selector: 'app-newoffert',
    templateUrl: './newoffert.component.html',
    styleUrls: ['./newoffert.component.css'],
    providers:[OffertService]
})
export class NewOffertComponent implements OnInit {
    //Create FormGroup object to be able to bound to form element
    offertform: FormGroup;
    //Create a bool variable to know when the submit button was pulsed 
    submitted = false;
  
      constructor(
          //Create FormBuilder to be able to create a group
          private formBuilder: FormBuilder,
          //private RegisterService to be able to acces the properties
          private _offertService: OffertService,
          //Use to be able to redirect to another pages
          private router: Router,
      ){}
  
  
      // Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
      ngOnInit(){
          //Create a form group to bound form tempplate with validatros rules
          this.offertform = this.formBuilder.group({
              titulo:['', [Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
              descripcion:['', [Validators.required,Validators.minLength(3), Validators.maxLength(200)]],
              empresa:['', [Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
              salario:['', [Validators.required]],
              ciudad:['', [Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
              email:['',[Validators.required, Validators.email]],
          });
      }
  
      // función getter para un fácil acceso a los campos del formulario
      get f() { return this.offertform.controls; }
  
      ngOnDestroy(){}
  
      onSubmit(){
          //Set to true when button register is pulsed
          this.submitted = true;
  
          //Is some validation was unseccessfull return nothing, is not possible to continue
          if(this.offertform.invalid){
              return
          }

          const offert = {
              titulo : this.offertform.value.titulo,
              descripcion: this.offertform.value.descripcion,
              empresa: this.offertform.value.empresa,
              salario: this.offertform.value.salario,
              ciudad: this.offertform.value.ciudad,
              email: this.offertform.value.email
          };

          //Get acces to methos from RegisterService Class passing the value Form Obect
          this._offertService.createNewOffert(offert).subscribe(
              response =>{
                console.log(response)
                  
                //Redirect to Login page
                this.router.navigate(['/home/offert']);
              },error =>{
                console.log(console.error());
                
              }
          )

      }
  
  }
