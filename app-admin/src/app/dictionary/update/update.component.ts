import {Component, Input, OnInit} from '@angular/core';
import * as _ from "lodash";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DictionariesService} from "../services/dictionary.service";


@Component({
    selector: 'app-dictionaries-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
    showLang: boolean = false;
    showOtherColor: boolean = false;
    dictionary: any;
    key: string;


    public form: FormGroup = new FormGroup({
        key: new FormControl("", [Validators.required]),
        en: new FormControl("", [Validators.required]),
        he: new FormControl("", [Validators.required]),
        es: new FormControl("", [Validators.required]),
    });

    private _subscribers = [];

    constructor(public router: Router,
                public fb: FormBuilder,
                public dictionariesService: DictionariesService,
                public route: ActivatedRoute,) {
        this._subscribers.push(this.route.data.subscribe((res: any) => {
            this.form.patchValue(res.data[0]);
        }))
    }


    ngOnInit() {
    }

    public update(event) {
        event.preventDefault();
        event.stopPropagation();
        let model = this.form.value;
        this._subscribers.push(this.dictionariesService.updateByKey(model, model.key).subscribe(
            () => {
                this.router.navigate(['/dictionaries']);
            },
            (err) => {

            }
        ));
    }

    ngOnDestroy() {
        _.forEach(this._subscribers, (value) => {
            value.unsubscribe();
        });
    }
}

