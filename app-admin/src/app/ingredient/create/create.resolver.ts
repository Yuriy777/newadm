import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {CategoryService} from "../../category/service/category.service";
import {UnitService} from "../../unit/service/unit.service";
import {Coupon} from "../../coupon/models/coupon";
import {CouponService} from "../../coupon/services/coupon.service";

@Injectable()
export class CreateResolver implements Resolve<any> {
    constructor(private categoryService: CategoryService,
                private unitService: UnitService,
                private couponService: CouponService,
    ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let reqObj = {
            page: 1,
            limit: 100,
            status: 1,
            // order: 1
        };
        return Observable.forkJoin(
            this.categoryService.getList(reqObj),
            this.unitService.getList(reqObj),
            this.couponService.getList(reqObj),
        );
    }
}