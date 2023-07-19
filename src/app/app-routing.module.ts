import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerProduitComponent } from './creer-produit/creer-produit.component';
import { AfficherProduitComponent } from './afficher-produit/afficher-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';

const routes: Routes = [
  { path: 'creer-produit', component: CreerProduitComponent },
  { path: 'afficher-produit', component: AfficherProduitComponent },
  { path: 'modifier-produit', component: ModifierProduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {
  
 }
