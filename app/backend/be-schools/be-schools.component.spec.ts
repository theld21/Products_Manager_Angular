import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeSchoolsComponent } from './be-schools.component';

describe('BeSchoolsComponent', () => {
  let component: BeSchoolsComponent;
  let fixture: ComponentFixture<BeSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeSchoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
