"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sketches_sketches_module_ts"],{

/***/ 3315:
/*!***********************************************************!*\
  !*** ./src/app/pages/sketches/sketches-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SketchesPageRoutingModule": () => (/* binding */ SketchesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _sketches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sketches.page */ 263);




const routes = [
    {
        path: '',
        component: _sketches_page__WEBPACK_IMPORTED_MODULE_0__.SketchesPage
    }
];
let SketchesPageRoutingModule = class SketchesPageRoutingModule {
};
SketchesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SketchesPageRoutingModule);



/***/ }),

/***/ 2822:
/*!***************************************************!*\
  !*** ./src/app/pages/sketches/sketches.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SketchesPageModule": () => (/* binding */ SketchesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sketches_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sketches-routing.module */ 3315);
/* harmony import */ var _sketches_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sketches.page */ 263);







let SketchesPageModule = class SketchesPageModule {
};
SketchesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sketches_routing_module__WEBPACK_IMPORTED_MODULE_0__.SketchesPageRoutingModule
        ],
        declarations: [_sketches_page__WEBPACK_IMPORTED_MODULE_1__.SketchesPage]
    })
], SketchesPageModule);



/***/ }),

/***/ 263:
/*!*************************************************!*\
  !*** ./src/app/pages/sketches/sketches.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SketchesPage": () => (/* binding */ SketchesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sketches_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sketches.page.html?ngResource */ 9652);
/* harmony import */ var _sketches_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sketches.page.scss?ngResource */ 3583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SketchesPage = class SketchesPage {
    constructor() { }
    ngOnInit() {
    }
};
SketchesPage.ctorParameters = () => [];
SketchesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sketches',
        template: _sketches_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sketches_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SketchesPage);



/***/ }),

/***/ 3583:
/*!**************************************************************!*\
  !*** ./src/app/pages/sketches/sketches.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2V0Y2hlcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9652:
/*!**************************************************************!*\
  !*** ./src/app/pages/sketches/sketches.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sketches</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>Login</h1>\n  <img src=\"assets/img/tab6.png\" width=\"302\" height=\"655\"/><br>\n<h1>  Main page </h1>\n<img src=\"assets/img/tab1.png\" width=\"302\" height=\"655\"/><br>\n<h1>  Side Drawer </h1>\n<img src=\"assets/img/tab2.png\" width=\"302\" height=\"655\"/><br>\n<h1>  Profile </h1>\n<img src=\"assets/img/tab3.png\" width=\"302\" height=\"655\"/><br>\n<h1>  Payments </h1>\n<img src=\"assets/img/tab4.png\" width=\"302\" height=\"655\"/><br>\n<h1> Menu </h1>\n<img src=\"assets/img/tab5.png\" width=\"302\" height=\"655\"/><br>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sketches_sketches_module_ts.js.map