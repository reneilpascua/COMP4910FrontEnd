import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/service/employee/employee.service';
import { Employee } from 'src/app/shared/model/Employee';
import { User } from 'src/app/shared/model/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { __values } from 'tslib';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // employeeList: User[];
  cred: User;
  employee: User;

  constructor(private employeeService: EmployeeService, private http: HttpClient) { }

  ngOnInit() {
  }



}