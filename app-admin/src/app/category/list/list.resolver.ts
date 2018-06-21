import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {CategoryService} from "../service/category.service";

@Injectable()
export class ListResolver implements Resolve<any> {
    constructor(private categoryService: CategoryService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let reqObj = {
            page: 1,
            limit: 10,
            status: 1,
            order: 0,
            sort: 'id'
        };
        return Observable.forkJoin(
            this.categoryService.getList(reqObj),
        );
    }
}