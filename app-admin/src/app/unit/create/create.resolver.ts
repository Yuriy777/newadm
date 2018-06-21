import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {UnitService} from "../service/unit.service";

@Injectable()
export class CreateResolver implements Resolve<any> {
    constructor(private unitService: UnitService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return Observable.forkJoin(
            this.unitService.getMaxPosition()
        );
    }
}