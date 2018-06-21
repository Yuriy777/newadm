webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var category_routing_1 = __webpack_require__("./src/app/category/category.routing.ts");
var dictionary_routing_1 = __webpack_require__("./src/app/dictionary/dictionary.routing.ts");
var no_content_component_1 = __webpack_require__("./src/app/core/no-content/no-content.component.ts");
var unauthorized_component_1 = __webpack_require__("./src/app/core/unauthorized/unauthorized.component.ts");
var company_routing_1 = __webpack_require__("./src/app/company/company.routing.ts");
var users_routing_1 = __webpack_require__("./src/app/users/users.routing.ts");
var auth_route_1 = __webpack_require__("./src/app/authentication/auth.route.ts");
var unit_routing_1 = __webpack_require__("./src/app/unit/unit.routing.ts");
var ingredient_routing_1 = __webpack_require__("./src/app/ingredient/ingredient.routing.ts");
var recipe_routing_1 = __webpack_require__("./src/app/recipe/recipe.routing.ts");
var coupon_routing_1 = __webpack_require__("./src/app/coupon/coupon.routing.ts");
var appRoutes = [
    { path: '', redirectTo: 'categories', pathMatch: 'full' }
].concat(auth_route_1.authRoute, [
    {
        path: '',
        component: root_component_1.RootComponent,
        canActivate: [app_resolver_1.AppResolver],
        children: category_routing_1.categoryRoutes.concat(dictionary_routing_1.dictionaryRoutes, company_routing_1.companyRoutes, users_routing_1.usersRoutes, unit_routing_1.unitRoutes, ingredient_routing_1.ingredientRoutes, recipe_routing_1.recipeRoutes, coupon_routing_1.couponRoutes)
    },
    { path: '401', component: unauthorized_component_1.UnauthorizedComponent },
    { path: '404', component: no_content_component_1.NoContent },
    { path: '**', component: no_content_component_1.NoContent },
]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Crazy Sob';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n        <router-outlet></router-outlet>",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var company_module_1 = __webpack_require__("./src/app/company/company.module.ts");
var category_module_1 = __webpack_require__("./src/app/category/category.module.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var core_module_1 = __webpack_require__("./src/app/core/core.module.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var shared_module_1 = __webpack_require__("./src/app/shared/shared.module.ts");
var auth_module_1 = __webpack_require__("./src/app/authentication/auth.module.ts");
var validators_module_1 = __webpack_require__("./src/app/validators/validators.module.ts");
var dictionary_module_1 = __webpack_require__("./src/app/dictionary/dictionary.module.ts");
var users_module_1 = __webpack_require__("./src/app/users/users.module.ts");
var unit_module_1 = __webpack_require__("./src/app/unit/unit.module.ts");
var ingredient_module_1 = __webpack_require__("./src/app/ingredient/ingredient.module.ts");
var recipe_module_1 = __webpack_require__("./src/app/recipe/recipe.module.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var ng2_currency_mask_1 = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
var coupon_module_1 = __webpack_require__("./src/app/coupon/coupon.module.ts");
var MyRequestOptions = /** @class */ (function (_super) {
    __extends(MyRequestOptions, _super);
    function MyRequestOptions() {
        var _this = this;
        console.log('MyRequestOptions');
        _this = _super.call(this) || this;
        try {
            var access = JSON.parse(localStorage.getItem('access-token'));
            if (access) {
                _this.headers.append('Authorization', 'Bearer ' + access.value);
            }
        }
        catch (e) {
            console.log('Wrong credentials', e);
        }
        return _this;
    }
    return MyRequestOptions;
}(http_1.BaseRequestOptions));
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ng2_currency_mask_1.CurrencyMaskModule,
                forms_1.ReactiveFormsModule,
                users_module_1.UsersModule,
                category_module_1.CategoryModule,
                dictionary_module_1.DictionariesModule,
                http_1.HttpModule,
                auth_module_1.AuthModule,
                shared_module_1.SharedModule,
                company_module_1.CompanyModule,
                unit_module_1.UnitModule,
                coupon_module_1.CouponModule,
                core_module_1.CoreModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                ingredient_module_1.IngredientModule,
                recipe_module_1.RecipeModule,
                app_routing_module_1.AppRoutingModule,
                validators_module_1.ValidatorsModule
            ],
            providers: [
                app_resolver_1.AppResolver
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var AppResolver = /** @class */ (function () {
    function AppResolver(_router) {
        this._router = _router;
    }
    AppResolver.prototype.canActivate = function (route, state) {
        var accessToken = localStorage.getItem('access-token');
        if (!localStorage.getItem('access-token') || accessToken == 'undefined') {
            localStorage.clear();
            this._router.navigate(['/login']);
            toastr_service_1.ToastrService.error('', 'Wrong credentials');
            return false;
        }
        else {
            return true;
        }
    };
    AppResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppResolver);
    return AppResolver;
}());
exports.AppResolver = AppResolver;


/***/ }),

/***/ "./src/app/authentication/auth.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = __webpack_require__("./src/app/authentication/login/login.component.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_route_1 = __webpack_require__("./src/app/authentication/auth.route.ts");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var login_resolver_1 = __webpack_require__("./src/app/authentication/login/login.resolver.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var validators_module_1 = __webpack_require__("./src/app/validators/validators.module.ts");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.LoginComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(auth_route_1.authRoute),
                forms_1.ReactiveFormsModule,
                validators_module_1.ValidatorsModule
            ],
            providers: [
                auth_service_1.AuthService,
                login_resolver_1.LoginResolver,
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/app/authentication/auth.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = __webpack_require__("./src/app/authentication/login/login.component.ts");
var login_resolver_1 = __webpack_require__("./src/app/authentication/login/login.resolver.ts");
//Config
exports.authRoute = [
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [login_resolver_1.LoginResolver],
    },
];


/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-page\">\n    <div class=\"content\">\n\n        <div class=\"modal-form\">\n            <div class=\"wrap-form\">\n                <h1>Log In</h1>\n                <form [formGroup]=\"loginForm\" (submit)=\"authenticate($event)\">\n\n                    <div class=\"ui left input form-group\">\n                        <div><input class=\"input-lg input-underline\" formControlName=\"email\" type=\"text\"\n                                    placeholder=\"Your email address\"></div>\n                        <validator-messages [field]=\"loginForm.controls.email\"></validator-messages>\n                    </div>\n\n\n                    <div class=\"ui left input form-group\">\n                        <div><input class=\"input-lg input-underline\" formControlName=\"password\" type=\"password\"\n                                    placeholder=\"Password\"></div>\n                        <validator-messages [field]=\"loginForm.controls.password\"></validator-messages>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn rounded-btn\"\n                            (click)=\"authenticate($event)\"\n                            (dblclick)=\"$event.stopPropagation();\"\n                            [disabled]=\"!loginForm.valid || submitPending\">\n                        Log in\n                    </button>\n                    <!--<a [routerLink]=\"['/forgot']\" class=\"btn rounded-btn\">Forgot your password?</a>-->\n                </form>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
// import {CustomValidators} from "../../validators/validators.service";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, _router, requestOptions) {
        var _this = this;
        this.authService = authService;
        this._router = _router;
        this.requestOptions = requestOptions;
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl("", [
                forms_1.Validators.required,
            ]),
            password: new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6),
                forms_1.Validators.maxLength(100),
            ]),
            keepMeLogIn: new forms_1.FormControl(false)
        });
        this.submitPending = false;
        this._subscribers = [];
        if (this.authService.email) {
            this.loginForm.controls['email'].patchValue(this.authService.email);
        }
        this._subscribers.push(this.loginForm.valueChanges.subscribe(function () { return _this.submitPending = false; }));
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    LoginComponent.prototype.authenticate = function (event) {
        var _this = this;
        event.preventDefault();
        this.submitPending = true;
        this._subscribers.push(this.authService.login(this.loginForm.value).subscribe(function (res) {
            _this._router.navigate(['/categories']);
        }, function (err) {
            _this.loginForm.controls['password'].patchValue('');
            toastr_service_1.ToastrService.error('', 'Something was wrong with authentication');
            console.log("Something was wrong with authentication", err);
        }));
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: __webpack_require__("./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__("./src/app/authentication/login/login.style.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            http_1.RequestOptions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/authentication/login/login.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var LoginResolver = /** @class */ (function () {
    function LoginResolver(_router) {
        this._router = _router;
    }
    LoginResolver.prototype.canActivate = function (route, state) {
        if (!localStorage.getItem('access-token')) {
            return true;
        }
        else {
            this._router.navigate(['/categories']);
            return false;
        }
    };
    LoginResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginResolver);
    return LoginResolver;
}());
exports.LoginResolver = LoginResolver;


/***/ }),

/***/ "./src/app/authentication/login/login.style.css":
/***/ (function(module, exports) {

module.exports = "\n.auth-page {\n    height: 100%;\n    overflow: auto;\n    background: #2c3e50;\n    text-align: center;\n    color: #fff;\n    padding: 3em;\n    -webkit-animation: fadein 1s;\n            animation: fadein 1s;\n}\n\n.auth-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px;\n    color: #fff;\n}\n\n.auth-page form {\n    padding: 40px 0;\n}\n\n.auth-page .form-group {\n    padding: 8px 0;\n}\n\n.input-underline {\n    background: 0 0;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-bottom: 2px solid hsla(0, 0%, 100%, .5);\n    color: #fff;\n    border-radius: 0;\n}\n\n.input-lg {\n    height: 46px;\n    width: 100%;\n    max-width: 600px;\n    padding: 10px 16px;\n    font-size: 18px !important;\n    line-height: 1.3333333;\n    border-radius: 0;\n}\n\nvalidator-messages {\n    display: block;\n}\n"

/***/ }),

/***/ "./src/app/authentication/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AuthService = /** @class */ (function () {
    function AuthService(http, 
        // private errorHandler: ErrorHandler,
        router) {
        this.http = http;
        this.router = router;
        this._email = '';
    }
    Object.defineProperty(AuthService.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.checkAuthToken = function () {
        var accessToken = localStorage.getItem('access-token');
        if (!localStorage.getItem('access-token') || accessToken == 'undefined') {
            this.router.navigate(['/login']);
            toastr_service_1.ToastrService.error('', 'Wrong credentials');
        }
    };
    AuthService.prototype.getAuthToken = function () {
        return localStorage.getItem('access-token');
    };
    AuthService.prototype.login = function (authObj) {
        var body = JSON.stringify(authObj);
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.post('/v1/auth/login', body, { headers: headers })
            .map(function (response) {
            var token = response['access-token'];
            // login successful if there's a jwt token in the response
            if (token) {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(response['profile']));
                localStorage.setItem('access-token', token);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));
        return this.http.post('/v1/auth/logout', {}, { headers: headers })
            .do(function (data) {
            localStorage.clear();
            _this.router.navigate(['/login']);
            return data;
        });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/category/category.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var list_component_1 = __webpack_require__("./src/app/category/list/list.component.ts");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var list_resolver_1 = __webpack_require__("./src/app/category/list/list.resolver.ts");
var category_routing_1 = __webpack_require__("./src/app/category/category.routing.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var create_component_1 = __webpack_require__("./src/app/category/create/create.component.ts");
var update_component_1 = __webpack_require__("./src/app/category/update/update.component.ts");
var update_resolver_1 = __webpack_require__("./src/app/category/update/update.resolver.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var create_resolver_1 = __webpack_require__("./src/app/category/create/create.resolver.ts");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ngx_bootstrap_1.ModalModule.forRoot(),
                router_1.RouterModule.forChild(category_routing_1.categoryRoutes),
                ng_bootstrap_1.NgbModule.forRoot(),
                forms_1.ReactiveFormsModule,
            ],
            declarations: [
                list_component_1.ListComponent,
                create_component_1.CreateComponent,
                update_component_1.UpdateComponent,
            ],
            providers: [
                category_service_1.CategoryService,
                list_resolver_1.ListResolver,
                create_resolver_1.CreateResolver,
                update_resolver_1.UpdateResolver,
            ]
        })
    ], CategoryModule);
    return CategoryModule;
}());
exports.CategoryModule = CategoryModule;


/***/ }),

/***/ "./src/app/category/category.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = __webpack_require__("./src/app/category/list/list.component.ts");
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var list_resolver_1 = __webpack_require__("./src/app/category/list/list.resolver.ts");
var create_component_1 = __webpack_require__("./src/app/category/create/create.component.ts");
var update_resolver_1 = __webpack_require__("./src/app/category/update/update.resolver.ts");
var update_component_1 = __webpack_require__("./src/app/category/update/update.component.ts");
var create_resolver_1 = __webpack_require__("./src/app/category/create/create.resolver.ts");
exports.categoryRoutes = [
    {
        path: 'categories',
        component: root_component_1.RootComponent,
        canActivate: [app_resolver_1.AppResolver],
        children: [
            {
                path: '',
                component: list_component_1.ListComponent,
                resolve: {
                    'data': list_resolver_1.ListResolver
                }
            },
            {
                path: 'create',
                component: create_component_1.CreateComponent,
                resolve: {
                    'data': create_resolver_1.CreateResolver
                }
            },
            {
                path: 'update/:id', component: update_component_1.UpdateComponent,
                resolve: {
                    'data': update_resolver_1.UpdateResolver
                }
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/category/create/create.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n    border-color: red;\n}"

/***/ }),

/***/ "./src/app/category/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create category</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"categoryForm\" [ngClass]=\"{'form-error':submitPending }\"\n                      (submit)=\"createCategory($event)\" novalidate>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_en\">name_en</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"name_en\" id=\"name_en\"\n                                   formControlName=\"name_en\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                            <p class=\"error_message\"\n                               *ngIf=\"categoryForm.get('name_en').hasError('required') && submitPending\">\n                                Name En is required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_en')\">{{\n                                getTextErrorByFormField('name_en') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_he\">name_he</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"name_he\" formControlName=\"name_he\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_es\">name_es</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"name_es\" formControlName=\"name_es\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"position\">position</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"position\" type=\"number\" formControlName=\"position\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button class=\"btn btn-danger btn-bordered margin-right\" type=\"button\"\n                                    [routerLink]=\"['/categories']\">Cancel\n                            </button>\n                            <button class=\"btn btn-primary btn-bordered\" type=\"submit\"\n                            >Create\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/category/create/create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var ng2_img_cropper_1 = __webpack_require__("./node_modules/ng2-img-cropper/index.js");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(router, fb, categoryService, route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.categoryService = categoryService;
        this.route = route;
        this.showLang = false;
        this.submitPending = false;
        this.errors = [];
        this.categoryForm = new forms_1.FormGroup({
            name_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            name_he: new forms_1.FormControl("", []),
            name_es: new forms_1.FormControl("", []),
            position: new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)]),
            status: new forms_1.FormControl(1, [forms_1.Validators.required]),
        });
        this._subscribers = [];
        this._subscribers.push(this.categoryForm.valueChanges.subscribe(function () { return _this.submitPending = false; }));
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;
        this.data = {};
        this._subscribers.push(this.route.data.subscribe(function (res) {
            _this.categoryForm.controls['position'].patchValue(+res.data[0] + 1);
        }));
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createCategory = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.categoryForm.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        var category = this.categoryForm.value;
        this._subscribers.push(this.categoryService.create(category).subscribe(function () {
            _this.router.navigate(['/categories']);
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    CreateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    CreateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    CreateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'category-create',
            template: __webpack_require__("./src/app/category/create/create.component.html"),
            styles: [__webpack_require__("./src/app/category/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            category_service_1.CategoryService,
            router_1.ActivatedRoute])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;


/***/ }),

/***/ "./src/app/category/create/create.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var CreateResolver = /** @class */ (function () {
    function CreateResolver(categoryService) {
        this.categoryService = categoryService;
    }
    CreateResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.forkJoin(this.categoryService.getMaxPosition());
    };
    CreateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], CreateResolver);
    return CreateResolver;
}());
exports.CreateResolver = CreateResolver;


/***/ }),

/***/ "./src/app/category/list/list.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n\ntable td,\ntable th {\n    padding: 5px;\n}\n"

/***/ }),

/***/ "./src/app/category/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-content\">\n    <div class=\"table-wrapper\">\n        <div class=\"wrap-header\">\n            <h3>{{title}}</h3>\n        </div>\n        <div class=\"wrap-tmain\">\n            <div class=\"table-scroll\">\n                <div class=\"card\">\n                    <div class=\"card-block\" style=\"padding-bottom: 0\">\n                        <table border=\"1\">\n                            <thead>\n                            <tr class=\"ng2-smart-titles\">\n                                <th class=\"ng2-smart-actions\">\n                                    <div class=\"ng2-smart-title\">Actions</div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\" (click)=\"onSortBy('id')\">\n                                        id\n                                        <i class=\"fa fa-sort-asc\"\n                                           aria-hidden=\"true\"\n                                           *ngIf=\"activeSortByField === 'id' && activeSortOrder === 0\"></i>\n                                        <i class=\"fa fa-sort-desc\"\n                                           aria-hidden=\"true\"\n                                           *ngIf=\"activeSortByField === 'id' && activeSortOrder === 1\"></i>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Used by ingredients\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\" (click)=\"onSortBy('name_en')\">\n                                    <div class=\"ng2-smart-title\">\n                                        Category Name\n                                        <i class=\"fa fa-sort-asc\"\n                                           aria-hidden=\"true\"\n                                           *ngIf=\"activeSortByField === 'name_en' && activeSortOrder === 0\"></i>\n                                        <i class=\"fa fa-sort-desc\"\n                                           aria-hidden=\"true\"\n                                           *ngIf=\"activeSortByField === 'name_en' && activeSortOrder === 1\"></i>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\" (click)=\"onSortBy('position')\">\n                                    <div class=\"ng2-smart-title\">\n                                        Position\n                                        <i class=\"fa fa-sort-asc\"\n                                           aria-hidden=\"true\"\n                                           *ngIf=\"activeSortByField === 'position' && activeSortOrder === 0\"></i>\n                                        <i class=\"fa fa-sort-desc\"\n                                           aria-hidden=\"true\"\n                                           *ngIf=\"activeSortByField === 'position' && activeSortOrder === 1\"></i>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\"  (click)=\"onSortBy('status')\">\n                                    <div class=\"ng2-smart-title\">\n                                        Status\n                                        <i class=\"fa fa-sort-asc\"\n                                           aria-hidden=\"true\"\n                                           *ngIf=\"activeSortByField === 'status' && activeSortOrder === 0\"></i>\n                                        <i class=\"fa fa-sort-desc\"\n                                           aria-hidden=\"true\"\n                                           *ngIf=\"activeSortByField === 'status' && activeSortOrder === 1\"></i>\n                                    </div>\n                                </th>\n                            </tr>\n                            <tr class=\"ng2-smart-filters\">\n                                <th class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\n                                    <a routerLink=\"create\" routerLinkActive=\"active\"\n                                       class=\"btn btn-secondary\" href=\"#\">+ Add category</a>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-filter\">\n\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-filter\">\n\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <div class=\"ng2-smart-filter\">\n                                            <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                                   [(ngModel)]=\"searchName\"\n                                                   (keyup.enter)=\"applyFilters($event)\"\n                                                   type=\"text\"\n                                                   placeholder=\"Name\">\n                                        </div>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                                class=\"form-control underline\"\n                                                (change)=\"applyFilters($event)\"\n                                                [(ngModel)]=\"searchStatus\">\n                                            <option *ngFor=\"let status of statusOptionsSelect\"\n                                                    [value]=\"status.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ status.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let category of itemList; let i = index\">\n                                <td>\n                                    <a [routerLink]=\"['update/' + category.id]\" *ngIf=\"category.status == 1\"\n                                       routerLinkActive=\"active\" class=\"btn btn-info\">\n                                        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                                        edit</a>\n                                    <button *ngIf=\"category.status == 1\"\n                                            [disabled]=\"category.activeIngredientCount != '0'\"\n                                            title=\"This category used in {{category.activeRecipeCount}} ingredients\"\n                                            class=\"btn btn-danger\"\n                                            (click)=\"onDelete($event, content, category)\">\n                                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                        delete\n                                    </button>\n                                </td>\n                                <td>{{(i+1) + (page - 1) * selectedLimit}}</td>\n                                <td>{{category.id}}</td>\n                                <td>{{category.activeIngredientCount}}</td>\n                                <td>{{category.name_en}}</td>\n                                <td>{{category.position}}</td>\n                                <td>\n                                    <span class=\"active-status\" *ngIf=\"category.status == 1\">Active</span>\n                                    <span class=\"deleted-status\" *ngIf=\"category.status == 3 \">Deleted</span>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"page-select\">\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\" style=\"width: 200px;\"\n                                    [(ngModel)]=\"selectedLimit\"\n                                    (change)=\"onLimitSelected($event)\">\n                                <option *ngFor=\"let item of limitOptionsSelect\" [value]=\"item.value\">\n                                    {{ item.label }}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-4\" *ngIf=\"itemSize > selectedLimit\">\n                            <ngb-pagination\n                                    [collectionSize]=\"itemSize\"\n                                    [(page)]=\"page\"\n                                    (pageChange)=\"onPageChange($event)\"\n                                    [pageSize]=\"selectedLimit\"\n                                    [rotate]=\"true\"\n                                    [boundaryLinks]=\"true\"></ngb-pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <i class=\"material-icons\">clear</i>\n    </button>\n    <div class=\"modal-body delete-modal clearfix\">\n        <p>Are you sure you want to delete the category <b>«{{itemTitle}}»?</b></p>\n        <span>This action cannot be undone </span>\n        <p>\n            <button type=\"button\" class=\"btn m-btn_no-bg margin-right\" (click)=\"d('no')\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-color\" (click)=\"c('yes')\">Delete it!</button>\n        </p>\n    </div>\n</ng-template>\n\n<template ngbModalContainer></template>\n\n"

/***/ }),

/***/ "./src/app/category/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ListComponent = /** @class */ (function () {
    function ListComponent(entityService, modalService, _route) {
        var _this = this;
        this.entityService = entityService;
        this.modalService = modalService;
        this._route = _route;
        this.title = 'Categories list';
        this.searchName = '';
        this.searchStatus = 1;
        this.activeSortByField = 'id';
        this.activeSortOrder = 0;
        this.isShowPagination = true;
        this.statusOptionsSelect = [
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
        this.limitOptionsSelect = [
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
        this.page = 1;
        this.selectedLimit = 10;
        this._subscribers = [];
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.itemList = _.take(res.data[0].data, _this.selectedLimit);
            _this.itemSize = +res.data[0].count;
        }));
    }
    ListComponent.prototype.onDelete = function (event, content, category) {
        var _this = this;
        event.preventDefault();
        this.itemTitle = category.name_en;
        this.modalService.open(content).result.then(function (result) {
            _this._subscribers.push(Observable_1.Observable.concat(_this.entityService.deleteById(category.id), _this.entityService.getList(_this.buildListResponseObject())).subscribe(function (res) {
                if (res) {
                    _this.itemList = res.data;
                    _this.itemSize = +res.count;
                }
            }, function (err) {
            }));
        }).catch(function (reason) {
        });
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    ListComponent.prototype.onLimitSelected = function (selected) {
        this.page = 1;
        this.listRequest();
    };
    /**
     * Use this method to get current list
     * @param page
     */
    ListComponent.prototype.listRequest = function (page) {
        var _this = this;
        this._subscribers.push(this.entityService.getList(this.buildListResponseObject(page))
            .subscribe(function (res) {
            _this.itemList = res.data;
            _this.itemSize = +res.count;
        }, function (err) {
        }));
    };
    /**
     * Use this method to prepare request object for list. Sets limits, pagination, etc.
     * @param page
     * @returns {{query: any, page: (any|number), limit: number, sort: string, order: number, filter: string}}
     */
    ListComponent.prototype.buildListResponseObject = function (page) {
        return {
            page: page || this.page,
            limit: this.selectedLimit,
            status: this.searchStatus,
            name: this.searchName,
            sort: this.activeSortByField,
            order: this.activeSortOrder,
        };
    };
    ListComponent.prototype.onPageChange = function (event) {
        this.listRequest(event);
    };
    ListComponent.prototype.applyFilters = function (event) {
        event.preventDefault();
        this.page = 1;
        this.listRequest();
    };
    ListComponent.prototype.onSortBy = function (field) {
        if (this.activeSortByField === field) {
            this.activeSortOrder ? this.activeSortOrder = 0 : this.activeSortOrder = 1;
        }
        else {
            this.activeSortByField = field;
            this.activeSortOrder = 1;
        }
        this.listRequest();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'category-list',
            template: __webpack_require__("./src/app/category/list/list.component.html"),
            styles: [__webpack_require__("./src/app/category/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService,
            ng_bootstrap_1.NgbModal,
            router_1.ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/category/list/list.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var ListResolver = /** @class */ (function () {
    function ListResolver(categoryService) {
        this.categoryService = categoryService;
    }
    ListResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 10,
            status: 1,
            order: 0,
            sort: 'id'
        };
        return Observable_1.Observable.forkJoin(this.categoryService.getList(reqObj));
    };
    ListResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], ListResolver);
    return ListResolver;
}());
exports.ListResolver = ListResolver;


/***/ }),

/***/ "./src/app/category/service/category.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var error_handler_service_1 = __webpack_require__("./src/app/shared/error-handler.service.ts");
var list_request_service_1 = __webpack_require__("./src/app/shared/list-request.service.ts");
var CategoryService = /** @class */ (function () {
    function CategoryService(http, authService, errorHandler) {
        this.http = http;
        this.authService = authService;
        this.errorHandler = errorHandler;
        this.path = '/v1/categories';
    }
    CategoryService.prototype.getHeaders = function () {
        return new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    };
    CategoryService.prototype.getList = function (resObj) {
        var _this = this;
        if (resObj === void 0) { resObj = {}; }
        return this.http.get(this.path + '?' + list_request_service_1.ListRequestService.parseRequestObject(resObj), { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CategoryService.prototype.getViewById = function (id) {
        var _this = this;
        return this.http.get(this.path + '/' + id, { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CategoryService.prototype.create = function (category) {
        var _this = this;
        return this.http.post(this.path, category, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Categories was created"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CategoryService.prototype.updateById = function (category, id) {
        var _this = this;
        return this.http.put(this.path + '/' + id, category, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Categories was updated"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CategoryService.prototype.deleteById = function (id) {
        var _this = this;
        return this.http.delete(this.path + '/' + id, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Categories was deleted"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CategoryService.prototype.getMaxPosition = function () {
        var _this = this;
        return this.http.get(this.path + '/max-active-position', { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CategoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            auth_service_1.AuthService,
            error_handler_service_1.ErrorHandler])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;


/***/ }),

/***/ "./src/app/category/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create category</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"categoryForm\" [ngClass]=\"{'form-error':submitPending }\"\n                      (submit)=\"updateCategory($event)\" novalidate>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_en\">name_en</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"name_en\" id=\"name_en\"\n                                   formControlName=\"name_en\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                            <p class=\"error_message\"\n                               *ngIf=\"categoryForm.get('name_en').hasError('required') && submitPending\">\n                                Name En is required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_en')\">{{\n                                getTextErrorByFormField('name_en') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_he\">name_he</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"name_he\" formControlName=\"name_he\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_es\">name_es</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"name_es\" formControlName=\"name_es\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"position\">position</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"position\" type=\"number\" formControlName=\"position\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button class=\"btn btn-danger btn-bordered margin-right\" type=\"button\"\n                                    [routerLink]=\"['/categories']\">Cancel\n                            </button>\n                            <button class=\"btn btn-primary btn-bordered\" type=\"submit\"\n                            >Update\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/category/update/update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(router, fb, categoryService, _route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.categoryService = categoryService;
        this._route = _route;
        this.showLang = false;
        this.submitPending = false;
        this.errors = [];
        this.categoryForm = new forms_1.FormGroup({
            id: new forms_1.FormControl("", [forms_1.Validators.required]),
            name_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            name_he: new forms_1.FormControl("", []),
            name_es: new forms_1.FormControl("", []),
            position: new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)]),
            status: new forms_1.FormControl(1, [forms_1.Validators.required]),
        });
        this._subscribers = [];
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.categoryForm.patchValue(res.data[0]);
        }));
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.updateCategory = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.categoryForm.valid) {
            this.submitPending = true;
            return;
        }
        var category = this.categoryForm.value;
        this._subscribers.push(this.categoryService.updateById(category, category.id).subscribe(function () {
            _this.router.navigate(['/categories']);
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    UpdateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    UpdateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    UpdateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'category-update',
            template: __webpack_require__("./src/app/category/update/update.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            category_service_1.CategoryService,
            router_1.ActivatedRoute])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;


/***/ }),

/***/ "./src/app/category/update/update.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var UpdateResolver = /** @class */ (function () {
    function UpdateResolver(categoryService) {
        this.categoryService = categoryService;
    }
    UpdateResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.forkJoin(this.categoryService.getViewById(route.params['id']));
    };
    UpdateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], UpdateResolver);
    return UpdateResolver;
}());
exports.UpdateResolver = UpdateResolver;


