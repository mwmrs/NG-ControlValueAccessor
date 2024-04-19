import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddressFormComponent } from '../adresse-form/adresse-form.component';


@Component({
  selector: 'app-person-form',
  template: `
    <h2>Person Form</h2>
    <form [formGroup]="personForm" (ngSubmit)="onSubmit()">
      <input formControlName="name" placeholder="Name" />
      <app-address-form formControlName="address"></app-address-form>

      <button type="submit" [disabled]="!personForm.valid">Submit</button>
      <button type="button" (click)="onReset()">Reset</button>
    </form>
    <pre>Form valid: {{ personForm.valid }}</pre>
    <pre>{{ personForm.value | json }}</pre>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, AddressFormComponent, JsonPipe],
})
export class PersonFormComponent {
  personForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      name: [null, Validators.required],
      address: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      console.log('Form Submission', this.personForm.value);
      // Further processing like sending data to a server can be done here
    }
  }

  onReset() {
    this.personForm.reset();
  }
}
