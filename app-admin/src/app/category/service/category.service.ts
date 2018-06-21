import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "../../shared/toastr.service";
import {AuthService} from "../../authentication/services/auth.service";
import {ErrorHandler} from "../../shared/error-handler.service";
import {ListRequest} from "../../shared/models/list-request.model";
import {ListRequestService} from "../../shared/list-request.service";

@Injectable()
export class CategoryService {

    private path = '/v1/categories';

    constructor(private http: HttpClient,
                private authService: AuthService,
                private errorHandler: ErrorHandler) {
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    }

    public getList(resObj: ListRequest = {}): Observable<{}> {
        return this.http.get(this.path + '?' + ListRequestService.parseRequestObject(resObj), {headers: this.getHeaders()})
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    public getViewById(id: number): Observable<{}> {
        return this.http.get(this.path + '/' + id, {headers: this.getHeaders()})
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    public create(category): Observable<{}> {
        return this.http.post(this.path, category, {headers: this.getHeaders()})
            .do(() => ToastrService.success("", "Categories was created"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    public updateById(category, id: number): Observable<{}> {
        return this.http.put(this.path + '/' + id, category, {headers: this.getHeaders()})
            .do(() => ToastrService.success("", "Categories was updated"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    public deleteById(id: number): Observable<{}> {
        return this.http.delete(this.path + '/' + id, {headers: this.getHeaders()})
            .do(() => ToastrService.success("", "Categories was deleted"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    public getMaxPosition(): Observable<{}> {
        return this.http.get(this.path + '/max-active-position', {headers: this.getHeaders()})
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }
}
