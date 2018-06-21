import * as _ from "lodash";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators, FormArray} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IngredientService} from "../service/ingredient.service";
import {Category} from "../../category/models/category";
import {Unit} from "../../unit/models/unit";
import {FileService} from "../../files/services/file.service";
import {ToastrService} from "../../shared/toastr.service";
import {unescape} from "querystring";
import {Coupon} from "../../coupon/models/coupon";

@Component({
    selector: 'ingredient-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    submitPending: boolean = false;
    showImg: boolean = false;
    fileToUpload: File = null;
    imgId: number;
    imgPath: string = '';
    showBtnSL: boolean = false;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    errors = [];

    public parts = new FormArray([
        new FormGroup({
            part: new FormControl(1, [Validators.required]),
            unit_id: new FormControl("", [Validators.required]),
            status: new FormControl(1, [Validators.required]),
        })
    ]);
    public ingredientForm: FormGroup = new FormGroup({
        name_en: new FormControl("", [Validators.required]),
        name_he: new FormControl("", []),
        name_es: new FormControl("", []),
        category_id: new FormControl("", [Validators.required]),
        coupon_id: new FormControl(""),
        status: new FormControl(1, [Validators.required]),
        parts: this.parts,
        image: new FormControl("", [Validators.required])
    });

    categoriesOptionsSelect = [];
    private _subscribers = [];
    private _categories = [];

    unitsOptionsSelect = [];
    private _units = [];

    couponsOptionsSelect = [];
    private _coupons = [];

    constructor(public router: Router,
                public fb: FormBuilder,
                public fileService: FileService,
                public ingredientService: IngredientService,
                private _route: ActivatedRoute) {

        this._subscribers.push(this.ingredientForm.valueChanges.subscribe(
            () => this.submitPending = false
        ));

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this._categories = res.data[0].data;
            this.categoriesOptionsSelect = _.map(this._categories, (item: Category) => {
                return {value: item.id, label: item.name_en};
            });

            this._units = res.data[1].data;
            this.unitsOptionsSelect = _.map(this._units, (item: Unit) => {
                return {value: item.id, label: item.name_en};
            });

            this._coupons = res.data[2].data;
            this.couponsOptionsSelect = _.map(this._coupons, (item: Coupon) => {
                return {value: item.id, label: item.title_en};
            });

            this.couponsOptionsSelect.unshift({value: '', label: 'not set'});
        }));
    }

    ngOnInit() {

    }

    public createIngredient(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!this.ingredientForm.valid) {
            this.submitPending = true;
            return;
        }

        this.submitPending = true;
        let ingredient = this.ingredientForm.value;
        this._subscribers.push(this.ingredientService.create(ingredient).subscribe(
            () => {
                this.router.navigate(['/ingredients']);
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

    public addPart(event) {
        event.preventDefault();
        this.parts.push(new FormGroup({
            part: new FormControl(1, [Validators.required]),
            unit_id: new FormControl("", [Validators.required]),
            status: new FormControl(1, [Validators.required]),
        }));
    }

    public deletePart(event, index) {
        event.preventDefault();
        this.parts.removeAt(index);
    }


    handleFileInput() {
        this.uploadFileToActivity(this.croppedImage).subscribe(data => {
            this.imgPath = data.path;
            this.showBtnSL = false;
            this.ingredientForm.patchValue({image: data.id});
            return true;
        }, error => {
            ToastrService.error("Error", error);
        });
    }

    fileChangeEvent(event: any): void {
        if(event.target.files[0].size > 1048576) {
            ToastrService.error("Error", 'Size must be smaller than 1Mb');

        } else {
            this.imageChangedEvent = event;
            this.fileToUpload = event.target.files;
            this.showBtnSL = true;
        }
    }

    imageCropped(image: string) {
        this.croppedImage = image;
        this.showBtnSL = true;
    }

    imageLoaded() {
        // show cropper

    }

    loadImageFailed() {
        this.showBtnSL = false;
        ToastrService.error("Error", 'Image must be ".jpg" or ".png"');
    }

    private generateFile(dataURI: string): Blob {
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        } else {
            byteString = unescape(dataURI.split(',')[1]);
        }
        const type = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {type});
    }

    isExistErrorByFormField(formField: string): boolean {
        return _.has(this.errors, formField);
    }

    getTextErrorByFormField(formField: string): string {
        let arrMessage = this.errors[formField];
        return arrMessage.join(',');
    }

    uploadFileToActivity(croppedImage: string) {
        return this.fileService.postFile(this.generateFile(croppedImage));
    }
}
