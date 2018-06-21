import * as _ from "lodash";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {IngredientService} from "../service/ingredient.service";
import {Ingredient} from "../models/ingredient";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Coupon} from "../../coupon/models/coupon";
import {Category} from "../../category/models/category";

@Component({
    selector: 'ingredient-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    itemList: Ingredient[];
    itemSize: number;
    itemTitle: string;
    private title = 'Ingredients list';

    searchName = '';
    searchStatus = 1;
    catId: number;
    couponId: number;

    isShowPagination: boolean = true;
    statusOptionsSelect = [
        {
            value: '',
            label: 'All'
        },
        {
            value: 1,
            label: 'Active'
        },
        {
            value: 3,
            label: 'Deleted'
        }
    ];
    public categoryOptionsSelect = [{
        value: '',
        label: 'All'
    }];
    public couponOptionsSelect = [{
        value: '',
        label: 'All'
    }];
    public limitOptionsSelect = [
        {
            value: 5,
            label: '5'
        },
        {
            value: 10,
            label: '10'
        },
        {
            value: 20,
            label: '20'
        },
        {
            value: 50,
            label: '50'
        },
        {
            value: 100,
            label: '100'
        }
    ];
    public page = 1;

    public selectedLimit = 10;

    private _subscribers = [];

    public categoryObj = {};

    constructor(public entityService: IngredientService,
                private modalService: NgbModal,
                private _route: ActivatedRoute) {

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            _.map(res.data[1].data, (item: Category) => {
                this.categoryOptionsSelect.push({
                    value: item.id.toString(),
                    label: item.name_en
                });
            });
            _.map(res.data[2].data, (item: Coupon) => {
                this.couponOptionsSelect.push({
                    value: item.id.toString(),
                    label: item.title_en
                });
            });
            this.itemList = _.take(res.data[0].data, this.selectedLimit);
            this.itemSize = +res.data[0].count;
        }));
    }

    onDelete(event, content, ingredient: Ingredient) {
        event.preventDefault();
        this.itemTitle = ingredient.name_en;
        this.modalService.open(content).result.then((result) => {
            this._subscribers.push(Observable.concat(
                this.entityService.deleteById(ingredient.id),
                this.entityService.getList(this.buildListResponseObject())
            ).subscribe(
                (res: any) => {
                    if (res) {
                        this.itemList = res.data;
                        this.itemSize = +res.count;
                    }
                },
                (err) => {

                }
            ));
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        _.forEach(this._subscribers, (value) => {
            value.unsubscribe();
        });
    }

    public onLimitSelected(selected) {
        this.page = 1;
        this.listRequest();
    }

    /**
     * Use this method to get current list
     * @param page
     */
    private listRequest(page?) {
        this._subscribers.push(this.entityService.getList(this.buildListResponseObject(page))
            .subscribe(
                (res: { data: any, count: number }) => {
                    this.itemList = res.data;
                    this.itemSize = +res.count;
                },
                (err) => {

                }
            ));
    }

    /**
     * Use this method to prepare request object for list. Sets limits, pagination, etc.
     * @param page
     * @returns {{query: any, page: (any|number), limit: number, sort: string, order: number, filter: string}}
     */
    private buildListResponseObject(page?) {
        return {
            page: page || this.page,
            limit: this.selectedLimit,
            status: this.searchStatus,
            name: this.searchName,
            cat_id: this.catId,
            coupon_id: this.couponId,
        }
    }

    public onPageChange(event) {
        this.listRequest(event);
    }

    public applyFilters(event) {
        event.preventDefault();
        this.page = 1;
        this.listRequest();
    }
}
