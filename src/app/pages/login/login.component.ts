import { AccounttService } from './../../services/account.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css'],
    providers:[AccounttService]
})

export class LoginComponent implements OnInit, OnDestroy{

    loginForm: FormGroup;
    submitted =  false;
    message = '';
    bMessage = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accounService: AccounttService
    ){
        //check if user is already logged then redirect to home
        if(!accounService.isAuthenticated()){
            router.navigate(['home'])
        }
    }

    ngOnInit(){
        this.message = ''
        this.bMessage =  false
        this.loginForm = this.formBuilder.group({
            username:['', [Validators.required]],
            password:['', [Validators.required]],
            remenberMe:[false]
        })
    }

    get f() {
        return this.loginForm.controls;
    }

    ngOnDestroy(){}

    onSubmit(){

        this.submitted = true;

        if(this.loginForm.invalid){
            return
        }
        

        this.accounService.login(this.f.username.value, this.f.password.value, this.f.remenberMe.value).subscribe(
            response =>{
                console.log(response)
                this.accounService.setToken(response.id_token);
                this.router.navigate(['/home/offert']);
            }, error => {
                this.bMessage = true
                console.log(error)
                this.message = 'Unauthorized - Credenciales incorrectas'
            }
        );



    }

}