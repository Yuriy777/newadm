import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {authRoute} from "./auth.route";
import {AuthService} from "./services/auth.service";
import {LoginResolver} from "./login/login.resolver";
import {NgModule} from "@angular/core";
import {ValidatorsModule} from "../validators/validators.module";

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(authRoute),
        ReactiveFormsModule,

        ValidatorsModule
    ],
    providers: [
        AuthService,
        LoginResolver,
    ]
})
export class AuthModule {
    constructor() {

    }
}
