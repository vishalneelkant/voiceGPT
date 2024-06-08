import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service-auth/auth.service';
import { response } from 'express';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  loginForm : FormGroup;
  fb : FormBuilder;
  authService: AuthService
  token: any;
  loginError: any;

  constructor(fb: FormBuilder, authService: AuthService, private router: Router) { 
    this.fb = fb;
    this.authService = authService;
  }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }
    );
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      const loginUsername =  this.email.value;
      const loginPassword  = this.password.value;
      // Implement your login logic here
      this.authService.login({email:loginUsername, password: loginPassword })
      .subscribe({
        next: response => {
          console.log("token :" + response.access_token);
          this.authService.setToken(response.access_token);
          // Redirect to home page or any other route
          this.router.navigate(['/home']);
        },
        error: error => {
          console.log('Login failed:', error);
          this.loginError = error.error.message;
        },
        complete: () => {
          // Optional complete handler
          //console.log(response);
        }
      });
    }
  }

    get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
