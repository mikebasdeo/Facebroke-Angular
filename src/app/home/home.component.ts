import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // attributes
  registerMode = false;
  // constructors
  constructor() { }

    // methods
    registerToggle() {
      this.registerMode = !this.registerMode;
    }

  ngOnInit() {
  }


}