/***/ }),

/***/ "./src/app/company/company.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var company_service_1 = __webpack_require__("./src/app/company/services/company.service.ts");
var company_get_component_1 = __webpack_require__("./src/app/company/list/company-get.component.ts");
var company_create_component_1 = __webpack_require__("./src/app/company/create/company-create.component.ts");
var company_update_component_1 = __webpack_require__("./src/app/company/update/company-update.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var company_routing_1 = __webpack_require__("./src/app/company/company.routing.ts");
var ngx_image_cropper_1 = __webpack_require__("./node_modules/ngx-image-cropper/ngx-image-cropper.es5.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var list_resolver_1 = __webpack_require__("./src/app/company/list/list.resolver.ts");
var update_resolver_1 = __webpack_require__("./src/app/company/update/update.resolver.ts");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                http_1.HttpClientModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(company_routing_1.companyRoutes),
                ng_bootstrap_1.NgbModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                forms_1.ReactiveFormsModule,
                ngx_image_cropper_1.ImageCropperModule
            ],
            declarations: [
                company_get_component_1.CompanyGetComponent,
                company_create_component_1.CompanyCreateComponent,
                company_update_component_1.CompanyUpdateComponent
            ],
            providers: [
                company_service_1.CompanyService,
                list_resolver_1.ListResolver,
                update_resolver_1.UpdateResolver
            ]
        })
    ], CompanyModule);
    return CompanyModule;
}());
exports.CompanyModule = CompanyModule;


/***/ }),

/***/ "./src/app/company/company.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var company_get_component_1 = __webpack_require__("./src/app/company/list/company-get.component.ts");
var company_create_component_1 = __webpack_require__("./src/app/company/create/company-create.component.ts");
var company_update_component_1 = __webpack_require__("./src/app/company/update/company-update.component.ts");
var list_resolver_1 = __webpack_require__("./src/app/company/list/list.resolver.ts");
var update_resolver_1 = __webpack_require__("./src/app/company/update/update.resolver.ts");
exports.companyRoutes = [{
        path: 'companies',
        component: root_component_1.RootComponent,
        canActivate: [app_resolver_1.AppResolver],
        children: [
            {
                path: '',
                component: company_get_component_1.CompanyGetComponent,
                resolve: {
                    'data': list_resolver_1.ListResolver
                }
            },
            {
                path: 'create', component: company_create_component_1.CompanyCreateComponent,
            },
            {
                path: 'update/:id', component: company_update_component_1.CompanyUpdateComponent,
                resolve: {
                    'data': update_resolver_1.UpdateResolver
                }
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/company/create/company-create.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n    border-color: red;\n}"

/***/ }),

/***/ "./src/app/company/create/company-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create company</span>\n            </div>\n            <div class=\"card-block\">\n                <form novalidate [ngClass]=\"{'form-error':submitPending }\" [formGroup]=\"form\"\n                      (ngSubmit)=\"onSubmit(form)\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputNameCompany\">Name\n                            company</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"name_en\" id=\"inputNameCompany\"\n                                   placeholder=\"Name company\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"form.get('name_en').hasError('required') && submitPending\">\n                                Name company is required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_en')\">{{\n                                getTextErrorByFormField('name_en') }}</p>\n                        </div>\n\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputNameCompanyhe\">Name company\n                            \"Heb\"</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputNameCompanyhe\" formControlName=\"name_he\"\n                                   placeholder=\"Name company 'Heb'\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_he')\">{{\n                                getTextErrorByFormField('name_he') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputNameCompanyes\">Name company\n                            'Es'</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputNameCompanyes\" formControlName=\"name_es\"\n                                   placeholder=\"Name company 'Es'\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_es')\">{{\n                                getTextErrorByFormField('name_es') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputLinktosite\">Company site\n                            URL</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputLinktosite\"\n                                   formControlName=\"company_site_url\" placeholder=\"https://site.name\">\n                            <p class=\"error_message\"\n                               *ngIf=\"form.get('company_site_url').hasError('required') && submitPending\">Url company is\n                                required</p>\n                            <p class=\"error_message\"\n                               *ngIf=\"form.get('company_site_url').hasError('pattern') && submitPending\">Url company\n                                must be https://</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('company_site_url')\">{{\n                                getTextErrorByFormField('company_site_url') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputCompanycolor\">Company\n                            color</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputCompanycolor\" formControlName=\"color_1\"\n                                   placeholder=\"#ffffff\">\n                            <p class=\"error_message\" *ngIf=\"form.get('color_1').hasError('required') && submitPending\">\n                                Color is required</p>\n                            <p class=\"error_message\" *ngIf=\"form.get('color_1').hasError('pattern') && submitPending\">\n                                Color must be #ff0000</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('color_1')\">{{\n                                getTextErrorByFormField('color_1') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputButtoncolor\">Button\n                            color</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputButtoncolor\" formControlName=\"color_2\"\n                                   placeholder=\"#ffffff\">\n                            <p class=\"error_message\" *ngIf=\"form.get('color_2').hasError('required') && submitPending\">\n                                Color is required</p>\n                            <p class=\"error_message\" *ngIf=\"form.get('color_2').hasError('pattern') && submitPending\">\n                                Color must be #ff0000</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('color_2')\">{{\n                                getTextErrorByFormField('color_2') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputButtonBackcolor\">Button\n                            background color</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputButtonBackcolor\" formControlName=\"color_3\"\n                                   placeholder=\"#ffffff\">\n                            <p class=\"error_message\" *ngIf=\"form.get('color_3').hasError('required') && submitPending\">\n                                Color is required</p>\n                            <p class=\"error_message\" *ngIf=\"form.get('color_3').hasError('pattern') && submitPending\">\n                                Color must be #ff0000</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('color_3')\">{{\n                                getTextErrorByFormField('color_3') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputAlias\">Alias</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputAlias\" formControlName=\"alias\"\n                                   placeholder=\"alias\">\n                            <p class=\"error_message\" *ngIf=\"form.get('alias').hasError('required') && submitPending\">\n                                Alias is required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('alias')\">{{\n                                getTextErrorByFormField('alias') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"fileLogo\">Logo</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"fileLogo\" (change)=\"fileChangeEvent($event)\"/>\n\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"logo\">\n                                    <p class=\"error_message\"\n                                       *ngIf=\"form.get('logo').hasError('required') && submitPending\">\n                                        Logo is required</p>\n                                    <image-cropper\n                                        [imageChangedEvent]=\"imageChangedEvent\"\n                                        [maintainAspectRatio]=\"true\"\n                                        [aspectRatio]=\"1\"\n                                        [resizeToWidth]=\"460\"\n                                        format=\"png, jpeg\"\n                                        (imageCropped)=\"imageCropped($event)\"\n                                        (imageLoaded)=\"imageLoaded()\"\n                                        (loadImageFailed)=\"loadImageFailed()\"\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showBtnSL\" (click)=\"handleFileInput()\" class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"fileImage\">Background\n                            company</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"fileImage\" (change)=\"fileChangeCompanyEvent($event)\"/>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"image_company\">\n                                    <p class=\"error_message\"\n                                       *ngIf=\"form.get('image_company').hasError('required') && submitPending\">\n                                        Image company is required</p>\n                                    <image-cropper\n                                        [imageChangedEvent]=\"imageChangedCompanyEvent\"\n                                        [maintainAspectRatio]=\"true\"\n                                        [aspectRatio]=\"4 / 2\"\n                                        [resizeToWidth]=\"256\"\n                                        format=\"png, jpeg\"\n                                        (imageCropped)=\"imageCroppedCompany($event)\"\n                                        (imageLoaded)=\"imageLoaded()\"\n                                        (loadImageFailed)=\"loadImageFailed()\"\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedCompanyImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showCompanyI\" (click)=\"handleFileInputCompany()\"\n                                              class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"fileProd\">Background products\n                            list</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"fileProd\" (change)=\"fileChangeProductEvent($event)\"/>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"image_product_list\">\n                                    <p class=\"error_message\"\n                                       *ngIf=\"form.get('image_product_list').hasError('required') && submitPending\">\n                                        Image product list is required</p>\n                                    <image-cropper\n                                        [imageChangedEvent]=\"imageChangedProductEvent\"\n                                        [maintainAspectRatio]=\"false\"\n                                        [resizeToWidth]=\"256\"\n                                        format=\"png, jpeg\"\n                                        (imageCropped)=\"imageCroppedProduct($event)\"\n                                        (imageLoaded)=\"imageLoaded()\"\n                                        (loadImageFailed)=\"loadImageFailed()\"\n\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedProductImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showProdI\" (click)=\"handleFileInputProduct()\"\n                                              class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button class=\"btn btn-danger btn-bordered margin-right\" type=\"button\"\n                                    [routerLink]=\"['/companies']\">Cancel\n                            </button>\n                            <button type=\"submit\"\n                                    class=\"btn btn-primary btn-bordered\">Save\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/company/create/company-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var company_service_1 = __webpack_require__("./src/app/company/services/company.service.ts");
var company_1 = __webpack_require__("./src/app/company/models/company.ts");
var file_service_1 = __webpack_require__("./src/app/files/services/file.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var querystring_1 = __webpack_require__("./node_modules/querystring-es3/index.js");
var CompanyCreateComponent = /** @class */ (function () {
    function CompanyCreateComponent(router, fb, companyService, fileService, route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.companyService = companyService;
        this.fileService = fileService;
        this.route = route;
        this.fileToUpload = null;
        this.fileToUploadCompany = null;
        this.fileToUploadProd = null;
        this.submitPending = false;
        this.showLogo = false;
        this.showCompanyI = false;
        this.showProdI = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.imageChangedCompanyEvent = '';
        this.croppedCompanyImage = '';
        this.imageChangedProductEvent = '';
        this.croppedProductImage = '';
        this.showBtnSL = false;
        this.errors = [];
        this._subscribers = [];
        this.form = this.fb.group({
            name_en: ['', forms_1.Validators.required],
            name_he: [''],
            name_es: [''],
            company_site_url: ['',
                [forms_1.Validators.pattern("^(http[s]?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$"), forms_1.Validators.required]],
            color_1: ['',
                [forms_1.Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"), forms_1.Validators.required]],
            color_2: ['', [forms_1.Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"), forms_1.Validators.required]],
            color_3: ['', [forms_1.Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"), forms_1.Validators.required]],
            color_4: ['', forms_1.Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")],
            color_5: ['', forms_1.Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")],
            alias: ['', forms_1.Validators.pattern("[0-9a-zA-Z\-]+")],
            logo: ['', forms_1.Validators.required],
            image_company: ['', forms_1.Validators.required],
            image_product_list: ['', forms_1.Validators.required]
        });
        this._subscribers.push(this.form.valueChanges.subscribe(function () { return _this.submitPending = false; }));
    }
    CompanyCreateComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedEvent = event;
            this.fileToUpload = event.target.files;
            this.showBtnSL = true;
        }
    };
    CompanyCreateComponent.prototype.fileChangeCompanyEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedCompanyEvent = event;
            this.fileToUploadCompany = event.target.files;
            this.showCompanyI = true;
        }
    };
    CompanyCreateComponent.prototype.fileChangeProductEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedProductEvent = event;
            this.fileToUploadProd = event.target.files;
            this.showProdI = true;
        }
    };
    CompanyCreateComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
        this.showBtnSL = true;
    };
    CompanyCreateComponent.prototype.imageCroppedCompany = function (image) {
        this.croppedCompanyImage = image;
        this.showCompanyI = true;
    };
    CompanyCreateComponent.prototype.imageCroppedProduct = function (image) {
        this.croppedProductImage = image;
        this.showProdI = true;
    };
    CompanyCreateComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    CompanyCreateComponent.prototype.loadImageFailed = function () {
        this.showBtnSL = false;
        this.showCompanyI = false;
        this.showProdI = false;
        toastr_service_1.ToastrService.error("Error", 'Image must be ".jpg" or ".png"');
    };
    CompanyCreateComponent.prototype.ngOnInit = function () {
    };
    CompanyCreateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.form.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        this.companyService.createCompany(form.value)
            .subscribe(function () {
            _this.router.navigate(['./companies']);
        }, function (err) {
            _this.errors = err.error;
        });
    };
    CompanyCreateComponent.prototype.handleFileInput = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedImage).subscribe(function (data) {
            _this.logoId = data.id;
            _this.logoPath = data.path;
            _this.showBtnSL = false;
            _this.form.patchValue({ logo: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    CompanyCreateComponent.prototype.handleFileInputCompany = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedCompanyImage).subscribe(function (data) {
            _this.imgId = data.id;
            _this.imgPath = data.path;
            _this.showCompanyI = false;
            _this.form.patchValue({ image_company: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    CompanyCreateComponent.prototype.handleFileInputProduct = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedProductImage).subscribe(function (data) {
            _this.prodIId = data.id;
            _this.prodIPath = data.path;
            _this.showProdI = false;
            _this.form.patchValue({ image_product_list: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    CompanyCreateComponent.prototype.uploadFileToActivity = function (croppedImage) {
        return this.fileService.postFile(this.generateFile(croppedImage));
    };
    CompanyCreateComponent.prototype.generateFile = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = querystring_1.unescape(dataURI.split(',')[1]);
        }
        var type = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: type });
    };
    CompanyCreateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    CompanyCreateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", company_1.Company)
    ], CompanyCreateComponent.prototype, "company", void 0);
    CompanyCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-company-create',
            template: __webpack_require__("./src/app/company/create/company-create.component.html"),
            styles: [__webpack_require__("./src/app/company/create/company-create.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            company_service_1.CompanyService,
            file_service_1.FileService,
            router_1.ActivatedRoute])
    ], CompanyCreateComponent);
    return CompanyCreateComponent;
}());
exports.CompanyCreateComponent = CompanyCreateComponent;


/***/ }),

/***/ "./src/app/company/list/company-get.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n\ntable td,\ntable th {\n    padding: 5px;\n}\n"

/***/ }),

/***/ "./src/app/company/list/company-get.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-content\">\n    <div class=\"table-wrapper\">\n        <div class=\"wrap-header\">\n            <h3>{{title}}</h3>\n        </div>\n        <div class=\"wrap-tmain\">\n            <div class=\"table-scroll\">\n                <div class=\"card\">\n                    <div class=\"card-block\" style=\"padding-bottom: 0\">\n                        <table border=\"1\">\n                            <thead>\n                            <tr class=\"ng2-smart-titles\">\n                                <th class=\"ng2-smart-actions\">\n                                    <div class=\"ng2-smart-title\">Actions</div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Used by recipes\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Logo\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Company Name\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-title\">\n                                        Site\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th status\">\n                                    <div class=\"ng2-smart-title\">\n                                        Status\n                                    </div>\n                                </th>\n                            </tr>\n                            <tr class=\"ng2-smart-filters\">\n                                <th class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\n                                    <a routerLink=\"/companies/create\" routerLinkActive=\"active\"\n                                       class=\"btn btn-secondary\" href=\"#\">+ Add New</a>\n                                </th>\n                                <th></th>\n                                <th></th>\n                                <th></th>\n                                <th class=\"ng2-smart-th email\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <div class=\"ng2-smart-filter\">\n                                            <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                                   [(ngModel)]=\"searchName\"\n                                                   (keyup.enter)=\"applyFilters($event)\"\n                                                   type=\"text\"\n                                                   placeholder=\"Name\">\n                                        </div>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th regDate\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <div class=\"ng2-smart-filter\">\n                                            <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                                   [(ngModel)]=\"searchUrl\"\n                                                   (keyup.enter)=\"applyFilters($event)\"\n                                                   type=\"text\"\n                                                   placeholder=\"URL\">\n                                        </div>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th age\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                                class=\"form-control underline\"\n                                                (change)=\"applyFilters($event)\"\n                                                [(ngModel)]=\"searchStatus\">\n                                            <option *ngFor=\"let status of statusOptionsSelect\"\n                                                    [value]=\"status.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ status.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let company of itemList; let i = index\">\n                                <td>\n                                    <a *ngIf=\"company.status == 1\" [routerLink]=\"['update/' + company.id]\"\n                                       routerLinkActive=\"active\" class=\"btn btn-info\">\n                                        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> edit</a>\n                                    <button *ngIf=\"company.status == 1\" class=\"btn btn-danger\"\n                                            [disabled]=\"company.activeRecipeCount != '0'\"\n                                            title=\"This company used in {{company.activeRecipeCount}} recipes\"\n                                            (click)=\"onDelete($event, content, company)\">\n                                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i> delete\n                                    </button>\n                                </td>\n                                <td>{{(i+1) + (page - 1) * selectedLimit}}</td>\n                                <td>{{company.activeRecipeCount}}</td>\n                                <td>\n                                    <img *ngIf=\"company.logo?.path\" src=\"{{company.logo?.path}}\" alt=\"logo\">\n                                </td>\n\n                                <td>{{company.name_en}}</td>\n                                <td title=\"{{company.company_site_url}}\" class=\"ellipsis elipsis-table\">\n                                    {{company.company_site_url}}\n                                </td>\n                                <td><span class=\"active-status edit\" *ngIf=\"company.status == 1 \">Active</span>\n                                    <span class=\"deleted-status delete\" *ngIf=\"company.status == 3 \">Deleted</span>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"page-select\">\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\" style=\"width: 200px;\"\n                                    [(ngModel)]=\"selectedLimit\"\n                                    (change)=\"onLimitSelected($event)\">\n                                <option *ngFor=\"let item of limitOptionsSelect\" [value]=\"item.value\">\n                                    {{ item.label }}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-4\" *ngIf=\"itemSize > selectedLimit\">\n                            <ngb-pagination\n                                    [collectionSize]=\"itemSize\"\n                                    [(page)]=\"page\"\n                                    (pageChange)=\"onPageChange($event)\"\n                                    [pageSize]=\"selectedLimit\"\n                                    [rotate]=\"true\"\n                                    [boundaryLinks]=\"true\"></ngb-pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <i class=\"material-icons\">clear</i>\n    </button>\n    <div class=\"modal-body delete-modal clearfix\">\n        <p>Are you sure you want to delete the company <b>«{{itemTitle}}»?</b></p>\n        <span>This action cannot be undone </span>\n\n        <button type=\"button\" class=\"btn m-btn_no-bg margin-right\" (click)=\"d('no')\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-color\" (click)=\"c('yes')\">Delete it!</button>\n    </div>\n</ng-template>\n\n<template ngbModalContainer></template>"

/***/ }),

/***/ "./src/app/company/list/company-get.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var company_service_1 = __webpack_require__("./src/app/company/services/company.service.ts");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var CompanyGetComponent = /** @class */ (function () {
    function CompanyGetComponent(entityService, modalService, _route) {
        var _this = this;
        this.entityService = entityService;
        this.modalService = modalService;
        this._route = _route;
        this.title = 'Company list';
        // search models
        this.searchName = '';
        this.searchUrl = '';
        this.searchStatus = 1;
        this.isShowPagination = true;
        this.statusOptionsSelect = [
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
        this.limitOptionsSelect = [
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
        this.page = 1;
        this.selectedLimit = 10;
        this._subscribers = [];
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.itemList = _.take(res.data[0].data, _this.selectedLimit);
            _this.itemSize = +res.data[0].count;
        }));
    }
    CompanyGetComponent.prototype.onDelete = function (event, content, company) {
        var _this = this;
        event.preventDefault();
        this.itemTitle = company.name_en;
        this.modalService.open(content).result.then(function (result) {
            _this._subscribers.push(Observable_1.Observable.concat(_this.entityService.deleteById(company.id), _this.entityService.getList(_this.buildListResponseObject())).subscribe(function (res) {
                if (res) {
                    _this.itemList = res.data;
                    _this.itemSize = +res.count;
                }
            }, function (err) {
            }));
        });
    };
    CompanyGetComponent.prototype.ngOnInit = function () {
    };
    CompanyGetComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    CompanyGetComponent.prototype.onLimitSelected = function (selected) {
        this.page = 1;
        this.listRequest();
    };
    /**
     * Use this method to get current list
     * @param page
     */
    CompanyGetComponent.prototype.listRequest = function (page) {
        var _this = this;
        this._subscribers.push(this.entityService.getList(this.buildListResponseObject(page))
            .subscribe(function (res) {
            _this.itemList = res.data;
            _this.itemSize = +res.count;
        }, function (err) {
        }));
    };
    /**
     * Use this method to prepare request object for list. Sets limits, pagination, etc.
     * @param page
     * @returns {{query: any, page: (any|number), limit: number, sort: string, order: number, filter: string}}
     */
    CompanyGetComponent.prototype.buildListResponseObject = function (page) {
        return {
            page: page || this.page,
            limit: this.selectedLimit,
            status: this.searchStatus,
            name: this.searchName,
            url: this.searchUrl,
        };
    };
    CompanyGetComponent.prototype.onPageChange = function (event) {
        this.listRequest(event);
    };
    CompanyGetComponent.prototype.applyFilters = function (event) {
        event.preventDefault();
        this.page = 1;
        this.listRequest(1);
    };
    CompanyGetComponent = __decorate([
        core_1.Component({
            selector: 'app-company-get',
            template: __webpack_require__("./src/app/company/list/company-get.component.html"),
            styles: [__webpack_require__("./src/app/company/list/company-get.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService,
            ng_bootstrap_1.NgbModal,
            router_1.ActivatedRoute])
    ], CompanyGetComponent);
    return CompanyGetComponent;
}());
exports.CompanyGetComponent = CompanyGetComponent;


/***/ }),

/***/ "./src/app/company/list/list.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var company_service_1 = __webpack_require__("./src/app/company/services/company.service.ts");
var ListResolver = /** @class */ (function () {
    function ListResolver(companyService) {
        this.companyService = companyService;
    }
    ListResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 10,
            status: 1,
        };
        return Observable_1.Observable.forkJoin(this.companyService.getList(reqObj));
    };
    ListResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [company_service_1.CompanyService])
    ], ListResolver);
    return ListResolver;
}());
exports.ListResolver = ListResolver;


/***/ }),

/***/ "./src/app/company/models/company.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());
exports.Company = Company;


/***/ }),

