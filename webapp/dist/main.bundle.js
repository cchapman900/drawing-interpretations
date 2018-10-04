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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auth_login_login_component__ = __webpack_require__("./src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_auth_register_register_component__ = __webpack_require__("./src/app/components/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_home_dashboard_home_component__ = __webpack_require__("./src/app/components/dashboard/home/dashboard-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_profile_profile_component__ = __webpack_require__("./src/app/components/dashboard/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_auth_callback_callback_component__ = __webpack_require__("./src/app/components/auth/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_auth_guard_service__ = __webpack_require__("./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_drawings_list_list_drawings_component__ = __webpack_require__("./src/app/components/drawings/list/list-drawings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_drawings_drawing_component__ = __webpack_require__("./src/app/components/drawings/drawing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'drawings', component: __WEBPACK_IMPORTED_MODULE_10__components_drawings_list_list_drawings_component__["a" /* ListDrawingsComponent */] },
    { path: 'drawings/:drawing_id', component: __WEBPACK_IMPORTED_MODULE_11__components_drawings_drawing_component__["a" /* DrawingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_auth_register_register_component__["a" /* RegisterComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_8__components_auth_callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_auth_guard_service__["a" /* AuthGuardService */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_home_dashboard_home_component__["a" /* DashboardHomeComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_profile_profile_component__["a" /* ProfileComponent */] }
        ] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_guard_service__ = __webpack_require__("./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_auth_login_login_component__ = __webpack_require__("./src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_auth_register_register_component__ = __webpack_require__("./src/app/components/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_auth_callback_callback_component__ = __webpack_require__("./src/app/components/auth/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_profile_profile_component__ = __webpack_require__("./src/app/components/dashboard/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_sidebar_dashboard_sidebar_component__ = __webpack_require__("./src/app/components/dashboard/sidebar/dashboard-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_home_dashboard_home_component__ = __webpack_require__("./src/app/components/dashboard/home/dashboard-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_drawings_list_list_drawings_component__ = __webpack_require__("./src/app/components/drawings/list/list-drawings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_drawing_drawing_service__ = __webpack_require__("./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_drawings_drawing_component__ = __webpack_require__("./src/app/components/drawings/drawing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_auth_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_auth_callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_sidebar_dashboard_sidebar_component__["a" /* DashboardSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_dashboard_home_dashboard_home_component__["a" /* DashboardHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_drawings_list_list_drawings_component__["a" /* ListDrawingsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_drawings_drawing_component__["a" /* DrawingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routing_module__["b" /* ROUTES */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_20__services_drawing_drawing_service__["a" /* DrawingService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.component.css":
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  padding-top: 80px;\n  padding-bottom: 40px;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin .checkbox {\n  font-weight: 400;\n}\n\n.form-signin .form-control {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/auth/callback/callback.component.css":
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}\n"

/***/ }),

/***/ "./src/app/components/auth/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/auth/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-callback',
            template: __webpack_require__("./src/app/components/auth/callback/callback.component.html"),
            styles: [__webpack_require__("./src/app/components/auth/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 mx-auto text-center\">\n      <form class=\"form-signin\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n        <label\n          for=\"email\"\n          class=\"sr-only\">\n          Email address\n        </label>\n        <input\n          type=\"email\"\n          id=\"email\"\n          #email\n          class=\"form-control\"\n          placeholder=\"Email address\"\n          required=\"\"\n          autofocus=\"\"\n          autocomplete=\"off\">\n        <label\n          for=\"password\"\n          class=\"sr-only\">\n          Password\n        </label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          #password\n          class=\"form-control\"\n          placeholder=\"Password\"\n          required=\"\"\n          autocomplete=\"off\">\n        <div class=\"checkbox mb-3\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <button\n          class=\"btn btn-lg btn-primary btn-block\"\n          type=\"submit\"\n          (click)=\"auth.login(email.value, password.value)\">\n          Sign in\n        </button>\n      </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 mx-auto text-center\">\n      <form class=\"form-signin\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\n\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input\n            id=\"email\"\n            type=\"email\"\n            class=\"form-control\"\n            #email\n            placeholder=\"you@example.com\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input\n            id=\"password\"\n            type=\"password\"\n            class=\"form-control\"\n            #password\n            placeholder=\"Enter your password\">\n        </div>\n\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          (click)=\"auth.signup(email.value, password.value)\">\n          Sign Up\n        </button>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth) {
        this.auth = auth;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/auth/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n  font-size: .875rem;\n}\n\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\n\n/*\n * Navbar\n */\n\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, .25);\n  -webkit-box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n          box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n}\n\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n\n.form-control-dark:focus {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n          box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n\n/*\n * Utilities\n */\n\n.border-top { border-top: 1px solid #e5e5e5; }\n\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-dashboard-sidebar></app-dashboard-sidebar>\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\"><div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\"><div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div></div><div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div></div></div>\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/home/dashboard-home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/home/dashboard-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3\">\n  <h1 class=\"h2\">Dashboard</h1>\n  <div class=\"btn-toolbar mb-2 mb-md-0\">\n    <div class=\"btn-group mr-2\">\n      <button class=\"btn btn-sm btn-outline-secondary\">Share</button>\n      <button class=\"btn btn-sm btn-outline-secondary\">Export</button>\n    </div>\n    <button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>\n      This week\n    </button>\n  </div>\n</div>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-striped table-sm\">\n    <thead>\n    <tr>\n      <th>#</th>\n      <th>Header</th>\n      <th>Header</th>\n      <th>Header</th>\n      <th>Header</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>1,001</td>\n      <td>Lorem</td>\n      <td>ipsum</td>\n      <td>dolor</td>\n      <td>sit</td>\n    </tr>\n    <tr>\n      <td>1,002</td>\n      <td>amet</td>\n      <td>consectetur</td>\n      <td>adipiscing</td>\n      <td>elit</td>\n    </tr>\n    <tr>\n      <td>1,003</td>\n      <td>Integer</td>\n      <td>nec</td>\n      <td>odio</td>\n      <td>Praesent</td>\n    </tr>\n    <tr>\n      <td>1,003</td>\n      <td>libero</td>\n      <td>Sed</td>\n      <td>cursus</td>\n      <td>ante</td>\n    </tr>\n    <tr>\n      <td>1,004</td>\n      <td>dapibus</td>\n      <td>diam</td>\n      <td>Sed</td>\n      <td>nisi</td>\n    </tr>\n    <tr>\n      <td>1,005</td>\n      <td>Nulla</td>\n      <td>quis</td>\n      <td>sem</td>\n      <td>at</td>\n    </tr>\n    <tr>\n      <td>1,006</td>\n      <td>nibh</td>\n      <td>elementum</td>\n      <td>imperdiet</td>\n      <td>Duis</td>\n    </tr>\n    <tr>\n      <td>1,007</td>\n      <td>sagittis</td>\n      <td>ipsum</td>\n      <td>Praesent</td>\n      <td>mauris</td>\n    </tr>\n    <tr>\n      <td>1,008</td>\n      <td>Fusce</td>\n      <td>nec</td>\n      <td>tellus</td>\n      <td>sed</td>\n    </tr>\n    <tr>\n      <td>1,009</td>\n      <td>augue</td>\n      <td>semper</td>\n      <td>porta</td>\n      <td>Mauris</td>\n    </tr>\n    <tr>\n      <td>1,010</td>\n      <td>massa</td>\n      <td>Vestibulum</td>\n      <td>lacinia</td>\n      <td>arcu</td>\n    </tr>\n    <tr>\n      <td>1,011</td>\n      <td>eget</td>\n      <td>nulla</td>\n      <td>Class</td>\n      <td>aptent</td>\n    </tr>\n    <tr>\n      <td>1,012</td>\n      <td>taciti</td>\n      <td>sociosqu</td>\n      <td>ad</td>\n      <td>litora</td>\n    </tr>\n    <tr>\n      <td>1,013</td>\n      <td>torquent</td>\n      <td>per</td>\n      <td>conubia</td>\n      <td>nostra</td>\n    </tr>\n    <tr>\n      <td>1,014</td>\n      <td>per</td>\n      <td>inceptos</td>\n      <td>himenaeos</td>\n      <td>Curabitur</td>\n    </tr>\n    <tr>\n      <td>1,015</td>\n      <td>sodales</td>\n      <td>ligula</td>\n      <td>in</td>\n      <td>libero</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/home/dashboard-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardHomeComponent = /** @class */ (function () {
    function DashboardHomeComponent() {
    }
    DashboardHomeComponent.prototype.ngOnInit = function () {
    };
    DashboardHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard-home',
            template: __webpack_require__("./src/app/components/dashboard/home/dashboard-home.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/home/dashboard-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardHomeComponent);
    return DashboardHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default profile-area\">\n  <div class=\"panel-heading\">\n    <h3>Profile</h3>\n  </div>\n  <div class=\"panel-body\">\n    <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n    <div>\n      <label><i class=\"glyphicon glyphicon-user\"></i> Nickname</label>\n      <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n    </div>\n    <pre class=\"full-profile\">{{ profile | json }}</pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/sidebar/dashboard-sidebar.component.css":
/***/ (function(module, exports) {

module.exports = "/*\n * Sidebar\n */\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100; /* Behind the navbar */\n  padding: 0;\n  -webkit-box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n          box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n\n.sidebar-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px; /* Height of navbar */\n  height: calc(100vh - 48px);\n  padding-top: 1rem;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n}\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n\n.sidebar .nav-link.active {\n  color: #007bff;\n}\n\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit;\n}\n\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}\n"

/***/ }),

/***/ "./src/app/components/dashboard/sidebar/dashboard-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n  <div class=\"sidebar-sticky\">\n    <ul class=\"nav flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/dashboard/\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg>\n          Home\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/dashboard/profile\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\"><path d=\"M21 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"11\" cy=\"6\" r=\"5\"></circle></svg>\n          Profile\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/dashboard/sidebar/dashboard-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardSidebarComponent = /** @class */ (function () {
    function DashboardSidebarComponent() {
    }
    DashboardSidebarComponent.prototype.ngOnInit = function () {
    };
    DashboardSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard-sidebar',
            template: __webpack_require__("./src/app/components/dashboard/sidebar/dashboard-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/sidebar/dashboard-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/drawings/drawing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/drawings/drawing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <img [src]=\"drawing?.image_url\"/>\n    </div>\n    <div class=\"col-md-8\">\n      <h4>Interpretations</h4>\n      <ul>\n        <li *ngFor=\"let interpretation of interpretationGroup\">\n          <strong>{{interpretation[0]}}</strong>\n          <span (click)=\"showExtendedNames = !showExtendedNames\" [hidden]=\"showExtendedNames\">\n            - {{formatNames(interpretation[1])}} <span class=\"small\">v</span>\n          </span>\n          <ul (click)=\"showExtendedNames = !showExtendedNames\"  [hidden]=\"!showExtendedNames\">\n            <li *ngFor=\"let username of interpretation[1]\">\n              {{username}}\n            </li>\n          </ul>\n        </li>\n      </ul>\n      <hr/>\n      <h4>Submit an interpretation</h4>\n      <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"text\">Text</label>\n          <input type=\"text\" class=\"form-control\" id=\"text\"\n                 required\n                 [(ngModel)]=\"interpretation.text\" name=\"text\"\n                 #name=\"ngModel\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!interpretation.text\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/drawings/drawing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drawing_drawing_service__ = __webpack_require__("./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_interpretation__ = __webpack_require__("./src/app/models/interpretation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrawingComponent = /** @class */ (function () {
    function DrawingComponent(drawingService, route, router, authService) {
        this.drawingService = drawingService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.showExtendedNames = false;
        this.username = localStorage.getItem('username');
        this.interpretationGroup = [];
        this.interpretation = new __WEBPACK_IMPORTED_MODULE_3__models_interpretation__["a" /* Interpretation */]();
    }
    DrawingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.drawing_id = +params['drawing_id'];
            if (_this.drawing_id) {
                _this.drawingService.getDrawing(_this.drawing_id)
                    .subscribe(function (drawing) {
                    _this.drawing = drawing;
                    _this.interpretationGroup = _this.getInterpretationGroup(_this.drawing.interpretations);
                });
            }
        });
    };
    DrawingComponent.prototype.getInterpretationGroup = function (drawingInterpretations) {
        // interpretation is {text: 'some interpretation', username: 'some username'}
        var grouping = drawingInterpretations.reduce(function (r, a) {
            r[a.text] = r[a.text] || [];
            r[a.text].push(a.username);
            return r;
        }, Object.create(null));
        var result = Object.keys(grouping).map(function (key) {
            return [key, grouping[key]];
        });
        return result;
    };
    ;
    DrawingComponent.prototype.formatNames = function (names, limit) {
        if (limit === void 0) { limit = 3; }
        var result = [];
        var additional = '';
        if (names.length <= limit) {
            limit = names.length;
        }
        else {
            additional = 'and ' + (names.length - limit) + ' others';
        }
        for (var i = 0; i < limit; i++) {
            result.push(names[i]);
        }
        if (additional !== '') {
            result.push(additional);
        }
        return result.join(', ');
    };
    DrawingComponent.prototype.onSubmit = function () {
        var _this = this;
        this.interpretation.username = this.username;
        this.interpretation.drawing_id = this.drawing_id;
        this.drawingService.createInterpretation(this.interpretation)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['drawings']);
        });
    };
    DrawingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-drawing',
            template: __webpack_require__("./src/app/components/drawings/drawing.component.html"),
            styles: [__webpack_require__("./src/app/components/drawings/drawing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_drawing_drawing_service__["a" /* DrawingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */]])
    ], DrawingComponent);
    return DrawingComponent;
}());



/***/ }),

/***/ "./src/app/components/drawings/list/list-drawings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/drawings/list/list-drawings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"card\" *ngFor=\"let drawing of drawings\" style=\"cursor: pointer\" routerLink=\"/drawings/{{drawing.id}}\">\n        <img class=\"card-img-top\" src=\"{{drawing.image_url}}\"/>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{drawing.description}}</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/drawings/list/list-drawings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDrawingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drawing_drawing_service__ = __webpack_require__("./src/app/services/drawing/drawing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListDrawingsComponent = /** @class */ (function () {
    function ListDrawingsComponent(drawingsService) {
        this.drawingsService = drawingsService;
    }
    ListDrawingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drawingsService.getDrawings()
            .subscribe(function (drawings) {
            _this.drawings = drawings;
        });
    };
    ListDrawingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-drawings',
            template: __webpack_require__("./src/app/components/drawings/list/list-drawings.component.html"),
            styles: [__webpack_require__("./src/app/components/drawings/list/list-drawings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_drawing_drawing_service__["a" /* DrawingService */]])
    ], ListDrawingsComponent);
    return ListDrawingsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n\n  <div class=\"starter-template\">\n    <h1>Drawing Interpretations</h1>\n    <p class=\"lead\">View drawings and submit interpretations of them</p>\n  </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\n  margin-bottom: 5rem;\n  z-index: 1020;\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Drawing Interpretations</a>\n  <button (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n          data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div [ngbCollapse]=\"isNavbarCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"drawings\">Drawings</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"!auth.isAuthenticated()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"login\">Login</a>\n      </li>\n      <li *ngIf=\"!auth.isAuthenticated()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"register\">Register</a>\n      </li>\n      <li *ngIf=\"auth.isAuthenticated()\" ngbDropdown placement=\"bottom-right\" class=\"nav-item dropdown\">\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\"\n           data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ username }}\n        </a>\n        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"dashboard\">Dashboard</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"auth.logout()\">Logout</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.username = localStorage.getItem('username') ? localStorage.getItem('username') : '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isNavbarCollapsed = true;
        this.isLoggedIn = false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/models/interpretation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interpretation; });
var Interpretation = /** @class */ (function () {
    function Interpretation() {
    }
    return Interpretation;
}());



/***/ }),

