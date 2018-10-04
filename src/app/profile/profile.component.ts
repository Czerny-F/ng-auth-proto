import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import { NgRedux, select } from '@angular-redux/store';
// import { Observable } from 'rxjs';

// import { IAppState } from '../redux/store';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // @select() readonly authenticated$: Observable<boolean>;
  isAuthenticated: boolean;
  // subscription;

  constructor(
    // private ngRedux: NgRedux<IAppState>,
    private router: Router, private authService: AuthService) {
    // this.subscription = ngRedux.select<boolean>('authenticated')
    //   .subscribe(authed => this.authenticated = authed);
  }

  ngOnInit() {
    this.authService.check()
      .subscribe(authed => this.isAuthenticated = authed);
    // if (!this.authenticated) {
    //   this.router.navigate(['/login']);
    // }
  }

}