/***/ "./src/app/company/services/company.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var error_handler_service_1 = __webpack_require__("./src/app/shared/error-handler.service.ts");
var list_request_service_1 = __webpack_require__("./src/app/shared/list-request.service.ts");
var CompanyService = /** @class */ (function () {
    function CompanyService(http, errorHandler, authService) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.authService = authService;
        this.path = '/v1/companies';
    }
    CompanyService.prototype.getHeaders = function () {
        return new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    };
    CompanyService.prototype.getCompanies = function () {
        var _this = this;
        // get company from api
        return this.http.get(this.path, { headers: this.getHeaders() })
            .do(function (response) { return response; })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CompanyService.prototype.getList = function (resObj) {
        var _this = this;
        if (resObj === void 0) { resObj = {}; }
        // get company from api
        return this.http.get(this.path + '?' + list_request_service_1.ListRequestService.parseRequestObject(resObj), { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CompanyService.prototype.getViewById = function (id) {
        var _this = this;
        return this.http.get(this.path + '/' + id, { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CompanyService.prototype.createCompany = function (form) {
        var _this = this;
        return this.http.post(this.path, form, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Company was create"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CompanyService.prototype.editCompany = function (form, id) {
        var _this = this;
        return this.http.put(this.path + '/' + id, form, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Company was update"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CompanyService.prototype.deleteById = function (id) {
        var _this = this;
        return this.http.delete(this.path + '/' + id, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Company was delete"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CompanyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            error_handler_service_1.ErrorHandler,
            auth_service_1.AuthService])
    ], CompanyService);
    return CompanyService;
}());
exports.CompanyService = CompanyService;


/***/ }),

/***/ "./src/app/company/update/company-update.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n    border-color: red;\n}"

/***/ }),

/***/ "./src/app/company/update/company-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create company</span>\n            </div>\n            <div class=\"card-block\">\n                <form novalidate [ngClass]=\"{'form-error':submitPending }\" [formGroup]=\"form\"\n                      (ngSubmit)=\"onSubmit(form)\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputNameCompany\">Name\n                            company</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"name_en\" id=\"inputNameCompany\"\n                                   placeholder=\"Name company\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"form.get('name_en').hasError('required') && submitPending\">\n                                Name company is required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_en')\">{{\n                                getTextErrorByFormField('name_en') }}</p>\n                        </div>\n\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputNameCompanyhe\">Name company\n                            \"Heb\"</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputNameCompanyhe\" formControlName=\"name_he\"\n                                   placeholder=\"Name company 'Heb'\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_he')\">{{\n                                getTextErrorByFormField('name_he') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputNameCompanyes\">Name company\n                            'Es'</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputNameCompanyes\" formControlName=\"name_es\"\n                                   placeholder=\"Name company 'Es'\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_es')\">{{\n                                getTextErrorByFormField('name_es') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputLinktosite\">Company site\n                            URL</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputLinktosite\"\n                                   formControlName=\"company_site_url\" placeholder=\"https://site.name\">\n                            <p class=\"error_message\"\n                               *ngIf=\"form.get('company_site_url').hasError('required') && submitPending\">Url company is\n                                required</p>\n                            <p class=\"error_message\"\n                               *ngIf=\"form.get('company_site_url').hasError('pattern') && submitPending\">Url company\n                                must be https://</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('company_site_url')\">{{\n                                getTextErrorByFormField('company_site_url') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputCompanycolor\">Company\n                            color</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputCompanycolor\" formControlName=\"color_1\"\n                                   placeholder=\"#ffffff\">\n                            <p class=\"error_message\" *ngIf=\"form.get('color_1').hasError('required') && submitPending\">\n                                Color is required</p>\n                            <p class=\"error_message\" *ngIf=\"form.get('color_1').hasError('pattern') && submitPending\">\n                                Color must be #ff0000</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('color_1')\">{{\n                                getTextErrorByFormField('color_1') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputButtoncolor\">Button\n                            color</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputButtoncolor\" formControlName=\"color_2\"\n                                   placeholder=\"#ffffff\">\n                            <p class=\"error_message\" *ngIf=\"form.get('color_2').hasError('required') && submitPending\">\n                                Color is required</p>\n                            <p class=\"error_message\" *ngIf=\"form.get('color_2').hasError('pattern') && submitPending\">\n                                Color must be #ff0000</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('color_2')\">{{\n                                getTextErrorByFormField('color_2') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputButtonBackcolor\">Button\n                            background color</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputButtonBackcolor\" formControlName=\"color_3\"\n                                   placeholder=\"#ffffff\">\n                            <p class=\"error_message\" *ngIf=\"form.get('color_3').hasError('required') && submitPending\">\n                                Color is required</p>\n                            <p class=\"error_message\" *ngIf=\"form.get('color_3').hasError('pattern') && submitPending\">\n                                Color must be #ff0000</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('color_3')\">{{\n                                getTextErrorByFormField('color_3') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputAlias\">Alias</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"inputAlias\" formControlName=\"alias\"\n                                   placeholder=\"alias\">\n                            <p class=\"error_message\" *ngIf=\"form.get('alias').hasError('required') && submitPending\">\n                                Alias is required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('alias')\">{{\n                                getTextErrorByFormField('alias') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"fileLogo\">Logo</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"fileLogo\" (change)=\"fileChangeEvent($event)\"/>\n\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"logo\">\n                                    <p class=\"error_message\"\n                                       *ngIf=\"form.get('logo').hasError('required') && submitPending\">\n                                        Logo is required</p>\n                                    <image-cropper\n                                        [imageChangedEvent]=\"imageChangedEvent\"\n                                        [maintainAspectRatio]=\"true\"\n                                        [aspectRatio]=\"1\"\n                                        [resizeToWidth]=\"256\"\n                                        format=\"png, jpeg\"\n                                        (imageCropped)=\"imageCropped($event)\"\n                                        (imageLoaded)=\"imageLoaded()\"\n                                        (loadImageFailed)=\"loadImageFailed()\"\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showBtnSL\" (click)=\"handleFileInput()\" class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"fileImage\">Background\n                            company</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"fileImage\" (change)=\"fileChangeCompanyEvent($event)\"/>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"image_company\">\n                                    <p class=\"error_message\"\n                                       *ngIf=\"form.get('image_company').hasError('required') && submitPending\">\n                                        Image company is required</p>\n                                    <image-cropper\n                                        [imageChangedEvent]=\"imageChangedCompanyEvent\"\n                                        [maintainAspectRatio]=\"true\"\n                                        [aspectRatio]=\"4 / 2\"\n                                        [resizeToWidth]=\"500\"\n                                        format=\"png, jpeg\"\n                                        (imageCropped)=\"imageCroppedCompany($event)\"\n                                        (imageLoaded)=\"imageLoaded()\"\n                                        (loadImageFailed)=\"loadImageFailed()\"\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedCompanyImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showCompanyI\" (click)=\"handleFileInputCompany()\"\n                                              class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"fileProd\">Background products\n                            list</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"fileProd\" (change)=\"fileChangeProductEvent($event)\"/>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"image_product_list\">\n                                    <p class=\"error_message\"\n                                       *ngIf=\"form.get('image_product_list').hasError('required') && submitPending\">\n                                        Image product list is required</p>\n                                    <image-cropper\n                                        [imageChangedEvent]=\"imageChangedProductEvent\"\n                                        [maintainAspectRatio]=\"false\"\n                                        [resizeToWidth]=\"256\"\n                                        format=\"png, jpeg\"\n                                        (imageCropped)=\"imageCroppedProduct($event)\"\n                                        (imageLoaded)=\"imageLoaded()\"\n                                        (loadImageFailed)=\"loadImageFailed()\"\n\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedProductImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showProdI\" (click)=\"handleFileInputProduct()\"\n                                              class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button class=\"btn btn-danger btn-bordered margin-right\" type=\"button\"\n                                    [routerLink]=\"['/companies']\">Cancel\n                            </button>\n                            <button type=\"submit\"\n                                    class=\"btn btn-primary btn-bordered\">Save\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/company/update/company-update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var company_1 = __webpack_require__("./src/app/company/models/company.ts");
var company_service_1 = __webpack_require__("./src/app/company/services/company.service.ts");
var file_service_1 = __webpack_require__("./src/app/files/services/file.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var querystring_1 = __webpack_require__("./node_modules/querystring-es3/index.js");
var CompanyUpdateComponent = /** @class */ (function () {
    function CompanyUpdateComponent(router, fb, companyService, fileService, _route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.companyService = companyService;
        this.fileService = fileService;
        this._route = _route;
        this.fileToUpload = null;
        this.fileToUploadCompany = null;
        this.fileToUploadProd = null;
        this.submitPending = false;
        this.showLogo = false;
        this.showCompanyI = false;
        this.showProdI = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.imageChangedCompanyEvent = '';
        this.croppedCompanyImage = '';
        this.imageChangedProductEvent = '';
        this.croppedProductImage = '';
        this.showBtnSL = false;
        this.companyOptionsSelect = [];
        this._companies = [];
        this.unitOptionsSelect = [];
        this._units = [];
        this.ingredientOptionsSelect = [];
        this._ingredients = [];
        this.statusOptionsSelect = [];
        this.languageOptionsSelect = ['en', 'he', 'es'];
        this._subscribers = [];
        this.errors = [];
        this.form = this.fb.group({
            name_en: ['', forms_1.Validators.required],
            name_he: [''],
            name_es: [''],
            company_site_url: ['',
                [forms_1.Validators.pattern("^(http[s]?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$"), forms_1.Validators.required]],
            color_1: ['',
                [forms_1.Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"), forms_1.Validators.required]],
            color_2: ['', [forms_1.Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"), forms_1.Validators.required]],
            color_3: ['', [forms_1.Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"), forms_1.Validators.required]],
            color_4: ['', forms_1.Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")],
            color_5: ['', forms_1.Validators.pattern("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")],
            alias: ['', forms_1.Validators.pattern("[0-9a-zA-Z\-]+")],
            logo: ['', forms_1.Validators.required],
            image_company: ['', forms_1.Validators.required],
            image_product_list: ['', forms_1.Validators.required]
        });
        this._subscribers.push(this.form.valueChanges.subscribe(function () { return _this.submitPending = false; }));
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.id = res.data[0].id;
            _this.form.patchValue(res.data[0]);
            if (res.data[0].logo !== null) {
                _this.form.patchValue({ logo: res.data[0].logo.id });
                _this.croppedImage = res.data[0].logo.path;
            }
            if (res.data[0].imageCompany !== null) {
                _this.form.patchValue({ imageCompany: res.data[0].imageCompany.id });
                _this.croppedCompanyImage = res.data[0].imageCompany.path;
            }
            if (res.data[0].imageProductList !== null) {
                _this.form.patchValue({ imageProductList: res.data[0].imageProductList.id });
                _this.croppedProductImage = res.data[0].imageProductList.path;
            }
        }));
    }
    CompanyUpdateComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedEvent = event;
            this.fileToUpload = event.target.files;
            this.showBtnSL = true;
        }
    };
    CompanyUpdateComponent.prototype.fileChangeCompanyEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedCompanyEvent = event;
            this.fileToUploadCompany = event.target.files;
            this.showCompanyI = true;
        }
    };
    CompanyUpdateComponent.prototype.fileChangeProductEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedProductEvent = event;
            this.fileToUploadProd = event.target.files;
            this.showProdI = true;
        }
    };
    CompanyUpdateComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
        this.showBtnSL = true;
    };
    CompanyUpdateComponent.prototype.imageCroppedCompany = function (image) {
        this.croppedCompanyImage = image;
        this.showCompanyI = true;
    };
    CompanyUpdateComponent.prototype.imageCroppedProduct = function (image) {
        this.croppedProductImage = image;
        this.showProdI = true;
    };
    CompanyUpdateComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    CompanyUpdateComponent.prototype.loadImageFailed = function () {
        this.showBtnSL = false;
        this.showCompanyI = false;
        this.showProdI = false;
        toastr_service_1.ToastrService.error("Error", 'Image must be ".jpg" or ".png"');
    };
    CompanyUpdateComponent.prototype.ngOnInit = function () {
    };
    CompanyUpdateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.form.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        this.companyService.editCompany(form.value, this.id)
            .subscribe(function () {
            _this.router.navigate(['./companies']);
        }, function (err) {
            _this.errors = err.error;
        });
    };
    CompanyUpdateComponent.prototype.handleFileInput = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedImage).subscribe(function (data) {
            _this.logoId = data.id;
            _this.logoPath = data.path;
            _this.showBtnSL = false;
            _this.form.patchValue({ logo: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    CompanyUpdateComponent.prototype.handleFileInputCompany = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedCompanyImage).subscribe(function (data) {
            _this.imgId = data.id;
            _this.imgPath = data.path;
            _this.showCompanyI = false;
            _this.form.patchValue({ image_company: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    CompanyUpdateComponent.prototype.handleFileInputProduct = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedProductImage).subscribe(function (data) {
            _this.prodIId = data.id;
            _this.prodIPath = data.path;
            _this.showProdI = false;
            _this.form.patchValue({ image_product_list: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    CompanyUpdateComponent.prototype.uploadFileToActivity = function (croppedImage) {
        return this.fileService.postFile(this.generateFile(croppedImage));
    };
    CompanyUpdateComponent.prototype.generateFile = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = querystring_1.unescape(dataURI.split(',')[1]);
        }
        var type = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: type });
    };
    CompanyUpdateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    CompanyUpdateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", company_1.Company)
    ], CompanyUpdateComponent.prototype, "company", void 0);
    CompanyUpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-company-update',
            template: __webpack_require__("./src/app/company/update/company-update.component.html"),
            styles: [__webpack_require__("./src/app/company/update/company-update.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            company_service_1.CompanyService,
            file_service_1.FileService,
            router_1.ActivatedRoute])
    ], CompanyUpdateComponent);
    return CompanyUpdateComponent;
}());
exports.CompanyUpdateComponent = CompanyUpdateComponent;


/***/ }),

/***/ "./src/app/company/update/update.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var company_service_1 = __webpack_require__("./src/app/company/services/company.service.ts");
var UpdateResolver = /** @class */ (function () {
    function UpdateResolver(companyService) {
        this.companyService = companyService;
    }
    UpdateResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.forkJoin(this.companyService.getViewById(route.params['id']));
    };
    UpdateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [company_service_1.CompanyService])
    ], UpdateResolver);
    return UpdateResolver;
}());
exports.UpdateResolver = UpdateResolver;


/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var no_content_component_1 = __webpack_require__("./src/app/core/no-content/no-content.component.ts");
var navigation_component_1 = __webpack_require__("./src/app/core/navigation/navigation.component.ts");
var view_component_1 = __webpack_require__("./src/app/core/view.component.ts");
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var unauthorized_component_1 = __webpack_require__("./src/app/core/unauthorized/unauthorized.component.ts");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [
                no_content_component_1.NoContent,
                unauthorized_component_1.UnauthorizedComponent,
                navigation_component_1.NavigationComponent,
                view_component_1.OutletComponent,
                root_component_1.RootComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "./src/app/core/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar\">\n    <!-- LOGO -->\n\n    <!-- Button mobile view to collapse sidebar menu -->\n    <div class=\"navbar navbar-default\" role=\"navigation\">\n        <div class=\"container-fluide\">\n            <div class=\"\">\n\n                <ul class=\"nav navbar-nav navbar-right navbar-right-top pull-right\">\n                    <li class=\"hidden-xs\">\n                        <a (click)=\"logout($event)\" id=\"btn-fullscreen\" class=\"waves-effect waves-light\"><i\n                            class=\"fa fa-external-link\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"\" class=\"dropdown-toggle profile waves-effect waves-light\" data-toggle=\"dropdown\"\n                           aria-expanded=\"true\">\n                            <img src=\"js/ng/assets/images/users/no-image.png\" alt=\"user-img\" class=\"img-circle\">\n                            Admin\n                        </a>\n                    </li>\n\n                    <li class=\"log-out\">\n                        <a href=\"/site/logout\" class=\"waves-effect\" title=\"Log Out\"><i\n                            class=\"icon-logout\"></i><span></span></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"left side-menu\">\n    <div class=\"slimScrollDiv\">\n        <div class=\"sidebar-inner slimscrollleft\">\n            <div class=\"sidebar-header\">\n                <img src=\"/images/crazy-sob-logo.png\"\n                     style=\"width: 70px\" alt=\"Crazy Sob\">\n                Crazy-SOB\n            </div>\n            <!--- Divider -->\n            <div id=\"sidebar-menu\">\n                <ul class=\"navigation\">\n                    <li>\n                        <a routerLink=\"/users\" class=\"waves-effect\" routerLinkActive=\"active\">\n                            <i class=\"fa fa-users\"></i>\n                            <span> Users </span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/companies\" class=\"waves-effect\" routerLinkActive=\"active\">\n                            <i class=\"fa fa-building-o\"></i>\n                            <span> Companies </span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/categories\" class=\"waves-effect\" routerLinkActive=\"active\">\n                            <i class=\"fa fa-calendar-check-o\"></i>\n                            <span> Categories </span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/units\" class=\"waves-effect\" routerLinkActive=\"active\">\n                            <i class=\"fa fa-window-restore\"></i>\n                            <span> Units </span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/ingredients\" class=\"waves-effect\" routerLinkActive=\"active\">\n                            <i class=\"fa fa-shopping-basket\"></i>\n                            <span> Ingredients </span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/recipes\" class=\"waves-effect\" routerLinkActive=\"active\">\n                            <i class=\"fa fa-calendar-check-o\"></i>\n                            <span> Recipes </span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/dictionaries\" class=\"waves-effect\" routerLinkActive=\"active\">\n                            <i class=\"fa fa-list\"></i>\n                            <span> Dictionaries </span>\n                        </a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/coupons\" class=\"waves-effect\" routerLinkActive=\"active\">\n                            <i class=\"fa fa-gift\"></i>\n                            <span> Coupons </span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/core/navigation/navigation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, _authService) {
        this.router = router;
        this._authService = _authService;
        this._subscribers = [];
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
    };
    NavigationComponent.prototype.logout = function (event) {
        event.preventDefault();
        this._subscribers.push(this._authService.logout().subscribe(function (res) {
        }, function (err) {
        }));
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'nav-component',
            template: __webpack_require__("./src/app/core/navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;


/***/ }),

/***/ "./src/app/core/no-content/no-content.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NoContent = /** @class */ (function () {
    function NoContent() {
    }
    NoContent = __decorate([
        core_1.Component({
            selector: 'no-content',
            template: __webpack_require__("./src/app/core/no-content/no-content.html")
        })
    ], NoContent);
    return NoContent;
}());
exports.NoContent = NoContent;


/***/ }),

/***/ "./src/app/core/no-content/no-content.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\" rel=\"error-page\" style=\"height: 100vh\">\n    <div style=\"height: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;\">\n        <div>\n            <h2 style=\"width: 100%; font-size: 40px; font-weight: 800; margin-bottom: 30px;\">\n                <span class=\"text-error\" style=\"font-size: 55px;\">404:</span> Page Not Found</h2>\n            <p style=\"width: 100%; font-size: 16px; font-weight: 400;\">Please, try\n                <a routerLink=\"/categories\">return to app</a></p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/root.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent = __decorate([
        core_1.Component({
            selector: 'view',
            template: "\n        <div class=\"twocolumn\">\n            <nav-component></nav-component>\n\n            <router-outlet></router-outlet>\n        </div>\n\n        <!--<footer></footer>-->"
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;


/***/ }),

/***/ "./src/app/core/unauthorized/unauthorized.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\" rel=\"error-page\" style=\"height: 100vh\">\n    <div style=\"height: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;\">\n        <div>\n            <h2 style=\"width: 100%; font-size: 40px; font-weight: 800; margin-bottom: 30px;\">\n                <span class=\"text-error\" style=\"font-size: 55px;\">401:</span> Unauthorized</h2>\n            <p style=\"width: 100%; font-size: 16px; font-weight: 400;\">Please, try\n                <a routerLink=\"/login\">login</a> if you are registered or contact us.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/unauthorized/unauthorized.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UnauthorizedComponent = /** @class */ (function () {
    function UnauthorizedComponent() {
    }
    UnauthorizedComponent.prototype.ngOnInit = function () {
    };
    UnauthorizedComponent = __decorate([
        core_1.Component({
            selector: 'authorized',
            template: __webpack_require__("./src/app/core/unauthorized/unauthorized.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UnauthorizedComponent);
    return UnauthorizedComponent;
}());
exports.UnauthorizedComponent = UnauthorizedComponent;


/***/ }),

/***/ "./src/app/core/view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var OutletComponent = /** @class */ (function () {
    function OutletComponent() {
    }
    OutletComponent = __decorate([
        core_1.Component({
            selector: 'view',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [])
    ], OutletComponent);
    return OutletComponent;
}());
exports.OutletComponent = OutletComponent;


/***/ }),

/***/ "./src/app/coupon/coupon.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var list_component_1 = __webpack_require__("./src/app/coupon/list/list.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var coupon_routing_1 = __webpack_require__("./src/app/coupon/coupon.routing.ts");
var list_resolver_1 = __webpack_require__("./src/app/coupon/list/list.resolver.ts");
var coupon_service_1 = __webpack_require__("./src/app/coupon/services/coupon.service.ts");
var create_component_1 = __webpack_require__("./src/app/coupon/create/create.component.ts");
var ngx_image_cropper_1 = __webpack_require__("./node_modules/ngx-image-cropper/ngx-image-cropper.es5.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var update_component_1 = __webpack_require__("./src/app/coupon/update/update.component.ts");
var update_resolver_1 = __webpack_require__("./src/app/coupon/update/update.resolver.ts");
var CouponModule = /** @class */ (function () {
    function CouponModule() {
    }
    CouponModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                http_1.HttpClientModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                ngx_bootstrap_1.BsDatepickerModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                router_1.RouterModule.forChild(coupon_routing_1.couponRoutes),
                forms_1.ReactiveFormsModule,
                ngx_image_cropper_1.ImageCropperModule,
            ],
            declarations: [
                list_component_1.ListComponent,
                create_component_1.CreateComponent,
                update_component_1.UpdateComponent,
            ],
            providers: [
                list_resolver_1.ListResolver,
                update_resolver_1.UpdateResolver,
                coupon_service_1.CouponService,
            ]
        })
    ], CouponModule);
    return CouponModule;
}());
exports.CouponModule = CouponModule;


/***/ }),

/***/ "./src/app/coupon/coupon.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var list_component_1 = __webpack_require__("./src/app/coupon/list/list.component.ts");
var list_resolver_1 = __webpack_require__("./src/app/coupon/list/list.resolver.ts");
var create_component_1 = __webpack_require__("./src/app/coupon/create/create.component.ts");
var update_resolver_1 = __webpack_require__("./src/app/coupon/update/update.resolver.ts");
var update_component_1 = __webpack_require__("./src/app/coupon/update/update.component.ts");
exports.couponRoutes = [{
        path: 'coupons',
        component: root_component_1.RootComponent,
        canActivate: [app_resolver_1.AppResolver],
        children: [
            {
                path: '',
                component: list_component_1.ListComponent,
                resolve: {
                    'data': list_resolver_1.ListResolver
                }
            },
            {
                path: 'create',
                component: create_component_1.CreateComponent,
            },
            {
                path: 'update/:id',
                component: update_component_1.UpdateComponent,
                resolve: {
                    'data': update_resolver_1.UpdateResolver
                }
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/coupon/create/create.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n    border-color: red;\n}"

/***/ }),

/***/ "./src/app/coupon/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create coupon</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"couponForm\" [ngClass]=\"{'form-error':submitPending }\"\n                      (submit)=\"createCoupon($event)\" novalidate>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"title_en\">Title (en)</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input matInput class=\"form-control underline\" id=\"title_en\" formControlName=\"title_en\">\n                                <div\n                                        *ngIf=\"couponForm.get('title_en').hasError('required') && submitPending\">\n                                    Title is <strong>required</strong>\n                                </div>\n                                <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('title_en')\">\n                                    {{getTextErrorByFormField('title_en') }}</p>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"description_en\">Description\n                            (en)</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input id=\"description_en\" class=\"form-control underline\"\n                                       formControlName=\"description_en\">\n                                <div *ngIf=\"couponForm.get('description_en').hasError('required') && submitPending\">\n                                    Description is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"start_date\">Start date</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input class=\"form-control underline\"\n                                       id=\"start_date\"\n                                       bsDatepicker\n                                       [maxDate]=\"couponForm.get('finish_date').value\"\n                                       [bsConfig]=\"{ dateInputFormat: 'MMMM Do YYYY, h:mm:ss a'}\"\n                                       name=\"start_date\" formControlName=\"start_date\">\n                                <div *ngIf=\"couponForm.get('start_date').hasError('required') && submitPending\">\n                                    Start date is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"finish_date\">Finish date</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input id=\"finish_date\"\n                                       class=\"form-control underline\"\n                                       formControlName=\"finish_date\"\n                                       [minDate]=\"couponForm.get('start_date').value\"\n                                       [bsConfig]=\"{ dateInputFormat: 'MMMM Do YYYY, h:mm:ss a'}\"\n                                       bsDatepicker>\n                                <div *ngIf=\"couponForm.get('finish_date').hasError('required') && submitPending\">\n                                    Finish date is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"file_id\">Coupon image</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"file_id\" (change)=\"fileChangeEvent($event)\"/>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"file_id\">\n                                    <div *ngIf=\"couponForm.get('file_id').hasError('required')  && submitPending\">\n                                        Image is <strong>required</strong>\n                                    </div>\n                                    <image-cropper\n                                            [imageChangedEvent]=\"imageChangedEvent\"\n                                            [maintainAspectRatio]=\"true\"\n                                            [aspectRatio]=\"1\"\n                                            [resizeToWidth]=\"460\"\n                                            format=\"png, jpeg\"\n                                            (imageCropped)=\"imageCropped($event)\"\n                                            (imageLoaded)=\"imageLoaded()\"\n                                            (loadImageFailed)=\"loadImageFailed()\"\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showBtnSL\" (click)=\"handleFileInput()\" class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\" row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-offset-2 col-sm-10\">\n                                    <span class=\"btn btn-danger btn-bordered margin-right\"\n                                            [routerLink]=\"['/coupons']\">Cancel\n                                    </span>\n                                    <button class=\"btn btn-primary btn-bordered\" type=\"submit\"\n                                    >Create\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/coupon/create/create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var file_service_1 = __webpack_require__("./src/app/files/services/file.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var querystring_1 = __webpack_require__("./node_modules/querystring-es3/index.js");
var coupon_service_1 = __webpack_require__("./src/app/coupon/services/coupon.service.ts");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(router, fb, fileService, couponService) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.fileService = fileService;
        this.couponService = couponService;
        this.submitPending = false;
        this.showImg = false;
        this.fileToUpload = null;
        this.imgPath = '';
        this.showBtnSL = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.errors = [];
        this.couponForm = new forms_1.FormGroup({
            title_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            description_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            start_date: new forms_1.FormControl("", [forms_1.Validators.required]),
            finish_date: new forms_1.FormControl("", [forms_1.Validators.required]),
            status: new forms_1.FormControl(1, [forms_1.Validators.required]),
            file_id: new forms_1.FormControl("", [forms_1.Validators.required])
        });
        this._subscribers = [];
        this._subscribers.push(this.couponForm.valueChanges.subscribe(function () { return _this.submitPending = false; }));
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createCoupon = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.couponForm.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        var coupon = this.couponForm.value;
        this._subscribers.push(this.couponService.create(coupon).subscribe(function () {
            _this.router.navigate(['/coupons']);
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    CreateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    CreateComponent.prototype.handleFileInput = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedImage).subscribe(function (data) {
            _this.imgPath = data.path;
            _this.showBtnSL = false;
            _this.couponForm.patchValue({ file_id: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    CreateComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedEvent = event;
            this.fileToUpload = event.target.files;
            this.showBtnSL = true;
        }
    };
    CreateComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
        this.showBtnSL = true;
    };
    CreateComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    CreateComponent.prototype.loadImageFailed = function () {
        this.showBtnSL = false;
        toastr_service_1.ToastrService.error("Error", 'Image must be ".jpg" or ".png"');
    };
    CreateComponent.prototype.generateFile = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = querystring_1.unescape(dataURI.split(',')[1]);
        }
        var type = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: type });
    };
    CreateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    CreateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    CreateComponent.prototype.uploadFileToActivity = function (croppedImage) {
        return this.fileService.postFile(this.generateFile(croppedImage));
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'coupon-create',
            template: __webpack_require__("./src/app/coupon/create/create.component.html"),
            styles: [__webpack_require__("./src/app/coupon/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            file_service_1.FileService,
            coupon_service_1.CouponService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;


/***/ }),

/***/ "./src/app/coupon/list/list.component.css":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/coupon/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-content\">\n    <div class=\"table-wrapper\">\n        <div class=\"wrap-header\">\n            <h3>{{title}}</h3>\n        </div>\n        <div class=\"wrap-tmain\">\n            <div class=\"table-scroll\">\n                <div class=\"card\">\n                    <div class=\"card-block\" style=\"padding-bottom: 0\">\n                        <table border=\"1\">\n                            <thead>\n                            <tr class=\"ng2-smart-titles\">\n                                <th class=\"ng2-smart-actions\">\n                                    <div class=\"ng2-smart-title\">Actions</div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-title\">\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Title\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Image\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Status\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Start date\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Finish date\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Used by ingredients\n                                    </div>\n                                </th>\n                            </tr>\n                            <tr class=\"ng2-smart-filters\">\n                                <th class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\n                                    <a routerLink=\"create\" routerLinkActive=\"active\"\n                                       class=\"btn btn-secondary\" href=\"#\">+ Add New</a>\n                                </th>\n                                <th class=\"ng2-smart-actions-title\">\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                               [(ngModel)]=\"searchTitle\"\n                                               (keyup.enter)=\"applyFilters($event)\"\n                                               type=\"text\"\n                                               placeholder=\"Name\">\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th age\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                                class=\"form-control underline\"\n                                                (change)=\"applyFilters($event)\"\n                                                [(ngModel)]=\"searchStatus\">\n                                            <option *ngFor=\"let status of statusOptionsSelect\"\n                                                    [value]=\"status.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ status.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\"></th>\n                                <th class=\"ng2-smart-th\"></th>\n                                <th class=\"ng2-smart-th\"></th>\n                            </tr>\n                            </thead>\n                            <tbody>\n\n                            <tr *ngFor=\"let coupon of itemList; let i = index\">\n                                <td>\n                                    <a [routerLink]=\"['update/' + coupon.id]\" *ngIf=\"coupon.status == 1\"\n                                       routerLinkActive=\"active\" class=\"btn btn-info\">\n                                        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                                        edit</a>\n                                    <button *ngIf=\"coupon.status == 1\" [disabled]=\"coupon?.activeIngredientCount != '0'\"\n                                            title=\"This coupon used in {{coupon?.activeIngredientCount}} ingredients\"\n                                            class=\"btn btn-danger\"\n                                            (click)=\"onDelete($event, content, coupon)\">\n                                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                        delete</button>\n                                </td>\n                                <td>{{(i+1) + (page - 1) * selectedLimit}}</td>\n                                <td>{{coupon.title_en}}</td>\n                                <td>\n                                    <img *ngIf=\"coupon.image?.path\" src=\"{{coupon.image?.path}}\" alt=\"image\">\n                                </td>\n                                <td>\n                                     <span class=\"active-status edit button\"\n                                           *ngIf=\"coupon.status == 1\">Active</span>\n                                    <span class=\"deleted-status delete button\"\n                                          *ngIf=\"coupon.status == 3 \">Deleted</span>\n                                </td>\n                                <td>{{coupon.start_date}}</td>\n                                <td>{{coupon.finish_date}}</td>\n                                <td>{{coupon.activeIngredientCount}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"page-select\">\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\" style=\"width: 200px;\"\n                                    [(ngModel)]=\"selectedLimit\"\n                                    (change)=\"onLimitSelected($event)\">\n                                <option *ngFor=\"let item of limitOptionsSelect\" [value]=\"item.value\">\n                                    {{ item.label }}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-4\" *ngIf=\"itemSize > selectedLimit\">\n                            <ngb-pagination\n                                    [collectionSize]=\"itemSize\"\n                                    [(page)]=\"page\"\n                                    (pageChange)=\"onPageChange($event)\"\n                                    [pageSize]=\"selectedLimit\"\n                                    [rotate]=\"true\"\n                                    [boundaryLinks]=\"true\"></ngb-pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <i class=\"material-icons\">clear</i>\n    </button>\n    <div class=\"modal-body delete-modal clearfix\">\n        <p>Are you sure you want to delete the coupon <b>«{{itemTitle}}»?</b></p>\n        <span>This action cannot be undone </span>\n        <p>\n            <button type=\"button\" class=\"btn m-btn_no-bg margin-right\" (click)=\"d('no')\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-color\" (click)=\"c('yes')\">Delete it!</button>\n        </p>\n\n    </div>\n</ng-template>\n\n<template ngbModalContainer></template>"

/***/ }),

/***/ "./src/app/coupon/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var coupon_service_1 = __webpack_require__("./src/app/coupon/services/coupon.service.ts");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ListComponent = /** @class */ (function () {
    function ListComponent(entityService, modalService, _route) {
        var _this = this;
        this.entityService = entityService;
        this.modalService = modalService;
        this._route = _route;
        this.title = 'Coupons list';
        this.searchTitle = '';
        this.searchIngName = '';
        this.searchStatus = 1;
        this.isShowPagination = true;
        this.statusOptionsSelect = [
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
        this.limitOptionsSelect = [
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
        this.page = 1;
        this.selectedLimit = 10;
        this._subscribers = [];
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.itemList = _.take(res.data[0].data, _this.selectedLimit);
            _this.itemSize = +res.data[0].count;
        }));
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    ListComponent.prototype.onLimitSelected = function (selected) {
        this.page = 1;
        this.listRequest();
    };
    /**
     * Use this method to get current list
     * @param page
     */
    ListComponent.prototype.listRequest = function (page) {
        var _this = this;
        this._subscribers.push(this.entityService.getList(this.buildListResponseObject(page))
            .subscribe(function (res) {
            _this.itemList = res.data;
            _this.itemSize = +res.count;
        }, function (err) {
        }));
    };
    /**
     * Use this method to prepare request object for list. Sets limits, pagination, etc.
     * @param page
     * @returns {{query: any, page: (any|number), limit: number, sort: string, order: number, filter: string}}
     */
    ListComponent.prototype.buildListResponseObject = function (page) {
        return {
            page: page || this.page,
            limit: this.selectedLimit,
            status: this.searchStatus,
            name_en: this.searchTitle,
            ing_name: this.searchIngName,
        };
    };
    ListComponent.prototype.onPageChange = function (event) {
        this.listRequest(event);
    };
    ListComponent.prototype.applyFilters = function (event) {
        event.preventDefault();
        this.page = 1;
        this.listRequest();
    };
    ListComponent.prototype.onDelete = function (event, content, coupon) {
        var _this = this;
        event.preventDefault();
        this.itemTitle = coupon.title_en;
        this.modalService.open(content).result.then(function (result) {
            _this._subscribers.push(Observable_1.Observable.concat(_this.entityService.deleteById(coupon.id), _this.entityService.getList(_this.buildListResponseObject())).subscribe(function (res) {
                if (res) {
                    _this.itemList = res.data;
                    _this.itemSize = +res.count;
                }
            }, function (err) {
            }));
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-dictionaries-get',
            template: __webpack_require__("./src/app/coupon/list/list.component.html"),
            styles: [__webpack_require__("./src/app/coupon/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [coupon_service_1.CouponService,
            ng_bootstrap_1.NgbModal,
            router_1.ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/coupon/list/list.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var coupon_service_1 = __webpack_require__("./src/app/coupon/services/coupon.service.ts");
var ListResolver = /** @class */ (function () {
    function ListResolver(CouponService) {
        this.CouponService = CouponService;
    }
    ListResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 10,
            status: 1,
        };
        return Observable_1.Observable.forkJoin(this.CouponService.getList(reqObj));
    };
    ListResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [coupon_service_1.CouponService])
    ], ListResolver);
    return ListResolver;
}());
exports.ListResolver = ListResolver;


