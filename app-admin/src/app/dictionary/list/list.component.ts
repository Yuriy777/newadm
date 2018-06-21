import * as _ from 'lodash';
import {Component, OnInit} from "@angular/core";
import {DictionariesService} from "../services/dictionary.service";
import {Dictionary} from "../models/dictionary";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-dictionaries-get',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    itemList: Dictionary[];
    itemSize: number;
    private title = 'Dictionaries list';
    itemTitle: string;

    searchKey = '';
    searchNameEN = '';
    searchNameES = '';
    searchNameHE = '';
    searchStatus = 1;

    isShowPagination: boolean = true;

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

    constructor(public entityService: DictionariesService,
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
            name_en: this.searchNameEN,
            name_es: this.searchNameES,
            name_he: this.searchNameHE,
            key: this.searchKey,
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
