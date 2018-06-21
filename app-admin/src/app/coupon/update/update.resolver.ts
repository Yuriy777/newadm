import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {CouponService} from "../services/coupon.service";

@Injectable()
export class UpdateResolver implements Resolve<any> {
    constructor(private couponService: CouponService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return Observable.forkJoin(
            this.couponService.getViewById(route.params['id']),
        );
    }
}