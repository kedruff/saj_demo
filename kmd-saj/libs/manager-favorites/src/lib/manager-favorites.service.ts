import { Injectable } from '@angular/core';
import { StateService } from '@kmd-saj/state-management';
import { ApplicantSummaryApiResponse } from '@kmd-saj/summary-results';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerFavoritesService {
  managerFavorites = this._appState.favorites$;

  // addFavoriteByApplicant(applicant: ApplicantSummaryApiResponse) {
  //   this._appState.addFavoriate.add(applicant.id);
  //   this._favorites.next(this._appState.currentFavorites);
  // }
  addFavoriteById(id: number) {
    this._appState.addFavorite(id);
    // this._favorites.next(this._appState.currentFavorites);
  }
  removeFavoriteById(id: number) {
    this._appState.removeFavorite(id);
    // this._favorites.next(this._appState.currentFavorites);
  }
  constructor(private _appState: StateService) {}
}
