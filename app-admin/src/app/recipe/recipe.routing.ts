import {Routes} from "@angular/router";
import {ListComponent} from "./list/list.component";
import {RootComponent} from "../core/root.component";
import {AppResolver} from "../app.resolver";
import {ListResolver} from "./list/list.resolver";
import {CreateComponent} from "./create/create.component";
import {UpdateResolver} from "./update/update.resolver";
import {UpdateComponent} from "./update/update.component";
import {CreateResolver} from "./create/create.resolver";

export const recipeRoutes: Routes = [
    {
        path: 'recipes',
        component: RootComponent,
        canActivate: [AppResolver],
        children: [
            {
                path: '',
                component: ListComponent,
                resolve: {
                    'data': ListResolver
                }
            },
            {
                path: 'create', component: CreateComponent,
                resolve: {
                    'data': CreateResolver
                }
            },
            {
                path: 'update/:id', component: UpdateComponent,
                resolve: {
                    'data': UpdateResolver
                }
            },
            // {
            //     path: ':id', component: ViewComponent,
            //     resolve: {
            //         'data': ViewResolver
            //     },
            // },
        ]
    },

];
