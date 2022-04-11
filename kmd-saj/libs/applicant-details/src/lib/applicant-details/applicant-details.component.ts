import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '@kmd-saj/state-management';
import { ApplicantSummaryApiResponse } from '@kmd-saj/summary-results';
import { map } from 'rxjs';

@Component({
  selector: 'kmd-saj-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.scss'],
})
export class ApplicantDetailsComponent implements OnInit {
  applicant: ApplicantSummaryApiResponse;
  constructor(private _route: ActivatedRoute, private _state: StateService) {}

  ngOnInit(): void {
    this._route.params
      .pipe(
        map((route: { [key: string]: string }) => route['id']),
        map((id) => {
          this.applicant = this._state.getApplicantById(id);
        })
      )
      .subscribe();
  }
}
