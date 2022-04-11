import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StateService } from '@kmd-saj/state-management';
import { ApplicantSummaryApiResponse } from '@kmd-saj/summary-results';
import { map, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'kmd-saj-manager-favorites-overlay',
  templateUrl: './manager-favorites-overlay.component.html',
  styleUrls: ['./manager-favorites-overlay.component.scss'],
})
export class ManagerFavoritesOverlayComponent implements OnInit, OnDestroy {
  /**
   * TODO: Break out the table component into a single component
   */
  displayedColumns = ['name', 'position', 'remove'];
  constructor(private _state: StateService) {}

  managerFavorites: MatTableDataSource<any>;
  favs: Set<ApplicantSummaryApiResponse>;

  _destroyed = new Subject();
  ngOnInit() {
    this._state.favorites$
      .pipe(
        tap(() => (this.managerFavorites = new MatTableDataSource())),
        map((r: Set<number>) => {
          this.favs = new Set();
          r.forEach((favoritedId) => {
            this.favs.add(this._state.getApplicantById(`${favoritedId}`));
          });
        }),
        takeUntil(this._destroyed)
      )
      .subscribe(() => {
        console.log(`subscribe`, this.favs);
        this.managerFavorites = new MatTableDataSource(Array.from(this.favs));
      });
  }

  ngOnDestroy() {
    this._destroyed.next(true);
    this._destroyed.complete();
  }

  removeFavorite(id: string) {
    this._state.removeFavorite(parseInt(id));
  }
}
