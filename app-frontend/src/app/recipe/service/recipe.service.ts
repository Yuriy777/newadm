import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {ErrorHandler} from "../../shared/error-handler.service";

@Injectable()
export class RecipeService {

    private path = '/v1/recipes';
    private pathTranslation = '/v1/translations';

    constructor(private http: HttpClient,
                private errorHandler: ErrorHandler) {
    }

    public getViewByIdAndAlias(id: number, alias: string, amount?: number): Observable<{}> {
        let getParams: string = amount ? '?amountPeople='+amount : '';
        return this.http.get(this.path + '/' + alias + '/' + id + getParams)
            .catch((err, caught) => this.errorHandler.handle(err, caught));
    }

    public sendList(postData: object): Observable<{}> {
        return this.http.post(this.path + '/send', postData);
    }

    public getDictionary(): Observable<{}> {
        return this.http.get(this.pathTranslation).catch((err, caught) => this.errorHandler.handle(err, caught));
    }
}
