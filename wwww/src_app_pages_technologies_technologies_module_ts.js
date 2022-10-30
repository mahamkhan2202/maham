"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_technologies_technologies_module_ts"],{

/***/ 7384:
/*!*******************************************************************!*\
  !*** ./src/app/pages/technologies/technologies-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnologiesPageRoutingModule": () => (/* binding */ TechnologiesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _technologies_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technologies.page */ 8568);




const routes = [
    {
        path: '',
        component: _technologies_page__WEBPACK_IMPORTED_MODULE_0__.TechnologiesPage
    }
];
let TechnologiesPageRoutingModule = class TechnologiesPageRoutingModule {
};
TechnologiesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TechnologiesPageRoutingModule);



/***/ }),

/***/ 8914:
/*!***********************************************************!*\
  !*** ./src/app/pages/technologies/technologies.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnologiesPageModule": () => (/* binding */ TechnologiesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _technologies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technologies-routing.module */ 7384);
/* harmony import */ var _technologies_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./technologies.page */ 8568);







let TechnologiesPageModule = class TechnologiesPageModule {
};
TechnologiesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _technologies_routing_module__WEBPACK_IMPORTED_MODULE_0__.TechnologiesPageRoutingModule
        ],
        declarations: [_technologies_page__WEBPACK_IMPORTED_MODULE_1__.TechnologiesPage]
    })
], TechnologiesPageModule);



/***/ }),

/***/ 8568:
/*!*********************************************************!*\
  !*** ./src/app/pages/technologies/technologies.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnologiesPage": () => (/* binding */ TechnologiesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _technologies_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technologies.page.html?ngResource */ 834);
/* harmony import */ var _technologies_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./technologies.page.scss?ngResource */ 8199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TechnologiesPage = class TechnologiesPage {
    constructor() { }
    ngOnInit() {
    }
};
TechnologiesPage.ctorParameters = () => [];
TechnologiesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-technologies',
        template: _technologies_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_technologies_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TechnologiesPage);



/***/ }),

/***/ 8199:
/*!**********************************************************************!*\
  !*** ./src/app/pages/technologies/technologies.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNobm9sb2dpZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 834:
/*!**********************************************************************!*\
  !*** ./src/app/pages/technologies/technologies.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Technologies</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<h1><b>HTML</b></h1>\n<p>I have used in my courses before.I am good in it </p>\n<h1><b>CSS</b></h1>\n<p>I have used in my courses before.I have good command and its easy to use to personalize app</p>\n<h1><b>VISUAL STUDIO CODE </b></h1>\n<p>I am comfortable in using this vs code as it is one of the best tool to work on</p>\n<h1><b>JAVA Script </b></h1>\n<p>New user to java script and learning in this course </p>\n<h1><b> API </b></h1>\n<p>New user to java script and learning in this course </p>\n<h1><b>IONIC</b></h1>\n<p>New user to java script and learning in this course</p>\n<h1><b>ANGULAR</b></h1>\n<p>New user to java script and learning in this course </p>\n<h1><b>CHROME</b></h1>\n<p>Chrome is my browser to use .Chrome helps alot while working on the project </p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_technologies_technologies_module_ts.js.map