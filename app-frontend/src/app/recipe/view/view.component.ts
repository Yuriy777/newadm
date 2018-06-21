import * as _ from 'lodash';
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../service/recipe.service";
import {Recipe} from "../models/recipe";

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import {Observable} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";



@Component({
    selector: 'recipe-view',
    templateUrl: './view.component.html',
    animations: [
        trigger('departmentState', [
            state('inactive', style({
                display: 'none',
                height: 0,
                opacity: 0
            })),
            state('active',   style({
                display: 'block',
                height: '34px',
                opacity: 1
            })),
            transition('inactive => active', animate('1200ms ease-in')),
            transition('active => inactive', animate('1200ms ease-out'))
        ])
    ]
})
export class ViewComponent implements OnInit {
    disabledButtonSend: any;
    ingredientName: any;
    showCoupon: boolean;
    coupon: any;
    imgUrl: any;
    couponImg: string;
    modalIngr: BsModalRef;
    modalCoupon: BsModalRef;
    modalSend: BsModalRef;
    remove_ingredient = [];
    showDepartment: boolean = false;
    data;
    dictionary;
    recipeLang: string;
    people_amount: number;
    disabledButtonMin: boolean;
    public state = 'inactive';
    private _subscribers = [];

    private _resolve: (result?: any) => void;
    private _reject: (reason?: any) => void;
    result: Promise<any>;
    values;
    submitPending: boolean = false;

    form: FormGroup;
    errors = [];
    private recipeId: number;

    constructor(public router: Router,
                public recipeService: RecipeService,
                private _route: ActivatedRoute,
                private modalService: BsModalService,
                public fb: FormBuilder) {

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.data = res.data[0];
            this.dictionary = res.data[1].data;
            this.recipeLang = this.data.language;
            this.recipeId = this.data.id;
            this.people_amount = this.data.people_amount;
            this.disabledButtonMin = this.people_amount <= 1;
        }));

        this.result = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });

        this.form = this.fb.group({
            email: [''],
            phone: [''],
        }, {validator: this.customValidation});

    }

    customValidation(formGroup) {
        let emailField = formGroup.controls['email'].value;
        let phoneField = formGroup.controls['phone'].value;
        return (phoneField.length !== 0 || emailField.length !== 0) ? { customValidation: true } : null;
    }

    onSubmit(form) {
        this.submitPending = true;
        let postData: any = {};
        postData.email = form.value.email;
        postData.phone = form.value.phone;
        postData.people_amount = this.people_amount;
        postData.checkIds = [];
        postData.recipeId = this.recipeId;
        this._subscribers.push(this.recipeService.sendList(postData)
            .subscribe(() => {
                    this.modalSend.hide();
                },
                (err) => {
                    this.errors = err.error;
                }));


    }

    triggerShowDepartment() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }

    addAmount() {
        ++this.people_amount;
        this.disabledButtonMin = false;
        this.getAmount(this.people_amount);
    }
    reduceAmount() {
        --this.people_amount;
        this.disabledButtonMin = this.people_amount <= 1;
        this.getAmount(this.people_amount);
    }
    getAmount(amount) {
        this._subscribers.push(this.recipeService.getViewByIdAndAlias(this.data['id'], this.data.company.alias, amount).subscribe((res: any) => {
            this.data = res;
        }));
    }

    public showModalIngredient(event, context, ingredient) {
        event.preventDefault();
        this.imgUrl = ingredient.image;
        this.ingredientName =  ingredient.name;
        this.showCoupon = ingredient.activeCoupon.length !== 0;
        this.coupon = ingredient.activeCoupon;
        this.modalIngr = this.modalService.show(context);
    }
    closeModalIngredient() {
        this.modalIngr.hide();
    }


    public showModalSend(event, context) {
        event.preventDefault();
        this.modalSend = this.modalService.show(context);
    }

    closeModalSendList() {
        this.modalSend.hide();
    }

    showModalCoupon(event, context) {
        event.preventDefault();
        this.modalIngr.hide();
        this.couponImg = this.coupon.image;
        this.modalCoupon = this.modalService.show(context);
    }

    closeModalCoupon() {
        this.modalCoupon.hide();
    }

    sendListToWhatsapp(e) {
        e.stopPropagation();
        let link = 'whatsapp://send?text=' + window.location.href;
        window.open(link, '_blank');
    }

    sendListToFacebook(e) {
        e.stopPropagation();
        let link = 'https://www.facebook.com/sharer.php?u' + window.location.href;
        window.open(link, '_blank');
    }

    onKey(event: any) {
        this.values += event.target.value;
        this.disabledButtonSend = this.values;
    }

    getTranslation(key) {
        let language = this.dictionary[key][this.recipeLang] ? this.recipeLang : 'en';
        let result = this.dictionary[key][language] || this.dictionary[key].es || key;
        return result;
    }


    ngOnInit() {

    }

    ngOnDestroy() {
        _.forEach(this._subscribers, (value) => {
            value.unsubscribe();
        });
    }
}
