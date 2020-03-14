import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';
import { SelectItem } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  project: Project;
  mode = MODE.Create;
  teamMembers: SelectItem[] = null;
  employeeDropdown: SelectItem[] = null;
  // project validation
  validProjectCode: boolean = false;
  validStartDate: boolean = false;
  alerts = {};

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private employeeService: EmployeeService,
    private modalService: BsModalService
  ) { }
  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   var id = params.get('projId');
    //   this.projectService.getProject(id).subscribe(e => this.project = e);
    // });
  }

  onUpdate() {
    if (!this.validatePage())
      return;
    console.log("PUT project");
    console.log(JSON.stringify(this.project));
    // this.employeeService.putProject(this.project).subscribe();
  }

  onCancel(e: any) { }

  validatePage(): boolean {
    var result = true;
    if (!this.project.projectName === null || this.project.projectName.match(/^ *$/) !== null) {
      this.alerts['projectName'] = new Alert('danger', 5000, `Project Name cannot be empty`);
      result = false;
    }
    if (isNaN(this.project.projectCode)) {
      this.alerts['projectCode'] = new Alert('danger', 5000, `Project Code must be a number`);
      result = false;
    }
    // if (!this.validProjectCode) {
    //   this.alerts['projectCode'] = new Alert('danger', 5000, `Project Code : ${this.project.projectCode} is not allowed`);
    //   result = false;
    // }
    if (this.project.startDate === null) {
      this.alerts['startDate'] = new Alert('danger', 5000, `Start Date cannot be empty`);
      result = false;
    }
    if (this.project.endDate === null) {
      this.alerts['endDate'] = new Alert('danger', 5000, `End Date cannot be empty`);
      result = false;
    }
    if (this.project.startDate > this.project.endDate) {
      this.alerts['endDate'] = new Alert('danger', 5000, `End date must be after the start Date`);
      result = false;
    }
    return result;
  }

  displayErrorMsg(fieldName: string) {
    return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
  }



}