import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {DictionariesService} from "../services/dictionary.service";

@Injectable()
export class UpdateResolver implements Resolve<any> {
    constructor(private dictionariesService: DictionariesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return Observable.forkJoin(
            this.dictionariesService.getViewByKey(route.params['key']),
        );
    }
}