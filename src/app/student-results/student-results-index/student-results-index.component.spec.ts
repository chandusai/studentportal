import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResultsIndexComponent } from './student-results-index.component';

describe('StudentResultsIndexComponent', () => {
  let component: StudentResultsIndexComponent;
  let fixture: ComponentFixture<StudentResultsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentResultsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResultsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
