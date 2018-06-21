import {Routes} from "@angular/router";
import {RootComponent} from "../core/root.component";
import {ViewResolver} from "./view/view.resolver";
import {ViewComponent} from "./view/view.component";

export const recipeRoutes: Routes = [
    {
        path: 'recipes',
        component: RootComponent,
        children: [
            {
                path: ':alias/:id', component: ViewComponent,
                resolve: {
                    'data': ViewResolver
                },
            },
        ]
    },

];
