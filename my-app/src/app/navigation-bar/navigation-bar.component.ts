import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service"
import {Router} from '@angular/router';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  isLoggedIn: boolean;

  constructor( public authService: AuthService, private router: Router) { }

  ngOnInit() {
   
    this.router.events.subscribe(event=>{
      if(event.constructor.name === 'NavigationEnd'){ 
        this.isLoggedIn = this.authService.testUser();
       }
    })
   
  }

  logout() {
    this.authService.logout();
  }

}
