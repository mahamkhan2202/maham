"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_critique_critique_module_ts"],{

/***/ 4773:
/*!***********************************************************!*\
  !*** ./src/app/pages/critique/critique-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CritiquePageRoutingModule": () => (/* binding */ CritiquePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _critique_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./critique.page */ 2968);




const routes = [
    {
        path: '',
        component: _critique_page__WEBPACK_IMPORTED_MODULE_0__.CritiquePage
    }
];
let CritiquePageRoutingModule = class CritiquePageRoutingModule {
};
CritiquePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CritiquePageRoutingModule);



/***/ }),

/***/ 2706:
/*!***************************************************!*\
  !*** ./src/app/pages/critique/critique.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CritiquePageModule": () => (/* binding */ CritiquePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _critique_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./critique-routing.module */ 4773);
/* harmony import */ var _critique_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./critique.page */ 2968);







let CritiquePageModule = class CritiquePageModule {
};
CritiquePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _critique_routing_module__WEBPACK_IMPORTED_MODULE_0__.CritiquePageRoutingModule
        ],
        declarations: [_critique_page__WEBPACK_IMPORTED_MODULE_1__.CritiquePage]
    })
], CritiquePageModule);



/***/ }),

/***/ 2968:
/*!*************************************************!*\
  !*** ./src/app/pages/critique/critique.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CritiquePage": () => (/* binding */ CritiquePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _critique_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./critique.page.html?ngResource */ 6840);
/* harmony import */ var _critique_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./critique.page.scss?ngResource */ 9864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CritiquePage = class CritiquePage {
    constructor() { }
    ngOnInit() {
    }
};
CritiquePage.ctorParameters = () => [];
CritiquePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-critique',
        template: _critique_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_critique_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CritiquePage);



/***/ }),

/***/ 9864:
/*!**************************************************************!*\
  !*** ./src/app/pages/critique/critique.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcml0aXF1ZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6840:
/*!**************************************************************!*\
  !*** ./src/app/pages/critique/critique.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Critique</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card> \n    <ion-card-header><b>BURRPLE</b></ion-card-header>\n    <img src=\"assets/img/brupple.png\" />\n</ion-card>\n  <ul>\n    <h1><b>Pros</b></h1>\n\n    <li>Love the idea of food and people</li>\n    <li>Community driven</li>\n    <li>Direct feedback from consumers with frequent hangouts</li>\n    <li>Agile based development</li>\n    \n    <h1><b>Cons</b></h1>\n    \n    <li>Does not have a big team, if large scale collaboration is something you desire</li></ul>\n    <ion-card> \n      <ion-card-header><b>JOVI</b></ion-card-header>\n      <img src=\"assets/img/Jovi.png\" />\n  </ion-card>\n    <ul>\n      <h1><b>Pros</b></h1>\n  \n      <li>Grear idea of food places</li>\n      <li>Community driven</li>\n      \n      \n      <h1><b>Cons</b></h1>\n      \n      <li>Does not have a big team, if large scale collaboration is something you desire</li>\n      <li>Slow services</li></ul>\n  \n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_critique_critique_module_ts.js.map