import * as _ from 'lodash';
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../service/category.service";

@Component({
    selector: 'category-update',
    templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {
    showLang: boolean = false;
    submitPending: boolean = false;
    errors = [];
    public categoryForm: FormGroup = new FormGroup({
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
                public categoryService: CategoryService,
                private _route: ActivatedRoute) {
        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.categoryForm.patchValue(res.data[0]);
        }))
    }

    ngOnInit() {

    }

    public updateCategory(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.categoryForm.valid) {
            this.submitPending = true;
            return;
        }
        let category = this.categoryForm.value;
        this._subscribers.push(this.categoryService.updateById(category, category.id).subscribe(
            () => {
                this.router.navigate(['/categories']);
            },
            (err) => {
                this.errors = err.error;
            }
        ));
    }

    ngOnDestroy() {
        _.forEach(this._subscribers, (value) => {
            value.unsubscribe();
        });
    }

    isExistErrorByFormField(formField: string): boolean {
        return _.has(this.errors, formField);
    }

    getTextErrorByFormField(formField: string): string {
        let arrMessage = this.errors[formField];
        return arrMessage.join(',');
    }
}
