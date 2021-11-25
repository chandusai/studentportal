import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTableContainerComponent } from './results-table-container.component';

describe('ResultsTableContainerComponent', () => {
  let component: ResultsTableContainerComponent;
  let fixture: ComponentFixture<ResultsTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsTableContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
