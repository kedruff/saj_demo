import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SummaryResultsService } from '../summary-results.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'kmd-saj-summary-results-table',
  templateUrl: './summary-results-table.component.html',
  styleUrls: ['./summary-results-table.component.scss'],
})
export class SummaryResultsTableComponent implements OnInit, AfterViewInit {
  summaryResults: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _summaryService: SummaryResultsService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  public displayedColumns = [`name`, `position`, `applied`, `experience`];

  ngOnInit(): void {
    this._summaryService.summaryResults.subscribe((r) => {
      this.summaryResults = new MatTableDataSource(r);
    });
  }
  ngAfterViewInit() {
    this.summaryResults.sort = this.sort;
    this.summaryResults.sortingDataAccessor = (item, property) => {
      // return property === `applied` ? new Date(item.applied) : item.name;
      switch (property) {
        case 'applied':
          return new Date(item.applied);
        default:
          return item[property];
      }
    };
  }
  sortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    }
  }

  filterValue(ev: string) {
    if (this.summaryResults) {
      this.summaryResults.filter = ev;
    }
  }
}
