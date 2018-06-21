import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginResolver implements CanActivate {
    constructor(private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (!localStorage.getItem('access-token')) {
            return true;
        } else {
            this._router.navigate(['/categories']);
            return false;
        }
    }
}