/***/ "./src/app/services/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_variables__ = __webpack_require__("./src/app/services/auth/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("./node_modules/auth0-js/dist/auth0.min.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        // Configure Auth0
        //noinspection TypeScriptUnresolvedFunction
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["a" /* WebAuth */]({
            domain: __WEBPACK_IMPORTED_MODULE_2__auth0_variables__["a" /* AUTH_CONFIG */].domain,
            clientID: __WEBPACK_IMPORTED_MODULE_2__auth0_variables__["a" /* AUTH_CONFIG */].clientID,
            redirectUri: __WEBPACK_IMPORTED_MODULE_2__auth0_variables__["a" /* AUTH_CONFIG */].callbackURL,
            audience: "https://" + __WEBPACK_IMPORTED_MODULE_2__auth0_variables__["a" /* AUTH_CONFIG */].domain + "/userinfo",
            responseType: 'token id_token',
            scope: 'openid profile'
        });
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        this.auth0.login({
            realm: 'Username-Password-Authentication',
            username: username,
            password: password
        }, function (err, authResult) {
            if (err) {
                console.log(err);
                alert("Error: " + err.error_description + ". Check the console for further details.");
                return;
            }
            else if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
            }
        });
    };
    AuthService.prototype.signup = function (email, password) {
        this.auth0.redirect.signupAndLogin({
            connection: 'Username-Password-Authentication',
            email: email,
            password: password,
        }, function (err) {
            if (err) {
                console.log(err);
                alert("Error: " + err.description + ". Check the console for further details.");
                return;
            }
        });
    };
    AuthService.prototype.loginWithGoogle = function () {
        this.auth0.authorize({
            connection: 'google-oauth2',
        });
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('username', authResult.idTokenPayload.nickname);
        this.router.navigate(['home']);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/home']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'ffE7t6nbFS3sknvkABEMlorM3Y4smyiW',
    domain: 'chrischapman.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
};


