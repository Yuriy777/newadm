import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RootComponent} from "./core/root.component";
import {AppResolver} from "./app.resolver";
import {categoryRoutes} from "./category/category.routing";
import {dictionaryRoutes} from "./dictionary/dictionary.routing";
import {NoContent} from "./core/no-content/no-content.component";
import {UnauthorizedComponent} from "./core/unauthorized/unauthorized.component";
import {companyRoutes} from "./company/company.routing";
import {usersRoutes} from "./users/users.routing";
import {authRoute} from "./authentication/auth.route";
import {unitRoutes} from "./unit/unit.routing";
import {ingredientRoutes} from "./ingredient/ingredient.routing";
import {recipeRoutes} from "./recipe/recipe.routing";
import {couponRoutes} from "./coupon/coupon.routing";

const appRoutes: Routes = [

    {path: '', redirectTo: 'categories', pathMatch: 'full'},
    ...authRoute,
    {
        path: '',
        component: RootComponent,
        canActivate: [AppResolver],
        children: [
            ...categoryRoutes,
            ...dictionaryRoutes,
            ...companyRoutes,
            ...usersRoutes,
            ...unitRoutes,
            ...ingredientRoutes,
            ...recipeRoutes,
            ...couponRoutes,
            // { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
            // { path: 'categories', component: CategoryComponent },
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
