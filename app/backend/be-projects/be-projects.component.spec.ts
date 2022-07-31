import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeProjectsComponent } from './be-projects.component';

describe('BeProjectsComponent', () => {
  let component: BeProjectsComponent;
  let fixture: ComponentFixture<BeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
