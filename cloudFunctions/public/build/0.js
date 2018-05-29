webpackJsonp([0,1],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventPageModule = /** @class */ (function () {
    function EventPageModule() {
        console.log('EventPageModule constructor');
    }
    EventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__event__["a" /* EventPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__event__["a" /* EventPage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__event__["a" /* EventPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]]
        }),
        __metadata("design:paramtypes", [])
    ], EventPageModule);
    return EventPageModule;
}());

;
//# sourceMappingURL=event.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_order_pipe__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_event_event_module__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pipes_search_info_pipe__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeModule = /** @class */ (function () {
    function HomeModule() {
        console.log('HomeModule constructor');
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__shared_pipes_search_info_pipe__["a" /* SearchInfoPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_event_event_module__["EventPageModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialSharing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(58);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Social Sharing
 * @description
 * Share text, files, images, and links via social networks, sms, and email.
 *
 * For Browser usage check out the Web Share API docs: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#web-share-api
 *
 * @usage
 * ```typescript
 * import { SocialSharing } from '@ionic-native/social-sharing';
 *
 * constructor(private socialSharing: SocialSharing) { }
 *
 * ...
 *
 * // Check if sharing via email is supported
 * this.socialSharing.canShareViaEmail().then(() => {
 *   // Sharing via email is possible
 * }).catch(() => {
 *   // Sharing via email is not possible
 * });
 *
 * // Share via email
 * this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
 *   // Success!
 * }).catch(() => {
 *   // Error!
 * });
 * ```
 */
var SocialSharing = (function (_super) {
    __extends(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shares using the share sheet
     * @param message {string} The message you would like to share.
     * @param subject {string} The subject
     * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
     * @param url {string} A URL to share
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.share = function (message, subject, file, url) {
        return;
    };
    /**
     * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
     * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareWithOptions = function (options) {
        return;
    };
    /**
     * Checks if you can share via a specific app.
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) {
        return;
    };
    /**
     * Shares directly to Twitter
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaTwitter = function (message, image, url) {
        return;
    };
    /**
     * Shares directly to Facebook
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaFacebook = function (message, image, url) {
        return;
    };
    /**
     * Shares directly to Facebook with a paste message hint
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @param pasteMessageHint {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) {
        return;
    };
    /**
     * Shares directly to Instagram
     * @param message {string}
     * @param image {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaInstagram = function (message, image) {
        return;
    };
    /**
     * Shares directly to WhatsApp
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) {
        return;
    };
    /**
     * Shares directly to a WhatsApp Contact
     * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
     * @param message {string} Message to send
     * @param image {string} Image to send (does not work on iOS
     * @param url {string} Link to send
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) {
        return;
    };
    /**
     * Share via SMS
     * @param messge {string} message to send
     * @param phoneNumber {string} Number or multiple numbers seperated by commas
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) {
        return;
    };
    /**
     * Checks if you can share via email
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.canShareViaEmail = function () {
        return;
    };
    /**
     * Share via Email
     * @param message {string}
     * @param subject {string}
     * @param to {string[]}
     * @param cc {string[]} Optional
     * @param bcc {string[]} Optional
     * @param files {string|string[]} Optional URL or local path to file(s) to attach
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) {
        return;
    };
    /**
     * Share via AppName
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) {
        return;
    };
    /**
     * defines the popup position before call the share method.
     * @param targetBounds {string} left, top, width, height
     */
    SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) { };
    /**
     * Save an array of images to the camera roll
     * @param  {string|string[]} fileOrFileArray Single or multiple files
     * @returns {Promise<any> }
     */
    SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray) {
        return;
    };
    SocialSharing.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    SocialSharing.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 4,
            errorIndex: 5
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "share", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareWithOptions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 5,
            errorIndex: 6,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "canShareVia", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaTwitter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaFacebook", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 4,
            errorIndex: 5,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaFacebookWithPasteMessageHint", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaInstagram", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaWhatsApp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 4,
            errorIndex: 5,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaWhatsAppToReceiver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaSMS", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "canShareViaEmail", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android'],
            successIndex: 6,
            errorIndex: 7
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Array, Array, Array, Object]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaEmail", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 5,
            errorIndex: 6,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareVia", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SocialSharing.prototype, "setIPadPopupCoordinates", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "saveToPhotoAlbum", null);
    SocialSharing = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'SocialSharing',
            plugin: 'cordova-plugin-x-socialsharing',
            pluginRef: 'plugins.socialsharing',
            repo: 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin',
            platforms: ['Android', 'Browser', 'iOS', 'Windows', 'Windows Phone']
        })
    ], SocialSharing);
    return SocialSharing;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = /** @class */ (function () {
    function EventService() {
        console.log('EventService constructor');
    }
    EventService.prototype.getDevices = function () {
        // const devicesRef = this.afs.collection('devices')
        // const devices$ = devicesRef.valueChanges()
        // return devices$;
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EventService);
    return EventService;
}());

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_application_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_global_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventPage = /** @class */ (function () {
    function EventPage(navParams, view, appSrv, globalSrv, evtSrv, socialSharing) {
        this.navParams = navParams;
        this.view = view;
        this.appSrv = appSrv;
        this.globalSrv = globalSrv;
        this.evtSrv = evtSrv;
        this.socialSharing = socialSharing;
        this.title = "Evento";
        this.toggleMode = false;
        console.log('EventPage constructor');
    }
    EventPage.prototype.ngOnDestroy = function () {
        console.warn('EventPage destroy');
    };
    EventPage.prototype.ngOnInit = function () {
        console.log('EventPage init');
        this.title = this.navParams.get('title');
        this.evt = this.navParams.get('evt');
        this.contacts = this.navParams.get('contacts');
    };
    EventPage.prototype.toggleMember = function (ev, u) {
        this.checkEditMode();
        this.processDays();
    };
    EventPage.prototype.onKeyEvent = function (event) {
        if (event.keyCode == 13) {
            //this.editEventNameFlag = false
        }
    };
    EventPage.prototype.onKeyUser = function (event) {
        if (event.keyCode == 13) {
            //this.editMode = false
        }
    };
    EventPage.prototype.availability = function (username) {
        if (!this.selectedMembers)
            return;
        var res = !(this.selectedMembers.indexOf(username) == -1);
        return res;
    };
    EventPage.prototype.selection = function (ev) {
        if (this.toggleMode == true)
            ev.hr.value = 1 - ev.hr.value;
        else
            this.selectedMembers = ev.hr.members;
    };
    EventPage.prototype.addContact = function () {
    };
    EventPage.prototype.closeModal = function () {
        this.view.dismiss(null);
    };
    EventPage.prototype.checkEditMode = function () {
        var cnt = 0;
        this.evt.members.forEach(function (m) {
            if (m.onoff == true)
                cnt = cnt + 1;
        });
        this.toggleMode = ((cnt == 1) && (this.evt.members[0].onoff == true));
    };
    EventPage.prototype.processDays = function () {
        var _this = this;
        this.resetDays(this.evt.days);
        this.dayKeys = Object.keys(this.evt.days);
        this.evt.members.forEach(function (member) {
            if (member.onoff === true) {
                _this.dayKeys.forEach(function (key) {
                    _this.evt.days[key].forEach(function (hr, i) {
                        var x = member.days[key][i].value;
                        hr.value = hr.value + x;
                        if (x > 0)
                            hr.members.push(member.username);
                    });
                });
            }
        });
    };
    EventPage.prototype.resetDays = function (days) {
        var emptyDays = {
            'LU': [
                { hour: 0, value: 0, members: [] },
                { hour: 1, value: 0, members: [] },
                { hour: 2, value: 0, members: [] },
                { hour: 3, value: 0, members: [] },
                { hour: 4, value: 0, members: [] },
                { hour: 5, value: 0, members: [] },
                { hour: 6, value: 0, members: [] },
                { hour: 7, value: 0, members: [] },
                { hour: 8, value: 0, members: [] },
                { hour: 9, value: 0, members: [] },
                { hour: 10, value: 0, members: [] },
                { hour: 11, value: 0, members: [] },
                { hour: 12, value: 0, members: [] },
                { hour: 13, value: 0, members: [] },
                { hour: 14, value: 0, members: [] },
                { hour: 15, value: 0, members: [] },
                { hour: 16, value: 0, members: [] },
                { hour: 17, value: 0, members: [] },
                { hour: 18, value: 0, members: [] },
                { hour: 19, value: 0, members: [] },
                { hour: 20, value: 0, members: [] },
                { hour: 21, value: 0, members: [] },
                { hour: 22, value: 0, members: [] },
                { hour: 23, value: 0, members: [] }
            ],
            'MA': [
                { hour: 0, value: 0, members: [] },
                { hour: 1, value: 0, members: [] },
                { hour: 2, value: 0, members: [] },
                { hour: 3, value: 0, members: [] },
                { hour: 4, value: 0, members: [] },
                { hour: 5, value: 0, members: [] },
                { hour: 6, value: 0, members: [] },
                { hour: 7, value: 0, members: [] },
                { hour: 8, value: 0, members: [] },
                { hour: 9, value: 0, members: [] },
                { hour: 10, value: 0, members: [] },
                { hour: 11, value: 0, members: [] },
                { hour: 12, value: 0, members: [] },
                { hour: 13, value: 0, members: [] },
                { hour: 14, value: 0, members: [] },
                { hour: 15, value: 0, members: [] },
                { hour: 16, value: 0, members: [] },
                { hour: 17, value: 0, members: [] },
                { hour: 18, value: 0, members: [] },
                { hour: 19, value: 0, members: [] },
                { hour: 20, value: 0, members: [] },
                { hour: 21, value: 0, members: [] },
                { hour: 22, value: 0, members: [] },
                { hour: 23, value: 0, members: [] }
            ],
            'MI': [
                { hour: 0, value: 0, members: [] },
                { hour: 1, value: 0, members: [] },
                { hour: 2, value: 0, members: [] },
                { hour: 3, value: 0, members: [] },
                { hour: 4, value: 0, members: [] },
                { hour: 5, value: 0, members: [] },
                { hour: 6, value: 0, members: [] },
                { hour: 7, value: 0, members: [] },
                { hour: 8, value: 0, members: [] },
                { hour: 9, value: 0, members: [] },
                { hour: 10, value: 0, members: [] },
                { hour: 11, value: 0, members: [] },
                { hour: 12, value: 0, members: [] },
                { hour: 13, value: 0, members: [] },
                { hour: 14, value: 0, members: [] },
                { hour: 15, value: 0, members: [] },
                { hour: 16, value: 0, members: [] },
                { hour: 17, value: 0, members: [] },
                { hour: 18, value: 0, members: [] },
                { hour: 19, value: 0, members: [] },
                { hour: 20, value: 0, members: [] },
                { hour: 21, value: 0, members: [] },
                { hour: 22, value: 0, members: [] },
                { hour: 23, value: 0, members: [] }
            ],
            'JU': [
                { hour: 0, value: 0, members: [] },
                { hour: 1, value: 0, members: [] },
                { hour: 2, value: 0, members: [] },
                { hour: 3, value: 0, members: [] },
                { hour: 4, value: 0, members: [] },
                { hour: 5, value: 0, members: [] },
                { hour: 6, value: 0, members: [] },
                { hour: 7, value: 0, members: [] },
                { hour: 8, value: 0, members: [] },
                { hour: 9, value: 0, members: [] },
                { hour: 10, value: 0, members: [] },
                { hour: 11, value: 0, members: [] },
                { hour: 12, value: 0, members: [] },
                { hour: 13, value: 0, members: [] },
                { hour: 14, value: 0, members: [] },
                { hour: 15, value: 0, members: [] },
                { hour: 16, value: 0, members: [] },
                { hour: 17, value: 0, members: [] },
                { hour: 18, value: 0, members: [] },
                { hour: 19, value: 0, members: [] },
                { hour: 20, value: 0, members: [] },
                { hour: 21, value: 0, members: [] },
                { hour: 22, value: 0, members: [] },
                { hour: 23, value: 0, members: [] }
            ],
            'VI': [
                { hour: 0, value: 0, members: [] },
                { hour: 1, value: 0, members: [] },
                { hour: 2, value: 0, members: [] },
                { hour: 3, value: 0, members: [] },
                { hour: 4, value: 0, members: [] },
                { hour: 5, value: 0, members: [] },
                { hour: 6, value: 0, members: [] },
                { hour: 7, value: 0, members: [] },
                { hour: 8, value: 0, members: [] },
                { hour: 9, value: 0, members: [] },
                { hour: 10, value: 0, members: [] },
                { hour: 11, value: 0, members: [] },
                { hour: 12, value: 0, members: [] },
                { hour: 13, value: 0, members: [] },
                { hour: 14, value: 0, members: [] },
                { hour: 15, value: 0, members: [] },
                { hour: 16, value: 0, members: [] },
                { hour: 17, value: 0, members: [] },
                { hour: 18, value: 0, members: [] },
                { hour: 19, value: 0, members: [] },
                { hour: 20, value: 0, members: [] },
                { hour: 21, value: 0, members: [] },
                { hour: 22, value: 0, members: [] },
                { hour: 23, value: 0, members: [] }
            ],
            'SA': [
                { hour: 0, value: 0, members: [] },
                { hour: 1, value: 0, members: [] },
                { hour: 2, value: 0, members: [] },
                { hour: 3, value: 0, members: [] },
                { hour: 4, value: 0, members: [] },
                { hour: 5, value: 0, members: [] },
                { hour: 6, value: 0, members: [] },
                { hour: 7, value: 0, members: [] },
                { hour: 8, value: 0, members: [] },
                { hour: 9, value: 0, members: [] },
                { hour: 10, value: 0, members: [] },
                { hour: 11, value: 0, members: [] },
                { hour: 12, value: 0, members: [] },
                { hour: 13, value: 0, members: [] },
                { hour: 14, value: 0, members: [] },
                { hour: 15, value: 0, members: [] },
                { hour: 16, value: 0, members: [] },
                { hour: 17, value: 0, members: [] },
                { hour: 18, value: 0, members: [] },
                { hour: 19, value: 0, members: [] },
                { hour: 20, value: 0, members: [] },
                { hour: 21, value: 0, members: [] },
                { hour: 22, value: 0, members: [] },
                { hour: 23, value: 0, members: [] }
            ],
            'DO': [
                { hour: 0, value: 0, members: [] },
                { hour: 1, value: 0, members: [] },
                { hour: 2, value: 0, members: [] },
                { hour: 3, value: 0, members: [] },
                { hour: 4, value: 0, members: [] },
                { hour: 5, value: 0, members: [] },
                { hour: 6, value: 0, members: [] },
                { hour: 7, value: 0, members: [] },
                { hour: 8, value: 0, members: [] },
                { hour: 9, value: 0, members: [] },
                { hour: 10, value: 0, members: [] },
                { hour: 11, value: 0, members: [] },
                { hour: 12, value: 0, members: [] },
                { hour: 13, value: 0, members: [] },
                { hour: 14, value: 0, members: [] },
                { hour: 15, value: 0, members: [] },
                { hour: 16, value: 0, members: [] },
                { hour: 17, value: 0, members: [] },
                { hour: 18, value: 0, members: [] },
                { hour: 19, value: 0, members: [] },
                { hour: 20, value: 0, members: [] },
                { hour: 21, value: 0, members: [] },
                { hour: 22, value: 0, members: [] },
                { hour: 23, value: 0, members: [] }
            ]
        };
        this.evt.days = emptyDays;
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Users/pablomassad/development/projects/-meeting/code/src/components/event/event.html"*/'<ion-header class="grdToolbar">\n  <img class="logoTipo" src="assets/imgs/calendar.png">\n  <div class="title">{{title}}</div>\n  <ion-icon class="btnClose" (click)="closeModal()" name="close-circle"></ion-icon>\n</ion-header>\n\n<ion-content class="backEvent">\n  <div class="grdEvento">\n    <div id="evento">\n      <ion-item>\n        <ion-label>{{evt.name}}</ion-label>\n        <div>{{evt.description}}</div>\n      </ion-item>\n    </div>\n    <!-- <div id="fCreacion">\n      {{evt.creationDate | date:\'dd/MM/yyyy HH:mm\'}}\n    </div> -->\n    <div id="participantes">\n      <div class="grdMembers">\n        <div *ngFor="let ct of contacts" class="member">\n          <div>\n            <img *ngIf="availability(ct.id)" src="assets/imgs/check.png" class="selMember">\n          </div>\n          <div style="margin-top:4px">{{usr.displayName}}</div>\n          <ion-toggle [(ngModel)]="ct.onoff" (ionChange)="toggleMember($event)" style="padding:5px"></ion-toggle>\n        </div>\n      </div>\n    </div>\n    <div id="dias">\n      <div class="grdDays">\n        <div class="grdDaysNames">\n          <div></div>\n          <div *ngFor="let d of dayKeys">\n            <div class="dayName">{{d}}</div>\n          </div>\n        </div>\n        <div class="grdScheduler">\n          <div class="daysNum">\n            <div>0</div>\n            <div>1</div>\n            <div>2</div>\n            <div>3</div>\n            <div>4</div>\n            <div>5</div>\n            <div>6</div>\n            <div>7</div>\n            <div>8</div>\n            <div>9</div>\n            <div>10</div>\n            <div>11</div>\n            <div>12</div>\n            <div>13</div>\n            <div>14</div>\n            <div>15</div>\n            <div>16</div>\n            <div>17</div>\n            <div>18</div>\n            <div>19</div>\n            <div>20</div>\n            <div>21</div>\n            <div>22</div>\n            <div>23</div>\n          </div>\n          <div class="grdCalendar">\n            <div *ngFor="let d of dayKeys">\n              <hours [dictionary]="evt.days[d]" [max]="evt.members.length" (selectedCell)="selection($event)"></hours>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pablomassad/development/projects/-meeting/code/src/components/event/event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_application_service__["a" /* ApplicationService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_3__event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], EventPage);
    return EventPage;
}());

/*
// this.evt.members = [
//    {
//       username: 'Pablo', onoff: true, days: {
//          'LU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 1 },
//             { hour: 14, value: 1 },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 1 },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'JU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'VI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'SA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'DO': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ]
//       }
//    },
//    {
//       username: 'Lucas', onoff: false, days: {
//          'LU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'JU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'VI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 1 },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 1 },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'SA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 1 },
//             { hour: 9, value: 1 },
//             { hour: 10, value: 1 },
//             { hour: 11, value: 1 },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 1 },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'DO': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ]
//       }
//    },
//    {
//       username: 'Fernanado', onoff: false, days: {
//          'LU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'JU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'VI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'SA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 1 },
//             { hour: 9, value: 1 },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 1 },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 1 },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'DO': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ]
//       }
//    },
//    {
//       username: 'Mariana', onoff: false, days: {
//          'LU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 1 },
//             { hour: 9, value: 1 },
//             { hour: 10, value: 1 },
//             { hour: 11, value: 1 },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 1 },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 1 },
//             { hour: 8, value: 1 },
//             { hour: 9, value: 1 },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'JU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'VI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 1 },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 1 },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'SA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 1 },
//             { hour: 9, value: 1 },
//             { hour: 10, value: 1 },
//             { hour: 11, value: 1 },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 1 },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'DO': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 1 },
//             { hour: 19, value: 1 },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ]
//       }
//    },
//    {
//       username: 'Juan', onoff: false, days: {
//          'LU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 1 },
//             { hour: 9, value: 1 },
//             { hour: 10, value: 1 },
//             { hour: 11, value: 1 },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'JU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'VI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'SA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 1 },
//             { hour: 9, value: 1 },
//             { hour: 10, value: 1 },
//             { hour: 11, value: 1 },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 1 },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'DO': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ]
//       }
//    },
//    {
//       username: 'Pato', onoff: false, days: {
//          'LU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'MI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'JU': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'VI': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 1 },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'SA': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 1 },
//             { hour: 21, value: 1 },
//             { hour: 22, value: 1 },
//             { hour: 23, value: 0, members: [] }
//          ],
//          'DO': [
//             { hour: 0, value: 0, members: [] },
//             { hour: 1, value: 0, members: [] },
//             { hour: 2, value: 0, members: [] },
//             { hour: 3, value: 0, members: [] },
//             { hour: 4, value: 0, members: [] },
//             { hour: 5, value: 0, members: [] },
//             { hour: 6, value: 0, members: [] },
//             { hour: 7, value: 0, members: [] },
//             { hour: 8, value: 0, members: [] },
//             { hour: 9, value: 0, members: [] },
//             { hour: 10, value: 0, members: [] },
//             { hour: 11, value: 0, members: [] },
//             { hour: 12, value: 0, members: [] },
//             { hour: 13, value: 0, members: [] },
//             { hour: 14, value: 0, members: [] },
//             { hour: 15, value: 0, members: [] },
//             { hour: 16, value: 0, members: [] },
//             { hour: 17, value: 0, members: [] },
//             { hour: 18, value: 0, members: [] },
//             { hour: 19, value: 0, members: [] },
//             { hour: 20, value: 0, members: [] },
//             { hour: 21, value: 0, members: [] },
//             { hour: 22, value: 0, members: [] },
//             { hour: 23, value: 0, members: [] }
//          ]
//       }
//    }
// ]
*/
/*********************
 *** EVENTOS ***
 [
    {
       id : "343523523423",
       owner : "23432532534",
       eventName: "Reunion de Consorcio",
       description: "Reunion Besares 3950",
       creationDate: 12325524324,
       modDate: 12324142155,
       estimatedDate: 1231231342432,
       members: [
         {
             idUser:123231321,
             data: [
               {day:"180522", hours:[9,10,11,18,19,20]},
               {day:"180525", hours:[19,20]},
               {day:"180522", hours:[9,10,11]}
               ]
         },
         {
             idUser:2424242,
             data: [
               {day:"180522", hours:[18,19,20]},
               {day:"180525", hours:[20]},
               {day:"180527", hours:[10,11]}
               ]
         },
         {
             idUser:987654545677,
             data: [
               {day:"180523", hours:[18,19,20]},
               {day:"180525", hours:[20]}
               ]
         },
         {
             idUser:443332,
             data: [
               {day:"180522", hours:[19,20,21,22]}
               ]
         },
         {
             idUser:43433222,
             data: []
         }
       ]
    }
 ]


 *** USUARIOS ***
 [
    {
       id : "343523523423",
       mail:"ponic12@gmail.com",
       username: "ponic12",
       name: "Pablo"
       avatar: "http://google.com/sdfs34332434",
       events:[
         "343534335354353",
         "454934343434343",
         "354543333344422"
       ]
   },
  {
       id : "343523523423",
       mail:"patriciagonzalezvillar@gmail.com",
       username: "patriciagonzalezvillar",
       name: "Pato"
       avatar: "http://google.com/sdfs34332434",
       events:[
         "993930309380111",
         "454934343434343"
       ]
   },
**********************/ 
//# sourceMappingURL=event.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_application_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_core_auth_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_firebase_service__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    //    { creationDate: 1526296836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Consorcio Besares 3950', description: 'Reunion de consorcio para definir tareas' },
    //    { creationDate: 1524295836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Cumple Gallo', description: 'Fiesta sorpresa' },
    //    { creationDate: 1522294836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Vacaciones invierno 2018', description: 'Rango de fechas de vacas' },
    //    { creationDate: 1521293836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Viaje Espana 2018', description: 'Reunion de integrantes' },
    //    { creationDate: 1520292836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Reunion Siemens', description: 'Ex trabajadores de Siemens' }
    // ]
    function HomePage(navCtrl, navParams, actionCtrl, appSrv, globalSrv, authSrv, modal, fs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionCtrl = actionCtrl;
        this.appSrv = appSrv;
        this.globalSrv = globalSrv;
        this.authSrv = authSrv;
        this.modal = modal;
        this.fs = fs;
        this.title = "Meeting Master";
        this.today = new Date().getTime();
        this.sortField = 'creationDate';
        this.direction = false;
        console.log('HomePage contructor');
        this.user = this.globalSrv.getVar('user');
        // let ph = this.user.photoURL// this.navParams.get('photoURL')
        // if (ph)
        //    this.photoPath = ph
        // else
        //    this.photoPath = "assets/imgs/person.png"
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('HomePage init');
        this.fs.getContactsByUid(this.user.uid).subscribe(function (data) {
            _this.user.contacts = data;
        });
        this.fs.getEventsByUid(this.user.uid).subscribe(function (data) {
            _this.events = data;
        });
    };
    HomePage.prototype.ngOnDestroy = function () {
        console.log('HomePage destroy');
    };
    HomePage.prototype.addEvent = function () {
        var _this = this;
        var mod = this.modal.create('EditEventPage', {
            title: 'Nuevo Evento',
            evt: { members: [] },
            contacts: this.mapMembersToContacts(this.user.contacts, [])
        }, {});
        mod.present();
        mod.onDidDismiss(function (data) {
            if (data === null)
                return;
            data.evt.members = _this.mapContactsToMembers(data.contacts);
            data.evt.creationDate = new Date().getTime();
            data.evt.modificationDate = new Date().getTime();
            data.evt.owner = _this.user.uid;
            _this.fs.addEvent(data.evt);
        });
    };
    HomePage.prototype.editEvent = function (ev, i) {
        var _this = this;
        var mod = this.modal.create('EditEventPage', {
            title: 'Editar Evento',
            evt: ev,
            contacts: this.mapMembersToContacts(this.user.contacts, ev.members)
        }, {});
        mod.present();
        mod.onDidDismiss(function (data) {
            if (data === null)
                return;
            data.evt.members = _this.mapContactsToMembers(data.contacts);
            data.evt.modificationDate = new Date().getTime();
            _this.fs.saveEvent(data.evt);
        });
    };
    HomePage.prototype.showEvent = function (ev, i) {
        var mod = this.modal.create('EventPage', {
            title: 'Evento',
            evt: { ev: ev },
            contacts: this.mapMembersToContacts(this.user.contacts, ev.members)
        }, {});
        mod.present();
        mod.onDidDismiss(function (evt) {
        });
    };
    HomePage.prototype.removeEvent = function (ev, i) {
    };
    HomePage.prototype.openMenuSheet = function () {
        var _this = this;
        var actionSheet = this.actionCtrl.create({
            title: 'Opciones',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Salir',
                    handler: function () {
                        console.log('Logout!!!');
                        _this.logout();
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.getSortedEvents = function (sort, fab) {
        this.sortField = sort;
        this.direction = !this.direction;
        fab.close();
    };
    HomePage.prototype.getSortName = function () {
        if (this.sortField === "creationDate")
            return "Fecha";
        else
            return "Evento";
    };
    HomePage.prototype.getIcon = function () {
        if (this.direction === true)
            return "arrow-dropdown";
        else
            return "arrow-dropup";
    };
    HomePage.prototype.mapMembersToContacts = function (contacts, members) {
        var lst = [];
        contacts.forEach(function (item) {
            var sel = members[item.id];
            item.selected = (sel != undefined);
            lst.push(item);
        });
        return lst;
    };
    HomePage.prototype.mapContactsToMembers = function (contacts) {
        var members = {};
        contacts.forEach(function (item) {
            if (item.selected)
                members[item.id] = true;
        });
        return members;
    };
    HomePage.prototype.logout = function () {
        this.appSrv.message('Aviso', 'Saliendo...');
        this.globalSrv.save('user', null);
        this.authSrv.signOutUser();
        this.navCtrl.setRoot('LoginPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/pablomassad/development/projects/-meeting/code/src/pages/home/home.html"*/'<ion-header class="grdToolbar">\n  <img class="logoTipo" src="assets/imgs/events.png">\n  <div class="title">Meeting Master</div>\n  <ion-avatar item-start (click)="openMenuSheet()">\n    <img class="avatar" [src]="user.photoURL">\n  </ion-avatar>\n</ion-header>\n\n<ion-content class="backHome">\n\n  <ion-grid>\n    <ion-row>\n      <ion-icon name="search" class="searchIcon"></ion-icon>\n      <ion-input type="text" class="searchBar" placeholder="Buscar Evento" [(ngModel)]="searchText"></ion-input>\n      <p>Orden: {{getSortName()}}</p>\n      <ion-icon name="{{getIcon()}}" class="sortName searchIcon"></ion-icon>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf="events">\n    <ion-item-sliding class="eventCard" *ngFor="let evt of events | searchInfo: searchText | orderBy:sortField:direction ">\n      <ion-item class="grdEvent" [ngClass]="{\'evtClosed\' : evt.estimatedDate < today }">\n        <div>\n          <strong>Evento:</strong> {{evt.name}}\n        </div>\n        <div>\n          <strong>Descripcion:</strong> {{evt.description}}\n        </div>\n        <div>\n          <strong>Creacion:</strong>\n          {{evt.creationDate | date:\'dd/MM/yyyy HH:mm\'}}\n        </div>\n        <!-- <div>\n          <strong>\n            Ultima modificacion:\n          </strong>\n          {{evt.lastModification | date:\'dd/MM/yyyy HH:mm\'}}\n        </div> -->\n        <!-- <div>\n          <strong>Fecha estimada: </strong>\n          {{evt.estimatedDate | date:\'dd/MM/yyyy HH:mm\'}}\n        </div> -->\n        <div class="adminFlag" *ngIf="evt.owner === user.uid">\n          <img src="assets/imgs/crown.png">\n        </div>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button (click)="removeEvent(evt, i)" *ngIf="evt.owner === user.uid" color="danger">\n          <ion-icon name="trash"></ion-icon> Eliminar\n        </button>\n      </ion-item-options>\n      <ion-item-options side="left">\n        <button ion-button (click)="showEvent(evt, i)" color="primary">\n          <ion-icon name="calendar"></ion-icon> Entrar\n        </button>\n        <button ion-button (click)="editEvent(evt, i)" *ngIf="evt.owner === user.uid" color="secondary">\n          <ion-icon name="create"></ion-icon> Editar\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab class="btnAddEvent" bottom right>\n    <button ion-fab mini (click)="addEvent()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-fab class="btnSort" top right #fab>\n    <button ion-fab mini>\n      <ion-icon name="funnel"></ion-icon>\n    </button>\n    <ion-fab-list>\n      <button ion-fab mini (click)="getSortedEvents(\'creationDate\', fab)">\n        <ion-icon name="calendar"></ion-icon>\n      </button>\n      <button ion-fab mini (click)="getSortedEvents(\'name\', fab)">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/pablomassad/development/projects/-meeting/code/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_application_service__["a" /* ApplicationService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_firebase_service__["a" /* FirebaseService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrderPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var OrderPipe = /** @class */ (function () {
    function OrderPipe() {
    }
    /**
     * Check if a value is a string
     *
     * @param {?} value
     * @return {?}
     */
    OrderPipe.isString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    /**
     * Sorts values ignoring the case
     *
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    OrderPipe.caseInsensitiveSort = function (a, b) {
        if (OrderPipe.isString(a) && OrderPipe.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe.defaultCompare(a, b);
    };
    /**
     * Default compare method
     *
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    OrderPipe.defaultCompare = function (a, b) {
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    };
    /**
     * Parse expression, split into items
     * @param {?} expression
     * @return {?}
     */
    OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    };
    /**
     * Get value by expression
     *
     * @param {?} object
     * @param {?} expression
     * @return {?}
     */
    OrderPipe.getValue = function (object, expression) {
        for (var /** @type {?} */ i = 0, /** @type {?} */ n = expression.length; i < n; ++i) {
            var /** @type {?} */ k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param {?} object
     * @param {?} value
     * @param {?} expression
     * @return {?}
     */
    OrderPipe.setValue = function (object, value, expression) {
        var /** @type {?} */ i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    /**
     * @param {?} value
     * @param {?=} expression
     * @param {?=} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    OrderPipe.prototype.transform = function (value, expression, reverse, isCaseInsensitive, comparator) {
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        if (!value) {
            return value;
        }
        if (Array.isArray(expression)) {
            return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, comparator);
        }
        if (Array.isArray(value)) {
            return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === 'object') {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param {?} value
     * @param {?=} expression
     * @param {?=} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    OrderPipe.prototype.sortArray = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var /** @type {?} */ isDeepLink = expression && expression.indexOf('.') !== -1;
        if (isDeepLink) {
            expression = OrderPipe.parseExpression(expression);
        }
        var /** @type {?} */ compareFn;
        if (comparator && typeof comparator === 'function') {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive ? OrderPipe.caseInsensitiveSort : OrderPipe.defaultCompare;
        }
        var /** @type {?} */ array = value.sort(function (a, b) {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe.getValue(a, expression), OrderPipe.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param {?} value
     * @param {?=} expression
     * @param {?=} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    OrderPipe.prototype.transformObject = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var /** @type {?} */ parsedExpression = OrderPipe.parseExpression(expression);
        var /** @type {?} */ lastPredicate = parsedExpression.pop();
        var /** @type {?} */ oldValue = OrderPipe.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    };
    /**
     * Apply multiple expressions
     *
     * @param {?} value
     * @param {?} expressions
     * @param {?} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    OrderPipe.prototype.multiExpressionTransform = function (value, expressions, reverse, isCaseInsensitive, comparator) {
        var _this = this;
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        return expressions.reverse().reduce(function (result, expression) {
            return _this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    };
    return OrderPipe;
}());
OrderPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */], args: [{
                name: 'orderBy',
                pure: false
            },] },
];
/**
 * @nocollapse
 */
OrderPipe.ctorParameters = function () { return []; };
/**
 * Created by vadimdez on 20/01/2017.
 */
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    return OrderModule;
}());
OrderModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                declarations: [OrderPipe],
                exports: [OrderPipe],
                providers: [OrderPipe]
            },] },
];
/**
 * @nocollapse
 */
OrderModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-order-pipe.es5.js.map


/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInfoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchInfoPipe = /** @class */ (function () {
    function SearchInfoPipe() {
    }
    SearchInfoPipe.prototype.transform = function (arr, searchText) {
        return arr.filter(function (item) {
            if (!searchText)
                searchText = "";
            var str = JSON.stringify(item).toLowerCase();
            return (str.indexOf(searchText.toLowerCase()) !== -1);
        });
    };
    SearchInfoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'searchInfo' })
    ], SearchInfoPipe);
    return SearchInfoPipe;
}());

//# sourceMappingURL=search-info.pipe.js.map

/***/ })

});
//# sourceMappingURL=0.js.map