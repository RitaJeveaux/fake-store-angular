import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/custom.validators';


@Component({
  selector: 'app-checkout',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  checkoutForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      cardNumber: ['', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
        CustomValidators.numeric
      ]
      ],
      expiryDate: ['', [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)
      ]
      ],
      securityCode: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
        CustomValidators.numeric
      ]
      ]
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log('Formulário enviado:', this.checkoutForm.value);
    }
  }
}