/***/ }),

/***/ "./src/app/coupon/services/coupon.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var error_handler_service_1 = __webpack_require__("./src/app/shared/error-handler.service.ts");
var list_request_service_1 = __webpack_require__("./src/app/shared/list-request.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var CouponService = /** @class */ (function () {
    function CouponService(http, errorHandler, authService) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.authService = authService;
        this.path = '/v1/coupons';
    }
    CouponService.prototype.getHeaders = function () {
        return new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    };
    CouponService.prototype.getList = function (resObj) {
        var _this = this;
        if (resObj === void 0) { resObj = {}; }
        return this.http.get(this.path + '?' + list_request_service_1.ListRequestService.parseRequestObject(resObj), { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CouponService.prototype.getViewById = function (id) {
        var _this = this;
        return this.http.get(this.path + '/' + id, { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CouponService.prototype.create = function (coupon) {
        var _this = this;
        return this.http.post(this.path, coupon, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Coupon was created"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CouponService.prototype.updateById = function (coupon, id) {
        var _this = this;
        return this.http.put(this.path + '/' + id, coupon, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Coupon was updated"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CouponService.prototype.deleteById = function (id) {
        var _this = this;
        return this.http.delete(this.path + '/' + id, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Coupon was deleted"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    CouponService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            error_handler_service_1.ErrorHandler,
            auth_service_1.AuthService])
    ], CouponService);
    return CouponService;
}());
exports.CouponService = CouponService;


/***/ }),

/***/ "./src/app/coupon/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Update coupon</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"couponForm\" [ngClass]=\"{'form-error':submitPending }\"\n                      (submit)=\"updateCoupon($event)\" novalidate>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"title_en\">Title (en)</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input matInput class=\"form-control underline\" id=\"title_en\" formControlName=\"title_en\">\n                                <div *ngIf=\"couponForm.get('title_en').hasError('required') && submitPending\">\n                                    Title is <strong>required</strong>\n                                </div>\n                                <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('title_en')\">\n                                    {{getTextErrorByFormField('title_en') }}</p>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"description_en\">Description\n                            (en)</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input id=\"description_en\" class=\"form-control underline\"\n                                       formControlName=\"description_en\">\n                                <div *ngIf=\"couponForm.get('description_en').hasError('required') && submitPending\">\n                                    Description is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"start_date\">Start date</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input class=\"form-control underline\"\n                                       id=\"start_date\"\n                                       bsDatepicker\n                                       [maxDate]=\"couponForm.get('finish_date').value\"\n                                       [bsConfig]=\"{ dateInputFormat: 'MMMM Do YYYY, hh:mm:ss'}\"\n                                       name=\"start_date\" formControlName=\"start_date\">\n                                <div *ngIf=\"couponForm.get('start_date').hasError('required') && submitPending\">\n                                    Start date is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"finish_date\">Finish date</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input id=\"finish_date\"\n                                       class=\"form-control underline\"\n                                       formControlName=\"finish_date\"\n                                       [minDate]=\"couponForm.get('start_date').value\"\n                                       [bsConfig]=\"{ dateInputFormat: 'MMMM Do YYYY, h:mm:ss a'}\"\n                                       bsDatepicker>\n                                <div *ngIf=\"couponForm.get('finish_date').hasError('required') && submitPending\">\n                                    Finish date is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"file_id\">Coupon image</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"file_id\" (change)=\"fileChangeEvent($event)\"/>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"file_id\">\n                                    <div *ngIf=\"couponForm.get('file_id').hasError('required')  && submitPending\">\n                                        Image is <strong>required</strong>\n                                    </div>\n                                    <image-cropper\n                                            [imageChangedEvent]=\"imageChangedEvent\"\n                                            [maintainAspectRatio]=\"true\"\n                                            [aspectRatio]=\"1\"\n                                            [resizeToWidth]=\"460\"\n                                            format=\"png, jpeg\"\n                                            (imageCropped)=\"imageCropped($event)\"\n                                            (imageLoaded)=\"imageLoaded()\"\n                                            (loadImageFailed)=\"loadImageFailed()\"\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showBtnSL\" (click)=\"handleFileInput()\" class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\" row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-offset-2 col-sm-10\">\n                                    <span class=\"btn btn-danger btn-bordered margin-right\"\n                                            [routerLink]=\"['/coupons']\">Cancel\n                                    </span>\n                                    <button class=\"btn btn-primary btn-bordered\" type=\"submit\">\n                                        Update\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/coupon/update/update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var querystring_1 = __webpack_require__("./node_modules/querystring-es3/index.js");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var file_service_1 = __webpack_require__("./src/app/files/services/file.service.ts");
var coupon_service_1 = __webpack_require__("./src/app/coupon/services/coupon.service.ts");
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(router, fileService, couponService, _route) {
        var _this = this;
        this.router = router;
        this.fileService = fileService;
        this.couponService = couponService;
        this._route = _route;
        this.submitPending = false;
        this.showImg = false;
        this.fileToUpload = null;
        this.imgPath = '';
        this.showBtnSL = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.errors = [];
        this.couponForm = new forms_1.FormGroup({
            title_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            description_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            start_date: new forms_1.FormControl("", [forms_1.Validators.required]),
            finish_date: new forms_1.FormControl("", [forms_1.Validators.required]),
            status: new forms_1.FormControl(1, [forms_1.Validators.required]),
            file_id: new forms_1.FormControl("", [forms_1.Validators.required])
        });
        this._subscribers = [];
        this._subscribers.push(this.couponForm.valueChanges.subscribe(function () { return _this.submitPending = false; }));
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.id = res.data[0].id;
            _this.couponForm.patchValue(res.data[0]);
            _this.couponForm.patchValue({ finish_date: new Date(res.data[0].finish_date) });
            _this.couponForm.patchValue({ start_date: new Date(res.data[0].start_date) });
            if (res.data[0].image !== null) {
                _this.couponForm.patchValue({ image: res.data[0].image.id });
                _this.croppedImage = res.data[0].image.path;
            }
        }));
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.updateCoupon = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.couponForm.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        var coupon = this.couponForm.value;
        this._subscribers.push(this.couponService.updateById(coupon, this.id).subscribe(function () {
            _this.router.navigate(['/coupons']);
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    UpdateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    UpdateComponent.prototype.handleFileInput = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedImage).subscribe(function (data) {
            _this.imgPath = data.path;
            _this.showBtnSL = false;
            _this.couponForm.patchValue({ file_id: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    UpdateComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedEvent = event;
            this.fileToUpload = event.target.files;
            this.showBtnSL = true;
        }
    };
    UpdateComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
        this.showBtnSL = true;
    };
    UpdateComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    UpdateComponent.prototype.loadImageFailed = function () {
        this.showBtnSL = false;
        toastr_service_1.ToastrService.error("Error", 'Image must be ".jpg" or ".png"');
    };
    UpdateComponent.prototype.generateFile = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = querystring_1.unescape(dataURI.split(',')[1]);
        }
        var type = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: type });
    };
    UpdateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    UpdateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    UpdateComponent.prototype.uploadFileToActivity = function (croppedImage) {
        return this.fileService.postFile(this.generateFile(croppedImage));
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'ingredient-update',
            template: __webpack_require__("./src/app/coupon/update/update.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router,
            file_service_1.FileService,
            coupon_service_1.CouponService,
            router_1.ActivatedRoute])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;


/***/ }),

/***/ "./src/app/coupon/update/update.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var coupon_service_1 = __webpack_require__("./src/app/coupon/services/coupon.service.ts");
var UpdateResolver = /** @class */ (function () {
    function UpdateResolver(couponService) {
        this.couponService = couponService;
    }
    UpdateResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.forkJoin(this.couponService.getViewById(route.params['id']));
    };
    UpdateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [coupon_service_1.CouponService])
    ], UpdateResolver);
    return UpdateResolver;
}());
exports.UpdateResolver = UpdateResolver;


/***/ }),

/***/ "./src/app/dictionary/dictionary.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var list_component_1 = __webpack_require__("./src/app/dictionary/list/list.component.ts");
var update_component_1 = __webpack_require__("./src/app/dictionary/update/update.component.ts");
var dictionary_service_1 = __webpack_require__("./src/app/dictionary/services/dictionary.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var dictionary_routing_1 = __webpack_require__("./src/app/dictionary/dictionary.routing.ts");
var list_resolver_1 = __webpack_require__("./src/app/dictionary/list/list.resolver.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var update_resolver_1 = __webpack_require__("./src/app/dictionary/update/update.resolver.ts");
var DictionariesModule = /** @class */ (function () {
    function DictionariesModule() {
    }
    DictionariesModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                http_1.HttpClientModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule.forChild(dictionary_routing_1.dictionaryRoutes),
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                list_component_1.ListComponent,
                update_component_1.UpdateComponent,
            ],
            providers: [
                dictionary_service_1.DictionariesService,
                list_resolver_1.ListResolver,
                update_resolver_1.UpdateResolver,
            ]
        })
    ], DictionariesModule);
    return DictionariesModule;
}());
exports.DictionariesModule = DictionariesModule;


/***/ }),

/***/ "./src/app/dictionary/dictionary.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var list_component_1 = __webpack_require__("./src/app/dictionary/list/list.component.ts");
var update_component_1 = __webpack_require__("./src/app/dictionary/update/update.component.ts");
var list_resolver_1 = __webpack_require__("./src/app/dictionary/list/list.resolver.ts");
var update_resolver_1 = __webpack_require__("./src/app/dictionary/update/update.resolver.ts");
exports.dictionaryRoutes = [{
        path: 'dictionaries',
        component: root_component_1.RootComponent,
        canActivate: [app_resolver_1.AppResolver],
        children: [
            {
                path: '',
                component: list_component_1.ListComponent,
                resolve: {
                    'data': list_resolver_1.ListResolver
                }
            },
            {
                path: 'update/:key', component: update_component_1.UpdateComponent,
                resolve: {
                    'data': update_resolver_1.UpdateResolver
                }
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/dictionary/list/list.component.css":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/dictionary/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-content\">\n    <div class=\"table-wrapper\">\n        <div class=\"wrap-header\">\n            <h3>{{title}}</h3>\n        </div>\n        <div class=\"wrap-tmain\">\n            <div class=\"table-scroll\">\n                <div class=\"card\">\n                    <div class=\"card-block\" style=\"padding-bottom: 0\">\n                        <table border=\"1\">\n                            <thead>\n                            <tr class=\"ng2-smart-titles\">\n                                <th class=\"ng2-smart-actions\">\n                                    <div class=\"ng2-smart-title\">Actions</div>\n                                </th>\n                                <th class=\"ng2-smart-th name\">\n                                    <div class=\"ng2-smart-title\">\n                                        Key\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th email\">\n                                    <div class=\"ng2-smart-title\">\n                                        En\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th regDate\">\n                                    <div class=\"ng2-smart-title\">\n                                        He\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th age\">\n                                    <div class=\"ng2-smart-title\">\n                                        Es\n                                    </div>\n                                </th>\n                            </tr>\n                            <tr class=\"ng2-smart-filters\">\n                                <th class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\n\n                                </th>\n                                <th class=\"ng2-smart-th name\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                               [(ngModel)]=\"searchKey\"\n                                               (keyup.enter)=\"applyFilters($event)\"\n                                               type=\"text\"\n                                               placeholder=\"Name\">\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th email\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                               [(ngModel)]=\"searchNameEN\"\n                                               (keyup.enter)=\"applyFilters($event)\"\n                                               type=\"text\"\n                                               placeholder=\"Name\">\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th regDate\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                               [(ngModel)]=\"searchNameHE\"\n                                               (keyup.enter)=\"applyFilters($event)\"\n                                               type=\"text\"\n                                               placeholder=\"Name\">\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th age\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                               [(ngModel)]=\"searchNameES\"\n                                               (keyup.enter)=\"applyFilters($event)\"\n                                               type=\"text\"\n                                               placeholder=\"Name\">\n                                    </div>\n                                </th>\n                            </tr>\n                            </thead>\n                            <tbody>\n\n                            <tr *ngFor=\"let dictionary of itemList\">\n                                <td>\n                                    <span [routerLink]=\"['update/' + dictionary.key]\" routerLinkActive=\"active\"\n                                          class=\"btn btn-info\"><i class=\"fa fa-pencil\"\n                                                                  aria-hidden=\"true\"></i> edit</span>\n                                </td>\n                                <td>{{dictionary.key}}</td>\n                                <td>{{dictionary.en}}</td>\n                                <td>{{dictionary.he}}</td>\n                                <td>{{dictionary.es}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"page-select\">\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\" style=\"width: 200px;\"\n                                    [(ngModel)]=\"selectedLimit\"\n                                    (change)=\"onLimitSelected($event)\">\n                                <option *ngFor=\"let item of limitOptionsSelect\" [value]=\"item.value\">\n                                    {{ item.label }}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-4\" *ngIf=\"itemSize > selectedLimit\">\n                            <ngb-pagination\n                                    [collectionSize]=\"itemSize\"\n                                    [(page)]=\"page\"\n                                    (pageChange)=\"onPageChange($event)\"\n                                    [pageSize]=\"selectedLimit\"\n                                    [rotate]=\"true\"\n                                    [boundaryLinks]=\"true\"></ngb-pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dictionary/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var dictionary_service_1 = __webpack_require__("./src/app/dictionary/services/dictionary.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ListComponent = /** @class */ (function () {
    function ListComponent(entityService, _route) {
        var _this = this;
        this.entityService = entityService;
        this._route = _route;
        this.title = 'Dictionaries list';
        this.searchKey = '';
        this.searchNameEN = '';
        this.searchNameES = '';
        this.searchNameHE = '';
        this.searchStatus = 1;
        this.isShowPagination = true;
        this.limitOptionsSelect = [
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
        this.page = 1;
        this.selectedLimit = 10;
        this._subscribers = [];
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.itemList = _.take(res.data[0].data, _this.selectedLimit);
            _this.itemSize = +res.data[0].count;
        }));
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    ListComponent.prototype.onLimitSelected = function (selected) {
        this.page = 1;
        this.listRequest();
    };
    /**
     * Use this method to get current list
     * @param page
     */
    ListComponent.prototype.listRequest = function (page) {
        var _this = this;
        this._subscribers.push(this.entityService.getList(this.buildListResponseObject(page))
            .subscribe(function (res) {
            _this.itemList = res.data;
            _this.itemSize = +res.count;
        }, function (err) {
        }));
    };
    /**
     * Use this method to prepare request object for list. Sets limits, pagination, etc.
     * @param page
     * @returns {{query: any, page: (any|number), limit: number, sort: string, order: number, filter: string}}
     */
    ListComponent.prototype.buildListResponseObject = function (page) {
        return {
            page: page || this.page,
            limit: this.selectedLimit,
            name_en: this.searchNameEN,
            name_es: this.searchNameES,
            name_he: this.searchNameHE,
            key: this.searchKey,
        };
    };
    ListComponent.prototype.onPageChange = function (event) {
        this.listRequest(event);
    };
    ListComponent.prototype.applyFilters = function (event) {
        event.preventDefault();
        this.page = 1;
        this.listRequest();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-dictionaries-get',
            template: __webpack_require__("./src/app/dictionary/list/list.component.html"),
            styles: [__webpack_require__("./src/app/dictionary/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [dictionary_service_1.DictionariesService,
            router_1.ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/dictionary/list/list.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var dictionary_service_1 = __webpack_require__("./src/app/dictionary/services/dictionary.service.ts");
var ListResolver = /** @class */ (function () {
    function ListResolver(dictionariesService) {
        this.dictionariesService = dictionariesService;
    }
    ListResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 10,
        };
        return Observable_1.Observable.forkJoin(this.dictionariesService.getList(reqObj));
    };
    ListResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dictionary_service_1.DictionariesService])
    ], ListResolver);
    return ListResolver;
}());
exports.ListResolver = ListResolver;


/***/ }),

/***/ "./src/app/dictionary/services/dictionary.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var error_handler_service_1 = __webpack_require__("./src/app/shared/error-handler.service.ts");
var list_request_service_1 = __webpack_require__("./src/app/shared/list-request.service.ts");
var DictionariesService = /** @class */ (function () {
    function DictionariesService(http, errorHandler, authService) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.authService = authService;
        this.path = '/v1/translations';
    }
    DictionariesService.prototype.getHeaders = function () {
        return new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    };
    DictionariesService.prototype.getList = function (resObj) {
        var _this = this;
        if (resObj === void 0) { resObj = {}; }
        return this.http.get(this.path + '?' + list_request_service_1.ListRequestService.parseRequestObject(resObj), { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    DictionariesService.prototype.updateByKey = function (dictionary, key) {
        var _this = this;
        return this.http.put(this.path + '/' + key, dictionary, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Word was updated"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    DictionariesService.prototype.getViewByKey = function (key) {
        var _this = this;
        return this.http.get(this.path + '/' + key, { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    DictionariesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            error_handler_service_1.ErrorHandler,
            auth_service_1.AuthService])
    ], DictionariesService);
    return DictionariesService;
}());
exports.DictionariesService = DictionariesService;


/***/ }),

/***/ "./src/app/dictionary/update/update.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n    border-color: red;\n}"

/***/ }),

/***/ "./src/app/dictionary/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Update key</span>\n            </div>\n            <div class=\"card-block\">\n                <form class=\"form-add-company\" novalidate [formGroup]=\"form\" (ngSubmit)=\"update($event)\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputEnglish\">English</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"en\" id=\"inputEnglish\"\n                                   placeholder=\"English\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"form.get('en').hasError('required')\">English is required</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputHebrew\">Hebrew</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" type=\"text\" id=\"inputHebrew\" formControlName=\"he\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputSpanish\">Spanish</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" type=\"text\" id=\"inputSpanish\" formControlName=\"es\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-primary btn-bordered\">Save\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dictionary/update/update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var dictionary_service_1 = __webpack_require__("./src/app/dictionary/services/dictionary.service.ts");
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(router, fb, dictionariesService, route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.dictionariesService = dictionariesService;
        this.route = route;
        this.showLang = false;
        this.showOtherColor = false;
        this.form = new forms_1.FormGroup({
            key: new forms_1.FormControl("", [forms_1.Validators.required]),
            en: new forms_1.FormControl("", [forms_1.Validators.required]),
            he: new forms_1.FormControl("", [forms_1.Validators.required]),
            es: new forms_1.FormControl("", [forms_1.Validators.required]),
        });
        this._subscribers = [];
        this._subscribers.push(this.route.data.subscribe(function (res) {
            _this.form.patchValue(res.data[0]);
        }));
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.update = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        var model = this.form.value;
        this._subscribers.push(this.dictionariesService.updateByKey(model, model.key).subscribe(function () {
            _this.router.navigate(['/dictionaries']);
        }, function (err) {
        }));
    };
    UpdateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-dictionaries-update',
            template: __webpack_require__("./src/app/dictionary/update/update.component.html"),
            styles: [__webpack_require__("./src/app/dictionary/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            dictionary_service_1.DictionariesService,
            router_1.ActivatedRoute])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;


/***/ }),

/***/ "./src/app/dictionary/update/update.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var dictionary_service_1 = __webpack_require__("./src/app/dictionary/services/dictionary.service.ts");
var UpdateResolver = /** @class */ (function () {
    function UpdateResolver(dictionariesService) {
        this.dictionariesService = dictionariesService;
    }
    UpdateResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.forkJoin(this.dictionariesService.getViewByKey(route.params['key']));
    };
    UpdateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dictionary_service_1.DictionariesService])
    ], UpdateResolver);
    return UpdateResolver;
}());
exports.UpdateResolver = UpdateResolver;


/***/ }),

/***/ "./src/app/files/services/file.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var FileService = /** @class */ (function () {
    function FileService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    FileService.prototype.getHeaders = function () {
        return new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    };
    // download file
    FileService.prototype.postFile = function (file) {
        var formData = new FormData();
        formData.append('FilesUploaded[file]', file, 'a.png');
        return this.http.post('/v1/uploads/image', formData, { headers: this.getHeaders() });
    };
    FileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            auth_service_1.AuthService])
    ], FileService);
    return FileService;
}());
exports.FileService = FileService;


/***/ }),

/***/ "./src/app/ingredient/create/create.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n    border-color: red;\n}"

/***/ }),

/***/ "./src/app/ingredient/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create ingredient</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"ingredientForm\" [ngClass]=\"{'form-error':submitPending }\"\n                      (submit)=\"createIngredient($event)\" novalidate>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_en\">Name (en)</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input matInput class=\"form-control underline\" id=\"name_en\" formControlName=\"name_en\">\n                                <div\n                                    *ngIf=\"ingredientForm.get('name_en').hasError('required') && submitPending\">\n                                    Name is <strong>required</strong>\n                                </div>\n                                <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_en')\">{{\n                                    getTextErrorByFormField('name_en') }}</p>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_he\">Name (he)</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input id=\"name_he\" class=\"form-control underline\" formControlName=\"name_he\">\n                                <div *ngIf=\"ingredientForm.get('name_he').hasError('required') && submitPending\">\n                                    Name is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_es\">Name (es)</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input id=\"name_es\" class=\"form-control underline\" formControlName=\"name_es\">\n\n                                <div *ngIf=\"ingredientForm.get('name_es').hasError('required') && submitPending\">\n                                    Name is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"selectCategory\">Select\n                            category</label>\n                        <div class=\"col-sm-10\">\n                            <div>\n                                <select id=\"selectCategory\"\n                                        class=\"form-control underline\"\n                                        formControlName=\"category_id\">\n                                    <option\n                                        *ngFor=\"let category of categoriesOptionsSelect\" [value]=\"category.value\">\n                                        {{ category.label }}\n                                    </option>\n                                </select>\n\n                                <div *ngIf=\"ingredientForm.get('category_id').hasError('required') && submitPending\">\n                                    Category is <strong>required</strong>\n                                </div>\n                                <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('category_id')\">{{\n                                    getTextErrorByFormField('category_id') }}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"selectCoupon\">Select\n                            coupon</label>\n                        <div class=\"col-sm-10\">\n                            <div>\n                                <select id=\"selectCoupon\"\n                                        class=\"form-control underline\"\n                                        formControlName=\"category_id\">\n                                    <option\n                                        *ngFor=\"let coupon of couponsOptionsSelect\" [value]=\"coupon.value\">\n                                        {{ coupon.label }}\n                                    </option>\n                                </select>\n                                <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('coupon_id')\">{{\n                                    getTextErrorByFormField('coupon_id') }}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"limit-wrapper row clearfix\" formArrayName=\"parts\">\n                                <label class=\"col-sm-2 form-control-label text-xs-right\">Parts</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"\"\n                                         *ngFor=\"let limit of ingredientForm.controls.parts.controls; let i=index\">\n                                        <div class=\" col-sm-12\">\n                                            <div class=\"select-container\" [formGroupName]=\"i\">\n                                                <div class=\"field fourth-width row mb10\">\n                                                    <div class=\"field half-width row \">\n                                                        <div class=\"example-full-width col-sm-4\">\n                                                            <input currencyMask [options]=\"{prefix:''}\" class=\"form-control underline\"\n                                                                   formControlName=\"part\">\n                                                            <div\n                                                                *ngIf=\"ingredientForm.get('parts').hasError('required')  && submitPending\">\n                                                                Unit is <strong>required</strong>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"col-sm-4\">\n                                                            <select\n                                                                formControlName=\"unit_id\"\n                                                                class=\"form-control underline\">\n                                                                <option value=\"\" disabled selected>Select unit</option>\n                                                                <option\n                                                                    *ngFor=\"let unit of unitsOptionsSelect\"\n                                                                    [value]=\"unit.value\">\n                                                                    {{ unit.label }}\n                                                                </option>\n                                                            </select>\n                                                        </div>\n                                                        <button [disabled]=\"parts.length == 1\"\n                                                            (click)=\"deletePart($event, i)\"\n                                                            class=\"btn btn-danger btn-bordered col-sm-2\"\n                                                        >remove\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"\">\n                                    <div class=\"col-sm-offset-2  col-sm-10\">\n                                        <button class=\"btn btn-info btn-rounded\" (click)=\"addPart($event)\">Add new\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"fileImg\">Ingredient image</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"fileImg\" (change)=\"fileChangeEvent($event)\"/>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"image\">\n                                    <div *ngIf=\"ingredientForm.get('image').hasError('required')  && submitPending\">\n                                        Image is <strong>required</strong>\n                                    </div>\n                                    <image-cropper\n                                        [imageChangedEvent]=\"imageChangedEvent\"\n                                        [maintainAspectRatio]=\"true\"\n                                        [aspectRatio]=\"1\"\n                                        [resizeToWidth]=\"256\"\n                                        format=\"png, jpeg\"\n                                        (imageCropped)=\"imageCropped($event)\"\n                                        (imageLoaded)=\"imageLoaded()\"\n                                        (loadImageFailed)=\"loadImageFailed()\"\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showBtnSL\" (click)=\"handleFileInput()\" class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\" row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-offset-2 col-sm-10\">\n                                    <button class=\"btn btn-danger btn-bordered margin-right\"\n                                            [routerLink]=\"['/ingredients']\">Cancel\n                                    </button>\n                                    <button class=\"btn btn-primary btn-bordered\" type=\"submit\"\n                                    >Create\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/ingredient/create/create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ingredient_service_1 = __webpack_require__("./src/app/ingredient/service/ingredient.service.ts");
var file_service_1 = __webpack_require__("./src/app/files/services/file.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var querystring_1 = __webpack_require__("./node_modules/querystring-es3/index.js");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(router, fb, fileService, ingredientService, _route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.fileService = fileService;
        this.ingredientService = ingredientService;
        this._route = _route;
        this.submitPending = false;
        this.showImg = false;
        this.fileToUpload = null;
        this.imgPath = '';
        this.showBtnSL = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.errors = [];
        this.parts = new forms_1.FormArray([
            new forms_1.FormGroup({
                part: new forms_1.FormControl(1, [forms_1.Validators.required]),
                unit_id: new forms_1.FormControl("", [forms_1.Validators.required]),
                status: new forms_1.FormControl(1, [forms_1.Validators.required]),
            })
        ]);
        this.ingredientForm = new forms_1.FormGroup({
            name_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            name_he: new forms_1.FormControl("", []),
            name_es: new forms_1.FormControl("", []),
            category_id: new forms_1.FormControl("", [forms_1.Validators.required]),
            coupon_id: new forms_1.FormControl(""),
            status: new forms_1.FormControl(1, [forms_1.Validators.required]),
            parts: this.parts,
            image: new forms_1.FormControl("", [forms_1.Validators.required])
        });
        this.categoriesOptionsSelect = [];
        this._subscribers = [];
        this._categories = [];
        this.unitsOptionsSelect = [];
        this._units = [];
        this.couponsOptionsSelect = [];
        this._coupons = [];
        this._subscribers.push(this.ingredientForm.valueChanges.subscribe(function () { return _this.submitPending = false; }));
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this._categories = res.data[0].data;
            _this.categoriesOptionsSelect = _.map(_this._categories, function (item) {
                return { value: item.id, label: item.name_en };
            });
            _this._units = res.data[1].data;
            _this.unitsOptionsSelect = _.map(_this._units, function (item) {
                return { value: item.id, label: item.name_en };
            });
            _this._coupons = res.data[2].data;
            _this.couponsOptionsSelect = _.map(_this._coupons, function (item) {
                return { value: item.id, label: item.title_en };
            });
            _this.couponsOptionsSelect.unshift({ value: '', label: 'not set' });
        }));
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createIngredient = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.ingredientForm.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        var ingredient = this.ingredientForm.value;
        this._subscribers.push(this.ingredientService.create(ingredient).subscribe(function () {
            _this.router.navigate(['/ingredients']);
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    CreateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    CreateComponent.prototype.addPart = function (event) {
        event.preventDefault();
        this.parts.push(new forms_1.FormGroup({
            part: new forms_1.FormControl(1, [forms_1.Validators.required]),
            unit_id: new forms_1.FormControl("", [forms_1.Validators.required]),
            status: new forms_1.FormControl(1, [forms_1.Validators.required]),
        }));
    };
    CreateComponent.prototype.deletePart = function (event, index) {
        event.preventDefault();
        this.parts.removeAt(index);
    };
    CreateComponent.prototype.handleFileInput = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedImage).subscribe(function (data) {
            _this.imgPath = data.path;
            _this.showBtnSL = false;
            _this.ingredientForm.patchValue({ image: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    CreateComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedEvent = event;
            this.fileToUpload = event.target.files;
            this.showBtnSL = true;
        }
    };
    CreateComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
        this.showBtnSL = true;
    };
    CreateComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    CreateComponent.prototype.loadImageFailed = function () {
        this.showBtnSL = false;
        toastr_service_1.ToastrService.error("Error", 'Image must be ".jpg" or ".png"');
    };
    CreateComponent.prototype.generateFile = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = querystring_1.unescape(dataURI.split(',')[1]);
        }
        var type = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: type });
    };
    CreateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    CreateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    CreateComponent.prototype.uploadFileToActivity = function (croppedImage) {
        return this.fileService.postFile(this.generateFile(croppedImage));
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'ingredient-create',
            template: __webpack_require__("./src/app/ingredient/create/create.component.html"),
            styles: [__webpack_require__("./src/app/ingredient/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            file_service_1.FileService,
            ingredient_service_1.IngredientService,
            router_1.ActivatedRoute])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;


/***/ }),

