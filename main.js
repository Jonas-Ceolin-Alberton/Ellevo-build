(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modules_acesso_acesso_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/acesso/acesso.routing */ "./src/app/modules/acesso/acesso.routing.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_app_container_app_container_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/app-container/app-container.routing */ "./src/app/modules/app-container/app-container.routing.ts");





var routes = _modules_acesso_acesso_routing__WEBPACK_IMPORTED_MODULE_1__["AcessoRouting"].concat(_modules_app_container_app_container_routing__WEBPACK_IMPORTED_MODULE_4__["AppContainerRouting"]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'contacts';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm5/ngx-indexed-db.js");
/* harmony import */ var _core_db_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/db/config */ "./src/app/core/db/config.ts");
/* harmony import */ var _modules_app_container_app_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/app-container/app-container.module */ "./src/app/modules/app-container/app-container.module.ts");
/* harmony import */ var _modules_acesso_acesso_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/acesso/acesso.module */ "./src/app/modules/acesso/acesso.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            ],
            imports: [
                ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__["NgxIndexedDBModule"].forRoot(_core_db_config__WEBPACK_IMPORTED_MODULE_5__["DB_CONFIG"]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _modules_app_container_app_container_module__WEBPACK_IMPORTED_MODULE_6__["AppContainerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _modules_acesso_acesso_module__WEBPACK_IMPORTED_MODULE_7__["AcessoModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/auth/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.router.navigate(['/login', { returnUrl: state.url }]);
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/usuario.service */ "./src/app/shared/services/usuario.service.ts");
/* harmony import */ var src_app_shared_utils_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/util.service */ "./src/app/shared/utils/util.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(usuarioService, utilService, router) {
        this.usuarioService = usuarioService;
        this.utilService = utilService;
        this.router = router;
    }
    AuthService.prototype.loggedIn = function () {
        return localStorage.getItem('TOKEN');
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.navigateToLogin();
    };
    AuthService.prototype.doLogin = function (usuario) {
        var _this = this;
        this.usuarioService.getById(usuario.email).then(function (userDb) {
            if (_this.isAuthenticated(usuario, userDb)) {
                _this.setFakeToken(userDb.email);
                _this.setInfoUser(userDb);
                _this.navigateToApp();
            }
        }).catch(function () { return _this.showError('Usuário desconhecido'); });
    };
    AuthService.prototype.showError = function (error) {
        this.utilService.aviso(error);
    };
    AuthService.prototype.isAuthenticated = function (usuarioForm, userDb) {
        return usuarioForm.email === userDb.email &&
            usuarioForm.senha === userDb.senha;
    };
    AuthService.prototype.setFakeToken = function (token) {
        localStorage.setItem('TOKEN', token);
    };
    AuthService.prototype.setInfoUser = function (_a) {
        var email = _a.email, nome = _a.nome;
        localStorage.setItem('USER', JSON.stringify({ email: email, nome: nome }));
    };
    AuthService.prototype.navigateToApp = function () {
        this.router.navigate(['/app/contatos']);
    };
    AuthService.prototype.navigateToLogin = function () {
        this.router.navigate(['/login']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_shared_utils_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/db/config.ts":
/*!***********************************!*\
  !*** ./src/app/core/db/config.ts ***!
  \***********************************/
/*! exports provided: DB_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_CONFIG", function() { return DB_CONFIG; });
var DB_CONFIG = {
    name: 'APP',
    version: 1,
    objectStoresMeta: [
        {
            store: 'usuario',
            storeConfig: { keyPath: 'email', autoIncrement: false },
            storeSchema: [
                { name: 'nome', keypath: 'nome', options: { unique: false } },
                { name: 'email', keypath: 'email', options: { unique: false } },
                { name: 'senha', keypath: 'senha', options: { unique: false } }
            ]
        },
        {
            store: 'contato',
            storeConfig: { keyPath: 'id', autoIncrement: false },
            storeSchema: [
                { name: 'id', keypath: 'id', options: { unique: true } },
                { name: 'nome', keypath: 'nome', options: { unique: false } },
                { name: 'telefone', keypath: 'telefone', options: { unique: false } },
            ]
        }
    ],
};


/***/ }),

/***/ "./src/app/modules/acesso/acesso.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/acesso/acesso.module.ts ***!
  \*************************************************/
/*! exports provided: AcessoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcessoModule", function() { return AcessoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cadastro_usuario_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro-usuario/cadastro-usuario.component */ "./src/app/modules/acesso/cadastro-usuario/cadastro-usuario.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/acesso/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var AcessoModule = /** @class */ (function () {
    function AcessoModule() {
    }
    AcessoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _cadastro_usuario_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_6__["CadastroUsuarioComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ]
        })
    ], AcessoModule);
    return AcessoModule;
}());



/***/ }),

/***/ "./src/app/modules/acesso/acesso.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/acesso/acesso.routing.ts ***!
  \**************************************************/
/*! exports provided: AcessoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcessoRouting", function() { return AcessoRouting; });
/* harmony import */ var _cadastro_usuario_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-usuario/cadastro-usuario.component */ "./src/app/modules/acesso/cadastro-usuario/cadastro-usuario.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/acesso/login/login.component.ts");


