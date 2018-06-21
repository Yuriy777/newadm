import * as _ from 'lodash';
import {Component, OnInit, OnDestroy, AfterViewInit} from "@angular/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {RequestOptions} from "@angular/http";
import {AuthService} from "../services/auth.service";
import {ToastrService} from "../../shared/toastr.service";
// import {CustomValidators} from "../../validators/validators.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.style.css']
})

export class LoginComponent implements OnInit, OnDestroy {
    public loginForm = new FormGroup({
        email: new FormControl("", [
            Validators.required,
            // CustomValidators.emailPatternValidator()
        ]),
        password: new FormControl("", [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(100),
            // CustomValidators.nospacePatternValidator(),
            // CustomValidators.passwordPatternValidator()
        ]),
        keepMeLogIn: new FormControl(false)
    });

    public submitPending = false;
    private _subscribers = [];

    constructor(private authService: AuthService,
                private _router: Router,
                private requestOptions: RequestOptions) {
        if (this.authService.email) {
            this.loginForm.controls['email'].patchValue(this.authService.email);
        }
        this._subscribers.push(this.loginForm.valueChanges.subscribe(
            () => this.submitPending = false
        ));
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        _.forEach(this._subscribers, (value) => {
            value.unsubscribe();
        });
    }

    authenticate(event) {
        event.preventDefault();

        this.submitPending = true;
        this._subscribers.push(this.authService.login(this.loginForm.value).subscribe(
            res => {
                this._router.navigate(['/categories']);
            },
            err => {
                this.loginForm.controls['password'].patchValue('');
                ToastrService.error('', 'Something was wrong with authentication');
                console.log("Something was wrong with authentication", err);
            }));
    }

}

