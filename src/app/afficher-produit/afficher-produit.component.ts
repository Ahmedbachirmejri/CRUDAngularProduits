import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { ProductModel } from '../ProductModel';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.css']
})
export class AfficherProduitComponent implements OnInit {
  products!: ProductModel[];
  searchTerm: string = '';
  showProductList: boolean = true;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(data=>{
      this.products = data;
    });
  };

  addProduct(): void {
    this.showProductList = false;
    this.router.navigate(['creer-produit'] );
  }

  deleteProduct(product: ProductModel){
    
    this.productService.deleteProduct(product._id).subscribe(data=>{
      console.log(data);
      this.getAllProducts();
    });
  }

  updateProduct(product: ProductModel){
    localStorage.removeItem("productId");
    localStorage.setItem("productId", product._id);
    this.router.navigate(['modifier-produit']);
  }
  filterProducts(): ProductModel[] {
    if (!this.searchTerm) {
      return this.products; 
    }
    return this.products.filter(product => product.nom.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  
}
