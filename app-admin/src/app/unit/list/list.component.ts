import * as _ from "lodash";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {UnitService} from "../service/unit.service";
import {Unit} from "../models/unit";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'unit-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    itemList: Unit[];
    itemSize: number;
    private title = 'Units list';

    itemTitle: string;
    searchName = '';
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

    constructor(public entityService: UnitService,
                private modalService: NgbModal,
                private _route: ActivatedRoute) {

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.itemList = _.take(res.data[0].data, this.selectedLimit);
            this.itemSize = +res.data[0].count;
        }));
    }

    onDelete(event, context, unit: Unit) {
        event.preventDefault();
        this.itemTitle = unit.name_en;
        this.modalService.open(context).result.then((result) => {
            this._subscribers.push(Observable.concat(
                this.entityService.deleteById(unit.id),
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
