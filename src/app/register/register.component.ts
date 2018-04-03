import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // ATTRIBUTES
  model: any = {};

  // this will get data from the parent component (home) to the child (register)
  // @Input() valuesFromHome: any;

  // this will send data from the child (register) to the parent (home)
  @Output() cancelRegister = new EventEmitter();

  // constructors (inject auth service)
  constructor(private authService: AuthService) { }

  // methods
  register() {
    // need to attach to the auth.service for registering.
    this.authService.register(this.model).subscribe(() => {
      console.log('Registration Successful');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    // on cancel, this will contact the parent (home) and disable the Register button.
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }


  ngOnInit() {
  }

}