/***/ "./src/app/ingredient/create/create.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var coupon_service_1 = __webpack_require__("./src/app/coupon/services/coupon.service.ts");
var CreateResolver = /** @class */ (function () {
    function CreateResolver(categoryService, unitService, couponService) {
        this.categoryService = categoryService;
        this.unitService = unitService;
        this.couponService = couponService;
    }
    CreateResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 100,
            status: 1,
        };
        return Observable_1.Observable.forkJoin(this.categoryService.getList(reqObj), this.unitService.getList(reqObj), this.couponService.getList(reqObj));
    };
    CreateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [category_service_1.CategoryService,
            unit_service_1.UnitService,
            coupon_service_1.CouponService])
    ], CreateResolver);
    return CreateResolver;
}());
exports.CreateResolver = CreateResolver;


/***/ }),

/***/ "./src/app/ingredient/ingredient.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var list_component_1 = __webpack_require__("./src/app/ingredient/list/list.component.ts");
var ingredient_service_1 = __webpack_require__("./src/app/ingredient/service/ingredient.service.ts");
var list_resolver_1 = __webpack_require__("./src/app/ingredient/list/list.resolver.ts");
var ingredient_routing_1 = __webpack_require__("./src/app/ingredient/ingredient.routing.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var create_component_1 = __webpack_require__("./src/app/ingredient/create/create.component.ts");
var update_component_1 = __webpack_require__("./src/app/ingredient/update/update.component.ts");
var update_resolver_1 = __webpack_require__("./src/app/ingredient/update/update.resolver.ts");
var create_resolver_1 = __webpack_require__("./src/app/ingredient/create/create.resolver.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var material_module_1 = __webpack_require__("./src/app/shared/material.module.ts");
var file_service_1 = __webpack_require__("./src/app/files/services/file.service.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var ngx_image_cropper_1 = __webpack_require__("./node_modules/ngx-image-cropper/ngx-image-cropper.es5.js");
var ng2_currency_mask_1 = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
var IngredientModule = /** @class */ (function () {
    function IngredientModule() {
    }
    IngredientModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                ng2_currency_mask_1.CurrencyMaskModule,
                http_2.HttpModule,
                http_1.HttpClientModule,
                material_module_1.MaterialModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(ingredient_routing_1.ingredientRoutes),
                ng_bootstrap_1.NgbModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                forms_1.ReactiveFormsModule,
                ngx_image_cropper_1.ImageCropperModule
            ],
            declarations: [
                list_component_1.ListComponent,
                create_component_1.CreateComponent,
                update_component_1.UpdateComponent,
            ],
            providers: [
                ingredient_service_1.IngredientService,
                list_resolver_1.ListResolver,
                update_resolver_1.UpdateResolver,
                create_resolver_1.CreateResolver,
                file_service_1.FileService
            ]
        })
    ], IngredientModule);
    return IngredientModule;
}());
exports.IngredientModule = IngredientModule;


/***/ }),

/***/ "./src/app/ingredient/ingredient.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = __webpack_require__("./src/app/ingredient/list/list.component.ts");
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var list_resolver_1 = __webpack_require__("./src/app/ingredient/list/list.resolver.ts");
var create_component_1 = __webpack_require__("./src/app/ingredient/create/create.component.ts");
var update_resolver_1 = __webpack_require__("./src/app/ingredient/update/update.resolver.ts");
var update_component_1 = __webpack_require__("./src/app/ingredient/update/update.component.ts");
var create_resolver_1 = __webpack_require__("./src/app/ingredient/create/create.resolver.ts");
exports.ingredientRoutes = [
    {
        path: 'ingredients',
        component: root_component_1.RootComponent,
        canActivate: [app_resolver_1.AppResolver],
        children: [
            {
                path: '',
                component: list_component_1.ListComponent,
                resolve: {
                    'data': list_resolver_1.ListResolver
                }
            },
            {
                path: 'create', component: create_component_1.CreateComponent,
                resolve: {
                    'data': create_resolver_1.CreateResolver
                }
            },
            {
                path: 'update/:id', component: update_component_1.UpdateComponent,
                resolve: {
                    'data': update_resolver_1.UpdateResolver
                }
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/ingredient/list/list.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n\ntable td,\ntable th {\n    padding: 5px;\n}\n"

/***/ }),

/***/ "./src/app/ingredient/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-content\">\n    <div class=\"table-wrapper\">\n        <div class=\"wrap-header\">\n            <h3>{{title}}</h3>\n        </div>\n        <div class=\"wrap-tmain\">\n            <div class=\"table-scroll\">\n                <div class=\"card\">\n                    <div class=\"card-block\" style=\"padding-bottom: 0\">\n                        <table border=\"1\">\n                            <thead>\n                            <tr class=\"ng2-smart-titles\">\n                                <th class=\"ng2-smart-actions\">\n                                    <div class=\"ng2-smart-title\">Actions</div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-title\">\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Used by recipes\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th image\">\n                                    <div class=\"ng2-smart-title\">\n                                        Ingredient Image\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th name\">\n                                    <div class=\"ng2-smart-title\">\n                                        Ingredient Name\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-title\">\n                                        Category\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-title\">\n                                        Coupon\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th status\">\n                                    <div class=\"ng2-smart-title\">\n                                        Status\n                                    </div>\n                                </th>\n\n                            </tr>\n                            <tr class=\"ng2-smart-filters\">\n                                <th class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\n                                    <a routerLink=\"create\" routerLinkActive=\"active\"\n                                       class=\"btn btn-secondary\" href=\"#\">+ Add ingredient</a>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-filter\">\n\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-filter\">\n\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th image\">\n                                    <div class=\"ng2-smart-filter\">\n\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <div class=\"ng2-smart-filter\">\n                                            <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                                   [(ngModel)]=\"searchName\"\n                                                   (keyup.enter)=\"applyFilters($event)\"\n                                                   type=\"text\"\n                                                   placeholder=\"Name\">\n                                        </div>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th age\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                            class=\"form-control underline\"\n                                            (change)=\"applyFilters($event)\"\n                                            [(ngModel)]=\"catId\">\n                                            <option *ngFor=\"let category of categoryOptionsSelect\"\n                                                    [value]=\"category.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ category.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n\n                                <th class=\"ng2-smart-th age\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                            class=\"form-control underline\"\n                                            (change)=\"applyFilters($event)\"\n                                            [(ngModel)]=\"couponId\">\n                                            <option *ngFor=\"let coupon of couponOptionsSelect\"\n                                                    [value]=\"coupon.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ coupon.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n\n                                <th class=\"ng2-smart-th age\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                            class=\"form-control underline\"\n                                            (change)=\"applyFilters($event)\"\n                                            [(ngModel)]=\"searchStatus\">\n                                            <option *ngFor=\"let status of statusOptionsSelect\"\n                                                    [value]=\"status.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ status.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let ingredient of itemList; let i = index\">\n                                <td>\n                                    <a [routerLink]=\"['update/' + ingredient.id]\" *ngIf=\"ingredient.status == 1\"\n                                       routerLinkActive=\"active\" class=\"btn btn-info\">\n                                        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                                        edit</a>\n                                    <button *ngIf=\"ingredient.status == 1\" [disabled]=\"ingredient.activeRecipeCount != '0'\" title=\"This ingredient used in {{ingredient.activeRecipeCount}} recepies\" class=\"btn btn-danger\"\n                                          (click)=\"onDelete($event, content, ingredient)\">\n                                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                     delete</button>\n                                </td>\n                                <td>{{(i+1) + (page - 1) * selectedLimit}}</td>\n                                <td>{{ingredient.activeRecipeCount}}</td>\n                                <td>\n                                    <img *ngIf=\"ingredient.imageFile\" src=\"{{ingredient.imageFile.path}}\">\n                                </td>\n                                <td>{{ingredient.name_en}}</td>\n                                <td>{{ingredient.category.name_en}}</td>\n                                <td>\n                                    <img *ngIf=\"ingredient?.coupon?.image\" src=\"{{ingredient?.coupon?.image.path}}\">\n                                    <br>\n                                    {{ingredient?.coupon?.title_en}}\n                                    <br>\n                                    {{ingredient?.coupon?.start_date}} - {{ingredient?.coupon?.finish_date}}\n                                </td>\n                                <td>\n                                    <span class=\"active-status edit button\"\n                                          *ngIf=\"ingredient.status == 1\">Active</span>\n                                    <span class=\"deleted-status delete button\"\n                                          *ngIf=\"ingredient.status == 3 \">Deleted</span>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"page-select\">\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\" style=\"width: 200px;\"\n                                    [(ngModel)]=\"selectedLimit\"\n                                    (change)=\"onLimitSelected($event)\">\n                                <option *ngFor=\"let item of limitOptionsSelect\" [value]=\"item.value\">\n                                    {{ item.label }}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-4\" *ngIf=\"itemSize > selectedLimit\">\n                            <ngb-pagination\n                                [collectionSize]=\"itemSize\"\n                                [(page)]=\"page\"\n                                (pageChange)=\"onPageChange($event)\"\n                                [pageSize]=\"selectedLimit\"\n                                [rotate]=\"true\"\n                                [boundaryLinks]=\"true\"></ngb-pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <i class=\"material-icons\">clear</i>\n    </button>\n    <div class=\"modal-body delete-modal clearfix\">\n        <p>Are you sure you want to delete the ingredient <b>«{{itemTitle}}»?</b></p>\n        <span>This action cannot be undone </span>\n        <p>\n            <button type=\"button\" class=\"btn m-btn_no-bg margin-right\" (click)=\"d('no')\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-color\" (click)=\"c('yes')\">Delete it!</button>\n        </p>\n\n    </div>\n</ng-template>\n\n<template ngbModalContainer></template>"

/***/ }),

/***/ "./src/app/ingredient/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var ingredient_service_1 = __webpack_require__("./src/app/ingredient/service/ingredient.service.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ListComponent = /** @class */ (function () {
    function ListComponent(entityService, modalService, _route) {
        var _this = this;
        this.entityService = entityService;
        this.modalService = modalService;
        this._route = _route;
        this.title = 'Ingredients list';
        this.searchName = '';
        this.searchStatus = 1;
        this.isShowPagination = true;
        this.statusOptionsSelect = [
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
        this.categoryOptionsSelect = [{
                value: '',
                label: 'All'
            }];
        this.couponOptionsSelect = [{
                value: '',
                label: 'All'
            }];
        this.limitOptionsSelect = [
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
        this.page = 1;
        this.selectedLimit = 10;
        this._subscribers = [];
        this.categoryObj = {};
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _.map(res.data[1].data, function (item) {
                _this.categoryOptionsSelect.push({
                    value: item.id.toString(),
                    label: item.name_en
                });
            });
            _.map(res.data[2].data, function (item) {
                _this.couponOptionsSelect.push({
                    value: item.id.toString(),
                    label: item.title_en
                });
            });
            _this.itemList = _.take(res.data[0].data, _this.selectedLimit);
            _this.itemSize = +res.data[0].count;
        }));
    }
    ListComponent.prototype.onDelete = function (event, content, ingredient) {
        var _this = this;
        event.preventDefault();
        this.itemTitle = ingredient.name_en;
        this.modalService.open(content).result.then(function (result) {
            _this._subscribers.push(Observable_1.Observable.concat(_this.entityService.deleteById(ingredient.id), _this.entityService.getList(_this.buildListResponseObject())).subscribe(function (res) {
                if (res) {
                    _this.itemList = res.data;
                    _this.itemSize = +res.count;
                }
            }, function (err) {
            }));
        });
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    ListComponent.prototype.onLimitSelected = function (selected) {
        this.page = 1;
        this.listRequest();
    };
    /**
     * Use this method to get current list
     * @param page
     */
    ListComponent.prototype.listRequest = function (page) {
        var _this = this;
        this._subscribers.push(this.entityService.getList(this.buildListResponseObject(page))
            .subscribe(function (res) {
            _this.itemList = res.data;
            _this.itemSize = +res.count;
        }, function (err) {
        }));
    };
    /**
     * Use this method to prepare request object for list. Sets limits, pagination, etc.
     * @param page
     * @returns {{query: any, page: (any|number), limit: number, sort: string, order: number, filter: string}}
     */
    ListComponent.prototype.buildListResponseObject = function (page) {
        return {
            page: page || this.page,
            limit: this.selectedLimit,
            status: this.searchStatus,
            name: this.searchName,
            cat_id: this.catId,
            coupon_id: this.couponId,
        };
    };
    ListComponent.prototype.onPageChange = function (event) {
        this.listRequest(event);
    };
    ListComponent.prototype.applyFilters = function (event) {
        event.preventDefault();
        this.page = 1;
        this.listRequest();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'ingredient-list',
            template: __webpack_require__("./src/app/ingredient/list/list.component.html"),
            styles: [__webpack_require__("./src/app/ingredient/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [ingredient_service_1.IngredientService,
            ng_bootstrap_1.NgbModal,
            router_1.ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/ingredient/list/list.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var ingredient_service_1 = __webpack_require__("./src/app/ingredient/service/ingredient.service.ts");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var coupon_service_1 = __webpack_require__("./src/app/coupon/services/coupon.service.ts");
var ListResolver = /** @class */ (function () {
    function ListResolver(ingredientService, categoryService, couponService) {
        this.ingredientService = ingredientService;
        this.categoryService = categoryService;
        this.couponService = couponService;
    }
    ListResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 10,
            status: 1,
        };
        var reqObjAdditional = {
            page: 1,
            limit: 100,
            status: 1,
        };
        return Observable_1.Observable.forkJoin(this.ingredientService.getList(reqObj), this.categoryService.getList(reqObjAdditional), this.couponService.getList(reqObjAdditional));
    };
    ListResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ingredient_service_1.IngredientService,
            category_service_1.CategoryService,
            coupon_service_1.CouponService])
    ], ListResolver);
    return ListResolver;
}());
exports.ListResolver = ListResolver;


/***/ }),

/***/ "./src/app/ingredient/service/ingredient.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var error_handler_service_1 = __webpack_require__("./src/app/shared/error-handler.service.ts");
var list_request_service_1 = __webpack_require__("./src/app/shared/list-request.service.ts");
var IngredientService = /** @class */ (function () {
    function IngredientService(http, authService, errorHandler) {
        this.http = http;
        this.authService = authService;
        this.errorHandler = errorHandler;
        this.path = '/v1/ingredients';
    }
    IngredientService.prototype.getHeaders = function () {
        return new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    };
    IngredientService.prototype.getList = function (resObj) {
        var _this = this;
        if (resObj === void 0) { resObj = {}; }
        return this.http.get(this.path + '?' + list_request_service_1.ListRequestService.parseRequestObject(resObj), { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    IngredientService.prototype.getViewById = function (id) {
        var _this = this;
        return this.http.get(this.path + '/' + id, { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    IngredientService.prototype.create = function (ingredient) {
        var _this = this;
        return this.http.post(this.path, ingredient, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Ingredient was created"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    IngredientService.prototype.updateById = function (ingredient, id) {
        var _this = this;
        return this.http.put(this.path + '/' + id, ingredient, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Ingredient was updated"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    IngredientService.prototype.deleteById = function (id) {
        var _this = this;
        return this.http.delete(this.path + '/' + id, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Ingredient was deleted"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    IngredientService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            auth_service_1.AuthService,
            error_handler_service_1.ErrorHandler])
    ], IngredientService);
    return IngredientService;
}());
exports.IngredientService = IngredientService;


/***/ }),

/***/ "./src/app/ingredient/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create ingredient</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"ingredientForm\" [ngClass]=\"{'form-error':submitPending }\"\n                      (submit)=\"createIngredient($event)\" novalidate>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_en\">Name (en)</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input matInput class=\"form-control underline\" id=\"name_en\" formControlName=\"name_en\">\n                                <div\n                                    *ngIf=\"ingredientForm.get('name_en').hasError('required') && submitPending\">\n                                    Name is <strong>required</strong>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_he\">Name (he)</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input id=\"name_he\" class=\"form-control underline\" formControlName=\"name_he\">\n                                <div *ngIf=\"ingredientForm.get('name_he').hasError('required') && submitPending\">\n                                    Name is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_es\">Name (es)</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"example-full-width\">\n                                <input id=\"name_es\" class=\"form-control underline\" formControlName=\"name_es\">\n\n                                <div *ngIf=\"ingredientForm.get('name_es').hasError('required') && submitPending\">\n                                    Name is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"selectCategory\">Select\n                            category</label>\n                        <div class=\"col-sm-10\">\n                            <div>\n                                <select id=\"selectCategory\"\n                                        class=\"form-control underline\"\n                                        formControlName=\"category_id\">\n                                    <option\n                                        *ngFor=\"let category of categoriesOptionsSelect\" [value]=\"category.value\">\n                                        {{ category.label }}\n                                    </option>\n                                </select>\n\n                                <div *ngIf=\"ingredientForm.get('category_id').hasError('required') && submitPending\">\n                                    Category is <strong>required</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"selectCoupon\">Select\n                            coupon</label>\n                        <div class=\"col-sm-10\">\n                            <div>\n                                <select id=\"selectCoupon\"\n                                        class=\"form-control underline\"\n                                        formControlName=\"coupon_id\">\n                                    <option *ngFor=\"let coupon of couponsOptionsSelect\" [value]=\"coupon.value\">\n                                        {{ coupon.label }}\n                                    </option>\n                                </select>\n                                <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('coupon_id')\">{{\n                                    getTextErrorByFormField('coupon_id') }}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"limit-wrapper row clearfix\" formArrayName=\"parts\">\n                                <label class=\"col-sm-2 form-control-label text-xs-right\">Parts</label>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"\"\n                                         *ngFor=\"let limit of ingredientForm.controls.parts.controls; let i=index\">\n                                        <div class=\" col-sm-12\">\n                                            <div class=\"select-container\" [formGroupName]=\"i\">\n                                                <div class=\"field fourth-width row mb10\">\n                                                    <div class=\"field half-width row \">\n                                                        <div class=\"example-full-width col-sm-4\">\n                                                            <input currencyMask [options]=\"{prefix:''}\" class=\"form-control underline\"\n                                                                   formControlName=\"part\">\n                                                            <div\n                                                                *ngIf=\"ingredientForm.get('name_es').hasError('required')  && submitPending\">\n                                                                Name is <strong>required</strong>\n                                                            </div>\n\n                                                        </div>\n\n                                                        <div class=\"col-sm-4\">\n                                                            <select\n                                                                formControlName=\"unit_id\"\n                                                                class=\"form-control underline\">\n                                                                <option selected=\"selected\"\n                                                                        *ngFor=\"let unit of unitsOptionsSelect\"\n                                                                        [value]=\"unit.value\">\n                                                                    {{ unit.label }}\n                                                                </option>\n                                                            </select>\n                                                        </div>\n                                                        <button [disabled]=\"parts.length == 1\"\n                                                            (click)=\"deletePart($event, i)\"\n                                                            class=\"btn btn-danger btn-bordered col-sm-2\"\n                                                        >remove\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"\">\n                                    <div class=\"col-sm-offset-2  col-sm-10\">\n                                        <button class=\"btn btn-info btn-rounded\" (click)=\"addPart($event)\">Add new\n                                        </button>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"fileImg\">Ingredient image</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"fileImg\" (change)=\"fileChangeEvent($event)\"/>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"image\">\n                                    <div *ngIf=\"ingredientForm.get('image').hasError('required') && submitPending\">\n                                        Image is <strong>required</strong>\n                                    </div>\n                                    <image-cropper\n                                        [imageChangedEvent]=\"imageChangedEvent\"\n                                        [maintainAspectRatio]=\"true\"\n                                        [aspectRatio]=\"1\"\n                                        [resizeToWidth]=\"256\"\n                                        format=\"png, jpeg\"\n                                        (imageCropped)=\"imageCropped($event)\"\n                                        (imageLoaded)=\"imageLoaded()\"\n                                        (loadImageFailed)=\"loadImageFailed()\"\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showBtnSL\" (click)=\"handleFileInput()\" class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\" row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-offset-2 col-sm-10\">\n                                    <button class=\"btn btn-danger btn-bordered margin-right\"\n                                            [routerLink]=\"['/ingredients']\">Cancel\n                                    </button>\n                                    <button class=\"btn btn-primary btn-bordered\" type=\"submit\"\n                                    >Update\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/ingredient/update/update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ingredient_service_1 = __webpack_require__("./src/app/ingredient/service/ingredient.service.ts");
var querystring_1 = __webpack_require__("./node_modules/querystring-es3/index.js");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var file_service_1 = __webpack_require__("./src/app/files/services/file.service.ts");
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(router, fb, fileService, ingredientService, _route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.fileService = fileService;
        this.ingredientService = ingredientService;
        this._route = _route;
        this.submitPending = false;
        this.showImg = false;
        this.fileToUpload = null;
        this.imgPath = '';
        this.showBtnSL = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.errors = [];
        this.parts = new forms_1.FormArray([
            new forms_1.FormGroup({
                part: new forms_1.FormControl(1, [forms_1.Validators.required]),
                unit_id: new forms_1.FormControl("", [forms_1.Validators.required]),
                status: new forms_1.FormControl(1, [forms_1.Validators.required]),
            })
        ]);
        this.ingredientForm = new forms_1.FormGroup({
            name_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            name_he: new forms_1.FormControl("", []),
            name_es: new forms_1.FormControl("", []),
            image: new forms_1.FormControl("", [forms_1.Validators.required]),
            category_id: new forms_1.FormControl("", [forms_1.Validators.required]),
            coupon_id: new forms_1.FormControl(""),
            status: new forms_1.FormControl(1, [forms_1.Validators.required]),
            parts: this.parts
        });
        this.categoriesOptionsSelect = [];
        this._subscribers = [];
        this._categories = [];
        this.couponsOptionsSelect = [];
        this._coupons = [];
        this.unitsOptionsSelect = [];
        this._units = [];
        this._subscribers.push(this.ingredientForm.valueChanges.subscribe(function () { return _this.submitPending = false; }));
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.id = res.data[0].id;
            _this._categories = res.data[1].data;
            _this.categoriesOptionsSelect = _.map(_this._categories, function (item) {
                return { value: item.id, label: item.name_en };
            });
            _this._units = res.data[2].data;
            _this.unitsOptionsSelect = _.map(_this._units, function (item) {
                return { value: item.id, label: item.name_en };
            });
            _this.ingredientForm.patchValue(res.data[0]);
            if (res.data[0].image !== null) {
                _this.ingredientForm.patchValue({ image: res.data[0].image.id });
                _this.croppedImage = res.data[0].image.path;
            }
            _.forEach(res.data[0].parts, function (item, i) {
                _this.parts.setControl(+i, new forms_1.FormGroup({
                    part: new forms_1.FormControl(item.part, [forms_1.Validators.required]),
                    unit_id: new forms_1.FormControl(item.unit_id, [forms_1.Validators.required]),
                    status: new forms_1.FormControl(item.status, [forms_1.Validators.required]),
                }));
            });
            _this._coupons = res.data[3].data;
            _this.couponsOptionsSelect = _.map(_this._coupons, function (item) {
                return { value: item.id, label: item.title_en };
            });
            _this.couponsOptionsSelect.unshift({ value: '', label: 'not set' });
        }));
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.createIngredient = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.ingredientForm.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        var ingredient = this.ingredientForm.value;
        this._subscribers.push(this.ingredientService.updateById(ingredient, this.id).subscribe(function () {
            _this.router.navigate(['/ingredients']);
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    UpdateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    UpdateComponent.prototype.addPart = function (event) {
        event.preventDefault();
        this.parts.push(new forms_1.FormGroup({
            part: new forms_1.FormControl(1, [forms_1.Validators.required]),
            unit_id: new forms_1.FormControl("", [forms_1.Validators.required]),
            status: new forms_1.FormControl(1, [forms_1.Validators.required]),
        }));
    };
    UpdateComponent.prototype.deletePart = function (event, index) {
        event.preventDefault();
        this.parts.removeAt(index);
    };
    UpdateComponent.prototype.handleFileInput = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedImage).subscribe(function (data) {
            _this.imgPath = data.path;
            _this.showBtnSL = false;
            _this.ingredientForm.patchValue({ image: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    UpdateComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedEvent = event;
            this.fileToUpload = event.target.files;
            this.showBtnSL = true;
        }
    };
    UpdateComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
        this.showBtnSL = true;
    };
    UpdateComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    UpdateComponent.prototype.loadImageFailed = function () {
        this.showBtnSL = false;
        toastr_service_1.ToastrService.error("Error", 'Image must be ".jpg" or ".png"');
    };
    UpdateComponent.prototype.generateFile = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = querystring_1.unescape(dataURI.split(',')[1]);
        }
        var type = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: type });
    };
    UpdateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    UpdateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    UpdateComponent.prototype.uploadFileToActivity = function (croppedImage) {
        return this.fileService.postFile(this.generateFile(croppedImage));
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'ingredient-update',
            template: __webpack_require__("./src/app/ingredient/update/update.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            file_service_1.FileService,
            ingredient_service_1.IngredientService,
            router_1.ActivatedRoute])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;


/***/ }),

/***/ "./src/app/ingredient/update/update.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var ingredient_service_1 = __webpack_require__("./src/app/ingredient/service/ingredient.service.ts");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var coupon_service_1 = __webpack_require__("./src/app/coupon/services/coupon.service.ts");
var UpdateResolver = /** @class */ (function () {
    function UpdateResolver(ingredientService, categoryService, couponService, unitService) {
        this.ingredientService = ingredientService;
        this.categoryService = categoryService;
        this.couponService = couponService;
        this.unitService = unitService;
    }
    UpdateResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 10,
            status: 1,
        };
        return Observable_1.Observable.forkJoin(this.ingredientService.getViewById(route.params['id']), this.categoryService.getList(reqObj), this.unitService.getList(reqObj), this.couponService.getList(reqObj));
    };
    UpdateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ingredient_service_1.IngredientService,
            category_service_1.CategoryService,
            coupon_service_1.CouponService,
            unit_service_1.UnitService])
    ], UpdateResolver);
    return UpdateResolver;
}());
exports.UpdateResolver = UpdateResolver;


/***/ }),

/***/ "./src/app/recipe/create/create.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n    border-color: red;\n}"

/***/ }),

