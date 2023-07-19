import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:9090/";

  getAllProducts(){
    return this.http.get<ProductModel[]>(this.baseurl + 'produit/getall');
  }

  addProduct(product: ProductModel){
    return this.http.post(this.baseurl + 'produit/addproduct', product);
  }

  getProductById(id: string){
    return this.http.get<ProductModel>(this.baseurl + 'produit' + '/getid/' + id);
  }
  deleteProduct(id: string){
    return this.http.delete(this.baseurl + 'produit' + '/deleteid/' + id);
  }

  updateProduct(productId: string, product: ProductModel) {
    return this.http.put(this.baseurl + 'produit/update/' + productId, product);
  }
  
  
}
