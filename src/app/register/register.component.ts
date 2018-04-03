import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // attributes
  model: any = {};

  // this will get data from the parent component (home) to the child (register)
  @Input() valuesFromHome: any;

  // this will send data from the child (register) to the parent (home)
  @Output() cancelRegister = new EventEmitter();

  // constructors
  constructor() { }

  // methods
  register() {
    console.log(this.model);
  }

  cancel() {
    // on cancel, this will contact the parent (home) and disable the Register button.
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }


  ngOnInit() {
  }

}
