import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '@kmd-saj/state-management';
import { take, tap } from 'rxjs';

@Component({
  selector: 'kmd-saj-save-applicant-button',
  templateUrl: './save-applicant-button.component.html',
  styleUrls: ['./save-applicant-button.component.scss'],
})
export class SaveApplicantButtonComponent implements OnInit {
  @Input() applicantId: number;
  constructor(private _appState: StateService) {}

  get isSaved() {
    return this._saved;
  }
  set isSaved(s: boolean) {
    this._saved = s;
  }
  private _saved = false;

  ngOnInit() {
    // TODO Better subscription cleanup
    this._appState.favorites$
      .pipe(
        take(1),
        tap((r) => {
          this.isSaved = r.has(this.applicantId);
        })
      )
      .subscribe();
  }

  toggleFavorite() {
    if (this.isSaved) {
      this._appState.removeFavorite(this.applicantId);
    } else {
      this._appState.addFavorite(this.applicantId);
    }
    this._saved = !this.isSaved;
  }
}