var AcessoRouting = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'cadastro',
        component: _cadastro_usuario_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_0__["CadastroUsuarioComponent"]
    }
];


/***/ }),

/***/ "./src/app/modules/acesso/cadastro-usuario/cadastro-usuario.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/acesso/cadastro-usuario/cadastro-usuario.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cadastro-container {\r\n    margin: auto;\r\n    width: 300px;\r\n    height: 480px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n}\r\n\r\n.logo {\r\n    margin: auto;\r\n    width: 170px;\r\n    display: block;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    -webkit-user-drag: none;\r\n}\r\n\r\n.form {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-top: 20px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n}\r\n\r\n.main-button {\r\n    color: white;\r\n    font-size: 16px;\r\n    margin-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hY2Vzc28vY2FkYXN0cm8tdXN1YXJpby9jYWRhc3Ryby11c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7SUFDZCxxQkFBYztJQUFkLGNBQWM7SUFDZCw2QkFBa0I7SUFBbEIsOEJBQWtCO1lBQWxCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0kscUJBQWM7SUFBZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDZCQUFrQjtJQUFsQiw4QkFBa0I7WUFBbEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FjZXNzby9jYWRhc3Ryby11c3VhcmlvL2NhZGFzdHJvLXVzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWRhc3Ryby1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA0ODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYWluLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/acesso/cadastro-usuario/cadastro-usuario.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/acesso/cadastro-usuario/cadastro-usuario.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<mat-card class=\"cadastro-container\">\r\n\t\t<img class=\"logo\" src=\"../../../../assets/images/logo.png\">\r\n\t\t<form (ngSubmit)=\"onSubmit()\" #form=\"ngForm\" autocomplete=\"off\" class=\"form\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput color=\"primary\" placeholder=\"Nome completo\" name=\"nome\" [(ngModel)]=\"usuario.nome\"\r\n\t\t\t\t\trequired type=\"text\">\r\n\t\t\t</mat-form-field>\r\n\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput color=\"primary\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"usuario.email\" required\r\n\t\t\t\t\ttype=\"email\">\r\n\t\t\t</mat-form-field>\r\n\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput color=\"primary\" placeholder=\"Senha\" name=\"senha\" autocomplete=\"off\" [(ngModel)]=\"usuario.senha\" required\r\n\t\t\t\t\ttype=\"password\">\r\n\t\t\t</mat-form-field>\r\n\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput color=\"primary\" placeholder=\"Confirmar senha\" name=\"confirmacao\" required\r\n\t\t\t\t\ttype=\"password\" [ngModel]=\"confirmacaoPassword\" (ngModelChange)=\"confirmarPassword($event)\">\r\n\t\t\t\t<mat-error>As senhas devem ser compativeis</mat-error>\r\n\t\t\t</mat-form-field>\r\n\r\n\t\t\t<button class=\"main-button\" mat-raised-button color=\"primary\" type=\"submit\"\r\n\t\t\t\t[disabled]=\"form.invalid\">Cadastrar</button>\r\n\t\t</form>\r\n\t</mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/acesso/cadastro-usuario/cadastro-usuario.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/acesso/cadastro-usuario/cadastro-usuario.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CadastroUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroUsuarioComponent", function() { return CadastroUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/usuario.model */ "./src/app/shared/models/usuario.model.ts");
/* harmony import */ var src_app_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/usuario.service */ "./src/app/shared/services/usuario.service.ts");
/* harmony import */ var src_app_shared_utils_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/util.service */ "./src/app/shared/utils/util.service.ts");
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");






