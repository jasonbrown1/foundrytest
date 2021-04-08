(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jason/address-book/src/main.ts */"zUnb");


/***/ }),

/***/ "79cI":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-list/contact-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-contact-dialog/create-contact-dialog.component */ "uHWR");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "CPJB");
/* harmony import */ var _contact_list_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-list-datasource */ "oJCX");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



















function ContactListComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ContactListComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.clearSearchField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ContactListComponent_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ContactListComponent_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", contact_r14.firstname, " ");
} }
function ContactListComponent_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ContactListComponent_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", contact_r15.lastname, " ");
} }
function ContactListComponent_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ContactListComponent_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", contact_r16.phone, " ");
} }
function ContactListComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-cell", 22);
} }
function ContactListComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ContactListComponent_mat_cell_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const contact_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r18.deleteContact(contact_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ContactListComponent_mat_header_row_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function ContactListComponent_mat_row_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return [10, 20, 50, 100, 200, 500]; };
class ContactListComponent {
    // Constructor with the dialog injection.
    constructor(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['firstname', 'lastname', 'phone', 'actions'];
        this.searchField = "";
        this.confirmDeleted = true;
        this.contactDataSource = new _contact_list_datasource__WEBPACK_IMPORTED_MODULE_5__["ContactDataSource"]();
    }
    ngAfterViewInit() {
        this.contactDataSource.sort = this.sort;
        this.contactDataSource.paginator = this.paginator;
        this.table.dataSource = this.contactDataSource;
        this.paginator._intl.itemsPerPageLabel = "Contacts per page";
    }
    // Open the New Contact Dialog.
    openNewContactDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "400px";
        dialogConfig.height = "500px";
        const dialogRef = this.dialog.open(_create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CreateContactDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                // Make sure we have data passed in.
                if (data.firstName && data.lastName) {
                    this.contactDataSource.addContact({ firstname: data.firstName, lastname: data.lastName, phone: data.phoneNumber });
                }
                ;
            }
        });
    }
    // Handle searching.
    applyFilter(filterValue) {
        this.contactDataSource.applyFilter(filterValue);
    }
    // Clear the search box.
    clearSearchField() {
        this.searchField = '';
        this.contactDataSource.applyFilter("");
    }
    // prompt to delete a Contact.
    deleteContact(contact) {
        if (!this.confirmDeleted) {
            this.contactDataSource.deleteContact(contact);
            return;
        }
        const message = `Are you sure you want to delete contact "` + contact.firstname + ` ` + contact.lastname + `"?`;
        const dialogData = new _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogModel"]("Confirm Delete", message);
        const dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            height: "200px",
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this.contactDataSource.deleteContact(contact);
            }
        });
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["contact-list"]], viewQuery: function ContactListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 28, vars: 11, consts: [[1, "example-container"], [1, "header"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageIndex", "pageSize"], ["appearance", "legacy"], ["matInput", "", "type", "matInput", "placeholder", "Search", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["matSort", "", "matSortActive", "firstname", "matSortDirection", "asc", "matSortDisableClear", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "firstname"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "lastname"], ["matColumnDef", "phone"], ["matColumnDef", "actions"], ["class", "w-75", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "footer"], ["id", "btn_create", "mat-raised-button", "", "color", "primary", 3, "click"], [3, "ngModel", "color", "ngModelChange"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-sort-header", ""], [1, "w-75"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["aria-label", "Delete Contact"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "mat-paginator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ContactListComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchField = $event; })("keyup", function ContactListComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ContactListComponent_button_5_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-table", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](8, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ContactListComponent_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ContactListComponent_mat_cell_10_Template, 2, 1, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ContactListComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ContactListComponent_mat_cell_13_Template, 2, 1, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ContactListComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ContactListComponent_mat_cell_16_Template, 2, 1, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ContactListComponent_mat_header_cell_18_Template, 1, 0, "mat-header-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ContactListComponent_mat_cell_19_Template, 4, 0, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ContactListComponent_mat_header_row_20_Template, 1, 0, "mat-header-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ContactListComponent_mat_row_21_Template, 1, 0, "mat-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "footer", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ContactListComponent_Template_button_click_23_listener() { return ctx.openNewContactDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Create Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ContactListComponent_Template_mat_checkbox_ngModelChange_25_listener($event) { return ctx.confirmDeleted = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Confirm before Deleting");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c0))("pageIndex", 0)("pageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.contactDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.confirmDeleted)("color", "primary");
    } }, directives: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], styles: [".header[_ngcontent-%COMP%] {\n  min-height: 80px;\n  max-height: 80px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  width: 100%;\n  background-color: #fafafa;\n  border-width:  0 0 1px 0;\n  border-style: solid;\n  border-color: #ccc;\n}\n\n.header[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  \n  float:left;\n  background-color: transparent;\n  margin: 20px;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n  margin-top: 80px;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: #fafafa;\n}\n\n.mat-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;  \n}\n\nmat-checkbox[_ngcontent-%COMP%] {\n  float:right;  \n  margin:15px 20px 15px 60px;\n}\n\nmat-checkbox[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color:#888;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-paginator[_ngcontent-%COMP%] {\n    background-color:transparent;\n    float:right;\n    margin:10px;\n}\n\n.footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom:0;\n    left: 0;\n    z-index: 999;\n    width: 100%;\n    background-color: #eee;\n    border-width: 1px 0 0 0;\n    border-style: solid;\n    border-color: #bbb;\n}\n\n.mat-header-row[_ngcontent-%COMP%]{\n    margin-top:0px;\n    position: sticky;\n    top: 80px;\n    z-index: 100;\n    background-color: #eee;\n    }\n\n#btn_create[_ngcontent-%COMP%] {\n  margin:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCOztBQUNKO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImNvbnRhY3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBib3JkZXItd2lkdGg6ICAwIDAgMXB4IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbn1cblxuLmhlYWRlciBtYXQtZm9ybS1maWVsZCB7XG4gIC8qIHNlYXJjaCBib3ggKi9cbiAgZmxvYXQ6bGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMjBweDtcbn1cblxubWF0LXRhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbi5tYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cbi5tYXQtcm93IGJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7ICBcbn1cbm1hdC1jaGVja2JveCB7XG4gIGZsb2F0OnJpZ2h0OyAgXG4gIG1hcmdpbjoxNXB4IDIwcHggMTVweCA2MHB4O1xufVxubWF0LWNoZWNrYm94IHNtYWxsIHtcbiAgY29sb3I6Izg4ODtcbn1cbi5tYXQtcm93OmhvdmVyIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW46MTBweDtcbn1cbi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206MDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmJiO1xufVxuXG5cbi5tYXQtaGVhZGVyLXJvd3tcbiAgICBtYXJnaW4tdG9wOjBweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogODBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICB9XG4jYnRuX2NyZWF0ZSB7XG4gIG1hcmdpbjoxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CPJB":
/*!***********************************************************************!*\
  !*** ./src/app/components/confirm-dialog/confirm-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmDialogComponent, ConfirmDialogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModel", function() { return ConfirmDialogModel; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
    }
    ngOnInit() {
    }
    onConfirm() {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }
    onDismiss() {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
class ConfirmDialogModel {
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact-list/contact-list.component */ "79cI");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "contact-list");
    } }, directives: [_components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_1__["ContactListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact-list/contact-list.component */ "79cI");
/* harmony import */ var _components_create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/create-contact-dialog/create-contact-dialog.component */ "uHWR");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ "CPJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import { CustomMaterialModule } from './components/custom-material/custom-material.module';




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            // CustomMaterialModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_17__["ContactListComponent"],
        _components_create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_18__["CreateContactDialogComponent"],
        _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        // CustomMaterialModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"]] }); })();


/***/ }),

