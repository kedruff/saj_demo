import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerFavoritesOverlayComponent } from './manager-favorites-overlay/manager-favorites-overlay.component';
import { SaveApplicantButtonComponent } from './save-applicant-button/save-applicant-button.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatTableModule, RouterModule, CommonModule],
  declarations: [
    ManagerFavoritesOverlayComponent,
    SaveApplicantButtonComponent,
  ],
  exports: [SaveApplicantButtonComponent, ManagerFavoritesOverlayComponent],
})
export class ManagerFavoritesModule {}
