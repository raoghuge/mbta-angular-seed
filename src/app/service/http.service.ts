import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

/**
 * Exports `HttpService` which handles the all http calls in the application.
 * `HttpClient` is used to make all http calls.
 */

@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private http: HttpClient) { }

    /**
     * Return the token from localstorage of the browser.
     */
    private getToken(): string {
        return localStorage.getItem('token');
    }

    /**
     * Makes call to login api which public in nature(Does not require token).
     * @param user user object which inclueds user credentials(email, password).
     * @return  An `Observable`.
     */
    public login(user) {
        return this.http.post(environment.apiUrl + 'auth/login', user);
    }

    /**
     * Makes call to user registration api which public in nature(Does not require token).
     * @param user User object which inclueds user details(email, password, contact etc..).
     * @return  An `Observable`.
     */
    public register(user) {
        return this.http.post(environment.apiUrl + 'auth/signup', user);
    }

    /**
     * Accept the API end point name append it the server address given in environment and make get call to the API.
     * Also add token to the header.
     * @param url API end point name
     *
     * @return  An `Observable`. return from API.
     */
    public get(url) {
        return this.http.get(environment.apiUrl + url,
            {
                headers: new HttpHeaders({
                    Authorization: 'Bearer ' + this.getToken()
                })
            });
    }

     /**
      * Accept the API end point name append it the server address given in environment and make post call to the API.
      * Also add token to the header.
      * @param url API end point name.
      * @param data Request body.
      * @return  An `Observable`. return from API.
      */
    public post(url, data) {
        return this.http.post(environment.apiUrl + url, data,
            {
                headers: new HttpHeaders({
                    Authorization: 'Bearer ' + this.getToken()
                })
            });
    }
}
