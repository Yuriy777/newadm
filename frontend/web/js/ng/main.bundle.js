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
var no_content_component_1 = __webpack_require__("./src/app/core/no-content/no-content.component.ts");
var unauthorized_component_1 = __webpack_require__("./src/app/core/unauthorized/unauthorized.component.ts");
var recipe_routing_1 = __webpack_require__("./src/app/recipe/recipe.routing.ts");
var appRoutes = [
    {
        path: '',
        component: root_component_1.RootComponent,
        children: recipe_routing_1.recipeRoutes.slice()
    },
    { path: '401', component: unauthorized_component_1.UnauthorizedComponent },
    { path: '404', component: no_content_component_1.NoContent },
    { path: '**', component: no_content_component_1.NoContent },
];
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
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var core_module_1 = __webpack_require__("./src/app/core/core.module.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var shared_module_1 = __webpack_require__("./src/app/shared/shared.module.ts");
var auth_module_1 = __webpack_require__("./src/app/authentication/auth.module.ts");
var validators_module_1 = __webpack_require__("./src/app/validators/validators.module.ts");
var recipe_module_1 = __webpack_require__("./src/app/recipe/recipe.module.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var ng2_currency_mask_1 = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
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
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                ng2_currency_mask_1.CurrencyMaskModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                auth_module_1.AuthModule,
                shared_module_1.SharedModule,
                core_module_1.CoreModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
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

module.exports = "<div class=\"auth-page\">\r\n    <div class=\"content\">\r\n\r\n        <div class=\"modal-form\">\r\n            <div class=\"wrap-form\">\r\n                <h1>Log In</h1>\r\n                <form [formGroup]=\"loginForm\" (submit)=\"authenticate($event)\">\r\n\r\n                    <div class=\"ui left input form-group\">\r\n                        <div><input class=\"input-lg input-underline\" formControlName=\"email\" type=\"text\"\r\n                                    placeholder=\"Your email address\"></div>\r\n                        <validator-messages [field]=\"loginForm.controls.email\"></validator-messages>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"ui left input form-group\">\r\n                        <div><input class=\"input-lg input-underline\" formControlName=\"password\" type=\"password\"\r\n                                    placeholder=\"Password\"></div>\r\n                        <validator-messages [field]=\"loginForm.controls.password\"></validator-messages>\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn rounded-btn\"\r\n                            (click)=\"authenticate($event)\"\r\n                            (dblclick)=\"$event.stopPropagation();\"\r\n                            [disabled]=\"!loginForm.valid || submitPending\">\r\n                        Log in\r\n                    </button>\r\n                    <!--<a [routerLink]=\"['/forgot']\" class=\"btn rounded-btn\">Forgot your password?</a>-->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

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

module.exports = "\r\n.auth-page {\r\n    height: 100%;\r\n    overflow: auto;\r\n    background: #2c3e50;\r\n    text-align: center;\r\n    color: #fff;\r\n    padding: 3em;\r\n    -webkit-animation: fadein 1s;\r\n            animation: fadein 1s;\r\n}\r\n\r\n.auth-page h1 {\r\n    font-weight: 300;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    font-size: 36px;\r\n    color: #fff;\r\n}\r\n\r\n.auth-page form {\r\n    padding: 40px 0;\r\n}\r\n\r\n.auth-page .form-group {\r\n    padding: 8px 0;\r\n}\r\n\r\n.input-underline {\r\n    background: 0 0;\r\n    border: none;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border-bottom: 2px solid hsla(0, 0%, 100%, .5);\r\n    color: #fff;\r\n    border-radius: 0;\r\n}\r\n\r\n.input-lg {\r\n    height: 46px;\r\n    width: 100%;\r\n    max-width: 600px;\r\n    padding: 10px 16px;\r\n    font-size: 18px !important;\r\n    line-height: 1.3333333;\r\n    border-radius: 0;\r\n}\r\n\r\nvalidator-messages {\r\n    display: block;\r\n}\r\n"

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

module.exports = "<div class=\"topbar\">\r\n    <!-- LOGO -->\r\n\r\n    <!-- Button mobile view to collapse sidebar menu -->\r\n    <div class=\"navbar navbar-default\" role=\"navigation\">\r\n        <div class=\"container-fluide\">\r\n            <div class=\"\">\r\n\r\n                <ul class=\"nav navbar-nav navbar-right navbar-right-top pull-right\">\r\n                    <li class=\"hidden-xs\">\r\n                        <a (click)=\"logout($event)\" id=\"btn-fullscreen\" class=\"waves-effect waves-light\"><i\r\n                            class=\"fa fa-external-link\"></i></a>\r\n                    </li>\r\n                    <li class=\"dropdown\">\r\n                        <a href=\"\" class=\"dropdown-toggle profile waves-effect waves-light\" data-toggle=\"dropdown\"\r\n                           aria-expanded=\"true\">\r\n                            <img src=\"js/ng/assets/images/users/no-image.png\" alt=\"user-img\" class=\"img-circle\">\r\n                            Admin\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li class=\"log-out\">\r\n                        <a href=\"/site/logout\" class=\"waves-effect\" title=\"Log Out\"><i\r\n                            class=\"icon-logout\"></i><span></span></a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"left side-menu\">\r\n    <div class=\"slimScrollDiv\">\r\n        <div class=\"sidebar-inner slimscrollleft\">\r\n            <div class=\"sidebar-header\">\r\n                <img src=\"/images/crazy-sob-logo.png\"\r\n                     style=\"width: 70px\" alt=\"Crazy Sob\">\r\n                Crazy-SOB\r\n            </div>\r\n            <!--- Divider -->\r\n            <div id=\"sidebar-menu\">\r\n                <ul class=\"navigation\">\r\n                    <li>\r\n                        <a routerLink=\"/users\" class=\"waves-effect\" routerLinkActive=\"active\">\r\n                            <i class=\"fa fa-users\"></i>\r\n                            <span> Users </span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/companies\" class=\"waves-effect\" routerLinkActive=\"active\">\r\n                            <i class=\"fa fa-building-o\"></i>\r\n                            <span> Companies </span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/categories\" class=\"waves-effect\" routerLinkActive=\"active\">\r\n                            <i class=\"fa fa-calendar-check-o\"></i>\r\n                            <span> Categories </span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/units\" class=\"waves-effect\" routerLinkActive=\"active\">\r\n                            <i class=\"fa fa-window-restore\"></i>\r\n                            <span> Units </span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/ingredients\" class=\"waves-effect\" routerLinkActive=\"active\">\r\n                            <i class=\"fa fa-shopping-basket\"></i>\r\n                            <span> Ingredients </span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/recipes\" class=\"waves-effect\" routerLinkActive=\"active\">\r\n                            <i class=\"fa fa-calendar-check-o\"></i>\r\n                            <span> Recipes </span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/dictionaries\" class=\"waves-effect\" routerLinkActive=\"active\">\r\n                            <i class=\"fa fa-list\"></i>\r\n                            <span> Dictionaries </span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

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

module.exports = "<div class=\"container text-center\" rel=\"error-page\" style=\"height: 100vh\">\r\n    <div style=\"height: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;\">\r\n        <div>\r\n            <h2 style=\"width: 100%; font-size: 40px; font-weight: 800; margin-bottom: 30px;\">\r\n                <span class=\"text-error\" style=\"font-size: 55px;\">404:</span> Page Not Found</h2>\r\n            <p style=\"width: 100%; font-size: 16px; font-weight: 400;\">Please, try again</p>\r\n        </div>\r\n    </div>\r\n</div>"

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
            template: "\n        <div class=\"twocolumn\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <!--<footer></footer>-->"
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;


/***/ }),

