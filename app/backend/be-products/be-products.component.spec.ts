import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeProductsComponent } from './be-products.component';

describe('BeProductsComponent', () => {
  let component: BeProductsComponent;
  let fixture: ComponentFixture<BeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
