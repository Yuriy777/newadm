import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RootComponent} from "./core/root.component";
import {NoContent} from "./core/no-content/no-content.component";
import {UnauthorizedComponent} from "./core/unauthorized/unauthorized.component";
import {recipeRoutes} from "./recipe/recipe.routing";

const appRoutes: Routes = [
    {
        path: '',
        component: RootComponent,
        children: [
            ...recipeRoutes,
        ]
    },
    {path: '401', component: UnauthorizedComponent},
    {path: '404', component: NoContent},
    {path: '**', component: NoContent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
