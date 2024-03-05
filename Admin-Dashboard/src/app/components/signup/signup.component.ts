import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private router: Router) {}

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  signupform = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
  });

  signup() {
    console.log(this.signupform.value);
    // Signup successful
    this.router.navigate(['dashboard']);
  }
}
