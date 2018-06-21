import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
import {AuthService} from "../../authentication/services/auth.service";
import {ToastrService} from "../../shared/toastr.service";
import {ErrorHandler} from "../../shared/error-handler.service";
import {ListRequestService} from "../../shared/list-request.service";
import {ListRequest} from "../../shared/models/list-request.model";
import {Dictionary} from "../models/dictionary";

@Injectable()
export class DictionariesService {

    private path = '/v1/translations';

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


    updateByKey(dictionary: Dictionary, key: string): Observable<{}> {
        return this.http.put(this.path + '/' + key, dictionary, {headers: this.getHeaders()})
            .do(() => ToastrService.success("", "Word was updated"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    getViewByKey(key: string): Observable<{}> {
        return this.http.get(this.path + '/' + key, {headers: this.getHeaders()})
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }
}
