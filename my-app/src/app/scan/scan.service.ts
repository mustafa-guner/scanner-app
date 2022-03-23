import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  isScanned:boolean = false;
  scannedProduct = null;

  // store the URL so we can redirect after scanning
  redirectUrl: string | null = null;
  constructor() { }


  scan(): Observable<boolean>{
    //import here http request to make API call for product barcode
    const hardcoded_product = {price:"$2000",name:"Apple Watch",description:"Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email. Apple released the Apple Watch on April 24, 2015.",image:"https://www.apple.com/newsroom/images/product/watch/standard/applewatch_series_3_two_loop_full.jpg.og.jpg"}
    window.localStorage.setItem("product",JSON.stringify(hardcoded_product))
    this.scannedProduct = hardcoded_product;
    return of(true).pipe(delay(1000),tap(()=>this.isScanned=true)) //1 second delay
  }
}



