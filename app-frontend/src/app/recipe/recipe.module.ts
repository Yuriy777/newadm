import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "../shared/material.module";
import {recipeRoutes} from "./recipe.routing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ImageCropperModule} from "ngx-image-cropper";
import {ModalModule} from "ngx-bootstrap";
import {RecipeService} from "./service/recipe.service";
import {ViewResolver} from "./view/view.resolver";
import {ViewComponent} from "./view/view.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(recipeRoutes),
        NgbModule.forRoot(),
        ModalModule.forRoot(),
        ReactiveFormsModule,
        ImageCropperModule
    ],
    declarations: [
        ViewComponent,
    ],
    providers: [
        RecipeService,
        ViewResolver,
    ]
})
export class RecipeModule {
}