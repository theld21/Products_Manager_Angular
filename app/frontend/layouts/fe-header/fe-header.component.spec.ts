import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeHeaderComponent } from './fe-header.component';

describe('FeHeaderComponent', () => {
  let component: FeHeaderComponent;
  let fixture: ComponentFixture<FeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
