import * as _ from 'lodash';
import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../service/category.service";
import {ToastrService} from "../../shared/toastr.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Category} from "../models/category";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'category-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    itemList: Category[];
    itemSize: number;
    private title = 'Categories list';
    itemTitle: string;

    searchName = '';
    searchStatus = 1;


    public activeSortByField = 'id';
    public activeSortOrder = 0;

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

    public modalRef: BsModalRef;
    public selectedLimit = 10;

    private _subscribers = [];

    constructor(public entityService: CategoryService,
                private modalService: NgbModal,
                private _route: ActivatedRoute) {

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.itemList = _.take(res.data[0].data, this.selectedLimit);
            this.itemSize = +res.data[0].count;
        }));
    }

    onDelete(event, content, category: Category) {
        event.preventDefault();
        this.itemTitle = category.name_en;

        this.modalService.open(content).result.then((result) => {
            this._subscribers.push(Observable.concat(
                this.entityService.deleteById(category.id),
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
            ))
        }).catch((reason) => {

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
            sort: this.activeSortByField,
            order: this.activeSortOrder,
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

    public onSortBy(field) {
        if (this.activeSortByField === field) {
            this.activeSortOrder ? this.activeSortOrder = 0 : this.activeSortOrder = 1;
        } else {
            this.activeSortByField = field;
            this.activeSortOrder = 1;
        }
        this.listRequest();
    }
}
