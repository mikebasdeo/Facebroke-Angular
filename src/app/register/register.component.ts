import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // attributes
  model: any = {};

  // constructors
  constructor() { }

  // methods
  register() {
    console.log(this.model);
  }

  cancel() {
    console.log('cancelled');
  }


  ngOnInit() {
  }

}
