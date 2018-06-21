export interface ListRequest {
    query?: string;
    page?: number;
    limit?: number;
    sort?: string;
    order?: number;
    cat_id?: number;
    ex?: Array<number | string>
}