/***/ "./src/app/core/unauthorized/unauthorized.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\" rel=\"error-page\" style=\"height: 100vh\">\r\n    <div style=\"height: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;\">\r\n        <div>\r\n            <h2 style=\"width: 100%; font-size: 40px; font-weight: 800; margin-bottom: 30px;\">\r\n                <span class=\"text-error\" style=\"font-size: 55px;\">401:</span> Unauthorized</h2>\r\n            <p style=\"width: 100%; font-size: 16px; font-weight: 400;\">Please, try\r\n                <a routerLink=\"/login\">login</a> if you are registered or contact us.</p>\r\n        </div>\r\n    </div>\r\n</div>"

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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var material_module_1 = __webpack_require__("./src/app/shared/material.module.ts");
var recipe_routing_1 = __webpack_require__("./src/app/recipe/recipe.routing.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ngx_image_cropper_1 = __webpack_require__("./node_modules/ngx-image-cropper/ngx-image-cropper.es5.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var recipe_service_1 = __webpack_require__("./src/app/recipe/service/recipe.service.ts");
var view_resolver_1 = __webpack_require__("./src/app/recipe/view/view.resolver.ts");
var view_component_1 = __webpack_require__("./src/app/recipe/view/view.component.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
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
                view_component_1.ViewComponent,
            ],
            providers: [
                recipe_service_1.RecipeService,
                view_resolver_1.ViewResolver,
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
var root_component_1 = __webpack_require__("./src/app/core/root.component.ts");
var view_resolver_1 = __webpack_require__("./src/app/recipe/view/view.resolver.ts");
var view_component_1 = __webpack_require__("./src/app/recipe/view/view.component.ts");
exports.recipeRoutes = [
    {
        path: 'recipes',
        component: root_component_1.RootComponent,
        children: [
            {
                path: ':alias/:id', component: view_component_1.ViewComponent,
                resolve: {
                    'data': view_resolver_1.ViewResolver
                },
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
var error_handler_service_1 = __webpack_require__("./src/app/shared/error-handler.service.ts");
var RecipeService = /** @class */ (function () {
    function RecipeService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.path = '/v1/recipes';
        this.pathTranslation = '/v1/translations';
    }
    RecipeService.prototype.getViewByIdAndAlias = function (id, alias, amount) {
        var _this = this;
        var getParams = amount ? '?amountPeople=' + amount : '';
        return this.http.get(this.path + '/' + alias + '/' + id + getParams)
            .catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    RecipeService.prototype.sendList = function (postData) {
        return this.http.post(this.path + '/send', postData);
    };
    RecipeService.prototype.getDictionary = function () {
        var _this = this;
        return this.http.get(this.pathTranslation).catch(function (err, caught) { return _this.errorHandler.handle(err, caught); });
    };
    RecipeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            error_handler_service_1.ErrorHandler])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;


/***/ }),

/***/ "./src/app/recipe/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-dynamic\" style=\"display:none\">\r\n\r\n    <div class=\"screen-dynamic_inner\">\r\n        <div>\r\n\r\n            <img class=\"publisher-logo\" src=\"\" alt=\"#\">\r\n\r\n            <div class=\"publisher-loader\">\r\n                <div class=\"publisher-loader_inner\">\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"screen-static\">\r\n    <div class=\"screen-static_inner\">\r\n        <div class=\"shopping-list\">\r\n            <div class=\"overlay\"></div>\r\n            <div class=\"top-block\">\r\n                <div class=\"wrapper-tv\">\r\n                    <div class=\"wrap-tv\">\r\n                        <a href=\"{{data?.company.url}}\" target=\"_blank\">\r\n                            <img class=\"recipe-logo\" src=\"{{data?.image}}\" alt=\"{{data?.name_en}}\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"bottom-block-tv\">\r\n                        <div class=\"center-block-tv\">\r\n                            <img src=\"js/ng/assets/images/tv-003.png\" alt=\"tv\">\r\n                        </div>\r\n                        <span></span>\r\n                    </div>\r\n                    <section class=\"recipe-title recipe-title-tv\"\r\n                             [ngStyle]=\"{'background-color': data.company.header_color}\">\r\n                        <div class=\"recipe-title_inner recipe-title_inner-tv\">\r\n                            <div class=\"wr-button-l\">\r\n                                <button id=\"btn-der\" (click)=\"triggerShowDepartment()\"\r\n                                        [ngClass]=\"{btnshw: state == 'active'}\"></button>\r\n                            </div>\r\n                            <div class=\"question-2\">\r\n                                <div class=\"question-text\">\r\n                                    {{getTranslation('key_10')}}\r\n                                </div>\r\n                                <div class=\"number-of-dinners count-desc\">\r\n                                    <span class=\"plus\" (click)=\"addAmount()\">\r\n                                        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                    </span>\r\n                                    <span class=\"val\">{{people_amount}}</span>\r\n                                    <button [disabled]=\"disabledButtonMin\" class=\"min\" (click)=\"reduceAmount()\">\r\n                                        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n\r\n            <section class=\"ingredients-list\">\r\n                <ul *ngFor=\"let categories of data.ingredients\">\r\n                    <li class=\"shuk-category shuk-cat\">\r\n                        <span [@departmentState]=\"state\" class=\"category-name\">\r\n                            <span>{{categories.category.name}}</span>\r\n                        </span>\r\n                        <ul class=\"list-ingredient-t\">\r\n                            <li class=\"ingredient-item ingr-item\" *ngFor=\"let ingredients of categories.ingredients\"\r\n                                [ngClass]=\"{removemode: ingredients.hide || false}\">\r\n                                <div class=\"flex-line\">\r\n                                    <div class=\"image\" (click)=\"showModalIngredient($event, content, ingredients.ingredient)\">\r\n                                        <img src=\"{{ingredients.ingredient.image}}\" class=\"item-img\">\r\n                                    </div>\r\n                                    <div class=\"popup line-content\">\r\n\r\n                                        <div class=\"ingredient-info\"\r\n                                             (click)=\"showModalIngredient($event, content, ingredients.ingredient)\">\r\n                                            <span>{{ingredients.ingredient.name}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"info-btn\">\r\n                                        <span class=\"coupon-img\"\r\n                                              (click)=\"showModalIngredient($event, content, ingredients.ingredient)\"\r\n                                              *ngIf=\"ingredients.ingredient.activeCoupon.length !== 0\">\r\n                                            <img src=\"js/ng/assets/images/coupon.svg\" alt=\"coupon\">\r\n                                        </span>\r\n                                        <span class=\"vid-img\" style=\"display: none\">\r\n                                            <img src=\"js/ng/assets/images/hat.svg\" alt=\"info\">\r\n                                        </span>\r\n                                    </div>\r\n                                    <div>\r\n\r\n                                    </div>\r\n                                    <div class=\"quant\">\r\n                                        <span>{{ingredients.ingredient.count}}</span>\r\n                                    </div>\r\n                                    <div class=\"remove-btn\" (click)=\"ingredients.hide = !ingredients.hide;\">\r\n                                    <span class=\"remove-icon\"\r\n                                          [ngStyle]=\"{'background-color': data.company.header_color}\">\r\n                                        <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n                                    </span>\r\n                                        <span class=\"back-bt back-img\"\r\n                                              [ngStyle]=\"{'background-color': data.company.header_color}\">\r\n                                        <span class=\"circle-rt\"></span>\r\n                                    </span>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </section>\r\n            <section class=\"save-list\">\r\n                <a class=\"btn-icon \" id=\"btn-fsend\"  (click)=\"showModalSend($event, send_list)\" [ngStyle]=\"{'background-color': data.company.header_color}\">\r\n                    <span>\r\n                        <img src=\"js/ng/assets/images/love-letter.svg\">\r\n                    </span>\r\n                </a>\r\n                <span id=\"whatsApp\" class=\"btn-icon \" (click)=\"sendListToWhatsapp($event)\" [ngStyle]=\"{'background-color': data.company.header_color}\">\r\n                    <span>\r\n                        <img src=\"js/ng/assets/images/whatsapp.svg\">\r\n                    </span>\r\n                </span>\r\n                <span id=\"shareBt\" target=\"_blank\" class=\"btn-icon\" (click)=\"sendListToFacebook($event)\"\r\n                   [ngStyle]=\"{'background-color': data.company.header_color}\">\r\n                    <span>\r\n                        <img src=\"js/ng/assets/images/facebook.svg\">\r\n                    </span>\r\n                </span>\r\n            </section>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #coupon let-c=\"close\" let-d=\"dismiss\" >\r\n\r\n    <div  class=\"posr popuptext coupon-modal\" >\r\n        <div class=\"close-btn reg\" (click)=\"closeModalCoupon()\">\r\n        </div>\r\n\r\n        <div class=\"popup-body\">\r\n            <img src=\"{{couponImg}}\" class=\"brand-image\">\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\r\n\r\n    <div id=\"regular-popup\" class=\"posr popuptext\" >\r\n        <div class=\"close-btn reg\" (click)=\"closeModalIngredient()\">\r\n        </div>\r\n        <div class=\"popup-header\" style=\"text-align: center\">{{ingredientName}}</div>\r\n        <div class=\"popup-body\">\r\n            <img src=\"{{imgUrl}}\" class=\"brand-image\">\r\n        </div>\r\n        <div class=\"brand_name\"></div>\r\n        <p *ngIf=\"showCoupon\">\r\n            <button class=\"coupun-btn mb20\" style=\"color: rgb(255, 255, 255);\"\r\n                    (click)=\"showModalCoupon($event, coupon)\"\r\n                    [ngStyle]=\"{'background-color': data.company.header_color}\">\r\n                {{getTranslation('key_9')}}\r\n        </button>\r\n        </p>\r\n        <button id=\"reg-btn\" class=\"back-to-list\" style=\"color: rgb(255, 255, 255);\" [ngStyle]=\"{'background-color': data.company.header_color}\" (click)=\"closeModalIngredient()\">\r\n            {{getTranslation('key_1')}}\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #send_list let-c=\"close\" let-d=\"dismiss\" >\r\n\r\n    <div class=\"recipe-save\">\r\n        <div class=\"recipe-save_inner close-modal\">\r\n            <div class=\"header-bl\">\r\n                <div class=\"c-btn\">\r\n                    <div class=\"close-btn bt\" (click)=\"closeModalSendList()\"></div>\r\n                </div>\r\n                <p class=\"popup-titlef\">\r\n                    {{getTranslation('key_3')}}\r\n                </p>\r\n            </div>\r\n            <div class=\"container-modal\">\r\n                <form [formGroup]=\"form\"\r\n                      (ngSubmit)=\"onSubmit(form)\">\r\n                    <div class=\"inp-wrap\">\r\n                        <input type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"{{getTranslation('key_4')}}\">\r\n                        <img src=\"js/ng/assets/images/envelope.svg\" class=\"icons-inp\" alt=\"\">\r\n                    </div>\r\n                    <p class=\"or\">\r\n                        - {{getTranslation('key_5')}} -\r\n                    </p>\r\n                    <div class=\"inp-wrap\">\r\n                        <input type=\"tel\" name=\"tel\" formControlName=\"phone\"  placeholder=\"{{getTranslation('key_6')}}\">\r\n                        <img src=\"js/ng/assets/images/smartphone.svg\" class=\"icons-inp tel-inp\" alt=\"\">\r\n                    </div>\r\n                    <span *ngIf=\"!form.hasError('customValidation') && submitPending\" class=\"error\">Enter your email or phone</span>\r\n                    <small>\r\n                        {{getTranslation('key_7')}}</small>\r\n                    <div>\r\n                        <button [disabled]=\"!form.hasError('customValidation')\" class=\"submit-list\"  [ngStyle]=\"{'background-color': data.company.header_color}\">\r\n                            {{getTranslation('key_8')}}\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<template ngbModalContainer></template>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/recipe/view/view.component.ts":
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
var recipe_service_1 = __webpack_require__("./src/app/recipe/service/recipe.service.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var modal_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ViewComponent = /** @class */ (function () {
    function ViewComponent(router, recipeService, _route, modalService, fb) {
        var _this = this;
        this.router = router;
        this.recipeService = recipeService;
        this._route = _route;
        this.modalService = modalService;
        this.fb = fb;
        this.remove_ingredient = [];
        this.showDepartment = false;
        this.state = 'inactive';
        this._subscribers = [];
        this.submitPending = false;
        this.errors = [];
        this._subscribers.push(this._route.data.subscribe(function (res) {
            _this.data = res.data[0];
            _this.dictionary = res.data[1].data;
            _this.recipeLang = _this.data.language;
            _this.recipeId = _this.data.id;
            _this.people_amount = _this.data.people_amount;
            _this.disabledButtonMin = _this.people_amount <= 1;
        }));
        this.result = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this.form = this.fb.group({
            email: [''],
            phone: [''],
        }, { validator: this.customValidation });
    }
    ViewComponent.prototype.customValidation = function (formGroup) {
        var emailField = formGroup.controls['email'].value;
        var phoneField = formGroup.controls['phone'].value;
        return (phoneField.length !== 0 || emailField.length !== 0) ? { customValidation: true } : null;
    };
    ViewComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitPending = true;
        var postData = {};
        postData.email = form.value.email;
        postData.phone = form.value.phone;
        postData.people_amount = this.people_amount;
        postData.checkIds = [];
        postData.recipeId = this.recipeId;
        this._subscribers.push(this.recipeService.sendList(postData)
            .subscribe(function () {
            _this.modalSend.hide();
        }, function (err) {
            _this.errors = err.error;
        }));
    };
    ViewComponent.prototype.triggerShowDepartment = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    };
    ViewComponent.prototype.addAmount = function () {
        ++this.people_amount;
        this.disabledButtonMin = false;
        this.getAmount(this.people_amount);
    };
    ViewComponent.prototype.reduceAmount = function () {
        --this.people_amount;
        this.disabledButtonMin = this.people_amount <= 1;
        this.getAmount(this.people_amount);
    };
    ViewComponent.prototype.getAmount = function (amount) {
        var _this = this;
        this._subscribers.push(this.recipeService.getViewByIdAndAlias(this.data['id'], this.data.company.alias, amount).subscribe(function (res) {
            _this.data = res;
        }));
    };
    ViewComponent.prototype.showModalIngredient = function (event, context, ingredient) {
        event.preventDefault();
        this.imgUrl = ingredient.image;
        this.ingredientName = ingredient.name;
        this.showCoupon = ingredient.activeCoupon.length !== 0;
        this.coupon = ingredient.activeCoupon;
        this.modalIngr = this.modalService.show(context);
    };
    ViewComponent.prototype.closeModalIngredient = function () {
        this.modalIngr.hide();
    };
    ViewComponent.prototype.showModalSend = function (event, context) {
        event.preventDefault();
        this.modalSend = this.modalService.show(context);
    };
    ViewComponent.prototype.closeModalSendList = function () {
        this.modalSend.hide();
    };
    ViewComponent.prototype.showModalCoupon = function (event, context) {
        event.preventDefault();
        this.modalIngr.hide();
        this.couponImg = this.coupon.image;
        this.modalCoupon = this.modalService.show(context);
    };
    ViewComponent.prototype.closeModalCoupon = function () {
        this.modalCoupon.hide();
    };
    ViewComponent.prototype.sendListToWhatsapp = function (e) {
        e.stopPropagation();
        var link = 'whatsapp://send?text=' + window.location.href;
        window.open(link, '_blank');
    };
    ViewComponent.prototype.sendListToFacebook = function (e) {
        e.stopPropagation();
        var link = 'https://www.facebook.com/sharer.php?u' + window.location.href;
        window.open(link, '_blank');
    };
    ViewComponent.prototype.onKey = function (event) {
        this.values += event.target.value;
        this.disabledButtonSend = this.values;
    };
    ViewComponent.prototype.getTranslation = function (key) {
        var language = this.dictionary[key][this.recipeLang] ? this.recipeLang : 'en';
        var result = this.dictionary[key][language] || this.dictionary[key].es || key;
        return result;
    };
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        _.forEach(this._subscribers, function (value) {
            value.unsubscribe();
        });
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'recipe-view',
            template: __webpack_require__("./src/app/recipe/view/view.component.html"),
            animations: [
                animations_1.trigger('departmentState', [
                    animations_1.state('inactive', animations_1.style({
                        display: 'none',
                        height: 0,
                        opacity: 0
                    })),
                    animations_1.state('active', animations_1.style({
                        display: 'block',
                        height: '34px',
                        opacity: 1
                    })),
                    animations_1.transition('inactive => active', animations_1.animate('1200ms ease-in')),
                    animations_1.transition('active => inactive', animations_1.animate('1200ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            recipe_service_1.RecipeService,
            router_1.ActivatedRoute,
            modal_1.BsModalService,
            forms_1.FormBuilder])
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;


/***/ }),

/***/ "./src/app/recipe/view/view.resolver.ts":
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
var ViewResolver = /** @class */ (function () {
    function ViewResolver(recipeService) {
        this.recipeService = recipeService;
    }
    ViewResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.forkJoin(this.recipeService.getViewByIdAndAlias(route.params['id'], route.params['alias']), this.recipeService.getDictionary());
    };
    ViewResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [recipe_service_1.RecipeService])
    ], ViewResolver);
    return ViewResolver;
}());
exports.ViewResolver = ViewResolver;


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
        if (err.status === 404) {
            this.router.navigate(['/404']);
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