/***/ "./src/app/recipe/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create recipe</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"recipeForm\" [ngClass]=\"{'form-error':submitPending }\" (submit)=\"createRecipe($event)\"\n                      novalidate>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_en\">Name</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"name_en\"\n                                   formControlName=\"name_en\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                            <div *ngIf=\"recipeForm.get('name_en').hasError('required') && submitPending\">\n                                Name is <strong>required</strong>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"people_amount\">People\n                            amount</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"people_amount\" type=\"number\"\n                                   formControlName=\"people_amount\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"people_amount\">Company</label>\n                        <div class=\"col-sm-10\">\n                            <select id=\"selectCategory\"\n                                    class=\"form-control underline\"\n                                    formControlName=\"company_id\">\n                                <option\n                                    *ngFor=\"let company of companyOptionsSelect\" [value]=\"company.value\">\n                                    {{ company.label }}\n                                </option>\n                            </select>\n\n                            <div *ngIf=\"recipeForm.get('company_id').hasError('required') && submitPending\">\n                                Company is <strong>required</strong>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\">Default language</label>\n                        <div class=\"col-sm-10\">\n                            <select id=\"selectLanguage\"\n                                    class=\"form-control underline\"\n                                    (change)=\"changeLang($event)\"\n                                    formControlName=\"language\">\n                                <option\n                                    *ngFor=\"let language of languageOptionsSelect\" [value]=\"language\">\n                                    {{ language }}\n                                </option>\n                            </select>\n\n                            <div *ngIf=\"recipeForm.get('language').hasError('required') && submitPending\">\n                                Language is <strong>required</strong>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"slug\">Url</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"slug\" type=\"text\"\n                                   formControlName=\"slug\"\n                                   placeholder=\"Url\">\n                            <div *ngIf=\"recipeForm.get('slug').hasError('required') && submitPending\">\n                                Url is <strong>required</strong>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n\n                        <div class=\"limit-wrapper clearfix\">\n                            <label class=\"col-sm-2 form-control-label text-xs-right\">New Ingredients</label>\n                            <div class=\"col-sm-10\">\n                                <form [formGroup]=\"subForm\" novalidate>\n                                    <div class=\"field fourth-width mb10\">\n                                        <div class=\"field half-width row \">\n                                            <div class=\"example-full-width col-sm-3\">\n                                                <input currencyMask\n                                                       [options]=\"{prefix:''}\"\n                                                       class=\"form-control underline\"\n                                                       formControlName=\"unit_amount\">\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <select\n                                                    formControlName=\"unit_id\"\n                                                    class=\"form-control underline\">\n                                                    <option value=\"\" disabled selected>Select unit</option>\n                                                    <option\n                                                        *ngFor=\"let unit of unitOptionsSelect\" [value]=\"unit.value\">\n                                                        {{ unit.label }}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <select\n                                                    formControlName=\"ingredient_id\"\n                                                    class=\"form-control underline\">\n                                                    <option value=\"\" disabled selected>Select ingredient</option>\n                                                    <option\n                                                        *ngFor=\"let ingredient of ingredientOptionsSelect\"\n                                                        [value]=\"ingredient.value\">\n                                                        {{ ingredient.label }}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <button [disabled]=\"!subForm.valid\"\n                                                        (click)=\"addToMainIngs($event)\"\n                                                        class=\"btn btn-danger btn-bordered \"\n                                                >add\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"form-group row mb10\">\n\n                        <div class=\"limit-wrapper clearfix\" formArrayName=\"RecipeIngredient\">\n                            <div *ngFor=\"let category of categories; let catI=index\">\n\n                                <div class=\"col-sm-offset-2 col-sm-10 category-name\"\n                                     *ngIf=\"isCategoryExist(category.id)\">\n                                    <strong>{{category.name_en}}</strong>\n                                </div>\n                                <div class=\"col-sm-offset-2 col-sm-10\">\n                                    <div class=\"\"\n                                         *ngFor=\"let limit of recipeForm.controls.RecipeIngredient.controls; let i=index\">\n                                        <div class=\" col-sm-12\"\n                                             *ngIf=\"isCategoryExistByIngId(recipeForm.controls.RecipeIngredient.controls[i].controls.ingredient_id.value, category.id)\">\n                                            <div class=\"select-container\" [formGroupName]=\"i\">\n                                                <div class=\"field fourth-width row mb10\">\n                                                    <div class=\"field half-width row \">\n                                                        <div class=\"example-full-width col-sm-3\">\n                                                            <input currencyMask\n                                                                   [options]=\"{prefix:''}\"\n                                                                   class=\"form-control underline\"\n                                                                   formControlName=\"unit_amount\">\n                                                        </div>\n                                                        <div class=\"col-sm-3\">\n                                                            <select\n                                                                formControlName=\"unit_id\"\n                                                                class=\"form-control underline\">\n                                                                <option value=\"\" disabled selected>Select unit</option>\n                                                                <option\n                                                                    *ngFor=\"let unit of unitOptionsSelect\"\n                                                                    [value]=\"unit.value\">\n                                                                    {{ unit.label }}\n                                                                </option>\n                                                            </select>\n                                                        </div>\n                                                        <div class=\"col-sm-3\">\n                                                            <select\n                                                                formControlName=\"ingredient_id\"\n                                                                class=\"form-control underline\">\n                                                                <option value=\"\" disabled selected>Select ingredient\n                                                                </option>\n                                                                <option\n                                                                    *ngFor=\"let ingredient of ingredientOptionsSelect\"\n                                                                    [value]=\"ingredient.value\">\n                                                                    {{ ingredient.label }}\n                                                                </option>\n                                                            </select>\n                                                        </div>\n                                                        <div class=\"col-sm-3\">\n                                                            <button\n                                                                (click)=\"deleteIngredient($event, i)\"\n                                                                class=\"btn btn-danger btn-bordered \"\n                                                            >remove\n                                                            </button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"fileImg\">Recipe image</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"fileImg\" (change)=\"fileChangeEvent($event)\"/>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"image\">\n                                    <div *ngIf=\"recipeForm.get('image').hasError('required') && submitPending\">\n                                        Image is <strong>required</strong>\n                                    </div>\n                                    <image-cropper\n                                        [imageChangedEvent]=\"imageChangedEvent\"\n                                        [maintainAspectRatio]=\"true\"\n                                        [aspectRatio]=\"4 / 2\"\n                                        [resizeToWidth]=\"460\"\n                                        format=\"png, jpeg\"\n                                        (imageCropped)=\"imageCropped($event)\"\n                                        (imageLoaded)=\"imageLoaded()\"\n                                        (loadImageFailed)=\"loadImageFailed()\"\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showBtnSL\" (click)=\"handleFileInput()\" class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button class=\"btn btn-danger btn-bordered margin-right\" type=\"button\"\n                                    [routerLink]=\"['/recipes']\">Cancel\n                            </button>\n                            <button class=\"btn btn-primary btn-bordered\" type=\"submit\"\n                            >Create\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/recipe/create/create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var recipe_service_1 = __webpack_require__("./src/app/recipe/service/recipe.service.ts");
var file_service_1 = __webpack_require__("./src/app/files/services/file.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var querystring_1 = __webpack_require__("./node_modules/querystring-es3/index.js");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(router, fb, fileService, recipeService, _route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.fileService = fileService;
        this.recipeService = recipeService;
        this._route = _route;
        this.showLang = false;
        this.submitPending = false;
        this.showImg = false;
        this.fileToUpload = null;
        this.imgPath = '';
        this.showBtnSL = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.errors = [];
        this.ingredients = new forms_1.FormArray([]);
        this.subForm = new forms_1.FormGroup({
            unit_amount: new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)]),
            unit_id: new forms_1.FormControl("", [forms_1.Validators.required]),
            ingredient_id: new forms_1.FormControl("", [forms_1.Validators.required]),
        });
        this.recipeForm = new forms_1.FormGroup({
            name_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            company_id: new forms_1.FormControl("", [forms_1.Validators.required]),
            people_amount: new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)]),
            status: new forms_1.FormControl('4', [forms_1.Validators.required]),
            language: new forms_1.FormControl('en', [forms_1.Validators.required]),
            slug: new forms_1.FormControl('', [forms_1.Validators.required]),
            RecipeIngredient: this.ingredients,
            image: new forms_1.FormControl("", [forms_1.Validators.required])
        });
        this.categories = [];
        this.companyOptionsSelect = [];
        this._companies = [];
        this.unitOptionsSelect = [];
        this._units = [];
        this.ingredientOptionsSelect = [];
        this._ingredients = [];
        this.statusOptionsSelect = [];
        this.languageOptionsSelect = ['en', 'he', 'es'];
        this._subscribers = [];
        this._subscribers.push(this.recipeForm.valueChanges.subscribe(function () { return _this.submitPending = false; }));
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this._companies = res.data[0].data;
            _this._units = res.data[1].data;
            _this._ingredients = res.data[2].data;
            _this.categories = res.data[3].data;
            _this.changeLangOnSelect('en');
            _this.setMap();
        }));
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createRecipe = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.recipeForm.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        var recipe = this.recipeForm.value;
        this._subscribers.push(this.recipeService.create(recipe).subscribe(function () {
            _this.router.navigate(['/recipes']);
        }, function (err) {
        }));
    };
    CreateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    CreateComponent.prototype.addIngredient = function (event) {
        event.preventDefault();
        this.ingredients.push(new forms_1.FormGroup({
            unit_amount: new forms_1.FormControl("", [forms_1.Validators.required]),
            unit_id: new forms_1.FormControl("", [forms_1.Validators.required]),
            ingredient_id: new forms_1.FormControl("", [forms_1.Validators.required]),
        }));
    };
    CreateComponent.prototype.deleteIngredient = function (event, index) {
        event.preventDefault();
        this.ingredients.removeAt(index);
    };
    CreateComponent.prototype.handleFileInput = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedImage).subscribe(function (data) {
            _this.imgPath = data.path;
            _this.showBtnSL = false;
            _this.recipeForm.patchValue({ image: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    CreateComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedEvent = event;
            this.fileToUpload = event.target.files;
            this.showBtnSL = true;
        }
    };
    CreateComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
        this.showBtnSL = true;
    };
    CreateComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    CreateComponent.prototype.loadImageFailed = function () {
        this.showBtnSL = false;
        toastr_service_1.ToastrService.error("Error", 'Image must be ".jpg" or ".png"');
    };
    CreateComponent.prototype.generateFile = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = querystring_1.unescape(dataURI.split(',')[1]);
        }
        var type = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: type });
    };
    CreateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    CreateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    CreateComponent.prototype.uploadFileToActivity = function (croppedImage) {
        return this.fileService.postFile(this.generateFile(croppedImage));
    };
    CreateComponent.prototype.changeLang = function (event) {
        this.changeLangOnSelect(this.recipeForm.controls.language.value);
    };
    CreateComponent.prototype.changeLangOnSelect = function (langPref) {
        this.companyOptionsSelect = this.prepareDataForSelect(this._companies, langPref);
        this.unitOptionsSelect = this.prepareDataForSelect(this._units, langPref);
        this.ingredientOptionsSelect = this.prepareDataForSelect(this._ingredients, langPref);
    };
    CreateComponent.prototype.prepareDataForSelect = function (data, langPref) {
        var _this = this;
        return _.map(data, function (item) {
            return { value: item.id.toString(), label: _this.getLabelByLang(item, langPref) };
        });
    };
    CreateComponent.prototype.getLabelByLang = function (obj, langPref) {
        return obj['name_' + langPref] ? obj['name_' + langPref] : obj['name_en'];
    };
    CreateComponent.prototype.setMap = function () {
        var map = {};
        _.forEach(this._ingredients, function (ing) {
            map[ing.id] = ing.category_id;
        });
        this._mapIngCategory = map;
    };
    CreateComponent.prototype.isCategoryExistByIngId = function (ingId, catId) {
        var result = false;
        if (_.has(this._mapIngCategory, ingId)) {
            result = catId == this._mapIngCategory[ingId];
        }
        return result;
    };
    CreateComponent.prototype.isCategoryExist = function (catId) {
        var result = false;
        var values = this.recipeForm.get('RecipeIngredient').value;
        var ingIds = [];
        _.forEach(values, function (value) {
            ingIds.push(value.ingredient_id);
        });
        if (ingIds.length) {
            _.forEach(ingIds, function (value) {
                if (this.isCategoryExistByIngId(value, catId)) {
                    result = true;
                }
            }.bind(this));
        }
        return result;
    };
    CreateComponent.prototype.addToMainIngs = function (event) {
        event.preventDefault();
        this.ingredients.push(new forms_1.FormGroup({
            unit_amount: new forms_1.FormControl(this.subForm.get('unit_amount').value, [forms_1.Validators.required]),
            unit_id: new forms_1.FormControl(this.subForm.get('unit_id').value, [forms_1.Validators.required]),
            ingredient_id: new forms_1.FormControl(this.subForm.get('ingredient_id').value, [forms_1.Validators.required]),
        }));
        this.subForm.reset();
        this.subForm.get('unit_amount').patchValue(1);
        this.subForm.clearValidators();
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'recipe-create',
            template: __webpack_require__("./src/app/recipe/create/create.component.html"),
            styles: [__webpack_require__("./src/app/recipe/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            file_service_1.FileService,
            recipe_service_1.RecipeService,
            router_1.ActivatedRoute])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;


/***/ }),

/***/ "./src/app/recipe/create/create.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var company_service_1 = __webpack_require__("./src/app/company/services/company.service.ts");
var ingredient_service_1 = __webpack_require__("./src/app/ingredient/service/ingredient.service.ts");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var CreateResolver = /** @class */ (function () {
    function CreateResolver(companyService, unitService, categoryService, ingredientService) {
        this.companyService = companyService;
        this.unitService = unitService;
        this.categoryService = categoryService;
        this.ingredientService = ingredientService;
    }
    CreateResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 100,
            status: 1,
        };
        return Observable_1.Observable.forkJoin(this.companyService.getList(reqObj), this.unitService.getList(reqObj), this.ingredientService.getList(reqObj), this.categoryService.getList(reqObj));
    };
    CreateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [company_service_1.CompanyService,
            unit_service_1.UnitService,
            category_service_1.CategoryService,
            ingredient_service_1.IngredientService])
    ], CreateResolver);
    return CreateResolver;
}());
exports.CreateResolver = CreateResolver;


/***/ }),

/***/ "./src/app/recipe/list/list.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n\ntable td,\ntable th {\n    padding: 5px;\n}\n"

/***/ }),

/***/ "./src/app/recipe/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-content\">\n    <div class=\"table-wrapper\">\n        <div class=\"wrap-header\">\n            <h3>{{title}}</h3>\n        </div>\n        <div class=\"wrap-tmain\">\n            <div class=\"table-scroll\">\n                <div class=\"card\">\n                    <div class=\"card-block\" style=\"padding-bottom: 0\">\n                        <table border=\"1\">\n                            <thead>\n                            <tr class=\"ng2-smart-titles\">\n                                <th class=\"ng2-smart-actions\">\n                                    <div class=\"ng2-smart-title\">Actions</div>\n                                </th>\n                                <th class=\"ng2-smart-th name\">\n                                    <div class=\"ng2-smart-title\">\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th email\">\n                                    <div class=\"ng2-smart-title\">\n                                        Company\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th email\">\n                                    <div class=\"ng2-smart-title\">\n                                        Recipe Name\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th image\">\n                                    <div class=\"ng2-smart-title\">\n                                        Recipe Image\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th image\">\n                                    <div class=\"ng2-smart-title\">\n                                        NumberOfPeople\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-title\">\n                                        RecipeLink\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-title\">\n                                        RecipeLanguage\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th regDate\">\n                                    <div class=\"ng2-smart-title\">\n                                        Status\n                                    </div>\n                                </th>\n                            </tr>\n                            <tr class=\"ng2-smart-filters\">\n                                <th class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\n                                    <a routerLink=\"create\" routerLinkActive=\"active\"\n                                       class=\"btn btn-secondary\" href=\"#\">+ Add recipe</a>\n                                </th>\n                                <th class=\"ng2-smart-th id\">\n\n                                </th>\n                                <th class=\"ng2-smart-th company\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <div class=\"ng2-smart-filter\">\n                                            <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                                   [(ngModel)]=\"searchCompanyName\"\n                                                   (keyup.enter)=\"applyFilters($event)\"\n                                                   type=\"text\"\n                                                   placeholder=\"Company Name\">\n                                        </div>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th name\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <div class=\"ng2-smart-filter\">\n                                            <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                                   [(ngModel)]=\"searchName\"\n                                                   (keyup.enter)=\"applyFilters($event)\"\n                                                   type=\"text\"\n                                                   placeholder=\"Name\">\n                                        </div>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th image\">\n\n                                </th>\n                                <th class=\"ng2-smart-th num-of-people\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <div class=\"ng2-smart-filter\">\n                                            <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                                   [(ngModel)]=\"searchCountPeople\"\n                                                   (keyup.enter)=\"applyFilters($event)\"\n                                                   type=\"text\"\n                                                   placeholder=\"Number\">\n                                        </div>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th recipe-link\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <div class=\"ng2-smart-filter\">\n                                            <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                                   [(ngModel)]=\"searchLink\"\n                                                   (keyup.enter)=\"applyFilters($event)\"\n                                                   type=\"text\"\n                                                   placeholder=\"Link\">\n                                        </div>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th RecipeLanguage\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                            class=\"form-control underline\"\n                                            (change)=\"applyFilters($event)\"\n                                            [(ngModel)]=\"searchLanguage\">\n                                            <option *ngFor=\"let language of languageOptionsSelect\"\n                                                    [value]=\"language.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ language.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th regDate\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                            class=\"form-control underline\"\n                                            (change)=\"applyFilters($event)\"\n                                            [(ngModel)]=\"searchStatus\">\n                                            <option *ngFor=\"let status of statusOptionsSelect\"\n                                                    [value]=\"status.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ status.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let recipe of itemList; let i = index\">\n                                <td class=\"text-row\">\n                                    <a [routerLink]=\"['update/' + recipe.id]\"\n                                       *ngIf=\"recipe.status == 1 || recipe.status == 4\" routerLinkActive=\"active\"\n                                       class=\"btn btn-info\">\n                                        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                                        edit</a>\n\n                                    <span *ngIf=\"recipe.status == 4\" class=\"btn btn-success\"\n                                          (click)=\"onPublish($event, recipe.id)\">\n                                    <i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n                                    publish</span>\n                                    <span *ngIf=\"recipe.status == 4\" class=\"btn btn-danger\"\n                                          (click)=\"onDelete($event, content, recipe )\">\n                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                    delete</span>\n                                </td>\n                                <td>{{(i+1) + (page - 1) * selectedLimit}}</td>\n                                <td>{{recipe?.company?.name_en}}</td>\n                                <td>{{recipe.name_en}}</td>\n                                <td>\n                                    <a *ngIf=\"recipe.status == 1\" href=\"{{recipe.recipeUrl}}\"  target=\"_blank\">link</a>\n                                    <img *ngIf=\"recipe.image\" src=\"{{recipe.image.path}}\">\n                                </td>\n                                <td>{{recipe.people_amount}}</td>\n                                <td>{{recipe.slug}}</td>\n                                <td>{{recipe.language}}</td>\n                                <td>\n                                    <span class=\"active-status edit button\" *ngIf=\"recipe.status == 1\">Published</span>\n                                    <span class=\"active-status edit button\"\n                                          *ngIf=\"recipe.status == 4\">Pending publish</span>\n                                    <span class=\"deleted-status delete button\"\n                                          *ngIf=\"recipe.status == 3 \">Deleted</span>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <div class=\"page-select\">\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\" style=\"width: 200px;\"\n                                    [(ngModel)]=\"selectedLimit\"\n                                    (change)=\"onLimitSelected($event)\">\n                                <option *ngFor=\"let item of limitOptionsSelect\" [value]=\"item.value\">\n                                    {{ item.label }}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-4\" *ngIf=\"itemSize > selectedLimit\">\n                            <ngb-pagination\n                                [collectionSize]=\"itemSize\"\n                                [(page)]=\"page\"\n                                (pageChange)=\"onPageChange($event)\"\n                                [pageSize]=\"selectedLimit\"\n                                [rotate]=\"true\"\n                                [boundaryLinks]=\"true\"></ngb-pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <i class=\"material-icons\">clear</i>\n    </button>\n    <div class=\"modal-body delete-modal clearfix\">\n        <p>Are you sure you want to delete the recipe <b>«{{itemTitle}}»?</b></p>\n        <span>This action cannot be undone </span>\n\n        <button type=\"button\" class=\"btn m-btn_no-bg margin-right\" (click)=\"d('no')\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-color\" (click)=\"c('yes')\">Delete it!</button>\n    </div>\n</ng-template>\n\n<template ngbModalContainer></template>"

/***/ }),

/***/ "./src/app/recipe/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var recipe_service_1 = __webpack_require__("./src/app/recipe/service/recipe.service.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ListComponent = /** @class */ (function () {
    function ListComponent(entityService, modalService, _route) {
        var _this = this;
        this.entityService = entityService;
        this.modalService = modalService;
        this._route = _route;
        this.title = 'Recipes list';
        this.searchName = '';
        this.searchCompanyName = '';
        this.searchStatus = 4;
        this.searchLanguage = '';
        this.searchLink = '';
        this.isShowPagination = true;
        this.statusOptionsSelect = [
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
        this.languageOptionsSelect = [
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
        this.limitOptionsSelect = [
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
        this.page = 1;
        this.selectedLimit = 10;
        this._subscribers = [];
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.itemList = _.take(res.data[0].data, _this.selectedLimit);
            _this.itemSize = +res.data[0].count;
        }));
    }
    ListComponent.prototype.onDelete = function (event, context, recipe) {
        var _this = this;
        event.preventDefault();
        this.itemTitle = recipe.name_en;
        this.modalService.open(context).result.then(function (result) {
            _this._subscribers.push(Observable_1.Observable.concat(_this.entityService.deleteById(recipe.id), _this.entityService.getList(_this.buildListResponseObject())).subscribe(function (res) {
                if (res) {
                    _this.itemList = res.data;
                    _this.itemSize = +res.count;
                }
            }, function (err) {
            }));
        });
    };
    ListComponent.prototype.onPublish = function (event, id) {
        var _this = this;
        event.preventDefault();
        this._subscribers.push(Observable_1.Observable.concat(this.entityService.publishById(id), this.entityService.getList(this.buildListResponseObject())).subscribe(function (res) {
            if (res) {
                _this.itemList = res.data;
                _this.itemSize = +res.count;
            }
        }, function (err) {
        }));
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    ListComponent.prototype.onLimitSelected = function (selected) {
        this.page = 1;
        this.listRequest();
    };
    /**
     * Use this method to get current list
     * @param page
     */
    ListComponent.prototype.listRequest = function (page) {
        var _this = this;
        this._subscribers.push(this.entityService.getList(this.buildListResponseObject(page))
            .subscribe(function (res) {
            _this.itemList = res.data;
            _this.itemSize = +res.count;
        }, function (err) {
        }));
    };
    /**
     * Use this method to prepare request object for list. Sets limits, pagination, etc.
     * @param page
     * @returns {{query: any, page: (any|number), limit: number, sort: string, order: number, filter: string}}
     */
    ListComponent.prototype.buildListResponseObject = function (page) {
        return {
            page: page || this.page,
            limit: this.selectedLimit,
            status: this.searchStatus,
            name: this.searchName,
            lang: this.searchLanguage,
            c_name: this.searchCompanyName,
            link: this.searchLink,
            p_count: this.searchCountPeople,
        };
    };
    ListComponent.prototype.onPageChange = function (event) {
        this.listRequest(event);
    };
    ListComponent.prototype.applyFilters = function (event) {
        event.preventDefault();
        this.page = 1;
        this.listRequest();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'recipe-list',
            template: __webpack_require__("./src/app/recipe/list/list.component.html"),
            styles: [__webpack_require__("./src/app/recipe/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [recipe_service_1.RecipeService,
            ng_bootstrap_1.NgbModal,
            router_1.ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/recipe/list/list.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var recipe_service_1 = __webpack_require__("./src/app/recipe/service/recipe.service.ts");
var ListResolver = /** @class */ (function () {
    function ListResolver(recipeService) {
        this.recipeService = recipeService;
    }
    ListResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 10,
            status: 4,
        };
        return Observable_1.Observable.forkJoin(this.recipeService.getList(reqObj));
    };
    ListResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [recipe_service_1.RecipeService])
    ], ListResolver);
    return ListResolver;
}());
exports.ListResolver = ListResolver;


/***/ }),

/***/ "./src/app/recipe/recipe.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var list_component_1 = __webpack_require__("./src/app/recipe/list/list.component.ts");
var recipe_service_1 = __webpack_require__("./src/app/recipe/service/recipe.service.ts");
var list_resolver_1 = __webpack_require__("./src/app/recipe/list/list.resolver.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var create_component_1 = __webpack_require__("./src/app/recipe/create/create.component.ts");
var update_component_1 = __webpack_require__("./src/app/recipe/update/update.component.ts");
var update_resolver_1 = __webpack_require__("./src/app/recipe/update/update.resolver.ts");
var create_resolver_1 = __webpack_require__("./src/app/recipe/create/create.resolver.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var material_module_1 = __webpack_require__("./src/app/shared/material.module.ts");
var recipe_routing_1 = __webpack_require__("./src/app/recipe/recipe.routing.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ngx_image_cropper_1 = __webpack_require__("./node_modules/ngx-image-cropper/ngx-image-cropper.es5.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var ng2_currency_mask_1 = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
var RecipeModule = /** @class */ (function () {
    function RecipeModule() {
    }
    RecipeModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_2.HttpModule,
                ng2_currency_mask_1.CurrencyMaskModule,
                http_1.HttpClientModule,
                material_module_1.MaterialModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(recipe_routing_1.recipeRoutes),
                ng_bootstrap_1.NgbModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                forms_1.ReactiveFormsModule,
                ngx_image_cropper_1.ImageCropperModule
            ],
            declarations: [
                list_component_1.ListComponent,
                create_component_1.CreateComponent,
                update_component_1.UpdateComponent,
            ],
            providers: [
                recipe_service_1.RecipeService,
                list_resolver_1.ListResolver,
                update_resolver_1.UpdateResolver,
                create_resolver_1.CreateResolver,
            ]
        })
    ], RecipeModule);
    return RecipeModule;
}());
exports.RecipeModule = RecipeModule;


/***/ }),

