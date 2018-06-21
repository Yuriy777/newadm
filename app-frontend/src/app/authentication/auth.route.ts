import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {LoginResolver} from "./login/login.resolver";

//Config
export const authRoute: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginResolver],
    },
];