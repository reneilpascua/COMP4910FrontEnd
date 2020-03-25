import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { WpService } from 'src/app/core/service/wp/wp.service';
import { Employee } from 'src/app/shared/model/Employee';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Alert } from 'src/app/shared/model/Alert';
import { MODE } from 'src/app/shared/model/MODE';
import { PMPlanning } from 'src/app/shared/model/PMPlanning';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wp-edit',
  templateUrl: './wp-edit.component.html',
  styleUrls: ['./wp-edit.component.css']
})
export class WpEditComponent implements OnInit {

  wp: WorkPackage;
  hours: PMPlanning[];
  employees: any[] = [];

  //wpCode validation
  validWpCode: boolean = false;
  alerts = {};
  mode = MODE.Create;

  constructor(
    private route: ActivatedRoute,
    private wpService: WpService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var code = params.get('wpCode');
      this.wpService.getWpByWpCode(code).subscribe(w => {
        this.wp = w;
        this.validateWpCode();
      });
    })
  }

  // btn click event of creation
  onUpdate(e: any) {
    if (!this.validatePage())
      return;
    console.log("POST employee");
    console.log(JSON.stringify(this.wp));
    this.wpService.postWorkPackage(this.wp).subscribe();
  }

  // btn click event of cancel
  onCancel(e: any) { }


  initLabourGradePlanning() {
    this.wp.pmPlannings = [];
    this.employeeService.getLabourGrades().subscribe(grades => {
      grades.forEach(grade => {
        let line = {
          "labourGradeId": grade.labourGradeId,
          "labourGradeName": grade.labourGradeName,
          "pmEAC": 0,
          "reBudget": 0
        };
        this.wp.pmPlannings.push(line);
      })
    })
  }

  validatePage(): boolean {
    var result = true;
    if (this.wp.workPackageTitle === null) {
      this.alerts['wpTitle'] = new Alert('danger', 5000, `WP Title cannot be empty`);
      result = false;
    }
    if (!this.wp.contractor === null) {
      this.alerts['lastName'] = new Alert('danger', 5000, `Contractor cannot be empty`);
      result = false;
    }
    if (!this.validWpCode) {
      this.alerts['wpCode'] = new Alert('danger', 5000, `WP Code: ${this.wp.workPackageCode} is not valid`);
      result = false;
    }
    /*if (!this.validEmployeeCode) {
       this.alerts['employeeCode'] = new Alert('danger', 5000, `Employee ID : ${this.employee.empCode} is not allowed`);
       result = false;
     } */
    this.employees.forEach(e => {
      var emp = e;
      this.wp.employees.push(emp);
    });
    console.log(this.wp.employees);
    return result;
  }
  displayErrorMsg(fieldName: string) {
    return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
  }

  validateWpCode() {
    this.validWpCode = true;
    this.alerts = {};
    this.wp.workPackageCode = this.wp.workPackageCode.toUpperCase();
    let code: string = this.wp.workPackageCode;
    var parentCode = null;
    if (this.wp.parentWorkPackageCode)
      parentCode = this.wp.parentWorkPackageCode['value'];

    // When there is no parent code
    if (!parentCode) {
      if (code.match(/^[A-Z]+$/) === null) {
        this.validWpCode = false;
        this.alerts['wpCode'] = new Alert('danger', 5000, `Only allow alphabet characters if no parent work package code.`);
        return false;
      }
      this.validWpCode = true;
      return true;
    }

    // When there is parent code
    let regexp = new RegExp('\\b' + parentCode + '\\d{1}\\b');
    if (code.match(regexp) === null) {
      this.validWpCode = false;
      this.alerts['wpCode'] = new Alert('danger', 5000, `Only appending one more digits to parent code.`);
    }
  }

  onValueChange(value: Date): void {
    console.log(value);
    this.wp.issueDate = this.dateFormater(value);
  }

  dateFormater(d: Date) {
    var yyyy = d.getFullYear();
    var MM = ("00" + (d.getMonth() + 1)).slice(-2);
    var dd = ("00" + (d.getDate())).slice(-2);
    return `${yyyy}-${MM}-${dd}`;
  }

  stringToDate(s: string) {
    var date = new Date(s);
    console.log(date);
    return date;
  }
}
