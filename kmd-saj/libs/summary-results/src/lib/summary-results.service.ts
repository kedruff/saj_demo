import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApplicantSummaryApiResponse } from './interfaces/applicants.interfaces';
import { StateService } from '@kmd-saj/state-management';

@Injectable({
  providedIn: 'root',
})
/**
 * TODO: Tokens? Correlation IDs?
 * Implement a proper CDK data source rather than downloading client side
 * and populating table from there
 */
export class SummaryResultsService {
  private get summaryCache() {
    if (this._summaryCache.length > 0) {
      return this._summaryCache;
    }

    return localStorage.getItem(`summaryCache`)
      ? JSON.parse(localStorage.getItem(`summaryCache`) as string)
      : [];
  }

  // TODO: move to idxDB
  private set summaryCache(r) {
    this._summaryCache = r;
    localStorage.setItem(`summaryCache`, JSON.stringify(r));
  }

  private _summaryCache: ApplicantSummaryApiResponse[] = [];

  constructor(private _http: HttpClient, private _state: StateService) {}
  get summaryResults(): Observable<ApplicantSummaryApiResponse[]> {
    return of(this._state.allApplicants);
    //   if (this._summaryCache.length > 0) {
    //     return of(this.summaryCache);
    //   }
    //   return this._http
    //     .get<[ApplicantSummaryApiResponse]>(`/summary-results`)
    //     .pipe(tap((r) => (this.summaryCache = r)));
    //
  }
}
