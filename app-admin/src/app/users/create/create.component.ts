import * as _ from "lodash";
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../models/user";
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-user-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    submitPending: boolean = false;
    public form: FormGroup = new FormGroup({
        first_name: new FormControl('', [Validators.required]),
        second_name: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.min(6)]),
        username: new FormControl('', [Validators.required, Validators.min(5)]),
        email: new FormControl('', [Validators.required]),
        role: new FormControl('', [Validators.required]),
    });

    errors = [];
    private _subscribers = [];

    roleOptionsSelect = [
        {
            value: 1,
            label: 'Admin'
        },
        {
            value: 2,
            label: 'Editor'
        }
    ];

    constructor(public usersService: UserService,
                public router: Router) {
        this._subscribers.push(this.form.valueChanges.subscribe(
            () => this.submitPending = false
        ));
    }

    ngOnInit() {

    }

    create(event) {
        event.preventDefault();

        if (!this.form.valid) {
            this.submitPending = true;
            return;
        }
        let user = this.form.value;

        this._subscribers.push(this.usersService.create(user).subscribe(
            () => {
                this.router.navigate(['/users']);
            },
            (err) => {
                this.errors = err.error;
            }
        ));
    }

    isExistErrorByFormField(formField: string): boolean {
        return _.has(this.errors, formField);
    }

    getTextErrorByFormField(formField: string): string {
        let arrMessage = this.errors[formField];
        return arrMessage.join(',');
    }

}
