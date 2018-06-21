import * as _ from "lodash";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {RecipeService} from "../service/recipe.service";
import {Recipe} from "../models/recipe";
import {BsModalService} from "ngx-bootstrap";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'recipe-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    itemList: Recipe[];
    itemSize: number;
    private title = 'Recipes list';

    searchName = '';
    searchCompanyName = '';
    searchStatus = 4;
    searchLanguage = '';
    searchLink = '';
    searchCountPeople:number;

    isShowPagination: boolean = true;
    statusOptionsSelect = [
        {
            value: '',
            label: 'All'
        },
        {
            value: 1,
            label: 'Published'
        },
        {
            value: 4,
            label: 'Pending publish'
        },
        {
            value: 3,
            label: 'Deleted'
        }
    ];
    languageOptionsSelect = [
        {
            value: '',
            label: 'All'
        },
        {
            value: 'en',
            label: 'En'
        },
        {
            value: 'he',
            label: 'He'
        },
        {
            value: 'es',
            label: 'Es'
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
    itemTitle: string;

    constructor(public entityService: RecipeService,
                private modalService: NgbModal,
                private _route: ActivatedRoute) {

        this._subscribers.push(this._route.data.subscribe((res: any) => {
            this.itemList = _.take(res.data[0].data, this.selectedLimit);
            this.itemSize = +res.data[0].count;
        }));
    }

    onDelete(event, context, recipe: Recipe) {
        event.preventDefault();
        this.itemTitle = recipe.name_en;
        this.modalService.open(context).result.then((result) => {
            this._subscribers.push(Observable.concat(
                this.entityService.deleteById(recipe.id),
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

    onPublish(event, id) {
        event.preventDefault();
        this._subscribers.push(Observable.concat(
            this.entityService.publishById(id),
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
            lang: this.searchLanguage,
            c_name: this.searchCompanyName,
            link: this.searchLink,
            p_count: this.searchCountPeople,

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
