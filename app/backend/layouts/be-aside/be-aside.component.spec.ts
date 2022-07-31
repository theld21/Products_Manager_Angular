import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeAsideComponent } from './be-aside.component';

describe('BeAsideComponent', () => {
  let component: BeAsideComponent;
  let fixture: ComponentFixture<BeAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
