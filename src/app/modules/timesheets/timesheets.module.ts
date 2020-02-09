import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetsRoutingModule } from './timesheets-routing.module';
import { TimesheetsComponent } from './pages/timesheets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimesheetCreationComponent } from './pages/timesheet-creation/timesheet-creation.component';
import { TimesheetListComponent } from './pages/timesheet-list/timesheet-list.component';

import { TableModule } from 'primeng/table';
import { TimesheetViewComponent } from './pages/timesheet-view/timesheet-view.component';



@NgModule({
  declarations: [
    TimesheetsComponent,
    TimesheetCreationComponent,
    TimesheetListComponent,
    TimesheetViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TimesheetsRoutingModule,

    // primeng
    TableModule,
  ]
})
export class TimesheetsModule { }