var CadastroUsuarioComponent = /** @class */ (function () {
    function CadastroUsuarioComponent(usuarioService, authService, utilService) {
        this.usuarioService = usuarioService;
        this.authService = authService;
        this.utilService = utilService;
        this.usuario = new src_app_shared_models_usuario_model__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.confirmacaoPassword = '';
    }
    CadastroUsuarioComponent.prototype.ngOnInit = function () {
    };
    CadastroUsuarioComponent.prototype.confirmarPassword = function (confirmacaoPassword) {
        if (this.usuario.senha !== confirmacaoPassword) {
            this.form.controls['confirmacao'].setErrors({ 'incorrect': true });
        }
    };
    CadastroUsuarioComponent.prototype.onSubmit = function () {
        var _this = this;
        this.usuarioService.save(this.usuario).then(function (user) { return _this.authService.doLogin(_this.usuario); }, function (error) { return _this.utilService.aviso('Erro ao tentar cadastrar usuario'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CadastroUsuarioComponent.prototype, "form", void 0);
    CadastroUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro-usuario',
            template: __webpack_require__(/*! ./cadastro-usuario.component.html */ "./src/app/modules/acesso/cadastro-usuario/cadastro-usuario.component.html"),
            styles: [__webpack_require__(/*! ./cadastro-usuario.component.css */ "./src/app/modules/acesso/cadastro-usuario/cadastro-usuario.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_shared_utils_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], CadastroUsuarioComponent);
    return CadastroUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/modules/acesso/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/modules/acesso/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\r\n    margin: auto;\r\n    width: 300px;\r\n    height: 400px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n}\r\n\r\n.logo {\r\n    margin: auto;\r\n    width: 170px;\r\n    display: block;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    -webkit-user-drag: none;\r\n}\r\n\r\n.form {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-top: 20px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n}\r\n\r\n.main-button {\r\n    color: white;\r\n    font-size: 16px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.cadastro {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    outline: none;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    margin-top: 20px;\r\n    color: #333333;\r\n    align-self: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hY2Vzc28vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFjO0lBQWQsY0FBYztJQUNkLDZCQUFrQjtJQUFsQiw4QkFBa0I7WUFBbEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsNkJBQWtCO0lBQWxCLDhCQUFrQjtZQUFsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHFCQUFjO0lBQWQsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hY2Vzc28vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYWluLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FkYXN0cm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/acesso/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/modules/acesso/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<mat-card class=\"login-container\">\r\n\t\t<img class=\"logo\" src=\"../../../../assets/images/logo.png\">\r\n\t\t<form (ngSubmit)=\"onSubmitForm()\" #form=\"ngForm\" autocomplete=\"off\" class=\"form\">\r\n            <mat-form-field  color=\"primary\" >\r\n                <input matInput placeholder=\"email\" name=\"email\"  [(ngModel)]=\"usuario.email\" required type=\"email\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput  color=\"primary\" placeholder=\"senha\" name=\"senha\" [(ngModel)]=\"usuario.senha\" required type=\"password\">\r\n            </mat-form-field>\r\n\r\n            <button class=\"main-button\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\">Entrar</button>\r\n        </form> \r\n        <span class=\"cadastro\" [routerLink]=\"['/cadastro']\" >Cadastre-se gratuitamente</span>\r\n\t</mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/acesso/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/acesso/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/usuario.model */ "./src/app/shared/models/usuario.model.ts");
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.usuario = new src_app_shared_models_usuario_model__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmitForm = function () {
        this.authService.doLogin(this.usuario);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/acesso/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/acesso/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/app-container/app-container.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/app-container/app-container.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-sidenav{\r\n    position: fixed;\r\n    float: left;\r\n    display: block;\r\n    width: 200px;\r\n    height: 100%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    background-color: white;\r\n    -webkit-transition: .3s;\r\n    transition: .3s;\r\n    z-index: 10;\r\n}\r\n\r\n.container-router {\r\n    overflow: auto;\r\n    will-change: transform3d;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .container-router {\r\n        padding: 0 10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHAtY29udGFpbmVyL2FwcC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwcC1jb250YWluZXIvYXBwLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zaWRlbmF2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXJvdXRlciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0zZDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNvbnRhaW5lci1yb3V0ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/app-container/app-container.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/app-container/app-container.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-toolbar style=\"z-index: 1;\"></app-toolbar>\r\n    <div class=\"container-router container\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/app-container/app-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/app-container/app-container.component.ts ***!
  \******************************************************************/
/*! exports provided: AppContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainerComponent", function() { return AppContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppContainerComponent = /** @class */ (function () {
    function AppContainerComponent() {
    }
    AppContainerComponent.prototype.ngOnInit = function () {
    };
    AppContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-container',
            template: __webpack_require__(/*! ./app-container.component.html */ "./src/app/modules/app-container/app-container.component.html"),
            styles: [__webpack_require__(/*! ./app-container.component.css */ "./src/app/modules/app-container/app-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppContainerComponent);
    return AppContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/app-container/app-container.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/app-container/app-container.module.ts ***!
  \***************************************************************/
/*! exports provided: AppContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainerModule", function() { return AppContainerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-container.component */ "./src/app/modules/app-container/app-container.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/modules/app-container/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contato_contato_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contato/contato.module */ "./src/app/modules/contato/contato.module.ts");










var AppContainerModule = /** @class */ (function () {
    function AppContainerModule() {
    }
    AppContainerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_container_component__WEBPACK_IMPORTED_MODULE_5__["AppContainerComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"],
            ],
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _contato_contato_module__WEBPACK_IMPORTED_MODULE_9__["ContatoModule"]
            ],
            providers: [],
        })
    ], AppContainerModule);
    return AppContainerModule;
}());



/***/ }),

/***/ "./src/app/modules/app-container/app-container.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/app-container/app-container.routing.ts ***!
  \****************************************************************/
/*! exports provided: AppContainerRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainerRouting", function() { return AppContainerRouting; });
/* harmony import */ var _app_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-container.component */ "./src/app/modules/app-container/app-container.component.ts");
/* harmony import */ var src_app_core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
/* harmony import */ var _contato_contato_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contato/contato.routing */ "./src/app/modules/contato/contato.routing.ts");



var AppContainerRouting = [
    {
        path: 'app',
        component: _app_container_component__WEBPACK_IMPORTED_MODULE_0__["AppContainerComponent"],
        canActivate: [src_app_core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        children: _contato_contato_routing__WEBPACK_IMPORTED_MODULE_2__["ContatoRouting"].slice()
    }
];


/***/ }),

/***/ "./src/app/modules/app-container/toolbar/toolbar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/app-container/toolbar/toolbar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    width: 100%;\r\n}\r\n\r\n.toolbar-container {\r\n    width: 100%;\r\n    height: 60px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    padding: 0px 15px;\r\n    box-shadow: 0px 1px 2px grey;\r\n    box-sizing: border-box;\r\n    z-index: 1;\r\n}\r\n\r\n.button-exit {\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.first-container h3{\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n}\r\n\r\n.nome {\r\n    position: absolute;\r\n    right: 50px;\r\n    top: 20px;\r\n    font-size: 17px;\r\n}\r\n\r\n.menu {\r\n    width: 20%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n.exit {\r\n    width: 20%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n@media screen and (max-width: 870px) {\r\n      .menu {\r\n        width: 50%;\r\n      }\r\n\r\n      .exit {\r\n        width: 50%;\r\n      }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHAtY29udGFpbmVyL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBYztJQUFkLGNBQWM7SUFDZCwwQkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0NBQ1o7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0NBQ25COztBQUdDO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBYztJQUFkLGNBQWM7SUFDZCwrQkFBb0I7SUFBcEIsOEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQiwwQkFBb0I7WUFBcEIsb0JBQW9CO0dBQ3JCOztBQUVEO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBYztJQUFkLGNBQWM7SUFDZCwrQkFBb0I7SUFBcEIsOEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQiwwQkFBb0I7WUFBcEIsb0JBQW9CO0dBQ3JCOztBQUVEO01BQ0k7UUFDRSxXQUFXO09BQ1o7O01BRUQ7UUFDRSxXQUFXO09BQ1o7R0FDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwLWNvbnRhaW5lci90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggZ3JleTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYnV0dG9uLWV4aXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5maXJzdC1jb250YWluZXIgaDN7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubm9tZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5leGl0IHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NzBweCkge1xyXG4gICAgICAubWVudSB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmV4aXQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/modules/app-container/toolbar/toolbar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/app-container/toolbar/toolbar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-container primary\">\n\t<div class=\"first-container\">\n\t\t<h3 *ngIf=\"!showBackButton\">Contatos</h3>\n\t\t<button mat-icon-button *ngIf=\"showBackButton\" (click)=\"navigationBack()\" >\n\t\t\t<mat-icon>arrow_back</mat-icon>\n\t\t</button>\n\t</div>\n\n\t<div class=\"exit\">\n\t\t<label class=\"nome\">Olá, {{nomeUsuario}}</label>\n\n\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"button-exit\">\n\t\t\t<mat-icon>person</mat-icon>\n\t\t</button>\n\t\t<mat-menu #menu=\"matMenu\">\n\t\t\t<button mat-menu-item (click)=\"doLogout()\">\n\t\t\t\t<mat-icon>exit_to_app</mat-icon>\n\t\t\t\t<span>Sair</span>\n\t\t\t</button>\n\t\t</mat-menu>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/modules/app-container/toolbar/toolbar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/app-container/toolbar/toolbar.component.ts ***!
  \********************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/usuario.service */ "./src/app/shared/services/usuario.service.ts");





var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(usuarioService, authService, router) {
        this.usuarioService = usuarioService;
        this.authService = authService;
        this.router = router;
        this.menuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.titulo = 'Edu';
        this.showBackButton = false;
        this.subscribeRouteChanges();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.getNomeUsuario();
    };
    ToolbarComponent.prototype.doLogout = function () {
        this.authService.logout();
    };
    ToolbarComponent.prototype.menuClicked = function () {
        this.menuToggle.emit();
    };
    ToolbarComponent.prototype.abrirConfiguracoes = function () {
        this.router.navigate(['app/configuracoes']);
    };
    ToolbarComponent.prototype.getNomeUsuario = function () {
        var nome = this.usuarioService.getInfoUser().nome;
        var index = nome.indexOf(' ');
        this.nomeUsuario = index >= 0 ? nome.substr(0, index) : nome;
    };
    ToolbarComponent.prototype.subscribeRouteChanges = function () {
        var _this = this;
        this.router.events.subscribe(function (rota) {
            if (rota instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.setConfigToolbar(rota);
            }
        });
    };
    ToolbarComponent.prototype.setConfigToolbar = function (rota) {
        var rotaContatos = '/app/contatos';
        if (rota.url === rotaContatos) {
            this.showBackButton = false;
            return;
        }
        this.showBackButton = true;
    };
    ToolbarComponent.prototype.navigationBack = function () {
        window.history.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ToolbarComponent.prototype, "menuToggle", void 0);
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/modules/app-container/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/modules/app-container/toolbar/toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/contato/card-contato/card-contato.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/contato/card-contato/card-contato.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contato-card {\r\n    max-width: 500px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    padding: 0!important;\r\n}\r\n\r\n.green-container {\r\n    width: 100%;\r\n    height: 120px;\r\n    background-image: -webkit-gradient(linear, left top, right top, from(#00928d), to(#00bcb6));\r\n    background-image: linear-gradient(to right, #00928d, #00bcb6);\r\n    border-radius: 4px 4px 0 0;\r\n    position: relative;\r\n}\r\n\r\n.photo-container {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    left: calc(50% - 50px);\r\n    bottom: -50px;\r\n    box-shadow: 0px 1px 2px grey;\r\n}\r\n\r\n.photo-container > mat-icon {\r\n    margin: auto;\r\n    font-size: 80px;\r\n    width: 80px;\r\n    height: 80px;\r\n    color: #c5c5c5;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.content {\r\n    padding: 50px 30px 30px 30px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YXRvL2NhcmQtY29udGF0by9jYXJkLWNvbnRhdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBYztJQUFkLGNBQWM7SUFDZCw2QkFBa0I7SUFBbEIsOEJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEZBQThEO0lBQTlELDhEQUE4RDtJQUM5RCwyQkFBMkI7SUFDM0IsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixxQkFBYztJQUFkLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsMEJBQWtCO09BQWxCLHVCQUFrQjtRQUFsQixzQkFBa0I7WUFBbEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFjO0lBQWQsY0FBYztJQUNkLDZCQUFrQjtJQUFsQiw4QkFBa0I7WUFBbEIsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb250YXRvL2NhcmQtY29udGF0by9jYXJkLWNvbnRhdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YXRvLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyZWVuLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDkyOGQsICMwMGJjYjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5waG90by1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggZ3JleTtcclxufVxyXG5cclxuLnBob3RvLWNvbnRhaW5lciA+IG1hdC1pY29uIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgY29sb3I6ICNjNWM1YzU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTBweCAzMHB4IDMwcHggMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/contato/card-contato/card-contato.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/contato/card-contato/card-contato.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"contato-card\">\n\t<div class=\"green-container\">\n\t\t<div class=\"photo-container\">\n\t\t\t<mat-icon>person</mat-icon>\n\t\t</div>\n\t</div>\n\t<div class=\"content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/contato/card-contato/card-contato.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/contato/card-contato/card-contato.component.ts ***!
  \************************************************************************/
/*! exports provided: CardContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContatoComponent", function() { return CardContatoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardContatoComponent = /** @class */ (function () {
    function CardContatoComponent() {
    }
    CardContatoComponent.prototype.ngOnInit = function () {
    };
    CardContatoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-contato',
            template: __webpack_require__(/*! ./card-contato.component.html */ "./src/app/modules/contato/card-contato/card-contato.component.html"),
            styles: [__webpack_require__(/*! ./card-contato.component.css */ "./src/app/modules/contato/card-contato/card-contato.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardContatoComponent);
    return CardContatoComponent;
}());



/***/ }),

/***/ "./src/app/modules/contato/contato-form/contato-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/contato/contato-form/contato-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column; \r\n}\r\n\r\n.save-button {\r\n    background-color: #00bcb6;\r\n    color: white;\r\n    margin-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YXRvL2NvbnRhdG8tZm9ybS9jb250YXRvLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCw2QkFBa0I7SUFBbEIsOEJBQWtCO1lBQWxCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb250YXRvL2NvbnRhdG8tZm9ybS9jb250YXRvLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47IFxyXG59XHJcblxyXG4uc2F2ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNiNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/contato/contato-form/contato-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/contato/contato-form/contato-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card-contato>\r\n\t<form #form=\"ngForm\" (ngSubmit)=\"salvarContato(contato)\" autocomplete=\"off\" class=\"form\">\r\n\t\t<mat-form-field>\r\n\t\t\t<input matInput placeholder=\"Nome\" name=\"nome\" [(ngModel)]=\"contato.nome\" required>\r\n\t\t</mat-form-field>\r\n\r\n\t\t<mat-form-field>\r\n\t\t\t<input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"contato.email\" required>\r\n\t\t</mat-form-field>\r\n\r\n\t\t<mat-form-field>\r\n\t\t\t<input matInput placeholder=\"Telefone\" name=\"telefone\" [(ngModel)]=\"contato.telefone\" required>\r\n\t\t</mat-form-field>\r\n\r\n\t\t<button class=\"save-button\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\">Salvar</button>\r\n\t</form>\r\n</app-card-contato>"

/***/ }),

/***/ "./src/app/modules/contato/contato-form/contato-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/contato/contato-form/contato-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ContatoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoFormComponent", function() { return ContatoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_contato_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/contato.service */ "./src/app/shared/services/contato.service.ts");
/* harmony import */ var src_app_shared_utils_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/util.service */ "./src/app/shared/utils/util.service.ts");
/* harmony import */ var src_app_shared_models_contato_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/contato.model */ "./src/app/shared/models/contato.model.ts");






var ContatoFormComponent = /** @class */ (function () {
    function ContatoFormComponent(route, utilService, contatoService) {
        var _this = this;
        this.route = route;
        this.utilService = utilService;
        this.contatoService = contatoService;
        this.contato = new src_app_shared_models_contato_model__WEBPACK_IMPORTED_MODULE_5__["Contato"]();
        this.route.queryParams.subscribe(function (params) {
            _this.getParamsFromRoute(params);
        });
    }
    ContatoFormComponent.prototype.getParamsFromRoute = function (params) {
        this.id = params['id'];
        this.mode = params['mode'];
        if (this.id)
            this.buscarUsuario(this.id);
    };
    ContatoFormComponent.prototype.buscarUsuario = function (id) {
        var _this = this;
        this.contatoService.getById(id).then(function (_contato) { return _this.contato = _contato; }, function (_error) { return _this.utilService.aviso('Erro ao buscar o contato'); });
    };
    ContatoFormComponent.prototype.salvarContato = function (contato) {
        var _this = this;
        this.contatoService.salvarContato(contato).then(function (_ok) {
            _this.utilService.aviso('Lista atualizada com sucesso!');
            window.history.back();
        }, function (_error) { return _this.utilService.aviso('Erro ao tentar salvar'); });
    };
    ContatoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-contato-form',
            template: __webpack_require__(/*! ./contato-form.component.html */ "./src/app/modules/contato/contato-form/contato-form.component.html"),
            styles: [__webpack_require__(/*! ./contato-form.component.css */ "./src/app/modules/contato/contato-form/contato-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_utils_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            src_app_shared_services_contato_service__WEBPACK_IMPORTED_MODULE_3__["ContatoService"]])
    ], ContatoFormComponent);
    return ContatoFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/contato/contato-view/contato-view.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/contato/contato-view/contato-view.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n}\r\n\r\n.buttons {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YXRvL2NvbnRhdG8tdmlldy9jb250YXRvLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFjO0lBQWQsY0FBYztJQUNkLDZCQUFrQjtJQUFsQiw4QkFBa0I7WUFBbEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGF0by9jb250YXRvLXZpZXcvY29udGF0by12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/contato/contato-view/contato-view.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/contato/contato-view/contato-view.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card-contato>\n\t<div class=\"buttons\">\n\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n\t\t\t<mat-icon>more_vert</mat-icon>\n\t\t</button>\n\t\t<mat-menu #menu=\"matMenu\">\n\t\t\t<button mat-menu-item (click)=\"navigateEdit(contato)\">\n\t\t\t\t<mat-icon>edit</mat-icon>\n\t\t\t\t<span>Editar</span>\n\t\t\t</button>\n\t\t\n\t\t\t<button mat-menu-item (click)=\"deletar(contato)\">\n\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t<span>Deletar</span>\n\t\t\t</button>\n\t\t</mat-menu>\n\t</div>\n\t<div class=\"info\">\n\t\t<h3>{{contato.nome}}</h3>\n\t\t<span>{{contato.email}}</span>\n\t\t<span>{{contato.telefone | phone}}</span>\n\t</div>\n</app-card-contato>"

/***/ }),

/***/ "./src/app/modules/contato/contato-view/contato-view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/contato/contato-view/contato-view.component.ts ***!
  \************************************************************************/
/*! exports provided: ContatoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoViewComponent", function() { return ContatoViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_contato_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/contato.service */ "./src/app/shared/services/contato.service.ts");
/* harmony import */ var src_app_shared_utils_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/util.service */ "./src/app/shared/utils/util.service.ts");
/* harmony import */ var src_app_shared_models_contato_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/contato.model */ "./src/app/shared/models/contato.model.ts");






