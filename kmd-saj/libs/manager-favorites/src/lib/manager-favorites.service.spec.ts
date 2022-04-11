import { TestBed } from '@angular/core/testing';

import { ManagerFavoritesService } from './manager-favorites.service';

describe('ManagerFavoritesService', () => {
  let service: ManagerFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
