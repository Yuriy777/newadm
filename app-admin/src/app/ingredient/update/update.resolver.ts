import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {IngredientService} from "../service/ingredient.service";
import {UnitService} from "../../unit/service/unit.service";
import {CategoryService} from "../../category/service/category.service";
import {CouponService} from "../../coupon/services/coupon.service";

@Injectable()
export class UpdateResolver implements Resolve<any> {
    constructor(private ingredientService: IngredientService,
                private categoryService: CategoryService,
                private couponService: CouponService,
                private unitService: UnitService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let reqObj = {
            page: 1,
            limit: 10,
            status: 1,
            // order: 1
        };
        return Observable.forkJoin(
            this.ingredientService.getViewById(route.params['id']),
            this.categoryService.getList(reqObj),
            this.unitService.getList(reqObj),
            this.couponService.getList(reqObj),
        );
    }
}