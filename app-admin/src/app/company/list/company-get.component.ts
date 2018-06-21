import {Component, OnInit} from '@angular/core';
import * as _ from "lodash";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyService} from "../services/company.service";
import {Company} from "../models/company";
import {Observable} from "rxjs/Observable";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-company-get',
    templateUrl: './company-get.component.html',
    styleUrls: ['./company-get.component.css']
})
export class CompanyGetComponent implements OnInit {
    itemList: Company[];
    itemSize: number;
    private title = 'Company list';

    // search models
    searchName = '';
    searchUrl = '';
    searchStatus = 1;

    itemTitle: string;

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

    constructor(public entityService: CompanyService,
                private modalService: NgbModal,
                private _route: ActivatedRoute) {

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.itemList = _.take(res.data[0].data, this.selectedLimit);
            this.itemSize = +res.data[0].count;
        }));
    }

    onDelete(event, content, company: Company) {
        event.preventDefault();
        this.itemTitle = company.name_en;
        this.modalService.open(content).result.then((result) => {
            this._subscribers.push(Observable.concat(
                this.entityService.deleteById(company.id),
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
            url: this.searchUrl,
        }
    }

    public onPageChange(event) {
        this.listRequest(event);
    }

    public applyFilters(event) {
        event.preventDefault();
        this.page = 1;
        this.listRequest(1);
    }
}
