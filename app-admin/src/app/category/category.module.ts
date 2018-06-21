import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListComponent} from "./list/list.component";
import {CategoryService} from "./service/category.service";
import {ListResolver} from "./list/list.resolver";
import {categoryRoutes} from "./category.routing";
import {RouterModule} from "@angular/router";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {UpdateResolver} from "./update/update.resolver";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CreateResolver} from "./create/create.resolver";
import {ModalModule} from "ngx-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        RouterModule.forChild(categoryRoutes),
        NgbModule.forRoot(),
        ReactiveFormsModule,
    ],
    declarations: [
        ListComponent,
        CreateComponent,
        UpdateComponent,
    ],
    providers: [
        CategoryService,
        ListResolver,
        CreateResolver,
        UpdateResolver,
    ]
})
export class CategoryModule {
}