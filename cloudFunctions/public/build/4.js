webpackJsonp([4],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_firebase_service__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
        console.log('LoginModule constructor');
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ],
            entryComponents: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_services_firebase_service__["a" /* FirebaseService */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], LoginModule);
    return LoginModule;
}());

/*https://events-12be3.firebaseapp.com/__/auth/handler */ 
//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_core_auth_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_application_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_firebase_service__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(globalSrv, appSrv, navCtrl, authSrv, formBuilder, fs) {
        this.globalSrv = globalSrv;
        this.appSrv = appSrv;
        this.navCtrl = navCtrl;
        this.authSrv = authSrv;
        this.formBuilder = formBuilder;
        this.fs = fs;
        this.loginMode = "signIn";
        console.log('LoginPage constructor');
        this.todo = this.formBuilder.group({
            fcn_email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            fcn_password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    LoginPage.prototype.ngOnDestroy = function () {
        console.warn('HomePage destroy');
    };
    LoginPage.prototype.ngOnInit = function () {
        console.log('LoginPage init');
        // this.globalSrv.get('user').subscribe(data =>
        //   this.go(data)
        // );
        // this.authSrv.verifyLoggedIn().subscribe(data => {
        //    if (data) {
        //       var o = {
        //          username: data.displayName,
        //          email: data.email,
        //          photoURL: data.photoURL
        //       };
        //       this.globalSrv.save('user', o);
        //       this.navCtrl.setRoot('HomePage', data);
        //    }
        // });
    };
    LoginPage.prototype.register = function () {
        var _this = this;
        this.authSrv.registerUser(this.email, this.password).then(function (res) {
            if (!res) {
                _this.appSrv.message('Error', 'Usuario ya registrado!');
                return;
            }
            var usr = {
                email: _this.email,
                displayName: _this.username,
                photoURL: 'assets/imgs/person.png',
                uid: _this.getUid(_this.email)
            };
            _this.fs.addUser(usr).then(function (x) {
                _this.loginMode = 'signIn';
                _this.appSrv.message('Atencion', 'Usuario registrado OK!');
            });
        });
    };
    LoginPage.prototype.signin = function () {
        var _this = this;
        this.authSrv.signInUser(this.email, this.password).then(function (data) {
            if (data === undefined)
                _this.appSrv.message('Error', 'Usuario o contraseña no valida!');
            else {
                var usr = {
                    email: data.email,
                    displayName: data.displayName,
                    photoURL: 'assets/imgs/person.png',
                    uid: _this.getUid(data.email)
                };
                _this.globalSrv.save('user', usr);
                _this.navCtrl.setRoot('HomePage');
            }
        }).catch(function (err) {
            _this.appSrv.message('Error', 'Falla en la autenticacion!');
        });
    };
    LoginPage.prototype.loginGoogle = function () {
        var _this = this;
        this.authSrv.loginGoogle().then(function (x) {
            _this.fs.updateUser(x);
            _this.navCtrl.push('HomePage');
        });
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        this.authSrv.loginFacebook().then(function (x) {
            _this.fs.updateUser(x);
            _this.navCtrl.push('HomePage');
        });
    };
    LoginPage.prototype.getUid = function (str) {
        var res = str.replace(/\./gi, '');
        return res;
    };
    LoginPage.prototype.initUser = function (data) {
        this.globalSrv.save('user', data);
        this.go(data);
    };
    LoginPage.prototype.go = function (data) {
        if (data)
            this.navCtrl.setRoot('HomePage', data);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/pablomassad/development/projects/-meeting/code/src/pages/login/login.html"*/'<ion-content class="login_back">\n  <ion-row class="logoKM">\n    <ion-col col-3></ion-col>\n    <ion-col style="text-align:center">\n      <img src="assets/imgs/calendarIcon.png" style="width:100%; max-width:250px;">\n    </ion-col>\n    <ion-col col-3></ion-col>\n  </ion-row>\n\n  <ng-template #content>content here...</ng-template>\n  <!-- <user-profile></user-profile> -->\n  <div *ngIf="loginMode === \'signIn\'">\n    <form [formGroup]="todo">\n      <ion-row class="backForm">\n        <ion-col>\n          <ion-item floating style="background:transparent">\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" formControlName="fcn_email" [(ngModel)]="email" telnum></ion-input>\n          </ion-item>\n          <ion-item floating style="background:transparent">\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input type="password" formControlName="fcn_password" [(ngModel)]="password"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row style="margin-top: 10px">\n        <ion-col>\n          <button ion-button (click)="signin()" class="loginBtn" full type="submit" [disabled]="!todo.valid" round color="primary">\n            Ingresar\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="loginMode=\'signUp\'" class="loginBtn" full type="submit" round color="primary">\n            Registrarse\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n        </ion-col>\n        <ion-col style="text-align: center">\n          <button (click)="loginGoogle()" class="btnGoogle" type="submit">\n            <img src="assets/imgs/google.png">\n          </button>\n        </ion-col>\n        <ion-col style="text-align: center">\n          <button (click)="loginFacebook()" class="btnFacebook" type="submit">\n            <img src="assets/imgs/facebook.png">\n          </button>\n        </ion-col>\n        <ion-col>\n\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n\n  <div *ngIf="loginMode === \'signUp\'">\n\n      <ion-row class="backForm">\n        <ion-col>\n          <ion-item floating style="background:transparent">\n            <ion-label floating>Nombre de usuario</ion-label>\n            <ion-input type="text" [(ngModel)]="username"></ion-input>\n          </ion-item>\n          <ion-item floating style="background:transparent">\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email"  [(ngModel)]="email"></ion-input>\n          </ion-item>\n          <ion-item floating style="background:transparent">\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row style="margin-top: 10px">\n        <ion-col>\n          <button ion-button (click)="register()" class="loginBtn" full type="submit" round color="primary">\n            Registrarse\n          </button>\n        </ion-col>\n      </ion-row>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pablomassad/development/projects/-meeting/code/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_application_service__["a" /* ApplicationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_firebase_service__["a" /* FirebaseService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map