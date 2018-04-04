// guard (much like a service) to protect from users that aren't logged in.
// will use the auth service.
// need to add to app.module.json and routes.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class AuthGuard implements CanActivate {

  // ATTRIBUTES

  // CONSTRUCTORS
  constructor(private authService: AuthService,  private router: Router, private alertify: AlertifyService) { }

  // METHODS
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.alertify.error('You need to log in to do that.');
    this.router.navigate(['/home']);
  }
}
