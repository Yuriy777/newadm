import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {CategoryService} from "../service/category.service";

@Injectable()
export class CreateResolver implements Resolve<any> {
    constructor(private categoryService: CategoryService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return Observable.forkJoin(
            this.categoryService.getMaxPosition(),
        );
    }
}