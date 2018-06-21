import * as _ from "lodash";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FileService} from "../../files/services/file.service";
import {ToastrService} from "../../shared/toastr.service";
import {unescape} from "querystring";
import {CouponService} from "../services/coupon.service";

@Component({
    selector: 'coupon-create',
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
                public fb: FormBuilder,
                public fileService: FileService,
                public couponService: CouponService) {

        this._subscribers.push(this.couponForm.valueChanges.subscribe(
            () => this.submitPending = false
        ));
    }

    ngOnInit() {

    }

    public createCoupon(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!this.couponForm.valid) {
            this.submitPending = true;
            return;
        }

        this.submitPending = true;
        let coupon = this.couponForm.value;
        this._subscribers.push(this.couponService.create(coupon).subscribe(
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
