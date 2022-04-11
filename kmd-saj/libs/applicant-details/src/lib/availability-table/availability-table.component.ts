import { Component, Input, OnInit } from '@angular/core';
import { ApplicantAvailability } from '@kmd-saj/summary-results';

@Component({
  selector: 'kmd-saj-availability-table',
  templateUrl: './availability-table.component.html',
  styleUrls: ['./availability-table.component.scss'],
})
export class AvailabilityTableComponent {
  @Input() availability: ApplicantAvailability;
}