/***/ "./src/app/recipe/recipe.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = __webpack_require__("./src/app/recipe/list/list.component.ts");
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var list_resolver_1 = __webpack_require__("./src/app/recipe/list/list.resolver.ts");
var create_component_1 = __webpack_require__("./src/app/recipe/create/create.component.ts");
var update_resolver_1 = __webpack_require__("./src/app/recipe/update/update.resolver.ts");
var update_component_1 = __webpack_require__("./src/app/recipe/update/update.component.ts");
var create_resolver_1 = __webpack_require__("./src/app/recipe/create/create.resolver.ts");
exports.recipeRoutes = [
    {
        path: 'recipes',
        component: root_component_1.RootComponent,
        canActivate: [app_resolver_1.AppResolver],
        children: [
            {
                path: '',
                component: list_component_1.ListComponent,
                resolve: {
                    'data': list_resolver_1.ListResolver
                }
            },
            {
                path: 'create', component: create_component_1.CreateComponent,
                resolve: {
                    'data': create_resolver_1.CreateResolver
                }
            },
            {
                path: 'update/:id', component: update_component_1.UpdateComponent,
                resolve: {
                    'data': update_resolver_1.UpdateResolver
                }
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/recipe/service/recipe.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var error_handler_service_1 = __webpack_require__("./src/app/shared/error-handler.service.ts");
var list_request_service_1 = __webpack_require__("./src/app/shared/list-request.service.ts");
var RecipeService = /** @class */ (function () {
    function RecipeService(http, authService, errorHandler) {
        this.http = http;
        this.authService = authService;
        this.errorHandler = errorHandler;
        this.path = '/v1/recipes';
    }
    RecipeService.prototype.getHeaders = function () {
        return new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    };
    RecipeService.prototype.getList = function (resObj) {
        var _this = this;
        if (resObj === void 0) { resObj = {}; }
        return this.http.get(this.path + '?' + list_request_service_1.ListRequestService.parseRequestObject(resObj), { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    RecipeService.prototype.getViewById = function (id) {
        var _this = this;
        return this.http.get(this.path + '/' + id, { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    RecipeService.prototype.create = function (recipe) {
        var _this = this;
        return this.http.post(this.path, recipe, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Recipe was created"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    RecipeService.prototype.updateById = function (recipe, id) {
        var _this = this;
        return this.http.put(this.path + '/' + id, recipe, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Recipe was updated"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    RecipeService.prototype.deleteById = function (id) {
        var _this = this;
        return this.http.delete(this.path + '/' + id, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Recipe was deleted"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    RecipeService.prototype.publishById = function (id) {
        var _this = this;
        return this.http.post(this.path + '/' + id + '/publish', {}, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Recipe was published"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    RecipeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            auth_service_1.AuthService,
            error_handler_service_1.ErrorHandler])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;


/***/ }),

/***/ "./src/app/recipe/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Update recipe</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"recipeForm\" [ngClass]=\"{'form-error':submitPending }\" (submit)=\"updateRecipe($event)\" novalidate>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_en\">name</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\"\n                                   formControlName=\"name_en\" id=\"name_en\"\n                                   type=\"text\"\n                                   placeholder=\"Enter title\">\n                            <div *ngIf=\"recipeForm.get('name_en').hasError('required') && submitPending\">\n                                Name is <strong>required</strong>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"people_amount\">People\n                            amount</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"people_amount\" type=\"number\"\n                                   formControlName=\"people_amount\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"people_amount\">Company</label>\n                        <div class=\"col-sm-10\">\n                            <select id=\"selectCategory\"\n                                    class=\"form-control underline\"\n                                    formControlName=\"company_id\">\n                                <option *ngFor=\"let company of companyOptionsSelect\" [value]=\"company.value\">\n                                    {{ company.label }}\n                                </option>\n                            </select>\n\n                            <div *ngIf=\"recipeForm.get('company_id').hasError('required') && submitPending\">\n                                Company is <strong>required</strong>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\">Default language</label>\n                        <div class=\"col-sm-10\">\n                            <select id=\"selectLanguage\"\n                                    class=\"form-control underline\"\n                                    (change)=\"changeLang($event)\"\n                                    formControlName=\"language\">\n                                <option\n                                    *ngFor=\"let language of languageOptionsSelect\" [value]=\"language\">\n                                    {{ language }}\n                                </option>\n                            </select>\n\n                            <div *ngIf=\"recipeForm.get('language').hasError('required') && submitPending\">\n                                Language is <strong>required</strong>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"slug\">Url</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"slug\" type=\"text\"\n                                   formControlName=\"slug\"\n                                   placeholder=\"Url\">\n                            <div *ngIf=\"recipeForm.get('slug').hasError('required') && submitPending\">\n                                Url is <strong>required</strong>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <div class=\"limit-wrapper clearfix\">\n                            <label class=\"col-sm-2 form-control-label text-xs-right\">New Ingredients</label>\n                            <div class=\"col-sm-10\">\n                                <form [formGroup]=\"subForm\" novalidate>\n                                    <div class=\"field fourth-width mb10\">\n                                        <div class=\"field half-width row \">\n                                            <div class=\"example-full-width col-sm-3\">\n                                                <input currencyMask [options]=\"{prefix:''}\" class=\"form-control underline\"\n                                                       formControlName=\"unit_amount\">\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <select\n                                                    formControlName=\"unit_id\"\n                                                    class=\"form-control underline\">\n                                                    <option value=\"\" disabled selected>Select unit</option>\n                                                    <option\n                                                        *ngFor=\"let unit of unitOptionsSelect\" [value]=\"unit.value\">\n                                                        {{ unit.label }}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <select\n                                                    formControlName=\"ingredient_id\"\n                                                    class=\"form-control underline\">\n                                                    <option value=\"\" disabled selected>Select ingredient</option>\n                                                    <option\n                                                        *ngFor=\"let ingredient of ingredientOptionsSelect\"\n                                                        [value]=\"ingredient.value\">\n                                                        {{ ingredient.label }}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <button [disabled]=\"!subForm.valid\"\n                                                        (click)=\"addToMainIngs($event)\"\n                                                        class=\"btn btn-danger btn-bordered \"\n                                                >add\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n\n                        <div class=\"limit-wrapper clearfix\" formArrayName=\"RecipeIngredient\">\n                            <div *ngFor=\"let category of categories; let catI=index\">\n                                <div class=\"col-sm-offset-2 col-sm-10 category-name\"\n                                     *ngIf=\"isCategoryExist(category.id)\">\n                                    <strong>{{category.name_en}}</strong>\n                                </div>\n                                <div class=\"col-sm-offset-2 col-sm-10\">\n                                    <div class=\"\"\n                                         *ngFor=\"let limit of recipeForm.controls.RecipeIngredient.controls; let i=index\">\n                                        <div class=\" col-sm-12\"\n                                             *ngIf=\"isCategoryExistByIngId(recipeForm.controls.RecipeIngredient.controls[i].controls.ingredient_id.value, category.id)\">\n                                            <div class=\"select-container\" [formGroupName]=\"i\">\n                                                <div class=\"field fourth-width row mb10\">\n                                                    <div class=\"field half-width row \">\n                                                        <div class=\"example-full-width col-sm-3\">\n                                                            <input currencyMask\n                                                                   [options]=\"{prefix:''}\"\n                                                                   class=\"form-control underline\"\n                                                                   formControlName=\"unit_amount\">\n                                                        </div>\n                                                        <div class=\"col-sm-3\">\n                                                            <select\n                                                                formControlName=\"unit_id\"\n                                                                class=\"form-control underline\">\n                                                                <option value=\"\" disabled selected>Select unit</option>\n                                                                <option\n                                                                    *ngFor=\"let unit of unitOptionsSelect\"\n                                                                    [value]=\"unit.value\">\n                                                                    {{ unit.label }}\n                                                                </option>\n                                                            </select>\n                                                        </div>\n                                                        <div class=\"col-sm-3\">\n                                                            <select\n                                                                formControlName=\"ingredient_id\"\n                                                                class=\"form-control underline\">\n                                                                <option value=\"\" disabled selected>Select ingredient\n                                                                </option>\n                                                                <option\n                                                                    *ngFor=\"let ingredient of ingredientOptionsSelect\"\n                                                                    [value]=\"ingredient.value\">\n                                                                    {{ ingredient.label }}\n                                                                </option>\n                                                            </select>\n                                                        </div>\n                                                        <div class=\"col-sm-3\">\n                                                            <button\n                                                                (click)=\"deleteIngredient($event, i)\"\n                                                                class=\"btn btn-danger btn-bordered \"\n                                                            >remove\n                                                            </button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"fileImg\">Recipe image</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"file\" id=\"fileImg\" (change)=\"fileChangeEvent($event)\"/>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <input type=\"hidden\" formControlName=\"image\">\n                                    <div *ngIf=\"recipeForm.get('image').hasError('required') && submitPending\">\n                                        Image is <strong>required</strong>\n                                    </div>\n                                    <image-cropper\n                                        [imageChangedEvent]=\"imageChangedEvent\"\n                                        [maintainAspectRatio]=\"true\"\n                                        [aspectRatio]=\"4 / 2\"\n                                        [resizeToWidth]=\"460\"\n                                        format=\"png, jpeg\"\n                                        (imageCropped)=\"imageCropped($event)\"\n                                        (imageLoaded)=\"imageLoaded()\"\n                                        (loadImageFailed)=\"loadImageFailed()\"\n                                    ></image-cropper>\n                                </div>\n                                <div class=\"col-sm-6  preview-img \">\n                                    <img [src]=\"croppedImage\"/>\n                                    <div>\n                                        <span *ngIf=\"showBtnSL\" (click)=\"handleFileInput()\" class=\"btn btn-danger mt10\">Save image</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button class=\"btn btn-danger btn-bordered margin-right\" type=\"button\"\n                                    [routerLink]=\"['/recipes']\">Cancel\n                            </button>\n                            <button class=\"btn btn-primary btn-bordered\" type=\"submit\">Update\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/recipe/update/update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var recipe_service_1 = __webpack_require__("./src/app/recipe/service/recipe.service.ts");
var querystring_1 = __webpack_require__("./node_modules/querystring-es3/index.js");
var file_service_1 = __webpack_require__("./src/app/files/services/file.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(router, fb, recipeService, fileService, _route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.recipeService = recipeService;
        this.fileService = fileService;
        this._route = _route;
        this.showLang = false;
        this.submitPending = false;
        this.showImg = false;
        this.fileToUpload = null;
        this.imgPath = '';
        this.showBtnSL = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.errors = [];
        this.categories = [];
        this.ingredients = new forms_1.FormArray([]);
        this.subForm = new forms_1.FormGroup({
            unit_amount: new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)]),
            unit_id: new forms_1.FormControl("", [forms_1.Validators.required]),
            ingredient_id: new forms_1.FormControl("", [forms_1.Validators.required]),
        });
        this.recipeForm = new forms_1.FormGroup({
            name_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            company_id: new forms_1.FormControl("", [forms_1.Validators.required]),
            people_amount: new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)]),
            status: new forms_1.FormControl('1', [forms_1.Validators.required]),
            language: new forms_1.FormControl('en', [forms_1.Validators.required]),
            slug: new forms_1.FormControl('', [forms_1.Validators.required]),
            image: new forms_1.FormControl('', [forms_1.Validators.required]),
            RecipeIngredient: this.ingredients
        });
        this.companyOptionsSelect = [];
        this._companies = [];
        this.unitOptionsSelect = [];
        this._units = [];
        this.ingredientOptionsSelect = [];
        this._ingredients = [];
        this.statusOptionsSelect = [];
        this.languageOptionsSelect = ['en', 'he', 'es'];
        this._subscribers = [];
        this._subscribers.push(this.recipeForm.valueChanges.subscribe(function () { return _this.submitPending = false; }));
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.id = res.data[0].id;
            _this._companies = res.data[1].data;
            _this._units = res.data[2].data;
            _this._ingredients = res.data[3].data;
            _this.categories = res.data[4].data;
            _this.recipeForm.patchValue(res.data[0]);
            if (res.data[0].image !== null) {
                _this.recipeForm.patchValue({ image: res.data[0].image.id });
                _this.croppedImage = res.data[0].image.path;
            }
            _this.setMap();
            _this.changeLang();
            _.forEach(res.data[0].ingredients, function (item, i) {
                _this.ingredients.setControl(+i, new forms_1.FormGroup({
                    unit_amount: new forms_1.FormControl(item.unit_amount, [forms_1.Validators.required]),
                    unit_id: new forms_1.FormControl(item.unit_id, [forms_1.Validators.required]),
                    ingredient_id: new forms_1.FormControl(item.ingredient_id, [forms_1.Validators.required]),
                }));
            });
        }));
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.updateRecipe = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.recipeForm.valid) {
            this.submitPending = true;
            return;
        }
        var recipe = this.recipeForm.value;
        this._subscribers.push(this.recipeService.updateById(recipe, this.id).subscribe(function () {
            _this.router.navigate(['/recipes']);
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    UpdateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    UpdateComponent.prototype.addIngredient = function (event) {
        event.preventDefault();
        this.ingredients.push(new forms_1.FormGroup({
            unit_amount: new forms_1.FormControl("", [forms_1.Validators.required]),
            unit_id: new forms_1.FormControl("", [forms_1.Validators.required]),
            ingredient_id: new forms_1.FormControl("", [forms_1.Validators.required]),
        }));
    };
    UpdateComponent.prototype.deleteIngredient = function (event, index) {
        event.preventDefault();
        this.ingredients.removeAt(index);
    };
    UpdateComponent.prototype.changeLang = function (event) {
        this.changeLangOnSelect(this.recipeForm.controls.language.value);
    };
    UpdateComponent.prototype.changeLangOnSelect = function (langPref) {
        this.companyOptionsSelect = this.prepareDataForSelect(this._companies, langPref);
        this.unitOptionsSelect = this.prepareDataForSelect(this._units, langPref);
        this.ingredientOptionsSelect = this.prepareDataForSelect(this._ingredients, langPref);
    };
    UpdateComponent.prototype.prepareDataForSelect = function (data, langPref) {
        var _this = this;
        return _.map(data, function (item) {
            return { value: item.id.toString(), label: _this.getLabelByLang(item, langPref) };
        });
    };
    UpdateComponent.prototype.getLabelByLang = function (obj, langPref) {
        return obj['name_' + langPref] ? obj['name_' + langPref] : obj['name_en'];
    };
    UpdateComponent.prototype.setMap = function () {
        var map = {};
        _.forEach(this._ingredients, function (ing) {
            map[ing.id] = ing.category_id;
        });
        this._mapIngCategory = map;
    };
    UpdateComponent.prototype.isCategoryExistByIngId = function (ingId, catId) {
        var result = false;
        if (_.has(this._mapIngCategory, ingId)) {
            result = catId == this._mapIngCategory[ingId];
        }
        return result;
    };
    UpdateComponent.prototype.isCategoryExist = function (catId) {
        var result = false;
        var values = this.recipeForm.get('RecipeIngredient').value;
        var ingIds = [];
        _.forEach(values, function (value) {
            ingIds.push(value.ingredient_id);
        });
        if (ingIds.length) {
            _.forEach(ingIds, function (value) {
                if (this.isCategoryExistByIngId(value, catId)) {
                    result = true;
                }
            }.bind(this));
        }
        return result;
    };
    UpdateComponent.prototype.addToMainIngs = function (event) {
        event.preventDefault();
        this.ingredients.push(new forms_1.FormGroup({
            unit_amount: new forms_1.FormControl(this.subForm.get('unit_amount').value, [forms_1.Validators.required]),
            unit_id: new forms_1.FormControl(this.subForm.get('unit_id').value, [forms_1.Validators.required]),
            ingredient_id: new forms_1.FormControl(this.subForm.get('ingredient_id').value, [forms_1.Validators.required]),
        }));
        this.subForm.reset();
        this.subForm.get('unit_amount').patchValue(1);
        this.subForm.clearValidators();
    };
    UpdateComponent.prototype.handleFileInput = function () {
        var _this = this;
        this.uploadFileToActivity(this.croppedImage).subscribe(function (data) {
            _this.imgPath = data.path;
            _this.showBtnSL = false;
            _this.recipeForm.patchValue({ image: data.id });
            return true;
        }, function (error) {
            toastr_service_1.ToastrService.error("Error", error);
        });
    };
    UpdateComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files[0].size > 1048576) {
            toastr_service_1.ToastrService.error("Error", 'Size must be smaller than 1Mb');
        }
        else {
            this.imageChangedEvent = event;
            this.fileToUpload = event.target.files;
            this.showBtnSL = true;
        }
    };
    UpdateComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
        this.showBtnSL = true;
    };
    UpdateComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    UpdateComponent.prototype.loadImageFailed = function () {
        this.showBtnSL = false;
        toastr_service_1.ToastrService.error("Error", 'Image must be ".jpg" or ".png"');
    };
    UpdateComponent.prototype.generateFile = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = querystring_1.unescape(dataURI.split(',')[1]);
        }
        var type = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: type });
    };
    UpdateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    UpdateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    UpdateComponent.prototype.uploadFileToActivity = function (croppedImage) {
        return this.fileService.postFile(this.generateFile(croppedImage));
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'recipe-update',
            template: __webpack_require__("./src/app/recipe/update/update.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            recipe_service_1.RecipeService,
            file_service_1.FileService,
            router_1.ActivatedRoute])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;


/***/ }),

/***/ "./src/app/recipe/update/update.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var recipe_service_1 = __webpack_require__("./src/app/recipe/service/recipe.service.ts");
var company_service_1 = __webpack_require__("./src/app/company/services/company.service.ts");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var ingredient_service_1 = __webpack_require__("./src/app/ingredient/service/ingredient.service.ts");
var category_service_1 = __webpack_require__("./src/app/category/service/category.service.ts");
var UpdateResolver = /** @class */ (function () {
    function UpdateResolver(recipeService, companyService, unitService, categoryService, ingredientService) {
        this.recipeService = recipeService;
        this.companyService = companyService;
        this.unitService = unitService;
        this.categoryService = categoryService;
        this.ingredientService = ingredientService;
    }
    UpdateResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 100,
            status: 1,
        };
        return Observable_1.Observable.forkJoin(this.recipeService.getViewById(route.params['id']), this.companyService.getList(reqObj), this.unitService.getList(reqObj), this.ingredientService.getList(reqObj), this.categoryService.getList(reqObj));
    };
    UpdateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [recipe_service_1.RecipeService,
            company_service_1.CompanyService,
            unit_service_1.UnitService,
            category_service_1.CategoryService,
            ingredient_service_1.IngredientService])
    ], UpdateResolver);
    return UpdateResolver;
}());
exports.UpdateResolver = UpdateResolver;


/***/ }),

/***/ "./src/app/shared/error-handler.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Rx_1 = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(router) {
        this.router = router;
    }
    ErrorHandler.prototype.handle = function (err, caught) {
        if (err.status === 401) {
            localStorage.removeItem('access-token');
            this.router.navigate(['/login']);
        }
        if (err.status === 400) {
            toastr_service_1.ToastrService.error(err._body || err.statusText, "Error:Data is incorrect");
        }
        else {
            toastr_service_1.ToastrService.error(err._body || err.statusText, "Error " + err.status);
        }
        return Rx_1.Observable.throw(err);
    };
    ErrorHandler = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], ErrorHandler);
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;


/***/ }),

/***/ "./src/app/shared/list-request.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ListRequestService = /** @class */ (function () {
    function ListRequestService() {
    }
    ListRequestService.parseRequestObject = function (requestObj) {
        var str = "";
        for (var keyObj in requestObj) {
            if (!_.isNil(requestObj[keyObj]) && requestObj[keyObj] !== "") {
                if (_.isArray(requestObj[keyObj])) {
                    if (requestObj[keyObj].length > 0) {
                        var pairs = [];
                        for (var key in requestObj[keyObj])
                            if (requestObj[keyObj].hasOwnProperty(key)) {
                                pairs.push(keyObj + "[]" + '=' + encodeURIComponent(requestObj[keyObj][key]));
                            }
                        str += "&" + pairs.join('&');
                    }
                }
                else {
                    if (str != "") {
                        str += "&";
                    }
                    str += keyObj + "=" + encodeURIComponent(requestObj[keyObj]);
                }
            }
        }
        return str;
    };
    ListRequestService = __decorate([
        core_1.Injectable()
    ], ListRequestService);
    return ListRequestService;
}());
exports.ListRequestService = ListRequestService;


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var table_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatDividerModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var error_handler_service_1 = __webpack_require__("./src/app/shared/error-handler.service.ts");
var title_service_1 = __webpack_require__("./src/app/shared/title.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var list_request_service_1 = __webpack_require__("./src/app/shared/list-request.service.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [],
            exports: [],
            providers: [
                error_handler_service_1.ErrorHandler,
                title_service_1.TitleService,
                toastr_service_1.ToastrService,
                list_request_service_1.ListRequestService,
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/app/shared/title.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var TitleService = /** @class */ (function () {
    function TitleService() {
    }
    TitleService.setTitle = function (newTitle) {
        this.titleService.setTitle(this.titleBase + " | " + newTitle);
    };
    TitleService.titleService = new platform_browser_1.Title('');
    TitleService.titleBase = "CrazySOB v2.0.1";
    TitleService = __decorate([
        core_1.Injectable()
    ], TitleService);
    return TitleService;
}());
exports.TitleService = TitleService;


/***/ }),

/***/ "./src/app/shared/toastr.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var toastr = __webpack_require__("./node_modules/toastr/toastr.js");
var ToastrService = /** @class */ (function () {
    function ToastrService() {
    }
    ToastrService.error = function (message, title, optionsOverride) {
        this._toastr.error(message, title, optionsOverride);
    };
    ToastrService.info = function (message, title, optionsOverride) {
        this._toastr.info(message, title, optionsOverride);
    };
    ToastrService.success = function (message, title, optionsOverride) {
        this._toastr.success(message, title, optionsOverride);
    };
    ToastrService.warning = function (message, title, optionsOverride) {
        this._toastr.warning(message, title, optionsOverride);
    };
    ToastrService.clear = function () {
        this._toastr.clear();
    };
    ToastrService._toastr = toastr;
    ToastrService = __decorate([
        core_1.Injectable()
    ], ToastrService);
    return ToastrService;
}());
exports.ToastrService = ToastrService;


/***/ }),

/***/ "./src/app/unit/create/create.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n    border-color: red;\n}"

/***/ }),

/***/ "./src/app/unit/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create unit</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"unitForm\" [ngClass]=\"{'form-error':submitPending }\" (submit)=\"createUnit($event)\"\n                      novalidate>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_en\">name_en</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\"\n                                   id=\"name_en\"\n                                   formControlName=\"name_en\"\n                                   type=\"text\"\n                                   placeholder=\"Enter title\">\n                            <p class=\"error_message\"\n                               *ngIf=\"unitForm.get('name_en').hasError('required') && submitPending\">First Name is\n                                required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_en')\">{{\n                                getTextErrorByFormField('name_en') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_he\">name_he</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"name_he\" formControlName=\"name_he\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_es\">name_es</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"name_es\" formControlName=\"name_es\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button class=\"btn btn-danger btn-bordered margin-right\" type=\"button\"\n                                    [routerLink]=\"['/units']\">Cancel\n                            </button>\n                            <button class=\"btn btn-primary btn-bordered\" type=\"submit\"\n                            >Create\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/unit/create/create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(router, fb, unitService, route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.unitService = unitService;
        this.route = route;
        this.showLang = false;
        this.submitPending = false;
        this.errors = [];
        this.unitForm = new forms_1.FormGroup({
            name_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            name_he: new forms_1.FormControl("", []),
            name_es: new forms_1.FormControl("", []),
            position: new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)]),
            status: new forms_1.FormControl(1, [forms_1.Validators.required]),
        });
        this._subscribers = [];
        this._subscribers.push(this.unitForm.valueChanges.subscribe(function () { return _this.submitPending = false; }));
        this._subscribers.push(this.route.data.subscribe(function (res) {
            _this.unitForm.controls['position'].patchValue(+res.data[0] + 1);
        }));
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createUnit = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.unitForm.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        var unit = this.unitForm.value;
        this._subscribers.push(this.unitService.create(unit).subscribe(function () {
            _this.router.navigate(['/units']);
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    CreateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    CreateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    CreateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'unit-create',
            template: __webpack_require__("./src/app/unit/create/create.component.html"),
            styles: [__webpack_require__("./src/app/unit/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            unit_service_1.UnitService,
            router_1.ActivatedRoute])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;


/***/ }),

/***/ "./src/app/unit/create/create.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var CreateResolver = /** @class */ (function () {
    function CreateResolver(unitService) {
        this.unitService = unitService;
    }
    CreateResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.forkJoin(this.unitService.getMaxPosition());
    };
    CreateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [unit_service_1.UnitService])
    ], CreateResolver);
    return CreateResolver;
}());
exports.CreateResolver = CreateResolver;


/***/ }),

/***/ "./src/app/unit/list/list.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n\ntable td,\ntable th {\n    padding: 5px;\n}\n"

/***/ }),

/***/ "./src/app/unit/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-content\">\n    <div class=\"table-wrapper\">\n        <div class=\"wrap-header\">\n            <h3>{{title}}</h3>\n        </div>\n        <div class=\"wrap-tmain\">\n            <div class=\"table-scroll\">\n                <div class=\"card\">\n                    <div class=\"card-block\" style=\"padding-bottom: 0\">\n                        <table border=\"1\">\n                            <thead>\n                            <tr class=\"ng2-smart-titles\">\n                                <th class=\"ng2-smart-actions\">\n                                    <div class=\"ng2-smart-title\">Actions</div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        #\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Used by ingredients\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-title\">\n                                        Unit Name\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-title\">\n                                        Status\n                                    </div>\n                                </th>\n                            </tr>\n                            <tr class=\"ng2-smart-filters\">\n                                <th class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\n                                    <a routerLink=\"create\" routerLinkActive=\"active\"\n                                       class=\"btn btn-secondary\" href=\"#\">+ Add unit</a>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <div class=\"ng2-smart-filter\">\n                                            <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                                   [(ngModel)]=\"searchName\"\n                                                   (keyup.enter)=\"applyFilters($event)\"\n                                                   type=\"text\"\n                                                   placeholder=\"Name\">\n                                        </div>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                                class=\"form-control underline\"\n                                                (change)=\"applyFilters($event)\"\n                                                [(ngModel)]=\"searchStatus\">\n                                            <option *ngFor=\"let status of statusOptionsSelect\"\n                                                    [value]=\"status.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ status.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let unit of itemList; let i = index\">\n                                <td>\n                                    <a [routerLink]=\"['update/' + unit.id]\" *ngIf=\"unit.status == 1\"\n                                       routerLinkActive=\"active\" class=\"btn btn-info\">\n                                        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                                        edit</a>\n                                    <button *ngIf=\"unit.status == 1\"\n                                            [disabled]=\"unit.activeIngredientCount != '0'\"\n                                            title=\"This unit used in {{unit.activeIngredientCount}} ingredients\"\n                                            class=\"btn btn-danger\"\n                                            (click)=\"onDelete($event, content, unit)\">\n                                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                        delete\n                                    </button>\n                                </td>\n                                <td>{{(i+1) + (page - 1) * selectedLimit}}</td>\n                                <td>{{unit.activeIngredientCount}}</td>\n                                <td>{{unit.name_en}}</td>\n                                <td>\n                                    <span class=\"active-status edit button\" *ngIf=\"unit.status == 1\">Active</span>\n                                    <span class=\"deleted-status delete button\" *ngIf=\"unit.status == 3 \">Deleted</span>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <div class=\"page-select\">\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\" style=\"width: 200px;\"\n                                    [(ngModel)]=\"selectedLimit\"\n                                    (change)=\"onLimitSelected($event)\">\n                                <option *ngFor=\"let item of limitOptionsSelect\" [value]=\"item.value\">\n                                    {{ item.label }}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-4\" *ngIf=\"itemSize > selectedLimit\">\n                            <ngb-pagination\n                                    [collectionSize]=\"itemSize\"\n                                    [(page)]=\"page\"\n                                    (pageChange)=\"onPageChange($event)\"\n                                    [pageSize]=\"selectedLimit\"\n                                    [rotate]=\"true\"\n                                    [boundaryLinks]=\"true\"></ngb-pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <i class=\"material-icons\">clear</i>\n    </button>\n    <div class=\"modal-body delete-modal clearfix\">\n        <p>Are you sure you want to delete the unit <b>«{{itemTitle}}»?</b></p>\n        <span>This action cannot be undone </span>\n\n        <button type=\"button\" class=\"btn m-btn_no-bg margin-right\" (click)=\"d('no')\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-color\" (click)=\"c('yes')\">Delete it!</button>\n    </div>\n</ng-template>\n\n<template ngbModalContainer></template>"

/***/ }),

/***/ "./src/app/unit/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ListComponent = /** @class */ (function () {
    function ListComponent(entityService, modalService, _route) {
        var _this = this;
        this.entityService = entityService;
        this.modalService = modalService;
        this._route = _route;
        this.title = 'Units list';
        this.searchName = '';
        this.searchStatus = 1;
        this.isShowPagination = true;
        this.statusOptionsSelect = [
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
        this.limitOptionsSelect = [
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
        this.page = 1;
        this.selectedLimit = 10;
        this._subscribers = [];
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.itemList = _.take(res.data[0].data, _this.selectedLimit);
            _this.itemSize = +res.data[0].count;
        }));
    }
    ListComponent.prototype.onDelete = function (event, context, unit) {
        var _this = this;
        event.preventDefault();
        this.itemTitle = unit.name_en;
        this.modalService.open(context).result.then(function (result) {
            _this._subscribers.push(Observable_1.Observable.concat(_this.entityService.deleteById(unit.id), _this.entityService.getList(_this.buildListResponseObject())).subscribe(function (res) {
                if (res) {
                    _this.itemList = res.data;
                    _this.itemSize = +res.count;
                }
            }, function (err) {
            }));
        });
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    ListComponent.prototype.onLimitSelected = function (selected) {
        this.page = 1;
        this.listRequest();
    };
    /**
     * Use this method to get current list
     * @param page
     */
    ListComponent.prototype.listRequest = function (page) {
        var _this = this;
        this._subscribers.push(this.entityService.getList(this.buildListResponseObject(page))
            .subscribe(function (res) {
            _this.itemList = res.data;
            _this.itemSize = +res.count;
        }, function (err) {
        }));
    };
    /**
     * Use this method to prepare request object for list. Sets limits, pagination, etc.
     * @param page
     * @returns {{query: any, page: (any|number), limit: number, sort: string, order: number, filter: string}}
     */
    ListComponent.prototype.buildListResponseObject = function (page) {
        return {
            page: page || this.page,
            limit: this.selectedLimit,
            status: this.searchStatus,
            name: this.searchName,
        };
    };
    ListComponent.prototype.onPageChange = function (event) {
        this.listRequest(event);
    };
    ListComponent.prototype.applyFilters = function (event) {
        event.preventDefault();
        this.page = 1;
        this.listRequest();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'unit-list',
            template: __webpack_require__("./src/app/unit/list/list.component.html"),
            styles: [__webpack_require__("./src/app/unit/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [unit_service_1.UnitService,
            ng_bootstrap_1.NgbModal,
            router_1.ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/unit/list/list.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var ListResolver = /** @class */ (function () {
    function ListResolver(unitService) {
        this.unitService = unitService;
    }
    ListResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 10,
            status: 1,
        };
        return Observable_1.Observable.forkJoin(this.unitService.getList(reqObj));
    };
    ListResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [unit_service_1.UnitService])
    ], ListResolver);
    return ListResolver;
}());
exports.ListResolver = ListResolver;


/***/ }),

