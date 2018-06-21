import * as _ from "lodash";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UnitService} from "../service/unit.service";

@Component({
    selector: 'unit-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    showLang: boolean = false;
    submitPending: boolean = false;
    errors = [];

    public unitForm: FormGroup = new FormGroup({
        name_en: new FormControl("", [Validators.required]),
        name_he: new FormControl("", []),
        name_es: new FormControl("", []),
        position: new FormControl(1, [Validators.required, Validators.min(1)]),
        status: new FormControl(1, [Validators.required]),
    });

    private _subscribers = [];

    constructor(public router: Router,
                public fb: FormBuilder,
                public unitService: UnitService,
                public route: ActivatedRoute) {

        this._subscribers.push(this.unitForm.valueChanges.subscribe(
            () => this.submitPending = false
        ));
        this._subscribers.push(this.route.data.subscribe((res: any) => {
            this.unitForm.controls['position'].patchValue(+res.data[0] + 1);
        }));
    }

    ngOnInit() {

    }

    public createUnit(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!this.unitForm.valid) {
            this.submitPending = true;
            return;
        }

        this.submitPending = true;
        let unit = this.unitForm.value;
        this._subscribers.push(this.unitService.create(unit).subscribe(
            () => {
                this.router.navigate(['/units']);
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

    ngOnDestroy() {
        _.forEach(this._subscribers, (value) => {
            value.unsubscribe();
        });
    }
}
