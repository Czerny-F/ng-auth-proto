import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

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
  private redirectUrl = '/';

  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.loginForm.status);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // redirect
      this.router.navigate(['/profile']);
    }
    // flash messages
  }
}
