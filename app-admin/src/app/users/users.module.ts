import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {RouterModule} from "@angular/router";
import {usersRoutes} from "./users.routing";
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {UserService} from "./services/user.service";
import {ListResolver} from "./list/list.resolver";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {ModalModule} from "ngx-bootstrap";
import {CurrencyMaskModule} from "ng2-currency-mask";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CurrencyMaskModule,
        BrowserModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule.forChild(usersRoutes),
    ],
    declarations: [
        ListComponent,
        CreateComponent,
        UpdateComponent
    ],
    providers: [
        UserService,
        ListResolver
    ]
})
export class UsersModule {
}