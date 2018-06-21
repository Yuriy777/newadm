import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
import {AuthService} from "../../authentication/services/auth.service";
import {ErrorHandler} from "../../shared/error-handler.service";
import {ListRequestService} from "../../shared/list-request.service";
import {ListRequest} from "../../shared/models/list-request.model";
import {ToastrService} from "../../shared/toastr.service";
import {Coupon} from "../models/coupon";

@Injectable()
export class CouponService {

    private path = '/v1/coupons';

    constructor(private http: HttpClient,
                private errorHandler: ErrorHandler,
                private authService: AuthService) {
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    }

    getList(resObj: ListRequest = {}): Observable<{}> {
        return this.http.get(this.path + '?' + ListRequestService.parseRequestObject(resObj), {headers: this.getHeaders()})
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    getViewById(id: number): Observable<{}> {
        return this.http.get(this.path + '/' + id, {headers: this.getHeaders()})
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }


    public create(coupon: Coupon): Observable<{}> {
        return this.http.post(this.path, coupon, {headers: this.getHeaders()})
            .do(() => ToastrService.success("", "Coupon was created"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    public updateById(coupon: Coupon, id: number): Observable<{}> {
        return this.http.put(this.path + '/' + id, coupon, {headers: this.getHeaders()})
            .do(() => ToastrService.success("", "Coupon was updated"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }


    public deleteById(id: number): Observable<{}> {
        return this.http.delete(this.path + '/' + id, {headers: this.getHeaders()})
            .do(() => ToastrService.success("", "Coupon was deleted"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

}
