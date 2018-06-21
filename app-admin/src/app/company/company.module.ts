import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";
import {CompanyService} from "./services/company.service";
import {CompanyGetComponent} from "./list/company-get.component";
import {CompanyCreateComponent} from "./create/company-create.component";
import {CompanyUpdateComponent} from "./update/company-update.component";
import {RouterModule} from "@angular/router";
import {companyRoutes} from "./company.routing";
import {ImageCropperModule} from "ngx-image-cropper";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ListResolver} from "./list/list.resolver";
import {UpdateResolver} from "./update/update.resolver";
import {ModalModule} from "ngx-bootstrap";

@NgModule({
    imports: [
        RouterModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(companyRoutes),
        NgbModule.forRoot(),
        ModalModule.forRoot(),
        ReactiveFormsModule,
        ImageCropperModule
    ],
    declarations: [
        CompanyGetComponent,
        CompanyCreateComponent,
        CompanyUpdateComponent
    ],
    providers: [
        CompanyService,
        ListResolver,
        UpdateResolver
    ]
})
export class CompanyModule {
}