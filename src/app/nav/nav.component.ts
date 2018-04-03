import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // typescript object declaration.
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  // when the user hits the submit button, it will call this method.
  login() {
    console.log(this.model);
  }

}
