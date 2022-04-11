import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryResultsTableComponent } from './summary-results-table/summary-results-table.component';

// TODO: CDK Table if we want to highly customize
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { SummaryResultsSearchComponent } from './summary-results-search/summary-results-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagerFavoritesModule } from '@kmd-saj/manager-favorites';

const routes: Routes = [
  {
    path: ``,
    component: SummaryResultsTableComponent,
  },
];

@NgModule({
  imports: [
    ManagerFavoritesModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SummaryResultsTableComponent, SummaryResultsSearchComponent],
})
export class SummaryResultsModule {}
