/*
 *Services are meant to be injected into our components.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { userInfo } from 'os';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    // attributes
    baseUrl = 'http://localhost:5000/api/auth';
    userToken: any;

    // constructors
    constructor(private http: Http) { }

    // methods

    // this will get the values from our login form from nav.component.html
    // the user login info is passed in as a model.
    login(model: any) {

        // headers for request options
        const headers = new Headers({'Content-type': 'Application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.post(this.baseUrl + 'login' , model, options).map((response: Response) => {

            const user = response.json();
            console.log(user);
            // get the succesful login json token and store the token in the browser.
            if (user) {
                localStorage.setItem('token', user.tokenString);
                this.userToken = user.tokenString;

            }
        });
    }

}
