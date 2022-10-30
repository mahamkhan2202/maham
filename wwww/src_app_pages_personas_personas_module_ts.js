"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_personas_personas_module_ts"],{

/***/ 4721:
/*!***********************************************************!*\
  !*** ./src/app/pages/personas/personas-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonasPageRoutingModule": () => (/* binding */ PersonasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _personas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personas.page */ 8424);




const routes = [
    {
        path: '',
        component: _personas_page__WEBPACK_IMPORTED_MODULE_0__.PersonasPage
    }
];
let PersonasPageRoutingModule = class PersonasPageRoutingModule {
};
PersonasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PersonasPageRoutingModule);



/***/ }),

/***/ 4714:
/*!***************************************************!*\
  !*** ./src/app/pages/personas/personas.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonasPageModule": () => (/* binding */ PersonasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _personas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personas-routing.module */ 4721);
/* harmony import */ var _personas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personas.page */ 8424);







let PersonasPageModule = class PersonasPageModule {
};
PersonasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _personas_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonasPageRoutingModule
        ],
        declarations: [_personas_page__WEBPACK_IMPORTED_MODULE_1__.PersonasPage]
    })
], PersonasPageModule);



/***/ }),

/***/ 8424:
/*!*************************************************!*\
  !*** ./src/app/pages/personas/personas.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonasPage": () => (/* binding */ PersonasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _personas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personas.page.html?ngResource */ 7031);
/* harmony import */ var _personas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personas.page.scss?ngResource */ 2169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PersonasPage = class PersonasPage {
    constructor() { }
    ngOnInit() {
    }
};
PersonasPage.ctorParameters = () => [];
PersonasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-personas',
        template: _personas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_personas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PersonasPage);



/***/ }),

/***/ 2169:
/*!**************************************************************!*\
  !*** ./src/app/pages/personas/personas.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7031:
/*!**************************************************************!*\
  !*** ./src/app/pages/personas/personas.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Personas</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"assets/img/jimi.jpeg\"/>\n  <p>\n    Jimi is a fashion designer, he's completing his\n    Masters at the University of Lagos (UNILAG)\n    Most of his time is spent in his workshop and school and he has a hard time balancing work with his studies and can't seem to get himself to stand up to get food elsewhere. He's also new in Lagos so he doesn't know much about the city.\n    He wants to eat but faces difficulties as he doesn't have enough time to leave his work/ studies.</p>\n  <img src=\"assets/img/sarah.jpeg\"/>\n  <p> Sarah is a Nurse in Baltimore, U.S. She lives with her husband who is a Banker. They spend most of their time at work.\n    Sarah always feels tired after work and doesn't have the strength to cook food. But they have to eat as her husband doesn't know how to cook.\n    She doesn't want to go out for dinner because she's exhausted and is very selective of the food she eats.</p>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_personas_personas_module_ts.js.map