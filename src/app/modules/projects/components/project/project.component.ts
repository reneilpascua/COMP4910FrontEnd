import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';
import { ProjectService } from 'src/app/core/service/project/project.service';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';
import { SelectItem } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  @Input() mode: MODE;
  @Input() alerts;
  @Input() validProjectCode: boolean;
  employeeDropdown: SelectItem[] = null;
  @Output() changeProjectCode: EventEmitter<string> = new EventEmitter<string>();


  constructor(
    private authService: AuthenticationService,
    private projectService: ProjectService,
    private employeeService: EmployeeService) {
  }

  ngOnInit() {
    if (this.mode !== MODE.Read) this.populateEmployeeDropdown();
  }

  // Populates employee dropdown
  populateEmployeeDropdown() {
    this.employeeService
      .getEmployees()
      .subscribe(employees => {
        this.employeeDropdown = [];
        employees.forEach(e => {
          // Not showing pm in the teamMembers dropdown list
          if (e.employeeId !== this.project.projectManager.employeeId)
            this.employeeDropdown.push(
              { label: `${e.empFirstName} ${e.empLastName}`, value: e }
            );
        })
        console.log(this.employeeDropdown);
      })
  }

  // Adds selected entries from employee dropdown list to project.teamMembers
  // teamMemberSelect() {
  //   var savedItems = [];
  //   if (this.project.teamMembers.length > 0) {
  //     savedItems = this.project.teamMembers;
  //   }
  //   var temp = [];
  //   for (var i = 0; i < this.employees.length; i++) {
  //     var label = this.employees[i].label.split(" ");
  //     var efn = label[0];
  //     var eln = label[1];
  //     var eid = this.employees[i].value;

  //     var tempJson = {
  //       "empFirstName": efn,
  //       "empLastName": eln,
  //       "employeeId": eid
  //     };
  //     temp.push(tempJson);
  //   }
  //   this.project.teamMembers = temp;
  // }

  onStartDateChange(value: Date): void {
    console.log(value);
    this.project.startDate = value;
  }

  onEndDateChange(value: Date): void {
    console.log(value);
    this.project.endDate = value;
  }

  // exit event of emp id field
  onExitProjectCode() {
    this.changeProjectCode.emit('payload');
  }

}