var ContatoViewComponent = /** @class */ (function () {
    function ContatoViewComponent(router, route, utilService, contatoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.utilService = utilService;
        this.contatoService = contatoService;
        this.contato = new src_app_shared_models_contato_model__WEBPACK_IMPORTED_MODULE_5__["Contato"]();
        this.route.queryParams.subscribe(function (params) {
            _this.id = params['id'];
            _this.buscarUsuario(_this.id);
        });
    }
    ContatoViewComponent.prototype.buscarUsuario = function (id) {
        var _this = this;
        this.contatoService.getById(id).then(function (_contato) { return _this.contato = _contato; }, function (_error) { return _this.utilService.aviso('Erro ao buscar o contato'); });
    };
    ContatoViewComponent.prototype.navigateEdit = function (contato) {
        this.router.navigate(['app/contato/form'], { queryParams: { mode: 'new', id: contato.id } });
    };
    ContatoViewComponent.prototype.deletar = function (contato) {
        var _this = this;
        this.contatoService.delete(contato.id).then(function (_v) {
            _this.utilService.aviso('Contato Deletado');
            _this.router.navigate(['app/contatos']);
        });
    };
    ContatoViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-contato-view',
            template: __webpack_require__(/*! ./contato-view.component.html */ "./src/app/modules/contato/contato-view/contato-view.component.html"),
            styles: [__webpack_require__(/*! ./contato-view.component.css */ "./src/app/modules/contato/contato-view/contato-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_utils_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            src_app_shared_services_contato_service__WEBPACK_IMPORTED_MODULE_3__["ContatoService"]])
    ], ContatoViewComponent);
    return ContatoViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/contato/contato.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/contato/contato.module.ts ***!
  \***************************************************/
/*! exports provided: ContatoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoModule", function() { return ContatoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contato_view_contato_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contato-view/contato-view.component */ "./src/app/modules/contato/contato-view/contato-view.component.ts");
/* harmony import */ var _card_contato_card_contato_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-contato/card-contato.component */ "./src/app/modules/contato/card-contato/card-contato.component.ts");
/* harmony import */ var _contato_form_contato_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contato-form/contato-form.component */ "./src/app/modules/contato/contato-form/contato-form.component.ts");
/* harmony import */ var _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contatos/contatos.component */ "./src/app/modules/contato/contatos/contatos.component.ts");
/* harmony import */ var src_app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/pipes/pipe.module */ "./src/app/shared/pipes/pipe.module.ts");










