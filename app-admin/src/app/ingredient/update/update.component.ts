import * as _ from 'lodash';
import {Component, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IngredientService} from "../service/ingredient.service";
import {Unit} from "../../unit/models/unit";
import {Category} from "../../category/models/category";
import {unescape} from "querystring";
import {ToastrService} from "../../shared/toastr.service";
import {FileService} from "../../files/services/file.service";
import {Coupon} from "../../coupon/models/coupon";

@Component({
    selector: 'ingredient-update',
    templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {
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
        image: new FormControl("", [Validators.required]),
        category_id: new FormControl("", [Validators.required]),
        coupon_id: new FormControl(""),
        status: new FormControl(1, [Validators.required]),
        parts: this.parts
    });

    categoriesOptionsSelect = [];
    private _subscribers = [];
    private _categories = [];

    couponsOptionsSelect = [];
    private _coupons = [];

    unitsOptionsSelect = [];
    private _units = [];
    private id: number;

    constructor(public router: Router,
                public fb: FormBuilder,
                public fileService: FileService,
                public ingredientService: IngredientService,
                private _route: ActivatedRoute) {

        this._subscribers.push(this.ingredientForm.valueChanges.subscribe(
            () => this.submitPending = false
        ));

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.id = res.data[0].id;
            this._categories = res.data[1].data;
            this.categoriesOptionsSelect = _.map(this._categories, (item: Category) => {
                return {value: item.id, label: item.name_en};
            });
            this._units = res.data[2].data;
            this.unitsOptionsSelect = _.map(this._units, (item: Unit) => {
                return {value: item.id, label: item.name_en};
            });
            this.ingredientForm.patchValue(res.data[0]);
            if (res.data[0].image !== null) {
                this.ingredientForm.patchValue({image: res.data[0].image.id});
                this.croppedImage = res.data[0].image.path;
            }
            _.forEach(res.data[0].parts, (item: any, i) => {
                this.parts.setControl(+i, new FormGroup({
                    part: new FormControl(item.part, [Validators.required]),
                    unit_id: new FormControl(item.unit_id, [Validators.required]),
                    status: new FormControl(item.status, [Validators.required]),
                }));
            });

            this._coupons = res.data[3].data;
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
        this._subscribers.push(this.ingredientService.updateById(ingredient, this.id).subscribe(
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
