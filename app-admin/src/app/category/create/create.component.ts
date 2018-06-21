import * as _ from "lodash";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../service/category.service";
import {CropperSettings} from "ng2-img-cropper";

@Component({
    selector: 'category-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    showLang: boolean = false;
    submitPending: boolean = false;
    errors = [];
    data: any;
    cropperSettings: CropperSettings;


    public categoryForm: FormGroup = new FormGroup({
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
                public route: ActivatedRoute) {

        this._subscribers.push(this.categoryForm.valueChanges.subscribe(
            () => this.submitPending = false
        ));

        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;

        this.data = {};
        this._subscribers.push(this.route.data.subscribe((res: any) => {
            this.categoryForm.controls['position'].patchValue(+res.data[0] + 1);
        }));
    }

    ngOnInit() {

    }

    public createCategory(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!this.categoryForm.valid) {
            this.submitPending = true;
            return;
        }

        this.submitPending = true;
        let category = this.categoryForm.value;
        this._subscribers.push(this.categoryService.create(category).subscribe(
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