var ContatoModule = /** @class */ (function () {
    function ContatoModule() {
    }
    ContatoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_8__["ContatosComponent"],
                _contato_view_contato_view_component__WEBPACK_IMPORTED_MODULE_5__["ContatoViewComponent"],
                _card_contato_card_contato_component__WEBPACK_IMPORTED_MODULE_6__["CardContatoComponent"],
                _contato_form_contato_form_component__WEBPACK_IMPORTED_MODULE_7__["ContatoFormComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                src_app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipeModule"],
            ]
        })
    ], ContatoModule);
    return ContatoModule;
}());



/***/ }),

/***/ "./src/app/modules/contato/contato.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/contato/contato.routing.ts ***!
  \****************************************************/
/*! exports provided: ContatoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoRouting", function() { return ContatoRouting; });
/* harmony import */ var _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contatos/contatos.component */ "./src/app/modules/contato/contatos/contatos.component.ts");
/* harmony import */ var _contato_view_contato_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contato-view/contato-view.component */ "./src/app/modules/contato/contato-view/contato-view.component.ts");
/* harmony import */ var _contato_form_contato_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contato-form/contato-form.component */ "./src/app/modules/contato/contato-form/contato-form.component.ts");



var ContatoRouting = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'contatos'
    },
    {
        path: 'contatos',
        component: _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_0__["ContatosComponent"]
    },
    {
        path: 'contato/view',
        component: _contato_view_contato_view_component__WEBPACK_IMPORTED_MODULE_1__["ContatoViewComponent"],
    },
    {
        path: 'contato/form',
        component: _contato_form_contato_form_component__WEBPACK_IMPORTED_MODULE_2__["ContatoFormComponent"],
    },
];