/***/ "oJCX":
/*!********************************************************************!*\
  !*** ./src/app/components/contact-list/contact-list-datasource.ts ***!
  \********************************************************************/
/*! exports provided: ContactDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDataSource", function() { return ContactDataSource; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");

// The Contacts. This could be moved to a local file for future expansion.
const CONTACT_DATA = [
    { firstname: 'Olaf', lastname: 'Lott' },
    { firstname: 'Molly', lastname: 'Vargas' },
    { firstname: 'Abul', lastname: 'Kendall' },
    { firstname: 'Raihan', lastname: 'Frey', phone: '56228 7805399' },
    { firstname: 'Flynn', lastname: 'Doherty', phone: '04040 7661663' },
    { firstname: 'Ibrar', lastname: 'Connelly', phone: '98870 5551093' },
    { firstname: 'Zhane', lastname: 'Turner' },
    { firstname: 'Khalid', lastname: 'Dickinson', phone: '97335 7383368' },
    { firstname: 'Sherri', lastname: 'Ayers', phone: '15554 4811955' },
    { firstname: 'Levison', lastname: 'Joseph' },
    { firstname: 'King', lastname: 'Tait' },
    { firstname: 'Calista', lastname: 'Pittman', phone: '08402 7689668' },
    { firstname: 'Skyla', lastname: 'Cunningham' },
    { firstname: 'Shanna', lastname: 'Cantrell' },
    { firstname: 'Sierra', lastname: 'Robbins' },
    { firstname: 'Aliyah', lastname: 'Parry', phone: '44175 3222523' },
    { firstname: 'Kaylan', lastname: 'Joyner' },
    { firstname: 'Shiloh', lastname: 'Ortega', phone: '67529 9892906' },
    { firstname: 'Suraj', lastname: 'Welsh', phone: '97122 0879851' },
    { firstname: 'Corben', lastname: 'Edmonds' },
    { firstname: 'Darci', lastname: 'Beech' },
    { firstname: 'Suranne', lastname: 'Swanson' },
    { firstname: 'Cameron', lastname: 'Mann' },
    { firstname: 'Raj', lastname: 'Griffith', phone: '40168 5366432' },
    { firstname: 'Kira', lastname: 'Reyna' },
    { firstname: 'Jaheim', lastname: 'Day' },
    { firstname: 'Antoinette', lastname: 'Bonilla', phone: '39714 7733735' },
    { firstname: 'Alaw', lastname: 'Wormald' },
    { firstname: 'Massimo', lastname: 'Correa', phone: '47267 9869767' },
    { firstname: 'Alayah', lastname: 'Knowles' },
    { firstname: 'Annabell', lastname: 'Montgomery' },
    { firstname: 'Jemma', lastname: 'Baird' },
    { firstname: 'Emil', lastname: 'Walter', phone: '19913 5878026' },
    { firstname: 'Finn', lastname: 'Chester' },
    { firstname: 'Daisy-May', lastname: 'Chase' },
    { firstname: 'Tyrone', lastname: 'Kent', phone: '86013 5429831' },
    { firstname: 'Herbert', lastname: 'Navarro' },
    { firstname: 'Israr', lastname: 'Ramsay' },
    { firstname: 'Elisa', lastname: 'Daugherty' },
    { firstname: 'Raul', lastname: 'Mora' },
    { firstname: 'Mariyam', lastname: 'Trevino', phone: '64914 4990739' },
    { firstname: 'Abubakr', lastname: 'Milne' },
    { firstname: 'Nieve', lastname: 'Brady', phone: '33950 2315974' },
    { firstname: 'Daniyal', lastname: 'Mcdowell' },
    { firstname: 'Cadi', lastname: 'Rose' },
    { firstname: 'Darius', lastname: 'Choi' },
    { firstname: 'Joann', lastname: 'Villegas' },
    { firstname: 'Julie', lastname: 'Calvert', phone: '85403 4372384' },
    { firstname: 'Trent', lastname: 'Garrett', phone: '92191 5563075' },
    { firstname: 'Pauline', lastname: 'Philip' },
    { firstname: 'Trystan', lastname: 'Sexton' },
    { firstname: 'Cain', lastname: 'Benjamin' },
    { firstname: 'Johan', lastname: 'Kline', phone: '13879 9986065' },
    { firstname: 'Clarissa', lastname: 'Daniels', phone: '09981 5693100' },
    { firstname: 'Wilbur', lastname: 'Davenport' },
    { firstname: 'Evie-May', lastname: 'Palmer' },
    { firstname: 'Sade', lastname: 'Schaefer', phone: '04009 8691835' },
    { firstname: 'Marek', lastname: 'Gonzales' },
    { firstname: 'Blane', lastname: 'Briggs' },
    { firstname: 'Farrell', lastname: 'Ortiz' },
    { firstname: 'Magnus', lastname: 'Jones' },
    { firstname: 'Parker', lastname: "O'Neill" },
    { firstname: 'Gary', lastname: 'Gallagher' },
    { firstname: 'Marion', lastname: 'Butler' },
    { firstname: 'Tymoteusz', lastname: 'Rodgers', phone: '53277 5926980' },
    { firstname: 'Owais', lastname: 'Medina', phone: '54719 6444890' },
    { firstname: 'Gabriela', lastname: 'Booker' },
    { firstname: 'Zion', lastname: 'Mckee' },
    { firstname: 'Rianne', lastname: 'Leblanc' },
    { firstname: 'Keiron', lastname: 'Coates' },
    { firstname: 'Isra', lastname: 'Page' },
    { firstname: 'Inez', lastname: 'Mejia', phone: '03982 6890705' },
    { firstname: 'Anastazja', lastname: 'Mccartney', phone: '96075 7728096' },
    { firstname: 'Ronaldo', lastname: 'Squires' },
    { firstname: 'Roan', lastname: 'Mathis', phone: '62422 2427240' },
    { firstname: 'Zayne', lastname: 'Rosa', phone: '98949 6454748' },
    { firstname: 'Sonny', lastname: 'Hibbert' },
    { firstname: 'Abbi', lastname: 'Blackwell' },
    { firstname: 'Elen', lastname: 'Webber' },
    { firstname: 'Melvin', lastname: 'Lloyd', phone: '58935 2153077' },
    { firstname: 'Katie', lastname: 'Atherton' },
    { firstname: 'Ann', lastname: 'Emerson', phone: '06949 4731310' },
    { firstname: 'Armaan', lastname: 'Oliver' },
    { firstname: 'Henley', lastname: 'Odom' },
    { firstname: 'Abbigail', lastname: 'Salinas' },
    { firstname: 'Simrah', lastname: 'Ibarra', phone: '02805 3596173' },
    { firstname: 'Anaya', lastname: 'Long' },
    { firstname: 'Eleanor', lastname: 'Esquivel', phone: '20591 5196019' },
    { firstname: 'Manha', lastname: 'Preece' },
    { firstname: 'Gwion', lastname: 'Carey' },
    { firstname: 'Chester', lastname: 'Massey' },
    { firstname: 'Mia', lastname: 'Rush' },
    { firstname: 'Neive', lastname: 'Rivera' },
    { firstname: 'Danniella', lastname: 'Terrell' },
    { firstname: 'Riaz', lastname: 'Howarth', phone: '85993 3886940' },
    { firstname: 'Zaid', lastname: 'Corbett' },
    { firstname: 'Johnnie', lastname: 'Gill', phone: '65097 9681042' },
    { firstname: 'Luke', lastname: 'Greig' },
    { firstname: 'Akaash', lastname: 'Flowers' },
    { firstname: 'Nellie', lastname: 'Roberson', phone: '37850 1826417' },
    { firstname: 'Jayce', lastname: 'Padilla' },
    { firstname: 'Christopher', lastname: 'Burt', phone: '20376 9487380' },
    { firstname: 'Carlie', lastname: 'Wilder' },
    { firstname: 'Hubert', lastname: 'Doherty' },
    { firstname: 'Aqib', lastname: 'Foreman' },
    { firstname: 'Georgia', lastname: 'Mccabe' },
    { firstname: 'Asmaa', lastname: 'Reese' },
    { firstname: 'Ihsan', lastname: 'Hancock', phone: '73635 6019339' },
    { firstname: 'Anish', lastname: 'Robson' },
    { firstname: 'Umair', lastname: 'Alfaro' },
    { firstname: 'Poppie', lastname: 'Delarosa', phone: '39045 3404474' },
    { firstname: 'Yunus', lastname: 'Kinney' },
    { firstname: 'Ivan', lastname: 'Halliday' },
    { firstname: 'Gregory', lastname: 'Conner' },
    { firstname: 'Hanna', lastname: 'Peel', phone: '40828 1090530' },
    { firstname: 'Hadiqa', lastname: 'Miranda' },
    { firstname: 'Miya', lastname: 'French' },
    { firstname: 'Louisa', lastname: 'Metcalfe', phone: '77136 1189010' },
    { firstname: 'Nigel', lastname: 'Edwards' },
    { firstname: 'Naseem', lastname: 'Wade' },
    { firstname: 'Bernard', lastname: 'Neale', phone: '88530 7988153' },
    { firstname: 'Kitty', lastname: 'Trejo' },
    { firstname: 'Anais', lastname: 'Woodard', phone: '17262 9100128' },
    { firstname: 'Dannielle', lastname: 'Kelly' },
    { firstname: 'Angus', lastname: 'Winters' },
    { firstname: 'Adnan', lastname: 'Gibbs' },
    { firstname: 'Tyriq', lastname: 'Valencia', phone: '89154 8536483' },
    { firstname: 'Daryl', lastname: 'Milne' },
    { firstname: 'Kimberly', lastname: 'Gutierrez' },
    { firstname: 'Asiya', lastname: 'Rodgers' },
    { firstname: 'Mabel', lastname: 'Fields', phone: '62425 8090772' },
    { firstname: 'Mariyah', lastname: 'Ramsay' },
    { firstname: 'Jolyon', lastname: 'Redmond', phone: '63546 5647338' },
    { firstname: 'Kynan', lastname: 'Hicks' },
    { firstname: 'Merryn', lastname: 'Rosales' },
    { firstname: 'Ted', lastname: 'Lester' },
    { firstname: 'Sukhmani', lastname: 'Goodwin' },
    { firstname: 'Burhan', lastname: 'Gonzalez' },
    { firstname: 'Helena', lastname: 'Bowes' },
    { firstname: 'Elisha', lastname: 'Armitage' },
    { firstname: 'Marisa', lastname: 'Rocha' },
    { firstname: 'Missy', lastname: 'Mcgee', phone: '38984 7983945' },
    { firstname: 'Antonia', lastname: 'Shaw' },
    { firstname: 'Mike', lastname: 'Moyer' },
    { firstname: 'Loki', lastname: 'Fritz' },
    { firstname: 'Jose', lastname: 'Atkins' },
    { firstname: 'Jaskaran', lastname: 'Hayward', phone: '44288 6980064' },
    { firstname: 'Constance', lastname: 'Weston', phone: '61045 3346599' },
    { firstname: 'Bruce', lastname: 'Case' },
    { firstname: 'Lili', lastname: 'Mckee', phone: '42462 3734046' },
    { firstname: 'Adrianna', lastname: 'Ware' },
    { firstname: 'Reece', lastname: 'Underwood' },
    { firstname: 'Zunairah', lastname: 'Clemons', phone: '88944 3253998' },
    { firstname: 'Lena', lastname: 'Holt' },
    { firstname: 'Tim', lastname: 'Mann', phone: '35629 9786831' },
    { firstname: 'Yash', lastname: 'Thorpe', phone: '69276 7957478' },
    { firstname: 'Akram', lastname: 'Corona', phone: '17314 4856830' },
    { firstname: 'Sioned', lastname: 'Humphreys', phone: '62186 7744284' },
    { firstname: 'Tamsin', lastname: 'Kumar', phone: '14081 1940597' },
    { firstname: 'Roseanna', lastname: 'Esparza', phone: '23083 6815689' },
    { firstname: 'Kaiya', lastname: 'Burn', phone: '92008 5752405' },
    { firstname: 'Sameeha', lastname: 'Daniels' },
    { firstname: 'Saffa', lastname: 'Pope' },
    { firstname: 'Stefanie', lastname: 'Griffith' },
    { firstname: 'Iylah', lastname: 'Hume' },
    { firstname: 'Layla-Mae', lastname: 'Edge' },
    { firstname: 'Kiri', lastname: 'Orozco', phone: '59505 4070300' },
    { firstname: 'Allison', lastname: 'Beard' },
    { firstname: 'Aayat', lastname: 'Mack' },
    { firstname: 'Marina', lastname: 'Sutton', phone: '48397 0434106' },
    { firstname: 'Zephaniah', lastname: 'Leonard', phone: '37511 5690396' },
    { firstname: 'Nylah', lastname: 'Howells', phone: '67133 2185818' },
    { firstname: 'Tatiana', lastname: 'Britton' },
    { firstname: 'Ciaran', lastname: 'Orr' },
    { firstname: 'Mikael', lastname: 'Lamb' },
    { firstname: 'Rick', lastname: 'Ross' },
    { firstname: 'Reggie', lastname: 'Harrington' },
    { firstname: 'Eloise', lastname: 'Nicholson' },
    { firstname: 'Reem', lastname: 'Philip' },
    { firstname: 'Abbi', lastname: 'Mcgill' },
    { firstname: 'Kean', lastname: 'Pace' },
    { firstname: 'Olli', lastname: 'Garner' },
    { firstname: 'Nathalie', lastname: 'Parrish', phone: '71979 5661222' },
    { firstname: 'Imogen', lastname: 'Allen' },
    { firstname: 'Sofija', lastname: 'Love' },
    { firstname: 'Amie', lastname: 'Fitzgerald', phone: '11726 9987235' },
    { firstname: 'Neriah', lastname: 'Fraser' },
    { firstname: 'Stanley', lastname: 'Cox' },
    { firstname: 'Jaden', lastname: 'Anthony' },
    { firstname: 'Vlad', lastname: 'Hills' },
    { firstname: 'Miley', lastname: 'Blackburn' },
    { firstname: 'Alfie', lastname: 'Kennedy', phone: '05431 8246297' },
    { firstname: 'Lleyton', lastname: 'Gomez' },
    { firstname: 'Teri', lastname: 'Goodman' },
    { firstname: 'Edith', lastname: 'Schwartz' },
    { firstname: 'Mara', lastname: 'Salgado' },
    { firstname: 'Molly', lastname: 'Squires' },
    { firstname: 'Grady', lastname: 'Holcomb', phone: '92242 3445572' },
    { firstname: 'Arham', lastname: 'Gilmour' },
    { firstname: 'Nazim', lastname: 'Forbes' },
    { firstname: 'Ashley', lastname: 'Prince', phone: '94825 0193727' },
    { firstname: 'Yassin', lastname: 'Landry' },
    { firstname: 'Charli', lastname: 'Coffey' },
    { firstname: 'Benn', lastname: 'Santos', phone: '26662 3622544' },
    { firstname: 'Hughie', lastname: 'Underwood', phone: '85855 5000598' },
    { firstname: 'Anderson', lastname: 'Almond' },
    { firstname: 'Kaelan', lastname: 'Moody' },
    { firstname: 'Kajal', lastname: 'Colon' },
    { firstname: 'Sanaya', lastname: 'Hogan' },
    { firstname: 'Muna', lastname: 'Torres' },
    { firstname: 'Everly', lastname: 'Gates' },
    { firstname: 'Samual', lastname: 'Whitworth' },
    { firstname: 'Kiran', lastname: 'Amin', phone: '51769 4176292' },
    { firstname: 'Ishaq', lastname: 'Ford' },
    { firstname: 'Toby', lastname: 'Fellows' },
    { firstname: 'Misbah', lastname: 'Langley' },
    { firstname: 'River', lastname: 'Lucero' },
    { firstname: 'Whitney', lastname: 'Salas' },
    { firstname: 'Tyreke', lastname: 'Walter', phone: '85705 5359126' },
    { firstname: 'Donte', lastname: 'Mason', phone: '90098 2966656' },
    { firstname: 'Kaya', lastname: 'Boyle' },
    { firstname: 'Yasir', lastname: 'Pickett', phone: '65682 5167675' },
    { firstname: 'Chanel', lastname: 'Lamb' },
    { firstname: 'Nancy', lastname: 'Mcpherson' },
    { firstname: 'Siyana', lastname: 'Robbins' },
    { firstname: 'Natalia', lastname: 'Rudd', phone: '69755 2029528' },
    { firstname: 'Willa', lastname: 'Robins', phone: '78547 7330432' },
    { firstname: 'Rhianne', lastname: 'Enriquez' },
    { firstname: 'Blade', lastname: 'Ortega', phone: '08876 2947057' },
    { firstname: 'Kaja', lastname: 'Hess', phone: '53193 7049688' },
    { firstname: 'Marsha', lastname: 'Padilla' },
    { firstname: 'Cataleya', lastname: 'Lancaster', phone: '36526 6592737' },
    { firstname: 'Bronwyn', lastname: 'Reilly', phone: '95243 3811678' },
    { firstname: 'Sandra', lastname: 'Hough' },
    { firstname: 'Raife', lastname: 'Person' },
    { firstname: 'Samirah', lastname: 'Weeks' },
    { firstname: 'Anis', lastname: 'Rahman' },
    { firstname: 'Konrad', lastname: 'Plant' },
    { firstname: 'Bevan', lastname: 'Squires' },
    { firstname: 'Ciaron', lastname: 'Logan' },
    { firstname: 'Elara', lastname: 'Hills' },
    { firstname: 'Sanna', lastname: 'Mair', phone: '80792 4018533' },
    { firstname: 'Zayne', lastname: 'Byers' },
    { firstname: 'Natasha', lastname: 'Patel' },
    { firstname: 'Danyaal', lastname: 'Fischer' },
    { firstname: 'Ayub', lastname: 'Esparza' },
    { firstname: 'Janae', lastname: 'Mullins', phone: '19707 2425983' },
    { firstname: 'Layla', lastname: 'Braun' },
    { firstname: 'Tarun', lastname: 'Haines', phone: '32722 4388509' },
    { firstname: 'Carson', lastname: 'Philip', phone: '43834 4961196' },
    { firstname: 'Ray', lastname: 'Rangel', phone: '37109 4296222' },
    { firstname: 'Kaylem', lastname: 'Bush' },
    { firstname: 'Ayesha', lastname: 'Noel' },
    { firstname: 'Stefania', lastname: 'Tierney' },
    { firstname: 'Jayda', lastname: 'Love' },
    { firstname: 'Ana', lastname: 'Lees', phone: '91720 6439984' },
    { firstname: 'Archie', lastname: 'Davila', phone: '48240 0811400' },
    { firstname: 'Kasim', lastname: 'Holding' },
    { firstname: 'Rubi', lastname: 'Vang', phone: '35899 3761068' },
    { firstname: 'Alyx', lastname: 'Dunkley', phone: '28441 0909452' },
    { firstname: 'Ronaldo', lastname: 'Bryan', phone: '52329 7153744' },
    { firstname: 'Georgie', lastname: 'Avery' },
    { firstname: 'Mathilda', lastname: 'Mckinney' },
    { firstname: 'Keiren', lastname: 'Cortes' },
    { firstname: 'Tayler', lastname: 'Schwartz' },
    { firstname: 'Bonnie', lastname: 'Healy' },
    { firstname: 'Aliza', lastname: 'Kouma' },
    { firstname: 'Manal', lastname: 'Hernandez' },
    { firstname: 'Abbey', lastname: 'Castro' },
    { firstname: 'Zoe', lastname: 'Puckett' },
    { firstname: 'Flynn', lastname: 'Hackett', phone: '06400 3428100' },
    { firstname: 'Reo', lastname: 'Ellwood', phone: '61837 3190556' },
    { firstname: 'Stacie', lastname: 'Brooks' },
    { firstname: 'Zakary', lastname: 'Dowling' },
    { firstname: 'Tania', lastname: 'Worthington' },
    { firstname: 'Zahid', lastname: 'Richards' },
    { firstname: 'Constance', lastname: 'Henson' },
    { firstname: 'Robbie', lastname: 'Sloan' },
    { firstname: 'Raheem', lastname: 'Taylor' },
    { firstname: 'Veronica', lastname: 'Carpenter' },
    { firstname: 'Ruby-Rose', lastname: 'Knox' },
    { firstname: 'Abi', lastname: 'Truong', phone: '68875 8557914' },
    { firstname: 'Briana', lastname: 'Pham', phone: '56649 5868525' },
    { firstname: 'Zeeshan', lastname: 'Mccormick' },
    { firstname: 'Ingrid', lastname: 'Edge' },
    { firstname: 'Primrose', lastname: 'Felix' },
    { firstname: 'Clementine', lastname: 'Barlow' },
    { firstname: 'Pedro', lastname: 'Prentice' },
    { firstname: 'Kit', lastname: 'Khan' },
    { firstname: 'Charles', lastname: 'Faulkner' },
    { firstname: 'Faye', lastname: 'Fenton', phone: '58240 8437517' },
    { firstname: 'Louisa', lastname: 'George' },
    { firstname: 'Belle', lastname: 'Cleveland', phone: '15296 1511375' },
    { firstname: 'Terence', lastname: 'Murphy', phone: '57424 6684324' },
    { firstname: 'Mared', lastname: 'Abbott', phone: '80585 3822122' },
    { firstname: 'Saniya', lastname: 'Robson' },
    { firstname: 'Hakim', lastname: 'Roth' },
    { firstname: 'Adil', lastname: 'Warner' },
    { firstname: 'Jaspal', lastname: 'Stevens' },
    { firstname: 'Ihsan', lastname: 'Wills' },
    { firstname: 'Rafi', lastname: 'Ford' },
    { firstname: 'Mattie', lastname: 'Sheehan', phone: '61620 4577935' },
    { firstname: 'Haiden', lastname: 'Horton' },
    { firstname: 'Shantelle', lastname: 'Cox' },
    { firstname: 'Leon', lastname: 'Odonnell' },
    { firstname: 'Ashton', lastname: 'Penn', phone: '46940 1507281' },
    { firstname: 'Vikram', lastname: 'Wyatt' },
    { firstname: 'Francesca', lastname: 'Hunter' },
    { firstname: 'Zahara', lastname: 'Pace', phone: '14012 4947484' },
    { firstname: 'Kajetan', lastname: 'Salgado' },
    { firstname: 'Mea', lastname: 'Wall', phone: '42612 7043625' },
    { firstname: 'Iman', lastname: 'Guy' },
    { firstname: 'Katrina', lastname: 'Mcbride' },
    { firstname: 'Celyn', lastname: 'Whittaker' },
    { firstname: 'Alexandria', lastname: 'Simpson', phone: '74802 3939517' },
    { firstname: 'Kate', lastname: 'Morin', phone: '62947 0984154' },
    { firstname: 'Felicity', lastname: 'Beltran', phone: '13779 0417685' },
    { firstname: 'Sami', lastname: 'Jeffery', phone: '99676 3808276' },
    { firstname: 'Waqar', lastname: 'Silva' },
    { firstname: 'Shahzaib', lastname: 'Frost' },
    { firstname: 'Pola', lastname: 'Hansen', phone: '13931 0697949' },
    { firstname: 'Huda', lastname: 'Laing' },
    { firstname: 'Teddy', lastname: 'Head' },
    { firstname: 'Orlaith', lastname: 'Powers', phone: '53738 2541733' },
    { firstname: 'Dilara', lastname: 'Bouvet' },
    { firstname: 'Laylah', lastname: 'Callahan' },
    { firstname: 'Campbell', lastname: 'Dunne', phone: '16872 8184060' },
    { firstname: 'Kajus', lastname: 'Hulme' },
    { firstname: 'Ava-Grace', lastname: 'Knights' },
    { firstname: 'Eesha', lastname: 'Simon' },
    { firstname: 'Charlene', lastname: 'Lyons' },
    { firstname: 'Pauline', lastname: 'Read' },
    { firstname: 'Archie', lastname: 'Dunn' },
    { firstname: 'Gregg', lastname: 'Potter', phone: '36066 3553172' },
    { firstname: 'Zakariyya', lastname: 'Hughes', phone: '81252 4423584' },
    { firstname: 'Eshaal', lastname: 'Giles' },
    { firstname: 'Carlos', lastname: 'Mckee' },
    { firstname: 'Susanna', lastname: 'Figueroa', phone: '79931 7636846' },
    { firstname: 'Dalton', lastname: 'Singleton' },
    { firstname: 'Harun', lastname: 'Knox' },
    { firstname: 'Tadhg', lastname: 'Benton' },
    { firstname: 'Zaid', lastname: 'Alcock' },
    { firstname: 'Courtney', lastname: 'Goodwin' },
    { firstname: 'Brodie', lastname: 'Wu', phone: '91854 9895983' },
    { firstname: 'Zayaan', lastname: 'Baxter' },
    { firstname: 'Melvin', lastname: 'Schroeder' },
    { firstname: 'Mallory', lastname: 'Dawson', phone: '75913 5244054' },
    { firstname: 'Marlene', lastname: 'Collier' },
    { firstname: 'Kanye', lastname: 'Gunn' },
    { firstname: 'Patrick', lastname: 'Mccullough' },
    { firstname: 'Wayne', lastname: 'Mcphee' },
    { firstname: 'Peyton', lastname: 'Nguyen' },
    { firstname: 'Breanna', lastname: 'Nelson' },
    { firstname: 'Daniele', lastname: 'Decker', phone: '50186 1702029' },
    { firstname: 'Ember', lastname: 'Holding' },
    { firstname: 'Abdurahman', lastname: 'Lin' },
    { firstname: 'Yara', lastname: 'Swanson' },
    { firstname: 'Velma', lastname: 'Foreman', phone: '80762 5082614' },
    { firstname: 'John-James', lastname: 'Fraser' },
    { firstname: 'Juan', lastname: 'Mccaffrey' },
    { firstname: 'Kerys', lastname: 'Nolan', phone: '65494 1263377' },
    { firstname: 'Sanah', lastname: 'Black' },
    { firstname: 'Samantha', lastname: 'Joseph', phone: '08032 8185100' },
    { firstname: 'Tasnia', lastname: 'Cooley', phone: '72715 8138110' },
    { firstname: 'Hawa', lastname: 'Alfaro' },
    { firstname: 'Kaydee', lastname: 'Williamson', phone: '87948 6094490' },
    { firstname: 'Jagoda', lastname: 'Hooper' },
    { firstname: 'Ainsley', lastname: 'Cote' },
    { firstname: 'Candice', lastname: 'Andrews' },
    { firstname: 'Mali', lastname: 'Meyer' },
    { firstname: 'Jannah', lastname: 'Hendrix', phone: '96823 0022167' },
    { firstname: 'Ivy-Rose', lastname: 'Reyes' },
    { firstname: 'Mert', lastname: 'Calhoun' },
    { firstname: 'Malcolm', lastname: 'Findlay' },
    { firstname: 'Hailie', lastname: 'Barr' },
    { firstname: 'Daniaal', lastname: 'Mcdaniel', phone: '34236 1035695' },
    { firstname: 'Mylee', lastname: 'Atherton' },
    { firstname: 'Shayna', lastname: 'Hoffman' },
    { firstname: 'Thelma', lastname: 'Chaney' },
    { firstname: 'Farrah', lastname: 'Ratcliffe', phone: '03997 6989796' },
    { firstname: 'Shahid', lastname: 'Garrison', phone: '75297 5797906' },
    { firstname: 'Emmanuel', lastname: 'Howell', phone: '25730 5062808' },
    { firstname: 'Rami', lastname: 'Clay' },
    { firstname: 'Claude', lastname: 'Croft', phone: '67912 9471030' },
    { firstname: 'Addie', lastname: 'Proctor' },
    { firstname: 'Rhiana', lastname: 'Mitchell' },
    { firstname: 'May', lastname: 'Duggan' },
    { firstname: 'Eliza', lastname: 'Knott' },
    { firstname: 'Faris', lastname: 'Jennings', phone: '17916 2247844' },
    { firstname: 'Emanuel', lastname: 'Chan' },
    { firstname: 'Sophie-Louise', lastname: 'Gates', phone: '05034 0774601' },
    { firstname: 'Kianna', lastname: 'Wagstaff' },
    { firstname: 'Jared', lastname: 'Wagner' },
    { firstname: 'Carrie-Ann', lastname: 'Mcgregor' },
    { firstname: 'Shania', lastname: 'Buckley' },
    { firstname: 'Sol', lastname: 'Mullen' },
    { firstname: 'Kason', lastname: 'Chang', phone: '26033 8043859' },
    { firstname: 'Adelle', lastname: 'David' },
    { firstname: 'Griffin', lastname: 'Woodcock', phone: '43431 9212812' },
    { firstname: 'Emerson', lastname: 'Davies' },
];
/**
 * Data source for the Contact view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class ContactDataSource extends _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"] {
    constructor() {
        super(Object.assign(CONTACT_DATA));
    }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getPagedData(data) {
        if (this.paginator) {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        }
        else {
            return data;
        }
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort || !this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            var _a, _b;
            const isAsc = ((_a = this.sort) === null || _a === void 0 ? void 0 : _a.direction) === 'asc';
            switch ((_b = this.sort) === null || _b === void 0 ? void 0 : _b.active) {
                case 'firstname': return compare(a.firstname, b.firstname, isAsc);
                case 'lastname': return compare(a.lastname, b.lastname, isAsc);
                case 'phone': return compare(+a.phone, +b.phone, isAsc);
                default: return 0;
            }
        });
    }
    deleteContact(contact) {
        var found = -1;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] == contact) {
                found = i;
                break;
            }
        }
        if (found > -1) {
            this.data.splice(found, 1);
            this._updateChangeSubscription();
        }
    }
    addContact(contact) {
        this.data.push(contact);
        this._updateChangeSubscription();
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.filter = filterValue;
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "uHWR":
/*!*************************************************************************************!*\
  !*** ./src/app/components/create-contact-dialog/create-contact-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateContactDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContactDialogComponent", function() { return CreateContactDialogComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CreateContactDialogComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateContactDialogComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateContactDialogComponent {
    constructor(fb, dialogRef) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.newContactForm = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phoneNumber: null,
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.newContactForm.controls['firstName'].hasError('required')) {
            return;
        }
        if (this.newContactForm.controls['lastName'].hasError('required')) {
            return;
        }
        this.dialogRef.close(this.newContactForm.value);
    }
    onCancel() {
        this.newContactForm.reset();
        this.dialogRef.close();
    }
}
CreateContactDialogComponent.ɵfac = function CreateContactDialogComponent_Factory(t) { return new (t || CreateContactDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
CreateContactDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateContactDialogComponent, selectors: [["app-course-dialog"]], decls: 27, vars: 3, consts: [["novalidate", "", 3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], [1, "row"], [1, "col"], [1, "full-width"], ["matInput", "", "placeholder", "First Name*", "formControlName", "firstName"], [4, "ngIf"], ["matInput", "", "placeholder", "Last Name*", "formControlName", "lastName"], ["matInput", "", "placeholder", "Phone Number", "formControlName", "phoneNumber"], [1, "dlg_footer"], [1, "al-right"], [1, "mat-button", 3, "click"], ["type", "submit", 1, "mat-raised-button", "mat-primary"]], template: function CreateContactDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateContactDialogComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CreateContactDialogComponent_mat_error_9_Template, 4, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CreateContactDialogComponent_mat_error_14_Template, 4, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateContactDialogComponent_Template_button_click_21_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "* Denotes a required field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newContactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newContactForm.controls["firstName"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newContactForm.controls["lastName"].hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: [".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  \n  .row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding:10px;\n  }\n  \n  \n  .col[_ngcontent-%COMP%] {\n    flex: 1;\n    margin-right: 20px;\n  }\n  \n  \n  .col[_ngcontent-%COMP%]:last-child {\n    margin-right: 0;\n  }\n  \n  \n  .al-right[_ngcontent-%COMP%] {\n      float:right;\n    }\n  \n  \n  small[_ngcontent-%COMP%] {\n      color:rgba(0,0,0,.5);\n      float: left;\n      display:block;\n      margin-top: 25px;\n    }\n  \n  \n  .dlg_footer[_ngcontent-%COMP%] {\n    margin-top:120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jb250YWN0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOzs7RUFFQTtJQUNFLE9BQU87SUFDUCxrQkFBa0I7RUFDcEI7OztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7O0VBRUE7TUFDSSxXQUFXO0lBQ2I7OztFQUNGO01BQ0ksb0JBQW9CO01BQ3BCLFdBQVc7TUFDWCxhQUFhO01BQ2IsZ0JBQWdCO0lBQ2xCOzs7RUFFSjtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJjcmVhdGUtY29udGFjdC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOjEwcHg7XG4gIH1cbiAgXG4gIC5jb2wge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuY29sOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICBcbiAgLmFsLXJpZ2h0IHtcbiAgICAgIGZsb2F0OnJpZ2h0O1xuICAgIH1cbiAgc21hbGwge1xuICAgICAgY29sb3I6cmdiYSgwLDAsMCwuNSk7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cblxuLmRsZ19mb290ZXIge1xuICAgIG1hcmdpbi10b3A6MTIwcHg7XG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map