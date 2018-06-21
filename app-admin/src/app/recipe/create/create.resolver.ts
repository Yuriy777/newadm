import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {UnitService} from "../../unit/service/unit.service";
import {CompanyService} from "../../company/services/company.service";
import {IngredientService} from "../../ingredient/service/ingredient.service";
import {CategoryService} from "../../category/service/category.service";

@Injectable()
export class CreateResolver implements Resolve<any> {
    constructor(private companyService: CompanyService,
                private unitService: UnitService,
                private categoryService: CategoryService,
                private ingredientService: IngredientService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let reqObj = {
            page: 1,
            limit: 100,
            status: 1,
            // order: 1
        };
        return Observable.forkJoin(
            this.companyService.getList(reqObj),
            this.unitService.getList(reqObj),
            this.ingredientService.getList(reqObj),
            this.categoryService.getList(reqObj),
        );
    }
}