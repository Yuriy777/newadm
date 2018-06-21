import {Component, Input, OnInit} from '@angular/core';
import * as _ from "lodash";
import {ActivatedRoute, Router} from "@angular/router";

import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Company} from "../models/company";
import {CompanyService} from "../services/company.service";
import {FileService} from "../../files/services/file.service";
import {ToastrService} from "../../shared/toastr.service";
import {unescape} from "querystring";

@Component({
    selector: 'app-company-update',
    templateUrl: './company-update.component.html',
    styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

    fileToUpload: File = null;
    fileToUploadCompany: File = null;
    fileToUploadProd: File = null;
    submitPending: boolean = false;
    showLogo: boolean = false;
    showCompanyI: boolean = false;
    showProdI: boolean = false;
    logoId: number;
    logoPath: string;
    imgId: number;
    imgPath: string;
    prodIId: number;
    prodIPath: string;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    imageChangedCompanyEvent: any = '';
    croppedCompanyImage: any = '';
    imageChangedProductEvent: any = '';
    croppedProductImage: any = '';
    showBtnSL: boolean = false;

    form: FormGroup;
    @Input() company: Company;

    id: number;
    companyOptionsSelect = [];
    private _companies = [];

    unitOptionsSelect = [];
    private _units = [];

    ingredientOptionsSelect = [];
    private _ingredients = [];

    statusOptionsSelect = [];

    languageOptionsSelect = ['en', 'he', 'es'];

    private _subscribers = [];
    errors = [];

    constructor(public router: Router,
                public fb: FormBuilder,
                public companyService: CompanyService,
                public fileService: FileService,
                public _route: ActivatedRoute,) {

        this.form = this.fb.group({
            name_en: ['', Validators.required],
            name_he: [''],
            name_es: [''],
            company_site_url: ['',
                [Validators.pattern("^(http[s]?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$"), Validators.required]],
            color_1: ['',
                [Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"), Validators.required]],
            color_2: ['', [Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"), Validators.required]],
            color_3: ['', [Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"), Validators.required]],
            color_4: ['', Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")],
            color_5: ['', Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")],
            alias: ['', Validators.pattern("[0-9a-zA-Z\-]+")],
            logo: ['', Validators.required],
            image_company: ['', Validators.required],
            image_product_list: ['', Validators.required]
        });

        this._subscribers.push(this.form.valueChanges.subscribe(
            () => this.submitPending = false
        ));

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.id = res.data[0].id;
            this.form.patchValue(res.data[0]);
            if (res.data[0].logo !== null) {
                this.form.patchValue({logo: res.data[0].logo.id});
                this.croppedImage = res.data[0].logo.path;
            }
            if (res.data[0].imageCompany !== null) {
                this.form.patchValue({imageCompany: res.data[0].imageCompany.id})
                this.croppedCompanyImage = res.data[0].imageCompany.path;
            }
            if (res.data[0].imageProductList !== null) {
                this.form.patchValue({imageProductList: res.data[0].imageProductList.id});
                this.croppedProductImage = res.data[0].imageProductList.path;
            }
        }));
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

    fileChangeCompanyEvent(event: any): void {
        if(event.target.files[0].size > 1048576) {
            ToastrService.error("Error", 'Size must be smaller than 1Mb');

        } else {
            this.imageChangedCompanyEvent = event;
            this.fileToUploadCompany = event.target.files;
            this.showCompanyI = true;
        }
    }

    fileChangeProductEvent(event: any): void {
        if(event.target.files[0].size > 1048576) {
            ToastrService.error("Error", 'Size must be smaller than 1Mb');

        } else {
            this.imageChangedProductEvent = event;
            this.fileToUploadProd = event.target.files;
            this.showProdI = true;
        }
    }

    imageCropped(image: string) {
        this.croppedImage = image;
        this.showBtnSL = true;
    }

    imageCroppedCompany(image: string) {
        this.croppedCompanyImage = image;
        this.showCompanyI = true;
    }

    imageCroppedProduct(image: string) {
        this.croppedProductImage = image;
        this.showProdI = true;
    }

    imageLoaded() {
        // show cropper

    }

    loadImageFailed() {
        this.showBtnSL = false;
        this.showCompanyI = false;
        this.showProdI = false;
        ToastrService.error("Error", 'Image must be ".jpg" or ".png"');
    }


    ngOnInit() {

    }

    onSubmit(form) {
        if (!this.form.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        this.companyService.editCompany(form.value, this.id)
            .subscribe(() => {
                    this.router.navigate(['./companies']);
                },
                (err) => {
                    this.errors = err.error;
                });
    }

    handleFileInput() {
        this.uploadFileToActivity(this.croppedImage).subscribe(data => {
            this.logoId = data.id;
            this.logoPath = data.path;
            this.showBtnSL = false;
            this.form.patchValue({logo: data.id});
            return true;
        }, error => {
            ToastrService.error("Error", error);
        });
    }

    handleFileInputCompany() {
        this.uploadFileToActivity(this.croppedCompanyImage).subscribe(data => {
            this.imgId = data.id;
            this.imgPath = data.path;
            this.showCompanyI = false;
            this.form.patchValue({image_company: data.id});
            return true;
        }, error => {
            ToastrService.error("Error", error);
        });
    }

    handleFileInputProduct() {
        this.uploadFileToActivity(this.croppedProductImage).subscribe(data => {
            this.prodIId = data.id;
            this.prodIPath = data.path;
            this.showProdI = false;
            this.form.patchValue({image_product_list: data.id});
            return true;
        }, error => {
            ToastrService.error("Error", error);
        });
    }

    uploadFileToActivity(croppedImage: string) {
        return this.fileService.postFile(this.generateFile(croppedImage));
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
}
