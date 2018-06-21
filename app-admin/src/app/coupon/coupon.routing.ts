import {Routes} from "@angular/router";

import {RootComponent} from "../core/root.component";
import {AppResolver} from "../app.resolver";
import {ListComponent} from "./list/list.component";
import {ListResolver} from "./list/list.resolver";
import {CreateComponent} from "./create/create.component";
import {UpdateResolver} from "./update/update.resolver";
import {UpdateComponent} from "./update/update.component";

export const couponRoutes: Routes = [{
    path: 'coupons',
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
            path: 'create',
            component: CreateComponent,
        },
        {
            path: 'update/:id',
            component: UpdateComponent,
            resolve: {
                'data': UpdateResolver
            }
        },
    ]
},

];

