import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../ProductModel';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {
  product!: ProductModel;
  editForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    let productId = localStorage.getItem('productId');
    if (!productId) {
      alert('Something wrong!');
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      nom: ['', Validators.required],
      quantite: ['', Validators.required],
      prix: ['', Validators.required],
    });

    this.productService.getProductById(productId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue({
        id: productId, // Set the id from the API response
        nom: data.nom,
        quantite: data.quantite,
        prix: data.prix,
      });
    });
  }

  // get the form short name to access the form fields
  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;
  
    if (this.editForm.valid) {
      const productId = this.editForm.value.id; // Get the product ID from the form
  
      if (!productId) {
        console.log('Product ID is undefined.');
        return;
      }
  
      this.productService.updateProduct(productId, this.editForm.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['afficher-produit']);
      }, error => {
        console.log('Error:', error);
      });
    }
  }
  
}
