import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  private message: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.authService.getPermission(this.router.url);
  }

  onSubmit(): void {
    // console.log(this.loginForm.status);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe(msg => this.message = msg);
    }
    // flash messages
  }
}
