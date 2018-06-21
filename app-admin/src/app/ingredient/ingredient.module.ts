import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListComponent} from "./list/list.component";
import {IngredientService} from "./service/ingredient.service";
import {ListResolver} from "./list/list.resolver";
import {ingredientRoutes} from "./ingredient.routing";
import {RouterModule} from "@angular/router";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {UpdateResolver} from "./update/update.resolver";
import {CreateResolver} from "./create/create.resolver";
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "../shared/material.module";
import {FileService} from "../files/services/file.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ModalModule} from "ngx-bootstrap";
import {ImageCropperModule} from "ngx-image-cropper";
import {CurrencyMaskModule} from "ng2-currency-mask";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CurrencyMaskModule,
        HttpModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(ingredientRoutes),
        NgbModule.forRoot(),
        ModalModule.forRoot(),
        ReactiveFormsModule,
        ImageCropperModule
    ],
    declarations: [
        ListComponent,
        CreateComponent,
        UpdateComponent,
    ],
    providers: [
        IngredientService,
        ListResolver,
        UpdateResolver,
        CreateResolver,
        FileService
    ]
})
export class IngredientModule {
}