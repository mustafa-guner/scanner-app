import { Component, OnInit } from '@angular/core';
import {ScanService} from "../../scan/scan.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
 
  constructor(private scanService: ScanService) { }

  product = {price:"",name:"",description:"",image:""};

  ngOnInit() {
   this.product = this.scanService.scannedProduct
  }
}
