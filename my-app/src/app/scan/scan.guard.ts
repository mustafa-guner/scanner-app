import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ScanService } from './scan.service'

@Injectable({
  providedIn: 'root'
})
export class ScanGuard implements CanActivate {
  constructor(private router: Router,private scanService: ScanService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(window.localStorage.getItem("product")){
        this.scanService.scannedProduct = JSON.parse(window.localStorage.getItem("product"))
        this.scanService.isScanned = true;
        return true;
      }

      const url:string = state.url;
      return this.checkScan(url);
  }

  checkScan(url: string): true|UrlTree {
    if (this.scanService.isScanned) { return true; }

    // Store the attempted URL for redirecting
    this.scanService.redirectUrl = url;

    // Redirect to the login page
    return this.router.parseUrl('/find-product');
  }
  
}
