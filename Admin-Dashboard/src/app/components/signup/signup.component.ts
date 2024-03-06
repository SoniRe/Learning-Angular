import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private router: Router, private authService: AuthService) {}

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
    // console.log(this.signupform.value);

    const email = this.signupform.value.email;
    const password = this.signupform.value.password;

    // Signup process
    if (email && password) {
      this.authService.registerUser(email, password);
    }

    // Signup successful
    // this.router.navigate(['dashboard']);
  }
}
