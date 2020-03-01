import { Component, OnInit } from '@angular/core';
import { MODE } from 'src/app/shared/model/MODE';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { WPReport } from 'src/app/shared/model/WPReport';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/core/service/report/report.service';

@Component({
  selector: 'app-wp-report-creation',
  templateUrl: './wp-report-creation.component.html',
  styleUrls: ['./wp-report-creation.component.css']
})
export class WpReportCreationComponent implements OnInit {

  mode: MODE = MODE.Create;
  wpr: WPReport = null;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('empId');
      this.reportService.getWpReport(id).subscribe(r => this.wpr = r);
    });
  }

}
