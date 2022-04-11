import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveApplicantButtonComponent } from './save-applicant-button.component';

describe('SaveApplicantButtonComponent', () => {
  let component: SaveApplicantButtonComponent;
  let fixture: ComponentFixture<SaveApplicantButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveApplicantButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveApplicantButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
