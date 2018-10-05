import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.authService.getPermission(this.router.url);
  }

}
