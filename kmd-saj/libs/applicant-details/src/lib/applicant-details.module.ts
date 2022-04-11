import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { AvailabilityTableComponent } from './availability-table/availability-table.component';
import { ManagerFavoritesModule } from '@kmd-saj/manager-favorites';

@NgModule({
  imports: [
    ManagerFavoritesModule,
    CommonModule,
    RouterModule.forChild([
      { path: ':id', pathMatch: 'full', component: ApplicantDetailsComponent },
    ]),
  ],
  declarations: [ApplicantDetailsComponent, AvailabilityTableComponent],
})
export class ApplicantDetailsModule {}
