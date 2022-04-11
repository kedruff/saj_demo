import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFavoritesOverlayComponent } from './manager-favorites-overlay.component';

describe('ManagerFavoritesOverlayComponent', () => {
  let component: ManagerFavoritesOverlayComponent;
  let fixture: ComponentFixture<ManagerFavoritesOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerFavoritesOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerFavoritesOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
