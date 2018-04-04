import { Injectable } from '@angular/core';
// global variable declaration
declare let alertify: any;

@Injectable()
export class AlertifyService {


    // ATTRIBUTES

    // CONSTRUCTORS
    constructor() { }


    // () => any , anonymous function, declared entirely at runtime.
    confirm(message: string, okCallback: () => any) {
        alertify.confirm(message, function(e) {
            if (e) {
                okCallback();
            } else {
            }
        });
    }


    success(message: string) {
        alertify.success(message);
    }
    error(message: string) {
        alertify.error(message);
    }
    warning(message: string) {
        alertify.warning(message);
    }
    message(message: string) {
        alertify.message(message);
    }
}




