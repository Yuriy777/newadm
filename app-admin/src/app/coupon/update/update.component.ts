import * as _ from "lodash";
import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {unescape} from "querystring";
import {ToastrService} from "../../shared/toastr.service";
import {FileService} from "../../files/services/file.service";
import {CouponService} from "../services/coupon.service";

@Component({
    selector: 'ingredient-update',
    templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {

    submitPending: boolean = false;
    showImg: boolean = false;
    fileToUpload: File = null;
    imgId: number;
    id: number;
    imgPath: string = '';
    showBtnSL: boolean = false;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    errors = [];

    public couponForm: FormGroup = new FormGroup({
        title_en: new FormControl("", [Validators.required]),
        description_en: new FormControl("", [Validators.required]),
        start_date: new FormControl("", [Validators.required]),
        finish_date: new FormControl("", [Validators.required]),
        status: new FormControl(1, [Validators.required]),
        file_id: new FormControl("", [Validators.required])
    });

    private _subscribers = [];

    constructor(public router: Router,
                public fileService: FileService,
                public couponService: CouponService,
                private _route: ActivatedRoute) {

        this._subscribers.push(this.couponForm.valueChanges.subscribe(
            () => this.submitPending = false
        ));

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.id = res.data[0].id;

            this.couponForm.patchValue(res.data[0]);
            this.couponForm.patchValue({finish_date: new Date(res.data[0].finish_date)});
            this.couponForm.patchValue({start_date: new Date(res.data[0].start_date)});
            if (res.data[0].image !== null) {
                this.couponForm.patchValue({image: res.data[0].image.id});
                this.croppedImage = res.data[0].image.path;
            }
        }));
    }

    ngOnInit() {

    }


    public updateCoupon(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!this.couponForm.valid) {
            this.submitPending = true;
            return;
        }

        this.submitPending = true;
        let coupon = this.couponForm.value;
        this._subscribers.push(this.couponService.updateById(coupon, this.id).subscribe(
            () => {
                this.router.navigate(['/coupons']);
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


    handleFileInput() {
        this.uploadFileToActivity(this.croppedImage).subscribe(data => {
            this.imgPath = data.path;
            this.showBtnSL = false;
            this.couponForm.patchValue({file_id: data.id});
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
