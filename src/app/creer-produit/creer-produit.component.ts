import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from '../product.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-creer-produit',
  templateUrl: './creer-produit.component.html',
  styleUrls: ['./creer-produit.component.css']
})
export class CreerProduitComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) { }

  addForm!: FormGroup;
  submitted = false;
  selectedImage: File | null = null;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      nom: ['', Validators.required],
      quantite: ['', Validators.required],
      prix: ['', Validators.required],
      
    });
  }

  onSubmit(){
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    // Préparez l'objet du produit à envoyer au backend
    const productData = this.addForm.value;

    this.productService.addProduct(productData)
      .pipe(first())
      .subscribe(
        data => {
          console.log('Produit créé avec succès:', data);
          this.router.navigate(['afficher-produit']);
        },
        error => {
          console.error('Erreur lors de la création du produit:', error);
        }
      );
  }

  onImageChange(event: any) {
    // Récupérer l'image sélectionnée
    const file = event.target.files[0];
    this.selectedImage = file;
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }
}
