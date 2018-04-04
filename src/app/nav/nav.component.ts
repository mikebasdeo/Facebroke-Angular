import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // attributes
  // typescript object declaration.
  model: any = {};

  // constructors
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  // methods
  ngOnInit() {
  }

  // when the user hits the submit button, it will call this method.
  // so, inject authorization service into the constructor.
  login() {
    // because the auth service returns an observable, we need to subscribe to it.
    // subscribe has three options: data, ?
    this.authService.login(this.model).subscribe(data => {
      // if successful
      this.alertify.success('logged in successfully');
    }, error => {
        this.alertify.error('Failed to Login');
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  logout() {
    // removes token from user.
    this.authService.userToken = null;
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
