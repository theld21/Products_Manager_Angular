import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeProductDetailsComponent } from './fe-product-details.component';

describe('FeProductDetailsComponent', () => {
  let component: FeProductDetailsComponent;
  let fixture: ComponentFixture<FeProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
