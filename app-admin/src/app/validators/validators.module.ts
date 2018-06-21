import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CustomValidators} from "./validators.service";
import {ValidatorsMessagesComponent} from "./validators-messages.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [ValidatorsMessagesComponent],
    declarations: [
        ValidatorsMessagesComponent
    ],
    providers: [
        CustomValidators,
    ]
})
export class ValidatorsModule {
    constructor() {
    }
}