/***/ }),

/***/ "./src/app/modules/contato/contatos/contatos.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/contato/contatos/contatos.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\r\n    max-width: 900px;\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.qtd-contatos {\r\n    font-size: 20px;\r\n    color: #656565;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.item {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-flow: row;\r\n    padding: 20px;\r\n    border-top: 1px solid #e2e2e2;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    color: #656a6a;\r\n    cursor: pointer;\r\n}\r\n\r\n.item:last-child {\r\n    border-bottom: 1px solid #e2e2e2;\r\n}\r\n\r\n.item span {\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.user-icon {\r\n    color: #2fbcb6;\r\n    font-size: 40px;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-right: 30px;\r\n}\r\n\r\n.button-add {\r\n    background-color: #00928d;\r\n    color: white;\r\n    position: fixed;\r\n    right: 20px;\r\n    bottom: 20px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    \r\n    .item span:nth-child(1n + 3){\r\n        display: none;\r\n    }\r\n\r\n    :host {\r\n        padding: 0 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YXRvL2NvbnRhdG9zL2NvbnRhdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBYztJQUFkLGNBQWM7SUFDZCw2QkFBa0I7SUFBbEIsOEJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQiwwQkFBb0I7WUFBcEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCwrQkFBZTtJQUFmLDhCQUFlO1lBQWYsZUFBZTtJQUNmLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QiwwQkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxvQkFBUTtZQUFSLFFBQVE7Q0FDWDs7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDs7SUFFSTtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGF0by9jb250YXRvcy9jb250YXRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnF0ZC1jb250YXRvcyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzY1NjU2NTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UyZTJlMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY1NmE2YTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLml0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMjtcclxufVxyXG5cclxuLml0ZW0gc3BhbiB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICAgIGNvbG9yOiAjMmZiY2I2O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tYWRkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDkyOGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvdHRvbTogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBcclxuICAgIC5pdGVtIHNwYW46bnRoLWNoaWxkKDFuICsgMyl7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/contato/contatos/contatos.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/contato/contatos/contatos.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card-container\">\r\n\t<span class=\"qtd-contatos\">{{contatos.length}} Contatos Encontrados</span>\r\n\t<div class=\"item\" *ngFor=\"let contato of contatos\" (click)=\"navigateContatoView(contato)\">\r\n\t\t<mat-icon class=\"user-icon\">account_circle</mat-icon>\r\n\t\t<span>{{contato.nome}}</span>\r\n\t\t<span>{{contato.email}}</span>\r\n\t\t<span>{{contato.telefone | phone}}</span>\r\n\t</div>\r\n</mat-card>\r\n\r\n<button mat-fab class=\"button-add\" (click)=\"cadastrarUsuario()\">\r\n    <mat-icon>add</mat-icon>\r\n</button>"

