import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: object;
  editProduct: any;
  error: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findProduct();
    this.editProduct = {title: "", price: 0.00, image: ""};
  }

  findProduct(){
    console.log("Component: findProduct")
    this._route.params.subscribe((params)=>{
      let tempObs = this._httpService.getOneProduct(params["id"]);
      tempObs.subscribe((data:any)=>{
        this.editProduct = data;
        console.log("~Component: editProduct response~", this.editProduct)
      })
    })
  }

  onEdit(){
    console.log("edit submit function")
    this._route.params.subscribe((params)=>{
      let observable = this._httpService.editProduct(params['id'], this.editProduct);
      observable.subscribe((data:any) => {
        console.log("data from edit", data)
        if(!data.error){
          this._router.navigate(["/products"]);
        }
        else{
          console.log("**edit component fail", data.error)
        }
      })
    })
  }
}
