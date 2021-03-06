import { Component, OnInit } from '@angular/core';
import { ProjectReport, WpStatus } from 'src/app/shared/model/ProjectReport';
import { ReportService } from 'src/app/core/service/report/report.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-report-view',
  templateUrl: './project-report-view.component.html',
  styleUrls: ['./project-report-view.component.css']
})
export class ProjectReportViewComponent implements OnInit {

  projectReport: ProjectReport;
  pmViewCols: any[];
  reViewCols: any[];
  pmData: WpStatus[];
  reData: WpStatus[];
  viewMode = 'pm';


  constructor(
    private ReportService: ReportService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    //projectReportId
    this.route.paramMap.subscribe(params => {
      var projectReportId = params.get('projectReportId');
      this.ReportService.getProjectReport(projectReportId).subscribe(r => {
        this.projectReport = r;
        console.log(this.projectReport);
        this.preparePmView(r);
        this.prepareReView(r);
      });
    });
  }
  preparePmView(r: ProjectReport) {
    let data: WpStatus[] = [];
    r.lowWpStatus.forEach(lw => {
      data.push(lw);
    });
    r.highWpStatus.forEach(hw => {
      data.push(hw);
    })
    this.pmData = data;

    this.pmViewCols = [
      { field: 'workPackageCode', header: 'Code' },
      { field: 'workPackageName', header: 'Name' },
      { field: 'wpReBudget', header: 'RE Budget' },
      { field: 'wpActualSpends', header: 'ACWP' },
      { field: 'wpPmEAC', header: 'PM EAC' },
      { field: 'wpPmVariance', header: 'PM Variance' },
      { field: 'wpPmCompletion', header: 'PM Completion' },
      { field: 'isClosed', header: 'Status' },
      { field: 'engineerInitials', header: 'Members' },
    ];
  }
  prepareReView(r: ProjectReport) {
    let data: WpStatus[] = [];
    r.lowWpStatus.forEach(lw => {
      data.push(lw);
    });
    this.reData = data;

    this.reViewCols = [
      { field: 'workPackageCode', header: 'Code' },
      { field: 'workPackageName', header: 'Name' },
      { field: 'wpReBudget', header: 'RE Budget' },
      { field: 'wpActualSpends', header: 'ACWP' },
      { field: 'wpReEAC', header: 'RE EAC' },
      { field: 'wpReVariance', header: 'RE Variance' },
      { field: 'wpReCompletion', header: 'RE Completion' },
      { field: 'isClosed', header: 'Status' },
      { field: 'engineerInitials', header: 'Members' }
    ]
  }

}
