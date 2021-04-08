import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CreateContactDialogComponent } from '../create-contact-dialog/create-contact-dialog.component';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ContactDataSource, ContactItem } from './contact-list-datasource';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'contact-list',
  styleUrls: ['contact-list.component.css'],
  templateUrl: 'contact-list.component.html'
})
export class ContactListComponent implements AfterViewInit {

  // Configure the table sort and paginator.
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<ContactItem>;
  contactDataSource: ContactDataSource;
  displayedColumns = ['firstname', 'lastname', 'phone', 'actions'];
  searchField: string = "";
  confirmDeleted: boolean = true;

  // Constructor with the dialog injection.
  constructor(private dialog: MatDialog) {
    this.contactDataSource = new ContactDataSource();
  }
  ngAfterViewInit() {
    this.contactDataSource.sort = this.sort;
    this.contactDataSource.paginator = this.paginator;
    this.table.dataSource = this.contactDataSource;
    this.paginator._intl.itemsPerPageLabel = "Contacts per page";
  }

  // Open the New Contact Dialog.
  openNewContactDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "500px";

    const dialogRef = this.dialog.open(CreateContactDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        // Make sure we have data passed in.
        if (data.firstName && data.lastName) {
          this.contactDataSource.addContact(
            { firstname: data.firstName, lastname: data.lastName, phone: data.phoneNumber }
          )
        };
      }
    });
  }

  // Handle searching.
  applyFilter(filterValue: string) {
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

    const dialogData = new ConfirmDialogModel("Confirm Delete", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
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
