import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeProductsComponent } from './fe-products.component';

describe('FeProductsComponent', () => {
  let component: FeProductsComponent;
  let fixture: ComponentFixture<FeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
