import {Ingredient} from "../../ingredient/models/ingredient";
export class Coupon {
    id: number;
    title_en: string;
    title_he: string;
    title_es: string;
    description_en: string;
    description_he: string;
    status: number;
    file_id: number;
    start_date: string;
    finish_date: string;
    ingredient_id: number;
    ingredient: Ingredient;
    activeIngredientCount?: number|string;
    image?: {};
}