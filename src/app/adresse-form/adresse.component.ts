import { Component, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-address',
  template: `
    <h3>Address</h3>
    <form [formGroup]="addressForm">
      <input
        formControlName="street"
        placeholder="Street"
        (blur)="onTouched()"
      />
      <input formControlName="city" placeholder="City" (blur)="onTouched()" />
      <input formControlName="zip" placeholder="Zip" (blur)="onTouched()" />
    </form>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class AddressComponent
  implements ControlValueAccessor, Validator, OnInit
{
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      street: [null, [Validators.required]],
      city: [null, [Validators.required]],
      zip: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.addressForm.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  onChange: any = () => {};
  onTouched: any = () => {};
  onValidationChange: any = () => {};

  writeValue(value: any): void {
    if (value) {
      this.addressForm.setValue(value, { emitEvent: false });
    } else {
      this.addressForm.reset();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.addressForm?.invalid ? { invalid: true } : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidationChange = fn;
  }
}
