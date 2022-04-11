import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryResultsTableComponent } from './summary-results-table.component';

describe('SummaryResultsTableComponent', () => {
  let component: SummaryResultsTableComponent;
  let fixture: ComponentFixture<SummaryResultsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryResultsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
