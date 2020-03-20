import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/core/service/report/report.service';

@Component({
  selector: 'app-project-report-list',
  templateUrl: './project-report-list.component.html',
  styleUrls: ['./project-report-list.component.css']
})
export class ProjectReportListComponent implements OnInit {


  displayReports: any[] = [];
  cols: any[];

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'endDate', header: 'Month' },
      { field: 'reportDate', header: 'Report Date' },
      { field: 'startDate', header: 'Start Date' },
      { field: 'endDate', header: 'End Date' },
    ];
    this.populateReports();
  }

  populateReports() {
    this.reportService.getAllProjectReports(32)
      .subscribe(res => {
        res.forEach(r => {
          this.displayReports.push(
            {
              'reportDate': new Date(r.reportDate),
              'startDate': new Date(r.startDate),
              'endDate': new Date(r.endDate),
              'projectReportId': r.projectReportId
            }
          );
        })
      })
  }

}
