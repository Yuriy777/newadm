import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {DictionariesService} from "../services/dictionary.service";

@Injectable()
export class ListResolver implements Resolve<any> {
    constructor(private dictionariesService: DictionariesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let reqObj = {
            page: 1,
            limit: 10,
            // order: 1
        };
        return Observable.forkJoin(
            this.dictionariesService.getList(reqObj),
        );
    }
}