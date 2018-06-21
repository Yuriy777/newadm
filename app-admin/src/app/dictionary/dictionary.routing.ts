import {RouterModule, Routes} from '@angular/router';

import {RootComponent} from "../core/root.component";
import {AppResolver} from "../app.resolver";
import {ListComponent} from "./list/list.component";
import {UpdateComponent} from "./update/update.component";
import {ListResolver} from "./list/list.resolver";
import {UpdateResolver} from "./update/update.resolver";


export const dictionaryRoutes: Routes = [{
    path: 'dictionaries',
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
            path: 'update/:key', component: UpdateComponent,
            resolve: {
                'data': UpdateResolver
            }
        },

    ]
},

];

