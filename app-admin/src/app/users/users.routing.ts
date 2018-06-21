import {Routes} from "@angular/router";

import {RootComponent} from "../core/root.component";
import {AppResolver} from "../app.resolver";
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {ListResolver} from "./list/list.resolver";

export const usersRoutes: Routes = [{
    path: 'users',
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
            // resolve: {
            //     'data': CreateResolver
            // }
        },
        {
            path: 'update/:id', component: UpdateComponent,
            // resolve: {
            //     'data': UpdateResolver
            // }
        },

    ]
},

];

