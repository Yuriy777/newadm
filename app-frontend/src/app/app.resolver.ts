import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {ToastrService} from "./shared/toastr.service";

@Injectable()
export class AppResolver implements CanActivate {
    constructor(private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let accessToken = localStorage.getItem('access-token');
        if (!localStorage.getItem('access-token') || accessToken == 'undefined') {
            localStorage.clear();
            this._router.navigate(['/login']);
            ToastrService.error('', 'Wrong credentials');
            return false;
        } else {

            return true;
        }
    }
}