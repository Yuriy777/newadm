import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "../../shared/toastr.service";
import {Observable} from "rxjs";
import {AuthService} from "../../authentication/services/auth.service";
import {Company} from "../models/company";
import {ErrorHandler} from "../../shared/error-handler.service";
import {ListRequest} from "../../shared/models/list-request.model";
import {ListRequestService} from "../../shared/list-request.service";

@Injectable()
export class CompanyService {

    private path = '/v1/companies';

    constructor(private http: HttpClient,
                private errorHandler: ErrorHandler,
                private authService: AuthService) {
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    }

    getCompanies(): Observable<any> {
        // get company from api
        return this.http.get(this.path, {headers: this.getHeaders()})
            .do((response: any) => response)
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }


    getList(resObj: ListRequest = {}): Observable<{}> {
        // get company from api
        return this.http.get(this.path + '?' + ListRequestService.parseRequestObject(resObj), {headers: this.getHeaders()})
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    getViewById(id: number): Observable<{}> {
        return this.http.get(this.path + '/' + id, {headers: this.getHeaders()})
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    createCompany(form): Observable<{}> {
        return this.http.post(this.path, form, {headers: this.getHeaders()})
            .do(() => ToastrService.success("", "Company was create"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }


    editCompany(form, id): Observable<any> {
        return this.http.put(this.path + '/' + id, form, {headers: this.getHeaders()})
            .do(() => ToastrService.success("", "Company was update"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    deleteById(id): Observable<{}> {
        return this.http.delete(this.path + '/' + id, {headers: this.getHeaders()})
            .do(() => ToastrService.success("", "Company was delete"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }
}