/***/ "./src/app/unit/service/unit.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var error_handler_service_1 = __webpack_require__("./src/app/shared/error-handler.service.ts");
var list_request_service_1 = __webpack_require__("./src/app/shared/list-request.service.ts");
var UnitService = /** @class */ (function () {
    function UnitService(http, authService, errorHandler) {
        this.http = http;
        this.authService = authService;
        this.errorHandler = errorHandler;
        this.path = '/v1/units';
    }
    UnitService.prototype.getHeaders = function () {
        return new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    };
    UnitService.prototype.getList = function (resObj) {
        var _this = this;
        if (resObj === void 0) { resObj = {}; }
        return this.http.get(this.path + '?' + list_request_service_1.ListRequestService.parseRequestObject(resObj), { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    UnitService.prototype.getViewById = function (id) {
        var _this = this;
        return this.http.get(this.path + '/' + id, { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    UnitService.prototype.create = function (unit) {
        var _this = this;
        return this.http.post(this.path, unit, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Unit was created"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    UnitService.prototype.updateById = function (unit, id) {
        var _this = this;
        return this.http.put(this.path + '/' + id, unit, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Unit was updated"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    UnitService.prototype.deleteById = function (id) {
        var _this = this;
        return this.http.delete(this.path + '/' + id, { headers: this.getHeaders() })
            .do(function () { return toastr_service_1.ToastrService.success("", "Unit was deleted"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    UnitService.prototype.getMaxPosition = function () {
        var _this = this;
        return this.http.get(this.path + '/max-active-position', { headers: this.getHeaders() })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    UnitService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            auth_service_1.AuthService,
            error_handler_service_1.ErrorHandler])
    ], UnitService);
    return UnitService;
}());
exports.UnitService = UnitService;


/***/ }),

/***/ "./src/app/unit/unit.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var list_component_1 = __webpack_require__("./src/app/unit/list/list.component.ts");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var list_resolver_1 = __webpack_require__("./src/app/unit/list/list.resolver.ts");
var unit_routing_1 = __webpack_require__("./src/app/unit/unit.routing.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var create_component_1 = __webpack_require__("./src/app/unit/create/create.component.ts");
var update_component_1 = __webpack_require__("./src/app/unit/update/update.component.ts");
var update_resolver_1 = __webpack_require__("./src/app/unit/update/update.resolver.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var create_resolver_1 = __webpack_require__("./src/app/unit/create/create.resolver.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var UnitModule = /** @class */ (function () {
    function UnitModule() {
    }
    UnitModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forChild(unit_routing_1.unitRoutes),
                ng_bootstrap_1.NgbModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                forms_1.ReactiveFormsModule,
            ],
            declarations: [
                list_component_1.ListComponent,
                create_component_1.CreateComponent,
                update_component_1.UpdateComponent,
            ],
            providers: [
                unit_service_1.UnitService,
                list_resolver_1.ListResolver,
                update_resolver_1.UpdateResolver,
                create_resolver_1.CreateResolver,
            ]
        })
    ], UnitModule);
    return UnitModule;
}());
exports.UnitModule = UnitModule;


/***/ }),

/***/ "./src/app/unit/unit.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = __webpack_require__("./src/app/unit/list/list.component.ts");
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var list_resolver_1 = __webpack_require__("./src/app/unit/list/list.resolver.ts");
var create_component_1 = __webpack_require__("./src/app/unit/create/create.component.ts");
var update_resolver_1 = __webpack_require__("./src/app/unit/update/update.resolver.ts");
var update_component_1 = __webpack_require__("./src/app/unit/update/update.component.ts");
var create_resolver_1 = __webpack_require__("./src/app/unit/create/create.resolver.ts");
exports.unitRoutes = [
    {
        path: 'units',
        component: root_component_1.RootComponent,
        canActivate: [app_resolver_1.AppResolver],
        children: [
            {
                path: '',
                component: list_component_1.ListComponent,
                resolve: {
                    'data': list_resolver_1.ListResolver
                }
            },
            {
                path: 'create',
                component: create_component_1.CreateComponent,
                resolve: {
                    'data': create_resolver_1.CreateResolver
                }
            },
            {
                path: 'update/:id', component: update_component_1.UpdateComponent,
                resolve: {
                    'data': update_resolver_1.UpdateResolver
                }
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/unit/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Update unit</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"unitForm\" [ngClass]=\"{'form-error':submitPending }\" (submit)=\"updateUnit($event)\"\n                      novalidate>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_en\">name_en</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"name_en\" id=\"name_en\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                            <p class=\"error_message\"\n                               *ngIf=\"unitForm.get('name_en').hasError('required') && submitPending\">First Name is\n                                required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('name_en')\">{{\n                                getTextErrorByFormField('name_en') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_he\">name_he</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"name_he\" formControlName=\"name_he\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"name_es\">name_es</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" id=\"name_es\" formControlName=\"name_es\" type=\"text\"\n                                   placeholder=\"Enter title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button class=\"btn btn-danger btn-bordered margin-right\" type=\"button\"\n                                    [routerLink]=\"['/units']\">Cancel\n                            </button>\n                            <button class=\"btn btn-primary btn-bordered\" type=\"submit\"\n                            >Update\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/unit/update/update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(router, fb, unitService, _route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.unitService = unitService;
        this._route = _route;
        this.showLang = false;
        this.submitPending = false;
        this.errors = [];
        this.unitForm = new forms_1.FormGroup({
            id: new forms_1.FormControl("", [forms_1.Validators.required]),
            name_en: new forms_1.FormControl("", [forms_1.Validators.required]),
            name_he: new forms_1.FormControl("", []),
            name_es: new forms_1.FormControl("", []),
            position: new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)]),
            status: new forms_1.FormControl(1, [forms_1.Validators.required]),
        });
        this._subscribers = [];
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.unitForm.patchValue(res.data[0]);
        }));
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.updateUnit = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (!this.unitForm.valid) {
            this.submitPending = true;
            return;
        }
        this.submitPending = true;
        var unit = this.unitForm.value;
        this._subscribers.push(this.unitService.updateById(unit, unit.id).subscribe(function () {
            _this.router.navigate(['/units']);
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    UpdateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    UpdateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    UpdateComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'unit-update',
            template: __webpack_require__("./src/app/unit/update/update.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            unit_service_1.UnitService,
            router_1.ActivatedRoute])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;


/***/ }),

/***/ "./src/app/unit/update/update.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var unit_service_1 = __webpack_require__("./src/app/unit/service/unit.service.ts");
var UpdateResolver = /** @class */ (function () {
    function UpdateResolver(unitService) {
        this.unitService = unitService;
    }
    UpdateResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.forkJoin(this.unitService.getViewById(route.params['id']));
    };
    UpdateResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [unit_service_1.UnitService])
    ], UpdateResolver);
    return UpdateResolver;
}());
exports.UpdateResolver = UpdateResolver;


/***/ }),

/***/ "./src/app/users/create/create.component.css":
/***/ (function(module, exports) {

module.exports = ".form-add-user strong {\n    font-weight: bold;\n    display: block;\n}\n\n.form-add-user select {\n    width: 200px;\n    margin-bottom: 10px;\n}\n\n.form-add-user input {\n    padding: 3px 5px;\n    outline: none;\n    width: 200px;\n    border-radius: 4px;\n}\n"

/***/ }),

/***/ "./src/app/users/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create user</span>\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"form\" [ngClass]=\"{'form-error':submitPending }\" (ngSubmit)=\"create($event)\"\n                      novalidate>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputFirstName\">First Name</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"first_name\" id=\"inputFirstName\"\n                                   placeholder=\"First Name\" type=\"text\">\n                            <p class=\"error_message\"\n                               *ngIf=\"form.get('first_name').hasError('required') && submitPending\">First Name is\n                                required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('first_name')\">{{\n                                getTextErrorByFormField('first_name') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputSecondName\">Second\n                            Name</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"second_name\" id=\"inputSecondName\"\n                                   placeholder=\"Second Name\" type=\"text\">\n                            <p class=\"error_message\"\n                               *ngIf=\"form.get('second_name').hasError('required')  && submitPending\">Second Name is\n                                required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('second_name')\">{{\n                                getTextErrorByFormField('second_name') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputEmail\">Email</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"email\" id=\"inputEmail\"\n                                   placeholder=\"Email\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"form.get('email').hasError('required') && submitPending\">\n                                Email is required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('email')\">{{\n                                getTextErrorByFormField('email') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"username\">User name</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"username\" id=\"username\"\n                                   placeholder=\"User name\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"form.get('username').hasError('required') && submitPending\">\n                                User name is required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('username')\">{{\n                                getTextErrorByFormField('username') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"password\">Password</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" type=\"password\" formControlName=\"password\"\n                                   id=\"password\" placeholder=\"Password\">\n                            <p class=\"error_message\" *ngIf=\"form.get('password').hasError('required') && submitPending\">\n                                Password is required</p>\n                            <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('password')\">{{\n                                getTextErrorByFormField('password') }}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row mb10\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"selectCategory\">Select\n                            role</label>\n                        <div class=\"col-sm-10\">\n                            <div>\n                                <select id=\"selectCategory\"\n                                        class=\"form-control underline\"\n                                        formControlName=\"role\">\n                                    <option\n                                        *ngFor=\"let role of roleOptionsSelect\" [value]=\"role.value\">\n                                        {{ role.label }}\n                                    </option>\n                                </select>\n\n                                <div *ngIf=\"form.get('role').hasError('required') && submitPending\">\n                                    Role is <strong>required</strong>\n                                </div>\n                                <p class=\"error_message\" *ngIf=\"isExistErrorByFormField('password')\">{{\n                                    getTextErrorByFormField('password') }}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button class=\"btn btn-danger btn-bordered margin-right\" type=\"button\"\n                                    [routerLink]=\"['/users']\">Cancel\n                            </button>\n                            <button type=\"submit\"\n                                    class=\"btn btn-primary btn-bordered\">Save\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/create/create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_service_1 = __webpack_require__("./src/app/users/services/user.service.ts");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(usersService, router) {
        var _this = this;
        this.usersService = usersService;
        this.router = router;
        this.submitPending = false;
        this.form = new forms_1.FormGroup({
            first_name: new forms_1.FormControl('', [forms_1.Validators.required]),
            second_name: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.min(6)]),
            username: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.min(5)]),
            email: new forms_1.FormControl('', [forms_1.Validators.required]),
            role: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
        this.errors = [];
        this._subscribers = [];
        this.roleOptionsSelect = [
            {
                value: 1,
                label: 'Admin'
            },
            {
                value: 2,
                label: 'Editor'
            }
        ];
        this._subscribers.push(this.form.valueChanges.subscribe(function () { return _this.submitPending = false; }));
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.create = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.form.valid) {
            this.submitPending = true;
            return;
        }
        var user = this.form.value;
        this._subscribers.push(this.usersService.create(user).subscribe(function () {
            _this.router.navigate(['/users']);
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    CreateComponent.prototype.isExistErrorByFormField = function (formField) {
        return _.has(this.errors, formField);
    };
    CreateComponent.prototype.getTextErrorByFormField = function (formField) {
        var arrMessage = this.errors[formField];
        return arrMessage.join(',');
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'app-user-create',
            template: __webpack_require__("./src/app/users/create/create.component.html"),
            styles: [__webpack_require__("./src/app/users/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;


/***/ }),

/***/ "./src/app/users/list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".user-table {\n    width: 100%;\n}\n\n.user-table td,\n.user-table th {\n    padding: 5px;\n}\n"

/***/ }),

/***/ "./src/app/users/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-content\">\n    <div class=\"table-wrapper\">\n        <div class=\"wrap-header\">\n            <h3>{{title}}</h3>\n        </div>\n        <div class=\"wrap-tmain\">\n            <div class=\"table-scroll\">\n                <div class=\"card\">\n                    <div class=\"card-block\" style=\"padding-bottom: 0\">\n                        <table border=\"1\">\n                            <thead>\n                            <tr class=\"ng2-smart-titles\">\n                                <th class=\"ng2-smart-actions\">\n                                    <div class=\"ng2-smart-title\">Actions</div>\n                                </th>\n                                <th class=\"ng2-smart-th name\">\n                                    <div class=\"ng2-smart-title\">\n                                        Full name\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th email\">\n                                    <div class=\"ng2-smart-title\">\n                                        Email\n                                    </div>\n                                </th>\n\n                                <th class=\"ng2-smart-th status\">\n                                    <div class=\"ng2-smart-title\">\n                                        Status\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th role\">\n                                    <div class=\"ng2-smart-title\">\n                                        Role\n                                    </div>\n                                </th>\n                            </tr>\n                            <tr class=\"ng2-smart-filters\">\n                                <th class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\n                                    <a routerLink=\"/users/create\" routerLinkActive=\"active\"\n                                       class=\"btn btn-secondary\" href=\"#\">+ Add Users</a>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                               [(ngModel)]=\"searchFullName\"\n                                               (keyup.enter)=\"applyFilters($event)\"\n                                               type=\"text\"\n                                               placeholder=\"Name\">\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th \">\n                                    <div class=\"ng2-smart-filter\">\n                                        <input class=\"form-control ng-untouched ng-pristine ng-valid\"\n                                               [(ngModel)]=\"searchEmail\"\n                                               (keyup.enter)=\"applyFilters($event)\"\n                                               type=\"text\"\n                                               placeholder=\"Email\">\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                            class=\"form-control underline\"\n                                            (change)=\"applyFilters($event)\"\n                                            [(ngModel)]=\"searchStatus\">\n                                            <option *ngFor=\"let status of statusOptionsSelect\"\n                                                    [value]=\"status.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ status.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n                                <th class=\"ng2-smart-th\">\n                                    <div class=\"ng2-smart-filter\">\n                                        <select\n                                            class=\"form-control underline\"\n                                            (change)=\"applyFilters($event)\"\n                                            [(ngModel)]=\"searchRole\">\n                                            <option *ngFor=\"let role of roleOptionsSelect\"\n                                                    [value]=\"role.value\"\n                                                    (onClick)=\"applyFilters($event)\">\n                                                {{ role.label }}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let user of userList\">\n                                <td>\n                                    <span *ngIf=\"user.status === 1\" class=\"btn btn-danger\"\n                                          (click)=\"onBlock($event, content, user)\"><i\n                                        class=\"fa fa-trash\"\n                                        aria-hidden=\"true\"></i> block</span>\n                                </td>\n                                <td>{{user.firstName + ' ' + user.secondName}}</td>\n                                <td>{{user.email}}</td>\n                                <td>{{ getlabelByStatus(user.status) }}</td>\n                                <td>{{ getRoleLabelByRole(user.role) }}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"page-select\">\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\" style=\"width: 200px;\"\n                                    [(ngModel)]=\"selectedLimit\"\n                                    (change)=\"onLimitSelected($event)\">\n                                <option *ngFor=\"let item of limitOptionsSelect\" [value]=\"item.value\">\n                                    {{ item.label }}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-4\" *ngIf=\"userSize > selectedLimit\">\n                            <ngb-pagination\n                                [collectionSize]=\"userSize\"\n                                [(page)]=\"page\"\n                                (pageChange)=\"onPageChange($event)\"\n                                [pageSize]=\"selectedLimit\"\n                                [rotate]=\"true\"\n                                [boundaryLinks]=\"true\"></ngb-pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <i class=\"material-icons\">clear</i>\n    </button>\n    <div class=\"modal-body delete-modal clearfix\">\n        <p>Are you sure you want to delete the user <b>«{{itemTitle}}»?</b></p>\n        <span>This action cannot be undone </span>\n\n        <button type=\"button\" class=\"btn m-btn_no-bg margin-right\" (click)=\"d('no')\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-color\" (click)=\"c('yes')\">Delete it!</button>\n    </div>\n</ng-template>\n\n<template ngbModalContainer></template>"

/***/ }),

/***/ "./src/app/users/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/users/services/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ListComponent = /** @class */ (function () {
    function ListComponent(usersService, modalService, _route) {
        var _this = this;
        this.usersService = usersService;
        this.modalService = modalService;
        this._route = _route;
        this.title = 'Users';
        this.searchFullName = '';
        this.searchEmail = '';
        this.searchStatus = '1';
        this.searchRole = '';
        this.isShowPagination = true;
        this.statusOptionsSelect = [
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
        this.roleOptionsSelect = [
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
        this.limitOptionsSelect = [
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
        this.page = 1;
        this.selectedLimit = 10;
        this._subscribers = [];
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.userList = _.take(res.data[0].data, _this.selectedLimit);
            _this.userSize = res.data[0].count;
        }));
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    ListComponent.prototype.onLimitSelected = function (selected) {
        this.page = 1;
        this.userListRequest();
    };
    /**
     * Use this method to get current list
     * @param page
     */
    ListComponent.prototype.userListRequest = function (page) {
        var _this = this;
        this._subscribers.push(this.usersService.getList(this.buildListResponseObject(page))
            .subscribe(function (res) {
            _this.userList = res.data;
            _this.userSize = Number(res.count);
        }, function (err) {
        }));
    };
    /**
     * Use this method to prepare request object for list. Sets limits, pagination, etc.
     * @param page
     * @returns {{query: any, page: (any|number), limit: number, sort: string, order: number, filter: string}}
     */
    ListComponent.prototype.buildListResponseObject = function (page) {
        return {
            page: page || this.page,
            limit: this.selectedLimit,
            status: this.searchStatus,
            email: this.searchEmail,
            fullName: this.searchFullName,
            role: this.searchRole,
        };
    };
    ListComponent.prototype.onPageChange = function (event) {
        this.userListRequest(event);
        this.userListRequest(event);
    };
    ListComponent.prototype.onBlock = function (event, context, user) {
        var _this = this;
        event.preventDefault();
        this.itemTitle = user.firstName + ' ' + user.secondName;
        this.modalService.open(context).result.then(function (result) {
            _this._subscribers.push(Observable_1.Observable.concat(_this.usersService.blockById(user.id), _this.usersService.getList(_this.buildListResponseObject())).subscribe(function (res) {
                if (res) {
                    _this.userList = res.data;
                    _this.userSize = Number(res.count);
                }
            }, function (err) {
            }));
        });
    };
    ListComponent.prototype.applyFilters = function (event) {
        event.preventDefault();
        this.userListRequest();
    };
    ListComponent.prototype.getRoleLabelByRole = function (role) {
        //todo find in roleOptionsSelect
        var label = 'not set';
        if (role == 1) {
            label = 'admin';
        }
        if (role == 2) {
            label = 'editor';
        }
        return label;
    };
    ListComponent.prototype.getlabelByStatus = function (status) {
        //todo find in OptionsSelect
        var label = 'not set';
        if (status == 1) {
            label = 'Active';
        }
        if (status == 2) {
            label = 'Not active';
        }
        return label;
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-user-all',
            template: __webpack_require__("./src/app/users/list/list.component.html"),
            styles: [__webpack_require__("./src/app/users/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            ng_bootstrap_1.NgbModal,
            router_1.ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/users/list/list.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var user_service_1 = __webpack_require__("./src/app/users/services/user.service.ts");
var ListResolver = /** @class */ (function () {
    function ListResolver(userService) {
        this.userService = userService;
    }
    ListResolver.prototype.resolve = function (route, state) {
        var reqObj = {
            page: 1,
            limit: 10,
            status: 1,
        };
        return Observable_1.Observable.forkJoin(this.userService.getList(reqObj));
    };
    ListResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], ListResolver);
    return ListResolver;
}());
exports.ListResolver = ListResolver;


/***/ }),

/***/ "./src/app/users/services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/authentication/services/auth.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var list_request_service_1 = __webpack_require__("./src/app/shared/list-request.service.ts");
var toastr_service_1 = __webpack_require__("./src/app/shared/toastr.service.ts");
var error_handler_service_1 = __webpack_require__("./src/app/shared/error-handler.service.ts");
var UserService = /** @class */ (function () {
    function UserService(http, authService, errorHandler) {
        this.http = http;
        this.authService = authService;
        this.errorHandler = errorHandler;
        this.headers = new http_1.HttpHeaders()
            .set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    }
    UserService.prototype.getList = function (resObj) {
        var _this = this;
        if (resObj === void 0) { resObj = {}; }
        return this.http.get('/v1/users?' + list_request_service_1.ListRequestService.parseRequestObject(resObj), { headers: this.headers })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    UserService.prototype.blockById = function (id) {
        var _this = this;
        return this.http.get('/v1/users/block/' + id, { headers: this.headers })
            .do(function () { return toastr_service_1.ToastrService.success("", "User was blocked"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    UserService.prototype.create = function (user) {
        var _this = this;
        return this.http.post('/v1/users', user, { headers: this.headers })
            .do(function () { return toastr_service_1.ToastrService.success("", "User was created"); })
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            auth_service_1.AuthService,
            error_handler_service_1.ErrorHandler])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/app/users/update/update.component.css":
/***/ (function(module, exports) {

module.exports = ".form-add-user strong {\n    font-weight: bold;\n    display: block;\n}\n\n.form-add-user select {\n    width: 200px;\n    margin-bottom: 10px;\n}\n\n.form-add-user input {\n    padding: 3px 5px;\n    outline: none;\n    width: 200px;\n    border-radius: 4px;\n}\n\ninput.ng-invalid {\n    border: 2px solid #f00;\n}"

/***/ }),

/***/ "./src/app/users/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"wrap-header\"></div>\n    <div class=\"wrap-tmain\">\n        <div class=\"card\">\n            <div class=\"card-header card-success card-inverse\">\n                <span class=\"card-title\">Create company</span>\n            </div>\n            <div class=\"card-block\">\n                <form novalidate [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputFirstName\">First Name</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"firstName\" id=\"inputFirstName\"\n                                   placeholder=\"First Name\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"form.get('firstName').hasError('required')\">First Name is\n                                required</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputSecondName\">Second\n                            Name</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"secondName\" id=\"inputSecondName\"\n                                   placeholder=\"Second Name\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"form.get('secondName').hasError('required')\">Second Name is\n                                required</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputEmail\">Email</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control underline\" formControlName=\"email\" id=\"inputEmail\"\n                                   placeholder=\"Email\" type=\"text\">\n                            <p class=\"error_message\" *ngIf=\"form.get('email').hasError('required')\">Email is\n                                required</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputUsertype\">User type</label>\n                        <div class=\"col-sm-10\">\n                            <select class=\"form-control\" formControlName=\"type\" id=\"inputUsertype\">\n                                <option value=\"admin\">Admin</option>\n                                <option value=\"editor\">Editor</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2 form-control-label text-xs-right\" for=\"inputStatus\">Status</label>\n                        <div class=\"col-sm-10\">\n                            <select class=\"form-control\" formControlName=\"status\" id=\"inputStatus\">\n                                <option value=\"1\">Active</option>\n                                <option value=\"0\">Deleted</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-primary btn-bordered\">Save\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/update/update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var create_component_1 = __webpack_require__("./src/app/users/create/create.component.ts");
var UpdateComponent = /** @class */ (function (_super) {
    __extends(UpdateComponent, _super);
    function UpdateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-user-update',
            template: __webpack_require__("./src/app/users/update/update.component.html"),
            styles: [__webpack_require__("./src/app/users/update/update.component.css")]
        })
    ], UpdateComponent);
    return UpdateComponent;
}(create_component_1.CreateComponent));
exports.UpdateComponent = UpdateComponent;


/***/ }),

/***/ "./src/app/users/users.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var users_routing_1 = __webpack_require__("./src/app/users/users.routing.ts");
var list_component_1 = __webpack_require__("./src/app/users/list/list.component.ts");
var create_component_1 = __webpack_require__("./src/app/users/create/create.component.ts");
var update_component_1 = __webpack_require__("./src/app/users/update/update.component.ts");
var user_service_1 = __webpack_require__("./src/app/users/services/user.service.ts");
var list_resolver_1 = __webpack_require__("./src/app/users/list/list.resolver.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var ng2_currency_mask_1 = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng2_currency_mask_1.CurrencyMaskModule,
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                router_1.RouterModule.forChild(users_routing_1.usersRoutes),
            ],
            declarations: [
                list_component_1.ListComponent,
                create_component_1.CreateComponent,
                update_component_1.UpdateComponent
            ],
            providers: [
                user_service_1.UserService,
                list_resolver_1.ListResolver
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./src/app/users/users.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var list_component_1 = __webpack_require__("./src/app/users/list/list.component.ts");
var create_component_1 = __webpack_require__("./src/app/users/create/create.component.ts");
var update_component_1 = __webpack_require__("./src/app/users/update/update.component.ts");
var list_resolver_1 = __webpack_require__("./src/app/users/list/list.resolver.ts");
exports.usersRoutes = [{
        path: 'users',
        component: root_component_1.RootComponent,
        canActivate: [app_resolver_1.AppResolver],
        children: [
            {
                path: '',
                component: list_component_1.ListComponent,
                resolve: {
                    'data': list_resolver_1.ListResolver
                }
            },
            {
                path: 'create', component: create_component_1.CreateComponent,
            },
            {
                path: 'update/:id', component: update_component_1.UpdateComponent,
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/validators/validators-messages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var validators_service_1 = __webpack_require__("./src/app/validators/validators.service.ts");
var ValidatorsMessagesComponent = /** @class */ (function () {
    function ValidatorsMessagesComponent() {
    }
    ValidatorsMessagesComponent_1 = ValidatorsMessagesComponent;
    Object.defineProperty(ValidatorsMessagesComponent.prototype, "errorMessage", {
        get: function () {
            if (this.errorType) {
                if (this.field.errors.hasOwnProperty(this.errorType) && (this.field.dirty || this.field.touched)) {
                    return validators_service_1.CustomValidators.getValidatorErrorMessage(this.errorType, this.field.errors[this.errorType]);
                }
            }
            for (var propertyName in this.field.errors) {
                if (this.field.errors.hasOwnProperty(propertyName) && (this.field.dirty || this.field.touched)) {
                    return validators_service_1.CustomValidators.getValidatorErrorMessage(propertyName, this.field.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormControl)
    ], ValidatorsMessagesComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ValidatorsMessagesComponent.prototype, "errorType", void 0);
    ValidatorsMessagesComponent = ValidatorsMessagesComponent_1 = __decorate([
        core_1.Component({
            selector: 'validator-messages',
            template: "\n        <div class=\"ui pointing red basic label\" *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>",
            providers: [
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return ValidatorsMessagesComponent_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ValidatorsMessagesComponent);
    return ValidatorsMessagesComponent;
    var ValidatorsMessagesComponent_1;
}());
exports.ValidatorsMessagesComponent = ValidatorsMessagesComponent;


/***/ }),

/***/ "./src/app/validators/validators.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var validators_service_1 = __webpack_require__("./src/app/validators/validators.service.ts");
var validators_messages_component_1 = __webpack_require__("./src/app/validators/validators-messages.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ValidatorsModule = /** @class */ (function () {
    function ValidatorsModule() {
    }
    ValidatorsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [validators_messages_component_1.ValidatorsMessagesComponent],
            declarations: [
                validators_messages_component_1.ValidatorsMessagesComponent
            ],
            providers: [
                validators_service_1.CustomValidators,
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ValidatorsModule);
    return ValidatorsModule;
}());
exports.ValidatorsModule = ValidatorsModule;


/***/ }),

/***/ "./src/app/validators/validators.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = _.merge({
            'required': 'Required',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'maxlength': "Maximum length " + validatorValue.requiredLength,
            'isEmptyPattern': 'Can`t be empty',
            'stringPattern': 'Can contain only letters, numbers, spaces and `-`symbol.',
            'numberPattern': 'Can contain only numbers',
            'emailPattern': 'Invalid email',
            'passwordPattern': 'Password must have at least one digit, lower and upper case letter',
            'nospacePattern': 'No whitespace allowed',
            'passwordEqualPattern': 'Confirm password and password fields must be equal',
        });
        return config[validatorName];
    };
    CustomValidators.isEmptyValidator = function () {
        return function (control) {
            if (!(control.dirty || control.touched)) {
                return null;
            }
            else {
                return !_.isEmpty(control.value) ? null : { 'isEmptyPattern': false };
            }
        };
    };
    CustomValidators.stringPatternValidator = function () {
        var pattern = /^[A-Za-z0-9 -]+$/u;
        return function (control) {
            if (!(control.dirty || control.touched)) {
                return null;
            }
            else {
                return pattern.test(control.value) ? null : { 'stringPattern': false };
            }
        };
    };
    CustomValidators.numberPatternValidator = function () {
        return function (control) {
            if (!(control.dirty || control.touched)) {
                return null;
            }
            else {
                return _.toNumber(+control.value) ? null : { 'numberPattern': false };
            }
        };
    };
    CustomValidators.emailPatternValidator = function () {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return function (control) {
            if (!(control.dirty || control.touched)) {
                return null;
            }
            else {
                return pattern.test(control.value) ? null : { 'emailPattern': false };
            }
        };
    };
    ;
    CustomValidators.passwordPatternValidator = function () {
        var pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
        return function (control) {
            if (!(control.dirty || control.touched)) {
                return null;
            }
            else {
                return pattern.test(control.value) ? null : { 'passwordPattern': false };
            }
        };
    };
    ;
    CustomValidators.nospacePatternValidator = function () {
        var pattern = /^(?=\S+$)/;
        return function (control) {
            if (!(control.dirty || control.touched)) {
                return null;
            }
            else {
                return pattern.test(control.value) ? null : { 'nospacePattern': false };
            }
        };
    };
    ;
    CustomValidators.isPasswordEqualValidator = function () {
        return function (control) {
            if (!(control.dirty || control.touched)) {
                return null;
            }
            else {
                return control.controls['password'].value == control.controls['password_confirm'].value ? null : { 'passwordEqualPattern': false };
            }
        };
    };
    ;
    CustomValidators = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CustomValidators);
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map