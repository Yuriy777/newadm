import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {UserService} from "../services/user.service";

@Injectable()
export class ListResolver implements Resolve<any> {
    constructor(private userService: UserService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let reqObj = {
            page: 1,
            limit: 10,
            status: 1,
            // sort: 'id',
            // order: 1
        };
        return Observable.forkJoin(
            this.userService.getList(reqObj),
        );
    }
}