import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeProductFormComponent } from './be-product-form.component';

describe('BeProductFormComponent', () => {
  let component: BeProductFormComponent;
  let fixture: ComponentFixture<BeProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeProductFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
