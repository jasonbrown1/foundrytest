import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-dialog', 
  templateUrl: './create-contact-dialog.component.html',
  styleUrls: ['./create-contact-dialog.component.css']
})
export class CreateContactDialogComponent implements OnInit {
  newContactForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    phoneNumber: null,
  });

  constructor(
    private fb: FormBuilder,
      private dialogRef: MatDialogRef<CreateContactDialogComponent>,
  ) {}

  ngOnInit() {}

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