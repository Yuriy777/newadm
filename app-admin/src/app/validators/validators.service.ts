import * as _ from 'lodash';
import {ValidatorFn, AbstractControl} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class CustomValidators {
    constructor() {
    }

    public static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = _.merge({
            'required': 'Required',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'maxlength': `Maximum length ${validatorValue.requiredLength}`,
            'isEmptyPattern': 'Can`t be empty',
            'stringPattern': 'Can contain only letters, numbers, spaces and `-`symbol.',
            'numberPattern': 'Can contain only numbers',
            'emailPattern': 'Invalid email',
            'passwordPattern': 'Password must have at least one digit, lower and upper case letter',
            'nospacePattern': 'No whitespace allowed',
            'passwordEqualPattern': 'Confirm password and password fields must be equal',
        });

        return config[validatorName];
    }

    public static isEmptyValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!(control.dirty || control.touched)) {
                return null;
            } else {
                return !_.isEmpty(control.value) ? null : {'isEmptyPattern': false};
            }
        };
    }

    public static stringPatternValidator(): ValidatorFn {
        let pattern = /^[A-Za-z0-9 -]+$/u;
        return (control: AbstractControl): { [key: string]: any } => {
            if (!(control.dirty || control.touched)) {
                return null;
            } else {
                return pattern.test(control.value) ? null : {'stringPattern': false};
            }
        };
    }

    public static numberPatternValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!(control.dirty || control.touched)) {
                return null;
            } else {
                return _.toNumber(+control.value) ? null : {'numberPattern': false};
            }
        };
    }

    public static emailPatternValidator(): ValidatorFn {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (control: AbstractControl): { [key: string]: any } => {
            if (!(control.dirty || control.touched)) {
                return null;
            } else {
                return pattern.test(control.value) ? null : {'emailPattern': false};
            }
        };
    };

    public static passwordPatternValidator(): ValidatorFn {
        let pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
        return (control: AbstractControl): { [key: string]: any } => {
            if (!(control.dirty || control.touched)) {
                return null;
            } else {
                return pattern.test(control.value) ? null : {'passwordPattern': false};
            }
        };
    };

    public static nospacePatternValidator(): ValidatorFn {
        let pattern = /^(?=\S+$)/;
        return (control: AbstractControl): { [key: string]: any } => {
            if (!(control.dirty || control.touched)) {
                return null;
            } else {
                return pattern.test(control.value) ? null : {'nospacePattern': false};
            }
        };
    };

    public static isPasswordEqualValidator(): ValidatorFn {
        return (control: any): { [key: string]: any } => {
            if (!(control.dirty || control.touched)) {
                return null;
            } else {
                return control.controls['password'].value == control.controls['password_confirm'].value ? null : {'passwordEqualPattern': false};
            }
        };
    };
}