import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  // Attributes
  title = 'app';
  jwtHelper = new JwtHelper();

  // Constructors
  constructor(public authService: AuthService) { }

  // Methods
  ngOnInit(): void {
    // get token here so it stays even on page refresh
    const token = localStorage.getItem('token');

    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
