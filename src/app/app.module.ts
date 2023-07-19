import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule  } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreerProduitComponent } from './creer-produit/creer-produit.component';
import { AfficherProduitComponent } from './afficher-produit/afficher-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { SupprimerProduitComponent } from './supprimer-produit/supprimer-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreerProduitComponent,
    AfficherProduitComponent,
    ModifierProduitComponent,
    SupprimerProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
