import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Employee } from 'src/app/shared/model/Employee';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { MODE } from 'src/app/shared/model/MODE';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Input() mode: MODE;
  grade: SelectItem[] = null;
  employeeDropdown: SelectItem[] = null;
  selectedGrade: SelectItem;
  selectedSupervisor: SelectItem;
  // userName validation
  @Input() validUsername: boolean;
  @Input() validEmployeeCode: boolean;
  @Input() alerts;

  constructor(
    private employeeService: EmployeeService,
  ) {
    this.grade = [
      { "label": 'P1', "value": 1 },
      { "label": 'P2', "value": 2 },
      { "label": 'P3', "value": 3 },
      { "label": 'P4', "value": 4 },
    ];
  }

  ngOnInit() {
    if (this.mode !== MODE.Read) this.populateEmployeeDropdown();

  }
  populateEmployeeDropdown() {
    this.employeeDropdown = [];
    this.employeeService
      .getEmployees()
      .subscribe(employees => {
        console.log(employees);
        employees.forEach(e => {
          console.log(e);
          this.employeeDropdown.push(
            { label: `${e.empFirstName} ${e.empLastName}`, value: e.employeeId }
          );
        })
        console.log(this.employeeDropdown);
      })
  }

  // exit event of emp id field
  onExitEmployeeId() {
    this.employeeService.checkUserEmployeeCodeOK(this.employee.empCode)
      .subscribe(response => {
        console.log(response);
        this.validEmployeeCode = response;
      })
  }

  // exit event of user name
  onExitUserName() {
    console.log(this.employee.empUsername);
    this.employeeService.checkUserNameOK(this.employee.empUsername)
      .subscribe(response => {
        console.log(response);
        this.validUsername = response;
      })
  }

}
