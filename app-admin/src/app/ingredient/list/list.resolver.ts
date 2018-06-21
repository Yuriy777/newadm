import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {IngredientService} from "../service/ingredient.service";
import {CategoryService} from "../../category/service/category.service";
import {CouponService} from "../../coupon/services/coupon.service";

@Injectable()
export class ListResolver implements Resolve<any> {
    constructor(private ingredientService: IngredientService,
                private categoryService: CategoryService,
                private couponService: CouponService,) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let reqObj = {
            page: 1,
            limit: 10,
            status: 1,
        };
        let reqObjAdditional = {
            page: 1,
            limit: 100,
            status: 1,
        };
        return Observable.forkJoin(
            this.ingredientService.getList(reqObj),
            this.categoryService.getList(reqObjAdditional),
            this.couponService.getList(reqObjAdditional),
        );
    }
}