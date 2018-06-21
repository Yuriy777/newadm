import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";
import {ListComponent} from "./list/list.component";
import {UpdateComponent} from "./update/update.component";
import {DictionariesService} from "./services/dictionary.service";
import {RouterModule} from "@angular/router";
import {dictionaryRoutes} from "./dictionary.routing";
import {ListResolver} from "./list/list.resolver";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UpdateResolver} from "./update/update.resolver";


@NgModule({
    imports: [
        RouterModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule.forChild(dictionaryRoutes),
        ReactiveFormsModule
    ],
    declarations: [
        ListComponent,
        UpdateComponent,
    ],
    providers: [
        DictionariesService,
        ListResolver,
        UpdateResolver,
    ]
})
export class DictionariesModule {
}