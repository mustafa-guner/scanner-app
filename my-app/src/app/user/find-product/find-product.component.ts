import { Component, OnInit  } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { Router } from '@angular/router';

import { ScanService } from '../../scan/scan.service';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.scss']
})
export class FindProductComponent implements OnInit {


  public scannerEnabled: boolean = true;
  public information: string = "No code information detected. Zoom in on a QR code to scan.";


  //Allowed formats for scanner
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX ];

  constructor( public router: Router,public scanService:ScanService) { }


  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.information = "Wait retrieving information...... ";
    console.log($event)

    //Scanner HTTP Request Service (API) Service here 
    //After async request redirect user to product-detail

    //Hardcoded service
   this.scanService.scan().subscribe(()=>{
    if(this.scanService.isScanned){
      const redirectURL = "/product-detail";

      //Redirect user
      this.router.navigate([redirectURL])
      }
   })
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "No code information detected. Zoom in on a QR code to scan.";
  }
  

  ngOnInit(): void {
  }

}


