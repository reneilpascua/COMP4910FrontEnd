import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';
import { SelectItem } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.css']
})
export class ProjectCreationComponent implements OnInit {

  newProject: Project;
  mode = MODE.Create;
  teamMembers: SelectItem[] = null;
  employeeDropdown: SelectItem[] = null;
  // project validation
  validProjectCode: boolean = false;
  validStartDate: boolean = false;
  alerts = {};

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.newProject = new Project();
  }

  onCreate(e: any) {
    if (!this.validatePage())
      return;
    console.log("POST project");
    console.log(JSON.stringify(this.newProject));
    //this.projectService.postProject(this.project).subscribe();
  }

  onCancel(e: any) { }

  validatePage(): boolean {
    var result = true;
    if (!this.newProject.projectName === null || this.newProject.projectName.match(/^ *$/) !== null) {
      this.alerts['projectName'] = new Alert('danger', 5000, `Project Name cannot be empty`);
      result = false;
    }
    if (isNaN(this.newProject.projectCode)) {
      this.alerts['projectCode'] = new Alert('danger', 5000, `Project Code must be a number`);
      result = false;
    }
    // if (!this.validProjectCode) {
    //   this.alerts['projectCode'] = new Alert('danger', 5000, `Project Code : ${this.newProject.projectCode} is not allowed`);
    //   result = false;
    // }
    if (this.newProject.startDate === null) {
      this.alerts['startDate'] = new Alert('danger', 5000, `Start Date cannot be empty`);
      result = false;
    }
    if (this.newProject.endDate === null) {
      this.alerts['endDate'] = new Alert('danger', 5000, `End Date cannot be empty`);
      result = false;
    }
    if (this.newProject.startDate > this.newProject.endDate) {
      this.alerts['endDate'] = new Alert('danger', 5000, `End date must be after the start Date`);
      result = false;
    }
    return result;
  }

  displayErrorMsg(fieldName: string) {
    return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
  }

    // validates projectCode is unique
    // validateProjectCode() {
    //   this.projectService.checkProjectCode(this.newProject.projectCode)
    //     .subscribe(response => {
    //       console.log(response);
    //       this.validProjectCode = response;
    //     });
    // }

}