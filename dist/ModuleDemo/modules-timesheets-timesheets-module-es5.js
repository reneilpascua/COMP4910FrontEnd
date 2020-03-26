function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-timesheets-timesheets-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetApproverViewListTimesheetApproverViewListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <h3 class=\"display-4\">Pending Timesheet List</h3>\n        <div class=\"dropdown-divider \"></div>\n        <h3 class=\"lead\">The table below lists all pending timesheet that waiting your approval.</h3>\n\n        <p-table #dt [columns]=\"cols\" [value]=\"displayTimesheet\" [paginator]=\"true\" [rows]=\"10\"\n            [style]=\"{'text-align':'center'}\">\n            <ng-template pTemplate=\"caption\">\n                <div style=\"text-align: right\">\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n                </div>\n            </ng-template>\n            <ng-template pTemplate=\"header\" let-columns>\n                <tr>\n                    <th *ngFor=\"let col of columns\">\n                        {{col.header}}\n                    </th>\n                    <th></th>\n                </tr>\n                <tr>\n                    <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                        <input *ngSwitchCase=\"'empName'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            style=\"width: 100%;\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'supervisor'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            style=\"width: 100%;\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'approver'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            style=\"width: 100%;\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'weekNumber'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            style=\"width: 100%;\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'versionNumber'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            style=\"width: 100%;\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'weekEndingIn'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            style=\"width: 100%;\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'status'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            style=\"width: 100%;\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                    </th>\n                    <th></th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                <tr [pSelectableRow]=\"rowData\">\n                    <td *ngFor=\"let col of columns\">\n                        <span *ngIf=\"col.field !=='status'\">{{rowData[col.field]}}</span>\n                        <h5 *ngIf=\"col.field ==='status'\">\n                            <span [className]=\"colorStatus(rowData[col.field])\">{{rowData.status}}</span>\n                        </h5>\n                    </td>\n                    <td>\n                        <button type=\"button\" class=\"btn btn-link btn-sm\"\n                            [routerLink]=\"['/content/timesheets/approver/view/', rowData.timesheetId]\">View</button>\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetApproverViewTimesheetApproverViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <h3>\n            <span class=\"display-4 mb-3 mr-3\">Pending Detail</span>\n            <span *ngIf=\"timesheet\" [className]=\"colorStatus(timesheet.status)\">{{timesheet.status}}</span>\n        </h3>\n\n        <div class=\"dropdown-divider \"></div>\n\n        <shared-timesheet *ngIf=\"timesheet\" [mode]=\"mode\" [timesheet]=\"timesheet\">\n        </shared-timesheet>\n\n        <div class=\"dropdown-divider my-3\"></div>\n        <h5 class=\"my-3\">Approver View</h5>\n\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Comment</span>\n            </div>\n            <textarea class=\"form-control\" aria-label=\"With textarea\" (change)=\"onTextareaChange($event)\"\n                *ngIf=\"timesheet\">{{timesheet.comment}}</textarea>\n            <!-- <input type=\"textarea\" class=\"form-control\" [(ngModel)]=\"timesheet.comment\" (blur)=\"onExitEmployeeId()\"> -->\n\n        </div>\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-outline-success  m-1 px-3\" (click)=\"onApprove($event)\">Approve</button>\n            <button type=\"button\" class=\"btn btn-outline-danger m-1 px-2\" (click)=\"onReject($event)\">Reject</button>\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\">Cancel</button>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetCreationTimesheetCreationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\" *ngIf=\"dataReady\">\n    <div class=\"card-body\">\n        <h3 class=\"display-4 mb-3\">Create Timesheet</h3>\n\n        <div class=\"dropdown-divider \"></div>\n\n        <shared-timesheet [mode]=\"mode\" [timesheet]=\"timesheet\" [projectWp]=\"projectWp\"> </shared-timesheet>\n\n        <div class=\"dropdown-divider my-3\"></div>\n\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onSave($event)\">Save</button>\n            <button type=\"button\" class=\"btn btn-danger m-1 px-2\" (click)=\"onSubmit($event,template)\">Submit</button>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- confirmation window -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Submit Timsheet</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <strong class=\"text-warning\">This action cannot be undo.</strong><br>\n        <strong class=\"h5\">Are you sure to submit this timesheet to your supervisor?</strong><br>\n        After submission, this timesheet will not be editable anymore and this timesheet will be in pending state.<br>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\" (click)=\"modalRef.hide()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger  m-1 px-3\" (click)=\"onSubmitConfrimed()\">Submit</button>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetEditVersionTimesheetEditVersionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\" *ngIf=\"timesheet\">\n    <div class=\"card-body\">\n        <h3>\n            <span class=\"display-4 mb-3 mr-3\">Edit Rejected Timesheet</span>\n            <span *ngIf=\"timesheet\" [className]=\"colorStatus(timesheet.status)\">{{timesheet.status}}</span>\n        </h3>\n        <p class=\"text-warning\">Submiting or saving this edited timesheet will creation this timesheet as a new version.\n        </p>\n\n        <div class=\"dropdown-divider \"></div>\n\n        <shared-timesheet [mode]=\"mode\" [timesheet]=\"timesheet\" [projectWp]=\"projectWp\"> </shared-timesheet>\n\n        <div class=\"dropdown-divider my-3\"></div>\n\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-danger m-1 px-2\" (click)=\"onSubmit($event,template)\">Submit</button>\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onSave($event)\">Save</button>\n            <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\" (click)=\"onCancel($event)\">Cancel</button>\n        </div>\n    </div>\n</div>\n\n\n<!-- confirmation window -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Submit Timsheet</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <strong class=\"text-warning\">This action cannot be undo.</strong><br>\n        <strong class=\"h5\">Are you sure to submit this timesheet to your supervisor?</strong><br>\n        After submission, this timesheet will not be editable anymore and this timesheet will be in pending state.<br>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\" (click)=\"modalRef.hide()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger  m-1 px-3\" (click)=\"onSubmitConfrimed()\">Submit</button>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetEditTimesheetEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\" *ngIf=\"timesheet\">\n    <div class=\"card-body\">\n        <h3>\n            <span class=\"display-4 mb-3 mr-3\">Edit Timesheet</span>\n            <span *ngIf=\"timesheet\" [className]=\"colorStatus(timesheet.status)\">{{timesheet.status}}</span>\n        </h3>\n\n        <div class=\"dropdown-divider \"></div>\n\n        <shared-timesheet [mode]=\"mode\" [timesheet]=\"timesheet\" [projectWp]=\"projectWp\"> </shared-timesheet>\n\n        <div class=\"dropdown-divider my-3\"></div>\n\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-danger m-1 px-2\" (click)=\"onSubmit($event,template)\">Submit</button>\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onSave($event)\">Save</button>\n            <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\" (click)=\"onCancel($event)\">Cancel</button>\n        </div>\n    </div>\n</div>\n\n\n<!-- confirmation window -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Submit Timsheet</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <strong class=\"text-warning\">This action cannot be undo.</strong><br>\n        <strong class=\"h5\">Are you sure to submit this timesheet to your supervisor?</strong><br>\n        After submission, this timesheet will not be editable anymore and this timesheet will be in pending state.<br>\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\" (click)=\"modalRef.hide()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger  m-1 px-3\" (click)=\"onSubmitConfrimed()\">Submit</button>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetListTimesheetListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <h3 class=\"display-4 mb-3\">Timesheet List</h3>\n        <div class=\"dropdown-divider \"></div>\n\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary my-2\" routerLink=\"creation\">Create</button>\n        </div>\n\n        <!-- Table goes here -->\n        <p-table [columns]=\"cols\" [value]=\"timesheets\">\n            <ng-template pTemplate=\"header\" let-columns>\n                <tr>\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                        {{col.header}}\n                        <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\"\n                            ariaLabelDesc=\"Activate to sort in descending order\"\n                            ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n                    </th>\n                    <th>\n\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                <tr>\n                    <td>\n                        {{rowData.weekNumber}}\n                    </td>\n                    <td>\n                        {{rowData.versionNumber}}\n                    </td>\n                    <td>\n                        {{rowData.weekEndingIn | date:'yyyy-MM-dd' }}\n                    </td>\n                    <td>\n                        <h5><span [className]=\"colorStatus(rowData.status)\">{{rowData.status}}</span></h5>\n                    </td>\n\n                    <td>\n                        <button type=\"button\" class=\"btn btn-link btn-sm\"\n                            [routerLink]=\"['view', rowData.timesheetId]\">View</button>\n                        <button *ngIf=\"rowData.status==='Inprogress'\" type=\"button\" class=\"btn btn-link btn-sm\"\n                            [routerLink]=\"['edit', rowData.timesheetId]\">Edit</button>\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n\n\n    </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetViewTimesheetViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\n    <div class=\"card-body\" *ngIf=\"timesheet\">\n        <h3>\n            <span class=\"display-4 mb-3 mr-3\">Timesheet Detail</span>\n            <span *ngIf=\"timesheet\" [className]=\"colorStatus(timesheet.status)\">{{timesheet.status}}</span>\n        </h3>\n        <!-- alert content -->\n        <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" *ngIf=\"timesheet.status == 'Rejected'\">\n            <h4 class=\"alert-heading\">Rejected!</h4>\n            <p>This timesheet is rejected based on the following reason. Please click Edit button to modifty this\n                timesheet.</p>\n            <hr>\n            <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n        </div>\n\n        <div class=\"dropdown-divider \"></div>\n\n        <shared-timesheet *ngIf=\"timesheet\" [mode]=\"mode\" [timesheet]=\"timesheet\">\n        </shared-timesheet>\n\n        <div class=\"dropdown-divider my-3\"></div>\n\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" *ngIf=\"timesheet.status == 'Rejected'\"\n                [routerLink]=\"['/content/timesheets/editRejectedTimesheet', timesheet.timesheetId]\">\n                Create New Version</button>\n            <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\" routerLink=\"/content/timesheets\">Cancel</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheets.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheets.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-timesheet-list></app-timesheet-list>";
    /***/
  },

  /***/
  "./src/app/core/service/timesheet/timesheet.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/service/timesheet/timesheet.service.ts ***!
    \*************************************************************/

  /*! exports provided: TimesheetService */

  /***/
  function srcAppCoreServiceTimesheetTimesheetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetService", function () {
      return TimesheetService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../message.service */
    "./src/app/core/service/message.service.ts");

    var TimesheetService =
    /*#__PURE__*/
    function () {
      function TimesheetService(http, messageService) {
        _classCallCheck(this, TimesheetService);

        this.http = http;
        this.messageService = messageService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        /** headers in an httpOptions object that will be passed to every HttpClient save method. */

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }

      _createClass(TimesheetService, [{
        key: "postTimesheet",
        value: function postTimesheet(ts) {
          var url = this.baseUrl + "api/timesheets";
          console.log('postTimesheet');
          console.log(JSON.stringify(ts));
          return this.http.post(url, ts, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("postProject", ts)));
        }
      }, {
        key: "putTimesheet",
        value: function putTimesheet(ts) {
          var url = this.baseUrl + "api/timesheets/".concat(ts.timesheetId);
          return this.http.put(url, ts, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("putProject", ts)));
        }
        /**
         *
         * @param id Timesheet ID
         */

      }, {
        key: "getTimesheet",
        value: function getTimesheet(id) {
          var url = this.baseUrl + "api/timesheets/".concat(id);
          return this.http.get(url, this.httpOptions).pipe();
        }
      }, {
        key: "getPendingTimesheets",
        value: function getPendingTimesheets(aprId) {
          var url = this.baseUrl + "api/Timesheets/GetTimesheetsByApproverId/".concat(aprId);
          return this.http.get(url, this.httpOptions).pipe();
        }
      }, {
        key: "getAvaliableTimesheetId",
        value: function getAvaliableTimesheetId() {
          var url = this.baseUrl + "api/timesheets/availableTimesheetId";
          return this.http.get(url, this.httpOptions).pipe();
        }
      }, {
        key: "getAllTimesheet",
        value: function getAllTimesheet(empId) {
          var url = this.baseUrl + "api/Timesheets/GetTimesheetsByEmpId/".concat(empId);
          return this.http.get(url, this.httpOptions).pipe();
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var _this = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption

            _this.alertUser("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
          };
        }
      }, {
        key: "alertUser",
        value: function alertUser(message) {// this.messageService.add(`WeatherService: ${message}`);
        }
      }]);

      return TimesheetService;
    }();

    TimesheetService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
      }];
    };

    TimesheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TimesheetService);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.css":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.css ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetApproverViewListTimesheetApproverViewListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui-table.ui-table-cars .ui-table-caption.ui-widget-header {\n    border: 0 none;\n    padding: 12px;\n    text-align: left;\n    font-size: 20px;\n}\n\n.ui-column-filter {\n    margin-top: 1em;\n}\n\n.ui-column-filter .ui-multiselect-label {\n    font-weight: 500;\n}\n\n.ui-table.ui-table-cars .ui-table-thead > tr > th {\n    border: 0 none;\n    text-align: left;\n}\n\n.ui-table-globalfilter-container {\n    float: right;\n    display: inline;\n}\n\n.ui-table.ui-table-cars .ui-table-tbody > tr > td {\n    border: 0 none;\n}\n\n.ui-table.ui-table-cars .ui-table-tbody .ui-column-title {\n    font-size: 16px;\n}\n\n.ui-table.ui-table-cars .ui-paginator {\n    border: 0 none;\n    padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXRzL3BhZ2VzL3RpbWVzaGVldC1hcHByb3Zlci12aWV3LWxpc3QvdGltZXNoZWV0LWFwcHJvdmVyLXZpZXctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXRzL3BhZ2VzL3RpbWVzaGVldC1hcHByb3Zlci12aWV3LWxpc3QvdGltZXNoZWV0LWFwcHJvdmVyLXZpZXctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLXRhYmxlLnVpLXRhYmxlLWNhcnMgLnVpLXRhYmxlLWNhcHRpb24udWktd2lkZ2V0LWhlYWRlciB7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnVpLWNvbHVtbi1maWx0ZXIge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLnVpLWNvbHVtbi1maWx0ZXIgLnVpLW11bHRpc2VsZWN0LWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udWktdGFibGUudWktdGFibGUtY2FycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udWktdGFibGUtZ2xvYmFsZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnVpLXRhYmxlLnVpLXRhYmxlLWNhcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG59XG5cbi51aS10YWJsZS51aS10YWJsZS1jYXJzIC51aS10YWJsZS10Ym9keSAudWktY29sdW1uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi51aS10YWJsZS51aS10YWJsZS1jYXJzIC51aS1wYWdpbmF0b3Ige1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIHBhZGRpbmc6IDFlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: TimesheetApproverViewListComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetApproverViewListTimesheetApproverViewListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetApproverViewListComponent", function () {
      return TimesheetApproverViewListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");

    var TimesheetApproverViewListComponent =
    /*#__PURE__*/
    function () {
      function TimesheetApproverViewListComponent(timesheetService, authenticationService) {
        _classCallCheck(this, TimesheetApproverViewListComponent);

        this.timesheetService = timesheetService;
        this.authenticationService = authenticationService;
        this.displayTimesheet = [];
      }

      _createClass(TimesheetApproverViewListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [{
            field: 'empName',
            header: 'Employee'
          }, {
            field: 'supervisor',
            header: 'Supervisor'
          }, {
            field: 'approver',
            header: 'Approver'
          }, {
            field: 'weekNumber',
            header: 'Week'
          }, {
            field: 'versionNumber',
            header: 'Version'
          }, {
            field: 'weekEndingIn',
            header: 'Week Ending'
          }, {
            field: 'status',
            header: 'Status'
          }];
          this.populateTimesheets();
        }
      }, {
        key: "populateTimesheets",
        value: function populateTimesheets() {
          var _this2 = this;

          var userId = this.authenticationService.currentUserValue.employeeId;
          this.timesheetService.getPendingTimesheets(userId).subscribe(function (res) {
            res.forEach(function (ts) {
              _this2.displayTimesheet.push({
                'empName': "".concat(ts.owner.empFirstName, " ").concat(ts.owner.empLastName),
                'approver': "".concat(ts.owner.timesheetApprover.empFirstName, " ").concat(ts.owner.timesheetApprover.empLastName),
                'supervisor': "".concat(ts.owner.supervisor.empFirstName, " ").concat(ts.owner.supervisor.empLastName),
                'weekNumber': ts.weekNumber,
                'versionNumber': ts.versionNumber,
                'weekEndingIn': _this2.toDate(ts.weekEndingIn),
                'status': ts.status,
                'timesheetId': ts.timesheetId
              });
            });
            console.log(_this2.displayTimesheet);
          });
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          switch (status) {
            case 'Approved':
              return 'badge badge-success';

            case 'Rejected':
              return 'badge badge-danger';

            case 'Pending':
              return 'badge badge-warning';

            case 'Inprogress':
              return 'badge badge-info';
          }
        }
      }, {
        key: "toDate",
        value: function toDate(str) {
          var date = new Date(str);
          return date.toLocaleDateString();
        }
      }]);

      return TimesheetApproverViewListComponent;
    }();

    TimesheetApproverViewListComponent.ctorParameters = function () {
      return [{
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__["TimesheetService"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    TimesheetApproverViewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-approver-view-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-approver-view-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-approver-view-list.component.css */
      "./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.css")).default]
    })], TimesheetApproverViewListComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.css":
  /*!********************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.css ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetApproverViewTimesheetApproverViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtYXBwcm92ZXItdmlldy90aW1lc2hlZXQtYXBwcm92ZXItdmlldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: TimesheetApproverViewComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetApproverViewTimesheetApproverViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetApproverViewComponent", function () {
      return TimesheetApproverViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");
    /* harmony import */


    var src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/model/TimesheetStatus */
    "./src/app/shared/model/TimesheetStatus.ts");

    var TimesheetApproverViewComponent =
    /*#__PURE__*/
    function () {
      function TimesheetApproverViewComponent(route, timesheetService) {
        _classCallCheck(this, TimesheetApproverViewComponent);

        this.route = route;
        this.timesheetService = timesheetService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__["MODE"].Read;
        this.rapidPageValue = "323djo";
      }

      _createClass(TimesheetApproverViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('timesheetId');
            console.log("current timesheet id is  ".concat(id));

            _this3.timesheetService.getTimesheet(id).subscribe(function (ts) {
              return _this3.timesheet = ts;
            });
          });
        }
      }, {
        key: "onTextareaChange",
        value: function onTextareaChange(e) {
          try {
            this.timesheet.comment = e.target.value;
          } catch (e) {
            console.info('could not set textarea-value');
          }
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          status = status.toLowerCase();

          switch (status) {
            case 'approved':
              return 'badge badge-pill badge-success';

            case 'rejected':
              return 'badge badge-pill badge-danger';

            case 'pending':
              return 'badge badge-pill badge-warning';

            case 'inprogress':
              return 'badge badge-pill badge-info';

            default:
              return 'badge badge-pill badge-dark';
          }
        }
      }, {
        key: "onReject",
        value: function onReject(e) {
          var _this4 = this;

          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_5__["TimesheetStatus"].rejected;
          this.timesheetService.putTimesheet(this.timesheet).subscribe(function (_) {
            return console.log(_this4.timesheet);
          });
        }
      }, {
        key: "onApprove",
        value: function onApprove(e) {
          var _this5 = this;

          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_5__["TimesheetStatus"].approved;
          this.timesheetService.putTimesheet(this.timesheet).subscribe(function (_) {
            return console.log(_this5.timesheet);
          });
        }
      }]);

      return TimesheetApproverViewComponent;
    }();

    TimesheetApproverViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__["TimesheetService"]
      }];
    };

    TimesheetApproverViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-approver-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-approver-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-approver-view.component.css */
      "./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.css")).default]
    })], TimesheetApproverViewComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetCreationTimesheetCreationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtY3JlYXRpb24vdGltZXNoZWV0LWNyZWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: TimesheetCreationComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetCreationTimesheetCreationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetCreationComponent", function () {
      return TimesheetCreationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_model_Timesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/model/Timesheet */
    "./src/app/shared/model/Timesheet.ts");
    /* harmony import */


    var src_app_shared_model_TimesheetRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/model/TimesheetRow */
    "./src/app/shared/model/TimesheetRow.ts");
    /* harmony import */


    var src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/model/TimesheetStatus */
    "./src/app/shared/model/TimesheetStatus.ts");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");
    /* harmony import */


    var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/service/project/project.service */
    "./src/app/core/service/project/project.service.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/core/service/my-toast.service */
    "./src/app/core/service/my-toast.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TimesheetCreationComponent =
    /*#__PURE__*/
    function () {
      function TimesheetCreationComponent(timesheetService, projectService, modalService, myToastService, router, authenticationService) {
        _classCallCheck(this, TimesheetCreationComponent);

        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.modalService = modalService;
        this.myToastService = myToastService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.dataReady = false;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_8__["MODE"].Create;
        this.timesheet = null;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(TimesheetCreationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setEmptyTimesheetData();
          this.prepareprojectWp();
        }
      }, {
        key: "onSubmitConfrimed",
        value: function onSubmitConfrimed() {
          var _this6 = this;

          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_4__["TimesheetStatus"].pending;
          this.timesheetService.postTimesheet(this.timesheet).subscribe(function (_) {
            _this6.modalRef.hide();

            _this6.myToastService.addSuccess('Timesheet Sumitted Successfully', "Timesheet of week ".concat(_this6.timesheet.weekEndingIn, " is sumitted to your supervisor."));

            _this6.router.navigate(["/content/timesheets"]);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(e, template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "onSave",
        value: function onSave(e) {
          var _this7 = this;

          console.log("post timesheet:");
          console.log(JSON.stringify(this.timesheet));
          this.timesheetService.postTimesheet(this.timesheet).subscribe(function (_) {
            _this7.myToastService.addInfo("Timesheet Updated", "Timesheet of week ".concat(_this7.timesheet.weekEndingIn, " saved on ").concat(new Date().toLocaleString()));

            _this7.router.navigate(["/content/timesheets"]);
          });
        }
      }, {
        key: "setEmptyTimesheetData",
        value: function setEmptyTimesheetData() {
          var _this8 = this;

          this.timesheetService.getAvaliableTimesheetId().subscribe(function (result) {
            var newTimesheet = new src_app_shared_model_Timesheet__WEBPACK_IMPORTED_MODULE_2__["Timesheet"]();
            var weekEndingIn = new Date();
            var shit = 5 - weekEndingIn.getDay();
            weekEndingIn.setDate(weekEndingIn.getDate() + shit);
            newTimesheet.weekEndingIn = _this8.dateFormater(weekEndingIn);
            newTimesheet.weekNumber = _this8.getWeek(weekEndingIn);
            console.log(result); // init attirbutes

            newTimesheet.timesheetId = result.id;
            newTimesheet.employeeId = _this8.currentUser.employeeId;
            newTimesheet.versionNumber = 1;
            newTimesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_4__["TimesheetStatus"].inProgress; // Create 5 empty rows at page load.

            for (var i = 0; i < 5; i++) {
              newTimesheet.timesheetRows.push(new src_app_shared_model_TimesheetRow__WEBPACK_IMPORTED_MODULE_3__["TimesheetRow"](newTimesheet.timesheetId, newTimesheet.versionNumber, 0, 0));
            }

            _this8.timesheet = newTimesheet;
            _this8.dataReady = true;
          });
        }
      }, {
        key: "prepareprojectWp",
        value: function prepareprojectWp() {
          var _this9 = this;

          this.projectService.getProjectWpDropdown(this.currentUser.employeeId).subscribe(function (result) {
            _this9.projectWp = [];
            result.forEach(function (p) {
              p.workPackages.forEach(function (wp) {
                _this9.projectWp.push({
                  'projectId': p.projectId,
                  'projectName': p.projectName,
                  'wpId': wp.workPackageId,
                  'wpCode': wp.workPackageCode
                });
              });
            });
          });
        } // helper functions

      }, {
        key: "getWeek",
        value: function getWeek(date) {
          var today = new Date();
          var firstDayOfYear = new Date(today.getFullYear(), 0, 1);
          var pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
          return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
        }
      }, {
        key: "dateFormater",
        value: function dateFormater(d) {
          var yyyy = d.getFullYear();
          var MM = ("00" + (d.getMonth() + 1)).slice(-2);
          var dd = ("00" + (d.getDate() + 1)).slice(-2);
          return "".concat(yyyy, "-").concat(MM, "-").concat(dd);
        }
        /**
        *
        * @param s with format "2020-10-11"
        */

      }, {
        key: "stringToDate",
        value: function stringToDate(s) {
          var date = new Date(s);
          console.log(date);
          return date;
        }
      }]);

      return TimesheetCreationComponent;
    }();

    TimesheetCreationComponent.ctorParameters = function () {
      return [{
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_5__["TimesheetService"]
      }, {
        type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]
      }, {
        type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"]
      }, {
        type: src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_10__["MyToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }];
    };

    TimesheetCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-creation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-creation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-creation.component.css */
      "./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.css")).default]
    })], TimesheetCreationComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.css":
  /*!******************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.css ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetEditVersionTimesheetEditVersionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtZWRpdC12ZXJzaW9uL3RpbWVzaGVldC1lZGl0LXZlcnNpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: TimesheetEditVersionComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetEditVersionTimesheetEditVersionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetEditVersionComponent", function () {
      return TimesheetEditVersionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/model/TimesheetStatus */
    "./src/app/shared/model/TimesheetStatus.ts");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/service/project/project.service */
    "./src/app/core/service/project/project.service.ts");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/core/service/my-toast.service */
    "./src/app/core/service/my-toast.service.ts");

    var TimesheetEditVersionComponent =
    /*#__PURE__*/
    function () {
      function TimesheetEditVersionComponent(route, timesheetService, projectService, modalService, myToastService, router, authenticationService) {
        _classCallCheck(this, TimesheetEditVersionComponent);

        this.route = route;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.modalService = modalService;
        this.myToastService = myToastService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__["MODE"].Update;
        this.timesheet = null;
        this.projectDropdown = null;
        this.employeeWPs = null;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(TimesheetEditVersionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('timesheetId');
            console.log("current timesheet id is  ".concat(id));

            _this10.timesheetService.getTimesheet(id).subscribe(function (ts) {
              return _this10.timesheet = ts;
            });
          });
          this.prepareprojectWp();
        } // onSubmit(e: any) {
        //   // increment the version. since it is using the old timesheet to create a new one
        //   this.timesheet.versionNumber += 1;
        //   this.timesheet.status = TimesheetStatus.pending;
        //   this.timesheetService.putTimesheet(this.timesheet).subscribe(_ => {
        //     // TODO : nagvigate to this page "/content/timesheets"
        //   });
        // }
        // onSave(e: any) {
        //   // increment the version. since it is using the old timesheet to create a new one
        //   this.timesheet.versionNumber += 1;
        //   this.timesheet.status = TimesheetStatus.inProgress;
        //   console.log(`post timesheet new version:`);
        //   console.log(JSON.stringify(this.timesheet));
        //   this.timesheetService.putTimesheet(this.timesheet).subscribe(_ => {
        //     // TODO : nagvigate to this page "/content/timesheets"
        //   });
        // }

      }, {
        key: "onSubmitConfrimed",
        value: function onSubmitConfrimed() {
          var _this11 = this;

          // increment the version. since it is using the old timesheet to create a new one
          this.timesheet.versionNumber += 1;
          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_2__["TimesheetStatus"].pending;
          this.timesheetService.postTimesheet(this.timesheet).subscribe(function (_) {
            _this11.modalRef.hide();

            _this11.myToastService.addSuccess('Timesheet Sumitted Successfully', "Timesheet of week ".concat(_this11.timesheet.weekEndingIn, " Version: ").concat(_this11.timesheet.versionNumber, " is sumitted to your supervisor."));

            _this11.router.navigate(["/content/timesheets"]);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(e, template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "onCancel",
        value: function onCancel(e) {
          this.router.navigate(["/content/timesheets"]);
        }
      }, {
        key: "onSave",
        value: function onSave(e) {
          var _this12 = this;

          // increment the version. since it is using the old timesheet to create a new one
          this.timesheet.versionNumber += 1;
          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_2__["TimesheetStatus"].inProgress;
          console.log("post timesheet new version:");
          console.log(JSON.stringify(this.timesheet));
          this.timesheetService.postTimesheet(this.timesheet).subscribe(function (_) {
            _this12.myToastService.addInfo("Timesheet Updated in Version ".concat(_this12.timesheet.versionNumber), "Timesheet of week ".concat(_this12.timesheet.weekEndingIn, " saved on ").concat(new Date().toLocaleString()));

            _this12.router.navigate(["/content/timesheets"]);
          });
        }
      }, {
        key: "prepareprojectWp",
        value: function prepareprojectWp() {
          var _this13 = this;

          this.projectService.getProjectWpDropdown(this.currentUser.employeeId).subscribe(function (result) {
            _this13.projectWp = [];
            result.forEach(function (p) {
              p.workPackages.forEach(function (wp) {
                _this13.projectWp.push({
                  'projectId': p.projectId,
                  'projectName': p.projectName,
                  'wpId': wp.workPackageId,
                  'wpCode': wp.workPackageCode
                });
              });
            });
          });
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          switch (status) {
            case 'Approved':
              return 'badge badge-pill badge-success';

            case 'Rejected':
              return 'badge badge-pill badge-danger';

            case 'Pending':
              return 'badge badge-pill badge-warning';

            case 'Inprogress':
              return 'badge badge-pill badge-info';

            default:
              return 'badge badge-pill badge-dark';
          }
        } // helper functions

      }, {
        key: "getWeek",
        value: function getWeek(date) {
          var today = new Date();
          var firstDayOfYear = new Date(today.getFullYear(), 0, 1);
          var pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
          return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
        }
      }, {
        key: "dateFormater",
        value: function dateFormater(d) {
          var yyyy = d.getFullYear();
          var MM = ("00" + (d.getMonth() + 1)).slice(-2);
          var dd = ("00" + (d.getDate() + 1)).slice(-2);
          return "".concat(yyyy, "-").concat(MM, "-").concat(dd);
        }
        /**
        *
        * @param s with format "2020-10-11"
        */

      }, {
        key: "stringToDate",
        value: function stringToDate(s) {
          var date = new Date(s);
          console.log(date);
          return date;
        }
      }]);

      return TimesheetEditVersionComponent;
    }();

    TimesheetEditVersionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__["TimesheetService"]
      }, {
        type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]
      }, {
        type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]
      }, {
        type: src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_9__["MyToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    TimesheetEditVersionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-edit-version',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-edit-version.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-edit-version.component.css */
      "./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.css")).default]
    })], TimesheetEditVersionComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetEditTimesheetEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtZWRpdC90aW1lc2hlZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TimesheetEditComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetEditTimesheetEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetEditComponent", function () {
      return TimesheetEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/model/TimesheetStatus */
    "./src/app/shared/model/TimesheetStatus.ts");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/service/project/project.service */
    "./src/app/core/service/project/project.service.ts");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/core/service/my-toast.service */
    "./src/app/core/service/my-toast.service.ts");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");

    var TimesheetEditComponent =
    /*#__PURE__*/
    function () {
      function TimesheetEditComponent(route, timesheetService, projectService, modalService, myToastService, router, authenticationService) {
        _classCallCheck(this, TimesheetEditComponent);

        this.route = route;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.modalService = modalService;
        this.myToastService = myToastService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__["MODE"].Update;
        this.timesheet = null;
        this.projectDropdown = null;
        this.employeeWPs = null;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(TimesheetEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('timesheetId');
            console.log("current timesheet id is  ".concat(id));

            _this14.timesheetService.getTimesheet(id).subscribe(function (ts) {
              return _this14.timesheet = ts;
            });
          });
          this.prepareprojectWp();
        }
      }, {
        key: "onSubmitConfrimed",
        value: function onSubmitConfrimed() {
          var _this15 = this;

          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_2__["TimesheetStatus"].pending;
          this.timesheetService.postTimesheet(this.timesheet).subscribe(function (_) {
            _this15.modalRef.hide();

            _this15.myToastService.addSuccess('Timesheet Sumitted Successfully', "Timesheet of week ".concat(_this15.timesheet.weekEndingIn, " is sumitted to your supervisor."));

            _this15.router.navigate(["/content/timesheets"]);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(e, template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "onCancel",
        value: function onCancel(e) {
          this.router.navigate(["/content/timesheets"]);
        }
      }, {
        key: "onSave",
        value: function onSave(e) {
          var _this16 = this;

          console.log("post timesheet:");
          console.log(JSON.stringify(this.timesheet));
          this.timesheetService.postTimesheet(this.timesheet).subscribe(function (_) {
            _this16.myToastService.addInfo("Timesheet Updated", "Timesheet of week ".concat(_this16.timesheet.weekEndingIn, " saved on ").concat(new Date().toLocaleString()));

            _this16.router.navigate(["/content/timesheets"]);
          });
        }
      }, {
        key: "prepareprojectWp",
        value: function prepareprojectWp() {
          var _this17 = this;

          this.projectService.getProjectWpDropdown(this.currentUser.employeeId).subscribe(function (result) {
            _this17.projectWp = [];
            result.forEach(function (p) {
              p.workPackages.forEach(function (wp) {
                _this17.projectWp.push({
                  'projectId': p.projectId,
                  'projectName': p.projectName,
                  'wpId': wp.workPackageId,
                  'wpCode': wp.workPackageCode
                });
              });
            });
          });
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          switch (status) {
            case 'Approved':
              return 'badge badge-pill badge-success';

            case 'Rejected':
              return 'badge badge-pill badge-danger';

            case 'Pending':
              return 'badge badge-pill badge-warning';

            case 'Inprogress':
              return 'badge badge-pill badge-info';

            default:
              return 'badge badge-pill badge-dark';
          }
        } // helper functions

      }, {
        key: "getWeek",
        value: function getWeek(date) {
          var today = new Date();
          var firstDayOfYear = new Date(today.getFullYear(), 0, 1);
          var pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
          return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
        }
      }, {
        key: "dateFormater",
        value: function dateFormater(d) {
          var yyyy = d.getFullYear();
          var MM = ("00" + (d.getMonth() + 1)).slice(-2);
          var dd = ("00" + (d.getDate() + 1)).slice(-2);
          return "".concat(yyyy, "-").concat(MM, "-").concat(dd);
        }
        /**
        *
        * @param s with format "2020-10-11"
        */

      }, {
        key: "stringToDate",
        value: function stringToDate(s) {
          var date = new Date(s);
          console.log(date);
          return date;
        }
      }]);

      return TimesheetEditComponent;
    }();

    TimesheetEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__["TimesheetService"]
      }, {
        type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]
      }, {
        type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"]
      }, {
        type: src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_8__["MyToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    TimesheetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-edit.component.css */
      "./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.css")).default]
    })], TimesheetEditComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetListTimesheetListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtbGlzdC90aW1lc2hlZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TimesheetListComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetListTimesheetListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetListComponent", function () {
      return TimesheetListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");

    var TimesheetListComponent =
    /*#__PURE__*/
    function () {
      function TimesheetListComponent(timesheetService, authenticationService) {
        _classCallCheck(this, TimesheetListComponent);

        this.timesheetService = timesheetService;
        this.authenticationService = authenticationService;
        this.timesheets = null;
      }

      _createClass(TimesheetListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [{
            field: 'weekNumber',
            header: 'Week'
          }, {
            field: 'versionNumber',
            header: 'Version'
          }, {
            field: 'weekEndingIn',
            header: 'week Ending'
          }, {
            field: 'status',
            header: 'Status'
          }];
          this.populateTimesheets();
        }
      }, {
        key: "populateTimesheets",
        value: function populateTimesheets() {
          var _this18 = this;

          var userId = this.authenticationService.currentUserValue.employeeId;
          this.timesheetService.getAllTimesheet(userId).subscribe(function (res) {
            _this18.timesheets = res;
            console.log(res);
          });
        }
      }, {
        key: "dataReady",
        value: function dataReady() {
          if (this.timesheets !== null) return true;
          return false;
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          switch (status) {
            case 'Approved':
              return 'badge badge-success';

            case 'Rejected':
              return 'badge badge-danger';

            case 'Pending':
              return 'badge badge-warning';

            case 'Inprogress':
              return 'badge badge-info';
          }
        }
      }]);

      return TimesheetListComponent;
    }();

    TimesheetListComponent.ctorParameters = function () {
      return [{
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__["TimesheetService"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    TimesheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-list.component.css */
      "./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.css")).default]
    })], TimesheetListComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetViewTimesheetViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtdmlldy90aW1lc2hlZXQtdmlldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TimesheetViewComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetViewTimesheetViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetViewComponent", function () {
      return TimesheetViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");

    var TimesheetViewComponent =
    /*#__PURE__*/
    function () {
      function TimesheetViewComponent(route, timesheetService) {
        _classCallCheck(this, TimesheetViewComponent);

        this.route = route;
        this.timesheetService = timesheetService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__["MODE"].Read;
      }

      _createClass(TimesheetViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('timesheetId');
            console.log("current timesheet id is  ".concat(id));

            _this19.timesheetService.getTimesheet(id).subscribe(function (ts) {
              return _this19.timesheet = ts;
            });
          });
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          switch (status) {
            case 'Approved':
              return 'badge badge-pill badge-success';

            case 'Rejected':
              return 'badge badge-pill badge-danger';

            case 'Pending':
              return 'badge badge-pill badge-warning';

            case 'Inprogress':
              return 'badge badge-pill badge-info';

            default:
              return 'badge badge-pill badge-dark';
          }
        }
      }]);

      return TimesheetViewComponent;
    }();

    TimesheetViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__["TimesheetService"]
      }];
    };

    TimesheetViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-view.component.css */
      "./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.css")).default]
    })], TimesheetViewComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheets.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheets.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXRzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheets.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheets.component.ts ***!
    \******************************************************************/

  /*! exports provided: TimesheetsComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetsComponent", function () {
      return TimesheetsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TimesheetsComponent =
    /*#__PURE__*/
    function () {
      function TimesheetsComponent() {
        _classCallCheck(this, TimesheetsComponent);
      }

      _createClass(TimesheetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TimesheetsComponent;
    }();

    TimesheetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheets.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheets.component.css */
      "./src/app/modules/timesheets/pages/timesheets.component.css")).default]
    })], TimesheetsComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/timesheets-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/timesheets/timesheets-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: TimesheetsRoutingModule */

  /***/
  function srcAppModulesTimesheetsTimesheetsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetsRoutingModule", function () {
      return TimesheetsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_timesheets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/timesheets.component */
    "./src/app/modules/timesheets/pages/timesheets.component.ts");
    /* harmony import */


    var _pages_timesheet_creation_timesheet_creation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/timesheet-creation/timesheet-creation.component */
    "./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pages_timesheet_view_timesheet_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/timesheet-view/timesheet-view.component */
    "./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.ts");
    /* harmony import */


    var _pages_timesheet_edit_timesheet_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/timesheet-edit/timesheet-edit.component */
    "./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.ts");
    /* harmony import */


    var _pages_timesheet_approver_view_list_timesheet_approver_view_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/timesheet-approver-view-list/timesheet-approver-view-list.component */
    "./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.ts");
    /* harmony import */


    var _pages_timesheet_approver_view_timesheet_approver_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/timesheet-approver-view/timesheet-approver-view.component */
    "./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.ts");
    /* harmony import */


    var _pages_timesheet_edit_version_timesheet_edit_version_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/timesheet-edit-version/timesheet-edit-version.component */
    "./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.ts");

    var routes = [{
      path: '',
      component: _pages_timesheets_component__WEBPACK_IMPORTED_MODULE_3__["TimesheetsComponent"],
      data: {
        breadcrumb: null
      }
    }, {
      path: 'creation',
      component: _pages_timesheet_creation_timesheet_creation_component__WEBPACK_IMPORTED_MODULE_4__["TimesheetCreationComponent"],
      data: {
        breadcrumb: 'Creation'
      }
    }, {
      path: 'view/:timesheetId',
      component: _pages_timesheet_view_timesheet_view_component__WEBPACK_IMPORTED_MODULE_6__["TimesheetViewComponent"],
      data: {
        breadcrumb: 'Detail'
      }
    }, {
      path: 'edit/:timesheetId',
      component: _pages_timesheet_edit_timesheet_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimesheetEditComponent"],
      data: {
        breadcrumb: 'Edit'
      }
    }, {
      path: 'editRejectedTimesheet/:timesheetId',
      component: _pages_timesheet_edit_version_timesheet_edit_version_component__WEBPACK_IMPORTED_MODULE_10__["TimesheetEditVersionComponent"],
      data: {
        breadcrumb: 'Edit Rejected Timesheet'
      }
    }, {
      path: 'approver/view/list',
      component: _pages_timesheet_approver_view_list_timesheet_approver_view_list_component__WEBPACK_IMPORTED_MODULE_8__["TimesheetApproverViewListComponent"],
      data: {
        breadcrumb: 'Pending List'
      }
    }, {
      path: 'approver/view/:timesheetId',
      component: _pages_timesheet_approver_view_timesheet_approver_view_component__WEBPACK_IMPORTED_MODULE_9__["TimesheetApproverViewComponent"],
      data: {
        breadcrumb: 'Pending Detail'
      }
    }];

    var TimesheetsRoutingModule = function TimesheetsRoutingModule() {
      _classCallCheck(this, TimesheetsRoutingModule);
    };

    TimesheetsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TimesheetsRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/timesheets.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/timesheets/timesheets.module.ts ***!
    \*********************************************************/

  /*! exports provided: TimesheetsModule */

  /***/
  function srcAppModulesTimesheetsTimesheetsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetsModule", function () {
      return TimesheetsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _timesheets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./timesheets-routing.module */
    "./src/app/modules/timesheets/timesheets-routing.module.ts");
    /* harmony import */


    var _pages_timesheets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/timesheets.component */
    "./src/app/modules/timesheets/pages/timesheets.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pages_timesheet_creation_timesheet_creation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/timesheet-creation/timesheet-creation.component */
    "./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.ts");
    /* harmony import */


    var _pages_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/timesheet-list/timesheet-list.component */
    "./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */


    var _pages_timesheet_view_timesheet_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/timesheet-view/timesheet-view.component */
    "./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.ts");
    /* harmony import */


    var _pages_timesheet_edit_timesheet_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/timesheet-edit/timesheet-edit.component */
    "./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.ts");
    /* harmony import */


    var _pages_timesheet_approver_view_list_timesheet_approver_view_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/timesheet-approver-view-list/timesheet-approver-view-list.component */
    "./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.ts");
    /* harmony import */


    var _pages_timesheet_approver_view_timesheet_approver_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/timesheet-approver-view/timesheet-approver-view.component */
    "./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.ts");
    /* harmony import */


    var _pages_timesheet_edit_version_timesheet_edit_version_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/timesheet-edit-version/timesheet-edit-version.component */
    "./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");

    var TimesheetsModule = function TimesheetsModule() {
      _classCallCheck(this, TimesheetsModule);
    };

    TimesheetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_timesheets_component__WEBPACK_IMPORTED_MODULE_4__["TimesheetsComponent"], _pages_timesheet_creation_timesheet_creation_component__WEBPACK_IMPORTED_MODULE_6__["TimesheetCreationComponent"], _pages_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_7__["TimesheetListComponent"], _pages_timesheet_view_timesheet_view_component__WEBPACK_IMPORTED_MODULE_9__["TimesheetViewComponent"], _pages_timesheet_edit_timesheet_edit_component__WEBPACK_IMPORTED_MODULE_10__["TimesheetEditComponent"], _pages_timesheet_approver_view_list_timesheet_approver_view_list_component__WEBPACK_IMPORTED_MODULE_11__["TimesheetApproverViewListComponent"], _pages_timesheet_approver_view_timesheet_approver_view_component__WEBPACK_IMPORTED_MODULE_12__["TimesheetApproverViewComponent"], _pages_timesheet_edit_version_timesheet_edit_version_component__WEBPACK_IMPORTED_MODULE_13__["TimesheetEditVersionComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _timesheets_routing_module__WEBPACK_IMPORTED_MODULE_3__["TimesheetsRoutingModule"], // primeng
      primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"], primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"], // bootstrap
      ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot()]
    })], TimesheetsModule);
    /***/
  },

  /***/
  "./src/app/shared/model/Timesheet.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/model/Timesheet.ts ***!
    \*******************************************/

  /*! exports provided: Timesheet */

  /***/
  function srcAppSharedModelTimesheetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Timesheet", function () {
      return Timesheet;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /** this class is for Timesheet component model */


    var Timesheet = function Timesheet() {
      _classCallCheck(this, Timesheet);

      this.timesheetRows = [];
      this.signature = null;
      this.comment = '';
      this.flexTime = 0;
      this.overTime = 0;
    };
    /***/

  },

  /***/
  "./src/app/shared/model/TimesheetStatus.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/model/TimesheetStatus.ts ***!
    \*************************************************/

  /*! exports provided: TimesheetStatus */

  /***/
  function srcAppSharedModelTimesheetStatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetStatus", function () {
      return TimesheetStatus;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /** this represents timesheet status */


    var TimesheetStatus;

    (function (TimesheetStatus) {
      TimesheetStatus["approved"] = "Approved";
      TimesheetStatus["rejected"] = "Rejected";
      TimesheetStatus["pending"] = "Pending";
      TimesheetStatus["inProgress"] = "inprogress";
    })(TimesheetStatus || (TimesheetStatus = {}));
    /***/

  }
}]);
//# sourceMappingURL=modules-timesheets-timesheets-module-es5.js.map