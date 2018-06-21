import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {AuthService} from "../../authentication/services/auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ListRequest} from "../../shared/models/list-request.model";
import {ListRequestService} from "../../shared/list-request.service";
import {ToastrService} from "../../shared/toastr.service";
import {ErrorHandler} from "../../shared/error-handler.service";

@Injectable()
export class UserService {

    constructor(private http: HttpClient,
                private authService: AuthService,
                private errorHandler: ErrorHandler) {
    }


    headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getAuthToken());


    public getList(resObj: ListRequest = {}): Observable<{}> {
        return this.http.get('/v1/users?' + ListRequestService.parseRequestObject(resObj), {headers: this.headers})
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    public blockById(id: number): Observable<{}> {
        return this.http.get('/v1/users/block/' + id, {headers: this.headers})
            .do(() => ToastrService.success("", "User was blocked"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }


    public create(user): Observable<{}> {
        return this.http.post('/v1/users', user, {headers: this.headers})
            .do(() => ToastrService.success("", "User was created"))
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }


}
