import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {CompanyModule} from "./company/company.module";
import {CategoryModule} from "./category/category.module";
import {BaseRequestOptions, HttpModule, RequestOptions} from "@angular/http";
import {CoreModule} from "./core/core.module";
import {AppResolver} from "./app.resolver";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./authentication/auth.module";
import {ValidatorsModule} from "./validators/validators.module";
import {DictionariesModule} from "./dictionary/dictionary.module";
import {UsersModule} from "./users/users.module";
import {UnitModule} from "./unit/unit.module";
import {IngredientModule} from "./ingredient/ingredient.module";
import {RecipeModule} from "./recipe/recipe.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ModalModule} from "ngx-bootstrap";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {CouponModule} from "./coupon/coupon.module";

class MyRequestOptions extends BaseRequestOptions {
    constructor() {
        console.log('MyRequestOptions');
        super();
        try {
            let access = JSON.parse(localStorage.getItem('access-token'));
            if (access) {
                this.headers.append('Authorization', 'Bearer ' + access.value);
            }
        } catch (e) {
            console.log('Wrong credentials', e);
        }
    }
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CurrencyMaskModule,
        ReactiveFormsModule,
        UsersModule,
        CategoryModule,
        DictionariesModule,
        HttpModule,
        AuthModule,
        SharedModule,
        CompanyModule,
        UnitModule,
        CouponModule,
        CoreModule,
        NgbModule.forRoot(),
        ModalModule.forRoot(),
        IngredientModule,
        RecipeModule,
        AppRoutingModule,
        ValidatorsModule
    ],
    providers: [
        AppResolver
    ],
    bootstrap: [AppComponent]
})


export class AppModule {
}
