import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Auth} from "../models/auth.model";
import {Router} from "@angular/router";
import {ToastrService} from "../../shared/toastr.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthService {

    private _email = '';

    public get email() {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    constructor(private http: HttpClient,
                // private errorHandler: ErrorHandler,
                private router: Router,) {
    }

    public checkAuthToken() {
        let accessToken = localStorage.getItem('access-token');
        if (!localStorage.getItem('access-token') || accessToken == 'undefined') {
            this.router.navigate(['/login']);
            ToastrService.error('', 'Wrong credentials');
        }
    }

    public getAuthToken(): string | null {
        return localStorage.getItem('access-token');
    }

    public login(authObj: Auth): Observable<any> {

        let body = JSON.stringify(authObj);
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

        return this.http.post('/v1/auth/login', body, {headers: headers})
            .map((response: Response) => {
                let token = response['access-token'];
                // login successful if there's a jwt token in the response
                if (token) {

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response['profile']));
                    localStorage.setItem('access-token', token);
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }


    public logout(): Observable<any> {

        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));

        return this.http.post('/v1/auth/logout', {}, {headers: headers})
            .do((data) => {
                localStorage.clear();
                this.router.navigate(['/login']);
                return data;
            });
    }
}
