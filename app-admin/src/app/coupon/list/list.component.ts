import * as _ from 'lodash';
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Coupon} from "../models/coupon";
import {CouponService} from "../services/coupon.service";
import {Observable} from "rxjs/Observable";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-dictionaries-get',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    itemList: Coupon[];
    itemSize: number;
    private title = 'Coupons list';
    itemTitle: string;

    searchTitle = '';
    searchIngName = '';
    searchStatus = 1;

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

    constructor(public entityService: CouponService,
                private modalService: NgbModal,
                private _route: ActivatedRoute) {

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.itemList = _.take(res.data[0].data, this.selectedLimit);
            this.itemSize = +res.data[0].count;
        }));
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
            name_en: this.searchTitle,
            ing_name: this.searchIngName,
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

    onDelete(event, content, coupon: Coupon) {
        event.preventDefault();
        this.itemTitle = coupon.title_en;
        this.modalService.open(content).result.then((result) => {
            this._subscribers.push(Observable.concat(
                this.entityService.deleteById(coupon.id),
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
}
