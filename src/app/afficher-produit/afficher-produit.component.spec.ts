import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProduitComponent } from './afficher-produit.component';

describe('AfficherProduitComponent', () => {
  let component: AfficherProduitComponent;
  let fixture: ComponentFixture<AfficherProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherProduitComponent]
    });
    fixture = TestBed.createComponent(AfficherProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
