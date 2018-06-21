import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {ToastrService} from "./toastr.service";
import {Response} from "@angular/http";

@Injectable()
export class ErrorHandler {
    constructor(private router: Router) {

    }

    public handle(err: Response | any, caught: any): Observable<any> {
        if (err.status === 401) {
            localStorage.removeItem('access-token');
            this.router.navigate(['/login']);
        }
        if (err.status === 400) {
            ToastrService.error(err._body || err.statusText, "Error:Data is incorrect");
        } else {
            ToastrService.error(err._body || err.statusText, "Error " + err.status);
        }
        return Observable.throw(err);
    }
}