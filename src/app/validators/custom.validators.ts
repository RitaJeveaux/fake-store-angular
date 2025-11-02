import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static numeric(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && !/^\d+$/.test(value)) {
      return { numeric: true }
    }
    return null;
  }
}
