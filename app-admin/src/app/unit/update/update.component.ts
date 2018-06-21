import * as _ from 'lodash';
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UnitService} from "../service/unit.service";

@Component({
    selector: 'unit-update',
    templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {
    showLang: boolean = false;
    submitPending: boolean = false;
    errors = [];

    public unitForm: FormGroup = new FormGroup({
        id: new FormControl("", [Validators.required]),
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
                private _route: ActivatedRoute) {
        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.unitForm.patchValue(res.data[0]);
        }))
    }

    ngOnInit() {

    }

    public updateUnit(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!this.unitForm.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        let unit = this.unitForm.value;
        this._subscribers.push(this.unitService.updateById(unit, unit.id).subscribe(
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
