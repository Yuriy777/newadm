import {Component, Input, forwardRef} from "@angular/core";
import {FormControl, NG_VALIDATORS} from "@angular/forms";
import {CustomValidators} from "./validators.service";

@Component({
    selector: 'validator-messages',
    template: `
        <div class="ui pointing red basic label" *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidatorsMessagesComponent), multi: true}
    ]
})
export class ValidatorsMessagesComponent {
    @Input() field: FormControl;
    @Input() errorType: string;

    constructor() {
    }

    get errorMessage() {
        if (this.errorType) {
            if (this.field.errors.hasOwnProperty(this.errorType) && (this.field.dirty || this.field.touched)) {
                return CustomValidators.getValidatorErrorMessage(this.errorType, this.field.errors[this.errorType]);
            }
        }
        for (let propertyName in this.field.errors) {
            if (this.field.errors.hasOwnProperty(propertyName) && (this.field.dirty || this.field.touched)) {
                return CustomValidators.getValidatorErrorMessage(propertyName, this.field.errors[propertyName]);
            }
        }
        return null;
    }
}