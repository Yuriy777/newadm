import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {ListComponent} from "./list/list.component";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {couponRoutes} from "./coupon.routing";
import {ListResolver} from "./list/list.resolver";
import {CouponService} from "./services/coupon.service";
import {CreateComponent} from "./create/create.component";
import {ImageCropperModule} from "ngx-image-cropper";
import {BsDatepickerModule, ModalModule} from "ngx-bootstrap";
import {UpdateComponent} from "./update/update.component";
import {UpdateResolver} from "./update/update.resolver";

@NgModule({
    imports: [
        RouterModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule.forChild(couponRoutes),
        ReactiveFormsModule,
        ImageCropperModule,
    ],
    declarations: [
        ListComponent,
        CreateComponent,
        UpdateComponent,
    ],
    providers: [
        ListResolver,
        UpdateResolver,
        CouponService,
    ]
})
export class CouponModule {
}