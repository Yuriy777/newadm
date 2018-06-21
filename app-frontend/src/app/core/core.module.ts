import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NoContent} from "./no-content/no-content.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {OutletComponent} from "./view.component";
import {RootComponent} from "./root.component";
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";

@NgModule({
    declarations: [
        NoContent,
        UnauthorizedComponent,
        NavigationComponent,
        OutletComponent,
        RootComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class CoreModule {
    constructor() {

    }
}