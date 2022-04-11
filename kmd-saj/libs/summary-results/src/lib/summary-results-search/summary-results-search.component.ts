import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kmd-saj-summary-results-search',
  templateUrl: './summary-results-search.component.html',
  styleUrls: ['./summary-results-search.component.scss'],
})
export class SummaryResultsSearchComponent {
  filterForm: FormGroup;
  filterInput: FormControl;
  private _filterValue = new BehaviorSubject<string>(``);
  @Output() filterString$ = this._filterValue.asObservable();

  constructor() {
    this.filterInput = new FormControl();
    this.filterForm = new FormGroup({
      filter: this.filterInput,
    });
  }

  filterSubmit() {
    if (this.filterInput.dirty) {
      this._filterValue.next(this.filterInput.value);
    }
  }
  filterClear() {
    this.filterInput.setValue(``);
    this._filterValue.next(this.filterInput.value);
  }
}
