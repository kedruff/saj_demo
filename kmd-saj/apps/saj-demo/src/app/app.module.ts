import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SummaryResultsModule } from '@kmd-saj/summary-results';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: ``,
    redirectTo: `applicant-summary`,
    pathMatch: `full`,
  },

  {
    path: `applicant-summary`,
    loadChildren: () =>
      import(`@kmd-saj/summary-results`).then((m) => m.SummaryResultsModule),
    //todo: canActivate
  },
  {
    path: `applicant`,
    loadChildren: () =>
      import(`@kmd-saj/applicant-details`).then(
        (m) => m.ApplicantDetailsModule
      ),
    //todo: canActivate
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SummaryResultsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
