import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {RecipeService} from "../service/recipe.service";

@Injectable()
export class ListResolver implements Resolve<any> {
    constructor(private recipeService: RecipeService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let reqObj = {
            page: 1,
            limit: 10,
            status: 4,
            // sort: 'id',
            // order: 1
        };
        return Observable.forkJoin(
            this.recipeService.getList(reqObj),
        );
    }
}