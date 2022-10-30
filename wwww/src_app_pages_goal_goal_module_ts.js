"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_goal_goal_module_ts"],{

/***/ 5709:
/*!***************************************************!*\
  !*** ./src/app/pages/goal/goal-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalPageRoutingModule": () => (/* binding */ GoalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _goal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goal.page */ 2443);




const routes = [
    {
        path: '',
        component: _goal_page__WEBPACK_IMPORTED_MODULE_0__.GoalPage
    }
];
let GoalPageRoutingModule = class GoalPageRoutingModule {
};
GoalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GoalPageRoutingModule);



/***/ }),

/***/ 9127:
/*!*******************************************!*\
  !*** ./src/app/pages/goal/goal.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalPageModule": () => (/* binding */ GoalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _goal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goal-routing.module */ 5709);
/* harmony import */ var _goal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goal.page */ 2443);







let GoalPageModule = class GoalPageModule {
};
GoalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _goal_routing_module__WEBPACK_IMPORTED_MODULE_0__.GoalPageRoutingModule
        ],
        declarations: [_goal_page__WEBPACK_IMPORTED_MODULE_1__.GoalPage]
    })
], GoalPageModule);



/***/ }),

/***/ 2443:
/*!*****************************************!*\
  !*** ./src/app/pages/goal/goal.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalPage": () => (/* binding */ GoalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _goal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goal.page.html?ngResource */ 970);
/* harmony import */ var _goal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goal.page.scss?ngResource */ 6114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let GoalPage = class GoalPage {
    constructor() { }
    ngOnInit() {
    }
};
GoalPage.ctorParameters = () => [];
GoalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-goal',
        template: _goal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_goal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GoalPage);



/***/ }),

/***/ 6114:
/*!******************************************************!*\
  !*** ./src/app/pages/goal/goal.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb2FsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 970:
/*!******************************************************!*\
  !*** ./src/app/pages/goal/goal.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Goal</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   <ul> \n     <li><h3>Improve usability and the overall user experience of food delivery applications.</h3></li>\n  <li><h3>To deliver a unique experience to our customers through delivering great food, friendly, attentive service, excellent price and a welcoming presence</h3></li>\n</ul>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_goal_goal_module_ts.js.map