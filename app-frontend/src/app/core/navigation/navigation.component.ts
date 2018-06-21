import * as _ from 'lodash';
import {Component, OnInit, OnDestroy, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../authentication/services/auth.service";

@Component({
    selector: 'nav-component',
    templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnInit, AfterViewInit, OnDestroy {
    private _subscribers = [];

    constructor(private router: Router,
                public _authService: AuthService) {

    }

    ngOnInit() {

    }

    ngOnDestroy() {
        _.forEach(this._subscribers, (value) => {
            value.unsubscribe();
        });
    }

    ngAfterViewInit() {
    }


    public logout(event) {
        event.preventDefault();
        this._subscribers.push(this._authService.logout().subscribe(
            (res) => {
            },
            (err) => {
            }
        ))
    }
}
