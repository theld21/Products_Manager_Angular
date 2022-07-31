import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeFooterComponent } from './fe-footer.component';

describe('FeFooterComponent', () => {
  let component: FeFooterComponent;
  let fixture: ComponentFixture<FeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
