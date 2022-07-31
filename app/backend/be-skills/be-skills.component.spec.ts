import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeSkillsComponent } from './be-skills.component';

describe('BeSkillsComponent', () => {
  let component: BeSkillsComponent;
  let fixture: ComponentFixture<BeSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