/***/ }),

/***/ "./src/app/modules/contato/contatos/contatos.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/contato/contatos/contatos.component.ts ***!
  \****************************************************************/
/*! exports provided: ContatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosComponent", function() { return ContatosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_contato_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/contato.service */ "./src/app/shared/services/contato.service.ts");
/* harmony import */ var src_app_shared_utils_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils/util.service */ "./src/app/shared/utils/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContatosComponent = /** @class */ (function () {
    function ContatosComponent(router, utilService, contatoService) {
        this.router = router;
        this.utilService = utilService;
        this.contatoService = contatoService;
        this.contatos = [];
    }
    ContatosComponent.prototype.ngOnInit = function () {
        this.loadContatos();
    };
    ContatosComponent.prototype.loadContatos = function () {
        var _this = this;
        this.contatoService.getAll().then(function (_contatos) {
            _this.contatos = _contatos;
            _this.ordernarLista();
        }, function (error) { return _this.utilService.aviso('Erro ao carregar contatos'); });
    };
    ContatosComponent.prototype.ordernarLista = function () {
        this.contatos.sort(function (a, b) { return a.nome.localeCompare(b.nome); });
    };
    ContatosComponent.prototype.cadastrarUsuario = function () {
        this.router.navigate(['app/contato/form'], { queryParams: { mode: 'new' } });
    };
    ContatosComponent.prototype.navigateContatoView = function (contato) {
        this.router.navigate(['app/contato/view'], { queryParams: { id: contato.id } });
    };
    ContatosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contatos',
            template: __webpack_require__(/*! ./contatos.component.html */ "./src/app/modules/contato/contatos/contatos.component.html"),
            styles: [__webpack_require__(/*! ./contatos.component.css */ "./src/app/modules/contato/contatos/contatos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_shared_utils_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            src_app_shared_services_contato_service__WEBPACK_IMPORTED_MODULE_2__["ContatoService"]])
    ], ContatosComponent);
    return ContatosComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/contato.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/contato.model.ts ***!
  \************************************************/
