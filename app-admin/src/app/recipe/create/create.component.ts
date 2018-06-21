import * as _ from "lodash";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators, FormArray} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../category/models/category";
import {Unit} from "../../unit/models/unit";
import {RecipeService} from "../service/recipe.service";
import {Company} from "../../company/models/company";
import {Ingredient} from "../../ingredient/models/ingredient";
import {FileService} from "../../files/services/file.service";
import {ToastrService} from "../../shared/toastr.service";
import {unescape} from "querystring";

@Component({
    selector: 'recipe-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    showLang: boolean = false;
    submitPending: boolean = false;
    showImg: boolean = false;
    fileToUpload: File = null;
    imgId: number;
    imgPath: string = '';
    showBtnSL: boolean = false;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    errors = [];

    public ingredients = new FormArray([]);

    public subForm: FormGroup = new FormGroup({
        unit_amount: new FormControl(1, [Validators.required, Validators.min(1)]),
        unit_id: new FormControl("", [Validators.required]),
        ingredient_id: new FormControl("", [Validators.required]),
    });

    public recipeForm: FormGroup = new FormGroup({
        name_en: new FormControl("", [Validators.required]),
        company_id: new FormControl("", [Validators.required]),
        people_amount: new FormControl(1, [Validators.required, Validators.min(1)]),
        status: new FormControl('4', [Validators.required]),
        language: new FormControl('en', [Validators.required]),
        slug: new FormControl('', [Validators.required]),
        RecipeIngredient: this.ingredients,
        image: new FormControl("", [Validators.required])
    });

    public categories: Category[] = [];

    companyOptionsSelect = [];
    private _companies: Company[] = [];

    unitOptionsSelect = [];
    private _units: Unit[] = [];

    ingredientOptionsSelect = [];
    private _ingredients: Ingredient[] = [];

    statusOptionsSelect = [];

    languageOptionsSelect = ['en', 'he', 'es'];

    private _subscribers = [];
    private _mapIngCategory;

    constructor(public router: Router,
                public fb: FormBuilder,
                public fileService: FileService,
                public recipeService: RecipeService,
                private _route: ActivatedRoute) {

        this._subscribers.push(this.recipeForm.valueChanges.subscribe(
            () => this.submitPending = false
        ));

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this._companies = res.data[0].data;
            this._units = res.data[1].data;
            this._ingredients = res.data[2].data;
            this.categories = res.data[3].data;
            this.changeLangOnSelect('en');
            this.setMap();

        }));
    }

    ngOnInit() {

    }

    public createRecipe(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!this.recipeForm.valid) {
            this.submitPending = true;
            return;
        }

        this.submitPending = true;
        let recipe = this.recipeForm.value;
        this._subscribers.push(this.recipeService.create(recipe).subscribe(
            () => {
                this.router.navigate(['/recipes']);
            },
            (err) => {
            }
        ));
    }

    ngOnDestroy() {
        _.forEach(this._subscribers, (value) => {
            value.unsubscribe();
        });
    }

    public addIngredient(event) {
        event.preventDefault();
        this.ingredients.push(new FormGroup({
            unit_amount: new FormControl("", [Validators.required]),
            unit_id: new FormControl("", [Validators.required]),
            ingredient_id: new FormControl("", [Validators.required]),
        }));
    }

    public deleteIngredient(event, index) {
        event.preventDefault();
        this.ingredients.removeAt(index);
    }

    handleFileInput() {
        this.uploadFileToActivity(this.croppedImage).subscribe(data => {
            this.imgPath = data.path;
            this.showBtnSL = false;
            this.recipeForm.patchValue({image: data.id});
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


    changeLang(event) {
        this.changeLangOnSelect(this.recipeForm.controls.language.value);
    }

    private changeLangOnSelect(langPref) {
        this.companyOptionsSelect = this.prepareDataForSelect(this._companies, langPref);
        this.unitOptionsSelect = this.prepareDataForSelect(this._units, langPref);
        this.ingredientOptionsSelect = this.prepareDataForSelect(this._ingredients, langPref);
    }

    private prepareDataForSelect(data: any, langPref: 'en' | 'es' | 'he') {
        return _.map(data, (item: any) => {
            return {value: item.id.toString(), label: this.getLabelByLang(item, langPref)};
        });
    }

    private getLabelByLang(obj: any, langPref: 'en' | 'es' | 'he') {
        return obj['name_' + langPref] ? obj['name_' + langPref] : obj['name_en'];
    }

    private setMap() {
        let map = {};
        _.forEach(this._ingredients, function (ing: Ingredient) {
            map[ing.id] = ing.category_id;
        });
        this._mapIngCategory = map;
    }

    public isCategoryExistByIngId(ingId: number, catId: number): boolean {
        let result: boolean = false;
        if (_.has(this._mapIngCategory, ingId)) {
            result = catId == this._mapIngCategory[ingId];
        }

        return result;
    }

    public isCategoryExist(catId: number): boolean {
        let result: boolean = false;
        let values = this.recipeForm.get('RecipeIngredient').value;
        let ingIds: number[] = [];
        _.forEach(values, function (value: any) {
            ingIds.push(value.ingredient_id);
        });

        if (ingIds.length) {
            _.forEach(ingIds, function (value: any) {
                if (this.isCategoryExistByIngId(value, catId)) {
                    result = true;
                }
            }.bind(this));
        }

        return result;
    }

    public addToMainIngs(event) {
        event.preventDefault();

        this.ingredients.push(new FormGroup({
            unit_amount: new FormControl(this.subForm.get('unit_amount').value, [Validators.required]),
            unit_id: new FormControl(this.subForm.get('unit_id').value, [Validators.required]),
            ingredient_id: new FormControl(this.subForm.get('ingredient_id').value, [Validators.required]),
        }));
        this.subForm.reset();
        this.subForm.get('unit_amount').patchValue(1);
        this.subForm.clearValidators();
    }

}
