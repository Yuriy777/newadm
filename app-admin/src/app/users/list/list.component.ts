import * as _ from 'lodash';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-user-all',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
    userList: User[];
    userSize: number;
    title = 'Users';
    itemTitle: string;

    searchFullName = '';
    searchEmail = '';
    searchStatus = '1';
    searchRole = '';

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
            value: 2,
            label: 'Blocked'
        }
    ];
    roleOptionsSelect = [
        {
            value: '',
            label: 'All'
        },
        {
            value: 1,
            label: 'Admin'
        },
        {
            value: 2,
            label: 'Editor'
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

    constructor(public usersService: UserService,
                private modalService: NgbModal,
                private _route: ActivatedRoute) {

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.userList = _.take(res.data[0].data, this.selectedLimit);
            this.userSize = res.data[0].count;
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
        this.userListRequest();
    }

    /**
     * Use this method to get current list
     * @param page
     */
    private userListRequest(page?) {
        this._subscribers.push(this.usersService.getList(this.buildListResponseObject(page))
            .subscribe(
                (res: { data: any, count: number }) => {
                    this.userList = res.data;
                    this.userSize = Number(res.count);
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
            email: this.searchEmail,
            fullName: this.searchFullName,
            role: this.searchRole,
        }
    }

    public onPageChange(event) {
        this.userListRequest(event);
        this.userListRequest(event);
    }

    public onBlock(event, context, user: User) {
        event.preventDefault();
        this.itemTitle = user.firstName + ' ' + user.secondName;
        this.modalService.open(context).result.then((result) => {
            this._subscribers.push(Observable.concat(
                this.usersService.blockById(user.id),
                this.usersService.getList(this.buildListResponseObject())
            ).subscribe(
                (res: { data: any, count: number }) => {
                    if (res) {
                        this.userList = res.data;
                        this.userSize = Number(res.count);
                    }
                },
                (err) => {

                }))
        });
    }

    public applyFilters(event) {
        event.preventDefault();
        this.userListRequest();
    }

    public getRoleLabelByRole(role) {
        //todo find in roleOptionsSelect
        let label = 'not set';
        if (role == 1) {
            label = 'admin';
        }
        if (role == 2) {
            label = 'editor';
        }
        return label;
    }

    public getlabelByStatus(status) {
        //todo find in OptionsSelect
        let label = 'not set';
        if (status == 1) {
            label = 'Active';
        }
        if (status == 2) {
            label = 'Not active';
        }
        return label;
    }

}
