import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;


  login(usercode:string,pin:string): Observable<boolean> {

    //Hardcoded credentials for login
    const valid_usercode = "TEST";
    const valid_pin = "1234";

    const LOGIN_SUCCESS:boolean = valid_usercode === usercode && valid_pin ===pin;

    //save user to local storage if hardcoded credentials true
    if(LOGIN_SUCCESS){
      window.localStorage.setItem("current_user","yes");
    }

    return of(LOGIN_SUCCESS).pipe(delay(1000),tap(()=>this.isLoggedIn=LOGIN_SUCCESS)) //1 second delay
  }

  testUser(){
    return window.localStorage.getItem("current_user") === "yes";
  }

  logout():void{
    this.isLoggedIn = false;
    //Clear local storage on logout
    window.localStorage.removeItem("current_user");
    
  }
}
