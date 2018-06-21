import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {CompanyService} from "../services/company.service";


@Injectable()
export class UpdateResolver implements Resolve<any> {
    constructor(private companyService: CompanyService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        return Observable.forkJoin(
            this.companyService.getViewById(route.params['id'])
        );
    }
}