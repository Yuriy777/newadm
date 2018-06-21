import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {RecipeService} from "../service/recipe.service";

@Injectable()
export class ViewResolver implements Resolve<any> {
    constructor(private recipeService: RecipeService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return Observable.forkJoin(
            this.recipeService.getViewByIdAndAlias(route.params['id'], route.params['alias']),
            this.recipeService.getDictionary()
        );
    }
}