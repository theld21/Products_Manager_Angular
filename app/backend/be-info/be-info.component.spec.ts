import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeInfoComponent } from './be-info.component';

describe('BeInfoComponent', () => {
  let component: BeInfoComponent;
  let fixture: ComponentFixture<BeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