/*! exports provided: Contato */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contato", function() { return Contato; });
var Contato = /** @class */ (function () {
    function Contato() {
    }
    return Contato;
}());



/***/ }),

/***/ "./src/app/shared/models/usuario.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/usuario.model.ts ***!
  \************************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/shared/pipes/phone/phone.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/phone/phone.pipe.ts ***!
  \**************************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
        this.REGEX = /(\d{2})(\d{5})(\d{4})/;
    }
    PhonePipe.prototype.transform = function (value, args) {
        if (value) {
            if (value.length === 11) {
                return value.replace(this.REGEX, '($1) $2-$3');
            }
            else {
                return value;
            }
        }
        return value;
    };
    PhonePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'phone'
        })
    ], PhonePipe);
    return PhonePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/pipe.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _phone_phone_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phone/phone.pipe */ "./src/app/shared/pipes/phone/phone.pipe.ts");




var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _phone_phone_pipe__WEBPACK_IMPORTED_MODULE_3__["PhonePipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _phone_phone_pipe__WEBPACK_IMPORTED_MODULE_3__["PhonePipe"]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/shared/services/abstract.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/abstract.service.ts ***!
  \*****************************************************/
/*! exports provided: AbstractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractService", function() { return AbstractService; });
var AbstractService = /** @class */ (function () {
    function AbstractService(store, dbService) {
        this.store = store;
        this.dbService = dbService;
    }
    AbstractService.prototype.save = function (obj) {
        return this.dbService.add(this.store, obj);
    };
    AbstractService.prototype.update = function (obj) {
        return this.dbService.update(this.store, obj);
    };
    AbstractService.prototype.getById = function (id) {
        return this.dbService.getByKey(this.store, id);
    };
    AbstractService.prototype.getAll = function () {
        return this.dbService.getAll(this.store);
    };
    AbstractService.prototype.delete = function (id) {
        return this.dbService.delete(this.store, id);
    };
    AbstractService.prototype.generateId = function () {
        return Math.random().toString(36).substr(2, 9);
    };
    return AbstractService;
}());



/***/ }),

/***/ "./src/app/shared/services/contato.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/contato.service.ts ***!
  \****************************************************/
/*! exports provided: ContatoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoService", function() { return ContatoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm5/ngx-indexed-db.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract.service */ "./src/app/shared/services/abstract.service.ts");




var ContatoService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContatoService, _super);
    function ContatoService(dbService) {
        return _super.call(this, 'contato', dbService) || this;
    }
    ContatoService.prototype.salvarContato = function (contato) {
        if (contato.id) {
            return this.update(contato);
        }
        contato.id = this.generateId();
        return this.save(contato);
    };
    ContatoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_indexed_db__WEBPACK_IMPORTED_MODULE_1__["NgxIndexedDBService"]])
    ], ContatoService);
    return ContatoService;
}(_abstract_service__WEBPACK_IMPORTED_MODULE_3__["AbstractService"]));



/***/ }),

/***/ "./src/app/shared/services/usuario.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/usuario.service.ts ***!
  \****************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm5/ngx-indexed-db.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract.service */ "./src/app/shared/services/abstract.service.ts");




var UsuarioService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsuarioService, _super);
    function UsuarioService(dbService) {
        return _super.call(this, 'usuario', dbService) || this;
    }
    UsuarioService.prototype.getInfoUser = function () {
        return JSON.parse(localStorage.getItem('USER'));
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_indexed_db__WEBPACK_IMPORTED_MODULE_1__["NgxIndexedDBService"]])
    ], UsuarioService);
    return UsuarioService;
}(_abstract_service__WEBPACK_IMPORTED_MODULE_3__["AbstractService"]));



/***/ }),

/***/ "./src/app/shared/utils/util.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/utils/util.service.ts ***!
  \**********************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UtilService = /** @class */ (function () {
    function UtilService(snackBar) {
        this.snackBar = snackBar;
    }
    UtilService.prototype.aviso = function (mensagem) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        config.duration = 2500;
        return this.snackBar.open(mensagem, 'OK', config);
    };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jonas\Desktop\DEV\Test-Ellevo\contacts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map