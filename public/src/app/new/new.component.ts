import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct = {title: "", price: "", image: ""};
  error = "";

  constructor(private _httpService: HttpService, private _router: Router) {
  }

  ngOnInit(){
  }

  addProduct(){
    console.log("addProduct() function")
    if (this.newProduct.title.length < 4) {
      this._router.navigate(["/products/new"]);
    }
    if (this.newProduct.price == '') {
      this._router.navigate(["/products/new"]);
    }
    else {
      var tempObs = this._httpService.postProduct(this.newProduct);
      tempObs.subscribe((data:any)=>{
        console.log("addProduct() data ", data);
        // this.error = data.error.errors.title.message;
        if(!data.error){
          console.log("Add successful")
          this._router.navigate(["/products"]);
        }
      })
    }

  }
}
