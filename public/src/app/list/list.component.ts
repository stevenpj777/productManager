import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    console.log("**Component: getproducts() initialzed**")
    let tempObs = this._httpService.getAllProducts();
    tempObs.subscribe((data:any)=>{
      console.log("**Component: getproducts()**", data)
      this.products = data;
    })
  }

  deleteProduct(id:string){
    console.log("**Component: deleteProduct()**")
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data=>{
      console.log("**Component: deleteAuthor()**,", data)
      this.getProducts();
    })
  }
}
