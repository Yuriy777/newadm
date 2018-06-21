import {RouterModule, Routes} from '@angular/router';

import {RootComponent} from "../core/root.component";
import {AppResolver} from "../app.resolver";
import {CompanyGetComponent} from "./list/company-get.component";
import {CompanyCreateComponent} from "./create/company-create.component";
import {CompanyUpdateComponent} from "./update/company-update.component";
import {ListResolver} from "./list/list.resolver";
import {UpdateResolver} from "./update/update.resolver";


export const companyRoutes: Routes = [{
    path: 'companies',
    component: RootComponent,
    canActivate: [AppResolver],
    children: [
        {
            path: '',
            component: CompanyGetComponent,
            resolve: {
                'data': ListResolver
            }
        },
        {
            path: 'create', component: CompanyCreateComponent,
            // resolve: {
            //     'data': CreateResolver
            // }
        },
        {
            path: 'update/:id', component: CompanyUpdateComponent,
            resolve: {
                'data': UpdateResolver
            }
        },

    ]
},

];

