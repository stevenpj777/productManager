import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get("/products");
  }

  getOneProduct(id:string){
    return this._http.get("/products/"+id);
  }

  postProduct(prod){
    return this._http.post("/add", prod);
  }

  editProduct(id:string, editProduct:object){
    return this._http.put("/edit/"+id, editProduct);
  }

  deleteProduct(id:string){
    return this._http.delete("/delete/"+id);
  }

}
