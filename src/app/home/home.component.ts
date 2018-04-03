import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // attributes
  registerMode = false;
  values: any;
  // constructors
  constructor(private http: Http) { }

  // methods
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => { this.values = response.json(); });

  }

  ngOnInit() {
    this.getValues();
  }


}
