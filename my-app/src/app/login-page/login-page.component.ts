import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth/auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})



export class LoginPageComponent implements OnInit {

 loginForm: FormGroup;
 loading = false;
 returnUrl: string;
 error:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public authService: AuthService,
  ){}

  get f() { return this.loginForm.controls}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usercode:"",pin:""
    })
   
  }

  login() {
    this.loading = true;
    
    const{usercode,pin}=this.loginForm.value;

    this.authService.login(usercode,pin).subscribe(()=>{
    
      if(this.authService.isLoggedIn){
        const redirectURL = "/find-product";

        //Redirect user
        this.router.navigate([redirectURL])
        this.error = false;
       
      } else{
        this.error = true;
      }
      this.loading = false;
    })
  }


  logout(){
    this.authService.logout();
  }

}
