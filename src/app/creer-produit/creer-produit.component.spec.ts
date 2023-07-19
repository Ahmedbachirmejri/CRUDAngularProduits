import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerProduitComponent } from './creer-produit.component';

describe('CreerProduitComponent', () => {
  let component: CreerProduitComponent;
  let fixture: ComponentFixture<CreerProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerProduitComponent]
    });
    fixture = TestBed.createComponent(CreerProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
