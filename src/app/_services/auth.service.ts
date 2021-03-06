/*
 *Services are meant to be injected into our components.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import { userInfo } from 'os';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';


@Injectable()
export class AuthService {

    // ATTRIBUTES
    baseUrl = 'http://localhost:5000/api/auth/';
    userToken: any;
    decodedToken: any;
    jwtHelper: JwtHelper = new JwtHelper();

    // CONSTRUCTORS
    constructor(private http: Http) { }

    // METHODS

    // this will get the values from our login form from nav.component.html
    // the user login info is passed in as a model.
    login(model: any) {

        // headers for request options
        return this.http.post(this.baseUrl + 'login' , model, this.requestOptions()).map((response: Response) => {

            const user = response.json();
            console.log(user);
            // get the succesful login json token and store the token in the browser.
            if (user && user.tokenString) {
                localStorage.setItem('token', user.tokenString);
                this.userToken = user.tokenString;
                this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
                console.log(this.decodedToken);
            }
        }).catch(this.handleError);



    }

    register(model: any) {
      return this.http.post(this.baseUrl + 'register', model, this.requestOptions()).catch(this.handleError);
    }

    loggedIn() {
        return tokenNotExpired('token');

    }


    private requestOptions() {
        const headers = new Headers({'Content-type': 'Application/json'});
        return new RequestOptions({headers: headers});
    }





    private handleError(error: any) {
        const applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return Observable.throw(applicationError);
        }

        const serverError = error.json();
        let modelStateErrors = '';

        if (serverError) {
            for (const key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }
        return Observable.throw(modelStateErrors || serverError);
    }
}