/***/ }),

/***/ "./src/app/services/drawing/drawing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawingService = /** @class */ (function () {
    function DrawingService(http) {
        this.http = http;
        this.drawingsUrl = 'http://localhost:5000/drawings';
    }
    DrawingService.prototype.getDrawings = function (offset) {
        if (offset === void 0) { offset = null; }
        var getDrawingsUrl = offset ? this.drawingsUrl + '?offset=' + offset : this.drawingsUrl;
        return this.http.get(getDrawingsUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getDrawings', [])));
    };
    DrawingService.prototype.getDrawing = function (drawing_id) {
        return this.http.get(this.drawingsUrl + '/' + drawing_id);
    };
    DrawingService.prototype.updateDrawing = function (drawing) {
        return this.http.put(this.drawingsUrl + '/' + drawing.id, drawing)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return console.log('Update drawing'); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('updateDrawing', [])));
    };
    DrawingService.prototype.deleteDrawing = function (drawing_id) {
        return this.http.delete(this.drawingsUrl + '/' + drawing_id);
    };
    DrawingService.prototype.createInterpretation = function (interpretation) {
        return this.http.post(this.drawingsUrl + '/' + interpretation.drawing_id + '/interpretations', interpretation)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return console.log('Create interpretation'); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('updateDrawing', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DrawingService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    DrawingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DrawingService);
    return DrawingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map