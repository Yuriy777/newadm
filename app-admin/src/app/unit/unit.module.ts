import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListComponent} from "./list/list.component";
import {UnitService} from "./service/unit.service";
import {ListResolver} from "./list/list.resolver";
import {unitRoutes} from "./unit.routing";
import {RouterModule} from "@angular/router";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {UpdateResolver} from "./update/update.resolver";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CreateResolver} from "./create/create.resolver";
import {BrowserModule} from "@angular/platform-browser";
import {ModalModule} from "ngx-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        RouterModule.forChild(unitRoutes),
        NgbModule.forRoot(),
        ModalModule.forRoot(),
        ReactiveFormsModule,
    ],
    declarations: [
        ListComponent,
        CreateComponent,
        UpdateComponent,
    ],
    providers: [
        UnitService,
        ListResolver,
        UpdateResolver,
        CreateResolver,
    ]
})
export class UnitModule {
}