import {Coupon} from "../../coupon/models/coupon";
export class Ingredient {
    id: number;
    name_en: string;
    name_he: string;
    name_es: string;
    status: number;
    position: string;
    image: number;
    category_id?: number;
    coupon_id?: number;
    coupon?: Coupon;
    activeRecipeCount?: string;
}