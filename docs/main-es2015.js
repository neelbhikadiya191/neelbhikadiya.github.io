(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AboutComponent {
    constructor() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 8, vars: 1, consts: [[1, "container"], [1, "profile-card"], [1, "title"], ["routerLink", "/projects", 1, "btn", "btn-projects"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi, I'm Neel Bhikadiya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I am currently pursuing my bachelor's degree in computer engineering. I like javascript and I also love working with frameworks like Angular, React, Node, and Django. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "See Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@aboutAnimation", undefined);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["div.container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: white;\n}\n\na.btn-projects[_ngcontent-%COMP%] {\n  background-color: #bd1c3c;\n  margin: 2em 0;\n  font-size: 1.2em;\n  transform-origin: center;\n  -webkit-animation: 5s 1s buttonanim infinite;\n          animation: 5s 1s buttonanim infinite;\n}\n\n@-webkit-keyframes buttonanim {\n  0% {\n    transform: rotate(6deg);\n  }\n  2% {\n    transform: rotate(-6deg);\n  }\n  4% {\n    transform: rotate(6deg);\n  }\n  6% {\n    transform: rotate(-6deg);\n  }\n  8% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes buttonanim {\n  0% {\n    transform: rotate(6deg);\n  }\n  2% {\n    transform: rotate(-6deg);\n  }\n  4% {\n    transform: rotate(6deg);\n  }\n  6% {\n    transform: rotate(-6deg);\n  }\n  8% {\n    transform: rotate(0deg);\n  }\n}\n\n.profile-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2em;\n}\n\n.profile-card[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n  font-weight: 1000;\n  padding: 30px 0;\n  font-size: 4rem;\n}\n\n.profile-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto 1em;\n  font-size: 1.3em;\n  max-width: 500px;\n}\n\n@media screen and (max-width: 700px) {\n  .profile-card[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n  .profile-card[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtBQUNGOztBQUFFO0VBQ0U7SUFDRSx1QkFBQTtFQUVKO0VBQUU7SUFDRSx3QkFBQTtFQUVKO0VBQUU7SUFDRSx1QkFBQTtFQUVKO0VBQUU7SUFDRSx3QkFBQTtFQUVKO0VBQUU7SUFDRSx1QkFBQTtFQUVKO0FBQ0Y7O0FBakJFO0VBQ0U7SUFDRSx1QkFBQTtFQUVKO0VBQUU7SUFDRSx3QkFBQTtFQUVKO0VBQUU7SUFDRSx1QkFBQTtFQUVKO0VBQUU7SUFDRSx3QkFBQTtFQUVKO0VBQUU7SUFDRSx1QkFBQTtFQUVKO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFERTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQzFDRTtFRDRCRjtJQWNJLFlBQUE7RUFJRjtFQUhFO0lBQ0UsaUJBQUE7RUFLSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi9nbG9iYWwuc2Nzcyc7XG5kaXYuY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuYS5idG4tcHJvamVjdHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAyOCwgNjApO1xuICBtYXJnaW46IDJlbSAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogNXMgMXMgYnV0dG9uYW5pbSBpbmZpbml0ZTtcbiAgQGtleWZyYW1lcyBidXR0b25hbmltIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcbiAgICB9XG4gICAgMiUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xuICAgIH1cbiAgICA0JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcbiAgICB9XG4gICAgNiUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xuICAgIH1cbiAgICA4JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gIH1cbn1cbi5wcm9maWxlLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJlbTtcbiAgaDEudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luOiAwIGF1dG8gMWVtO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxuICBAaW5jbHVkZSBnbG9iYWwucmVzcG9uc2l2ZSg3MDBweCkge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBoMS50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiByZXNwb25zaXZlKCR3aWR0aCkge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkd2lkdGgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('aboutAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('h1.title', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-100px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-out'),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('p', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(100px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-out'),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('a.btn', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(100px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-out'),
                        ]),
                    ]),
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('aboutAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('h1.title', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-100px)' }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-out'),
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('p', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(100px)' }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-out'),
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('a.btn', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(100px)' }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-out'),
                                ]),
                            ]),
                        ]),
                    ]),
                ],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'about' },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "bg"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["div.bg[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  -webkit-animation: 6s animatebg infinite linear alternate;\n          animation: 6s animatebg infinite linear alternate;\n}\n@-webkit-keyframes animatebg {\n  0% {\n    background-color: #512da8;\n  }\n  50% {\n    background-color: #00838f;\n  }\n  100% {\n    background-color: #1976d2;\n  }\n}\n@keyframes animatebg {\n  0% {\n    background-color: #512da8;\n  }\n  50% {\n    background-color: #00838f;\n  }\n  100% {\n    background-color: #1976d2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7VUFBQSxpREFBQTtBQUNGO0FBQUU7RUFDRTtJQUNFLHlCQUFBO0VBRUo7RUFBRTtJQUNFLHlCQUFBO0VBRUo7RUFBRTtJQUNFLHlCQUFBO0VBRUo7QUFDRjtBQVhFO0VBQ0U7SUFDRSx5QkFBQTtFQUVKO0VBQUU7SUFDRSx5QkFBQTtFQUVKO0VBQUU7SUFDRSx5QkFBQTtFQUVKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuYmcge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGFuaW1hdGlvbjogNnMgYW5pbWF0ZWJnIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGU7XG4gIEBrZXlmcmFtZXMgYW5pbWF0ZWJnIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTEyZGE4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODM4ZjtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _commons_default_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commons/default.pipe */ "./src/app/commons/default.pipe.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
        _commons_default_pipe__WEBPACK_IMPORTED_MODULE_10__["DefaultPipe"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"],
        _details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
                    _project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                    _commons_default_pipe__WEBPACK_IMPORTED_MODULE_10__["DefaultPipe"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"],
                    _details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/commons/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/commons/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DataService {
    constructor(http) {
        this.http = http;
        this.getRepositories = () => this.http
            .get('https://api.github.com/users/neelbhikadiya191/repos')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Check your internet connction.');
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/commons/default.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/commons/default.pipe.ts ***!
  \*****************************************/
/*! exports provided: DefaultPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPipe", function() { return DefaultPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DefaultPipe {
    transform(value, ...args) {
        if (!value) {
            return 'No Description.';
        }
        return value;
    }
}
DefaultPipe.ɵfac = function DefaultPipe_Factory(t) { return new (t || DefaultPipe)(); };
DefaultPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "default", type: DefaultPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'default',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _commons_default_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/default.pipe */ "./src/app/commons/default.pipe.ts");





function DetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.closeDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_1_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Visit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r4.p.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Repository");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DetailsComponent_div_1_a_14_Template, 2, 1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailsAnim", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.p.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.p.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, ctx_r1.p.created_at, "short"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx_r1.p.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.p.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.p.homepage);
} }
class DetailsComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeDetails = () => this.close.emit(true);
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["project-details"]], inputs: { p: "p" }, outputs: { close: "close" }, decls: 2, vars: 2, consts: [["class", "backdrop", 3, "click", 4, "ngIf"], ["class", "details-card", 4, "ngIf"], [1, "backdrop", 3, "click"], [1, "details-card"], [1, "content"], [1, "badge"], [1, "btn", "btn-details", "btn-repo", 3, "href"], ["class", "btn btn-details btn-visit", 3, "href", 4, "ngIf"], [1, "btn", "btn-details", "btn-visit", 3, "href"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailsComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsComponent_div_1_Template, 15, 12, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.p);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.p);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _commons_default_pipe__WEBPACK_IMPORTED_MODULE_3__["DefaultPipe"]], styles: [".backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.details-card[_ngcontent-%COMP%] {\n  position: fixed;\n  max-width: 700px;\n  width: 90%;\n  background-color: white;\n  min-height: 100px;\n  top: 50%;\n  left: 50%;\n  margin: 0 auto;\n  transform-origin: top;\n  border-radius: 14px;\n  z-index: 20;\n  transform: translate(-50%, -50%);\n}\n\n.details-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n\n.details-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n\n.details-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin: 8px 0 12px;\n}\n\n.details-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  font-weight: 600;\n  display: inline-block;\n  color: white;\n  margin: 0 0 8px;\n  border-radius: 4px;\n  background-color: #3055a3;\n  padding: 4px 10px;\n}\n\n.details-card[_ngcontent-%COMP%]   .btn-details[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin: 0 8px 0 0;\n  border: none;\n}\n\n.details-card[_ngcontent-%COMP%]   .btn-repo[_ngcontent-%COMP%] {\n  background-color: #cc2727;\n}\n\n.details-card[_ngcontent-%COMP%]   .btn-visit[_ngcontent-%COMP%] {\n  background-color: #1d6d47;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUVGOztBQURFO0VBQ0UsWUFBQTtBQUdKOztBQUZJO0VBQ0UsZUFBQTtBQUlOOztBQUZJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUlOOztBQUZJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFJTjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREU7RUFDRSx5QkFBQTtBQUdKOztBQURFO0VBQ0UseUJBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi5kZXRhaWxzLWNhcmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgei1pbmRleDogMjA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGgyIHtcbiAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgbWFyZ2luOiA4cHggMCAxMnB4O1xuICAgIH1cbiAgICBzcGFuLmJhZGdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA4NSwgMTYzKTtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIH1cbiAgfVxuICAuYnRuLWRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgbWFyZ2luOiAwIDhweCAwIDA7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC5idG4tcmVwbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMzksIDM5KTtcbiAgfVxuICAuYnRuLXZpc2l0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ2ZDQ3O1xuICB9XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailsAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translate(-50%,50%) scaleY(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translate(-50%,-50%) scaleY(1)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s ease-out')]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'project-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailsAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translate(-50%,50%) scaleY(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translate(-50%,-50%) scaleY(1)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s ease-out')]),
                    ]),
                ],
            }]
    }], function () { return []; }, { p: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _commons_default_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commons/default.pipe */ "./src/app/commons/default.pipe.ts");



class ProjectComponent {
    constructor() { }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["project"]], inputs: { p: "p" }, decls: 8, vars: 4, consts: [[1, "card"], [1, "card-design"], [1, "title"], [1, "card-body"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.p.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.p.description));
    } }, pipes: [_commons_default_pipe__WEBPACK_IMPORTED_MODULE_1__["DefaultPipe"]], styles: ["div.card[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  background: white;\n  position: relative;\n  border-radius: 14px;\n  height: 100%;\n  box-sizing: border-box;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  padding: 1em;\n  transition: 0.3s;\n  overflow: hidden;\n}\ndiv.card[_ngcontent-%COMP%]:hover, div.card[_ngcontent-%COMP%]:focus {\n  transform: scale(1.03);\n}\ndiv.card[_ngcontent-%COMP%]   .card-design[_ngcontent-%COMP%] {\n  z-index: 0;\n  background: linear-gradient(45deg, orange, yellow);\n  position: absolute;\n  height: 5em;\n  width: 102%;\n  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4);\n  transform-origin: left;\n  top: 0;\n  left: -4px;\n  transform: rotate(-5deg);\n}\ndiv.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  margin-top: 3em;\n}\ndiv.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\ndiv.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n}\n@media screen and (max-width: 321px) {\n  div.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n  div.card[_ngcontent-%COMP%]   .card-design[_ngcontent-%COMP%] {\n    height: 4.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUNFO0VBRUUsc0JBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FBQUo7QUFFRTtFQUNFLGVBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBQUo7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUNuQ0U7RURzQ0U7SUFDRSxnQkFBQTtFQUFKO0VBRUU7SUFDRSxhQUFBO0VBQUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uL2dsb2JhbCc7XG5kaXYuY2FyZCB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMWVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICB9XG4gIC5jYXJkLWRlc2lnbiB7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIG9yYW5nZSwgeWVsbG93KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgd2lkdGg6IDEwMiU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC00cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG4gIC5jYXJkLWJvZHkge1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgfVxuICBoMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgfVxuICBAaW5jbHVkZSBnbG9iYWwucmVzcG9uc2l2ZSgzMjFweCkge1xuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgfVxuICAgIC5jYXJkLWRlc2lnbiB7XG4gICAgICBoZWlnaHQ6IDQuNWVtO1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIHJlc3BvbnNpdmUoJHdpZHRoKSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR3aWR0aCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss']
            }]
    }], function () { return []; }, { p: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _commons_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/data.service */ "./src/app/commons/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");








function ProjectsComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_1_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.selectproject(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "project", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cardAnim", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p", r_r6);
} }
function ProjectsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_1_div_4_Template, 2, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@projectsAnim", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.repos);
} }
function ProjectsComponent_ng_template_3_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "spinner");
} }
function ProjectsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectsComponent_ng_template_3_spinner_0_Template, 1, 0, "spinner", 1);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.error == null)("ngIfElse", _r3);
} }
function ProjectsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Something went wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please check your internet connection.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_ng_template_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.retry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Try Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProjectsComponent {
    constructor(service) {
        this.service = service;
        this.closeDetails = () => (this.selected = null);
        this.selectproject = (i) => (this.selected = this.repos[i]);
    }
    ngOnInit() {
        this.getRepos();
    }
    getRepos() {
        this.sub = this.service.getRepositories().subscribe((res) => (this.repos = res), (err) => (this.error = err));
    }
    retry() {
        this.sub.unsubscribe();
        this.error = null;
        this.getRepos();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commons_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 7, vars: 3, consts: [[1, "container"], [4, "ngIf", "ngIfElse"], [3, "p", "close"], ["spinner", ""], ["errorMsg", ""], [1, "grid"], ["class", "col", 3, "click", 4, "ngFor", "ngForOf"], [1, "col", 3, "click"], [3, "p"], [1, "error"], [1, "fa", "fa-exclamation-circle"], [1, "btn", "btn-retry", 3, "click"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "project-details", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ProjectsComponent_Template_project_details_close_2_listener() { return ctx.closeDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_ng_template_3_Template, 1, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_ng_template_5_Template, 9, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.repos != null)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p", ctx.selected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]], styles: ["div.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 10px 14px;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  margin-bottom: 1em;\n}\n\ndiv.grid[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\ndiv.grid[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media screen and (max-width: 700px) {\n  div.grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.error[_ngcontent-%COMP%] {\n  padding: 1em;\n  margin: 1em;\n  text-align: center;\n  color: white;\n}\n\n.error[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5em;\n  margin: 0;\n}\n\n.error[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n\n.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 7px 0;\n  font-size: 1.2rem;\n}\n\n.btn-retry[_ngcontent-%COMP%] {\n  background-color: brown;\n  font-size: 1.1em;\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBRUY7O0FBREU7RUFDRSxjQUFBO0FBR0o7O0FDcEJFO0VEVUY7SUFVSSwwQkFBQTtFQUlGO0FBQ0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUpFO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUFNSjs7QUFKRTtFQUNFLGlCQUFBO0FBTUo7O0FBSkU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFIQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBTUYiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uL2dsb2JhbC5zY3NzJztcbmRpdi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbn1cbmgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbmRpdi5ncmlkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxNnB4O1xuICAuY29sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBAaW5jbHVkZSBnbG9iYWwucmVzcG9uc2l2ZSg3MDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4uZXJyb3Ige1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luOiA3cHggMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuLmJ0bi1yZXRyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBtYXJnaW46IDVweCAwO1xufVxuIiwiQG1peGluIHJlc3BvbnNpdmUoJHdpZHRoKSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR3aWR0aCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('projectsAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@cardAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('.1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])())]),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'scale(.3)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.4s ease-out'),
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('projectsAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@cardAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('.1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])())]),
                        ]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'scale(.3)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.4s ease-out'),
                        ]),
                    ]),
                ],
            }]
    }], function () { return [{ type: _commons_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpinnerComponent {
    constructor() { }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["spinner"]], decls: 4, vars: 0, consts: [[1, "spinner-container"], [1, "spinner"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1em 0;\n  margin: 1em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = ["social"];
const _c1 = ["icon"];
class ToolbarComponent {
    constructor() { }
    toggle() {
        this.social.nativeElement.classList.toggle('active');
        this.icon.nativeElement.classList.toggle('fa-times');
        this.icon.nativeElement.classList.toggle('fa-user');
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["toolbar"]], viewQuery: function ToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.social = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
    } }, decls: 24, vars: 0, consts: [[1, "toolbar"], [1, "social"], ["social", ""], [1, "toggle", 3, "click"], [1, "fa", "fa-user"], ["icon", ""], ["href", "https://github.com/neelbhikadiya191/"], [1, "fa", "fa-github"], ["href", "mailto:neelbhikaidya191@gmail.com"], [1, "fa", "fa-envelope"], ["href", "https://www.linkedin.com/in/neel-bhikadiya-90945a142/"], [1, "fa", "fa-linkedin"], [1, "menu"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/projects", "routerLinkActive", "active"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_3_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["div.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  height: 80px;\n  align-items: center;\n  justify-content: space-between;\n}\ndiv.toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n}\ndiv.toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n.social[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n.social[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%] {\n  border: none;\n  line-height: 52px;\n  background-color: transparent;\n  border-radius: 26px;\n  width: 52px;\n  height: 52px;\n  display: none;\n  transition: 0.4s;\n  transition-delay: 0.3s;\n  font-size: 2em;\n  color: white;\n}\n.social[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  font-size: 2em;\n}\n@media screen and (max-width: 700px) {\n  .social[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 10px;\n  }\n  .social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    text-align: center;\n    flex-direction: column;\n    position: absolute;\n    transition: 0.3s;\n    background: rgba(0, 0, 0, 0.8);\n    padding: 0 10px 10px 10px;\n    transform-origin: top;\n    border-radius: 0 0 30px 30px;\n    transform: scaleY(0);\n    z-index: 10;\n  }\n  .social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 5px 0;\n  }\n  .social[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .social.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    transform: scale(1);\n  }\n  .social.active[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.8);\n    border-radius: 26px 26px 0 0;\n    transition: 0s;\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0 15px;\n  font-size: 1.2em;\n  text-transform: uppercase;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ddd;\n  transition: 0.3s;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: white;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: underline;\n}\n@media screen and (max-width: 700px) {\n  .menu[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1em;\n    margin: 0 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFFQTtFQUNFLGNBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUVKO0FBREk7RUFDRSxhQUFBO0FBR047QUFBRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBRUo7QUNwQ0U7RURjRjtJQXVCSSxrQkFBQTtJQUNBLGNBQUE7RUFHRjtFQUZFO0lBQ0Usa0JBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSw4QkFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSw0QkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQUlKO0VBSEk7SUFDRSxhQUFBO0VBS047RUFGRTtJQUNFLGNBQUE7RUFJSjtFQURJO0lBQ0UsbUJBQUE7RUFHTjtFQURJO0lBQ0Usb0NBQUE7SUFDQSw0QkFBQTtJQUNBLGNBQUE7RUFHTjtBQUNGO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFERTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFHSjtBQUZJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBSU47QUFITTtFQUVFLFlBQUE7QUFJUjtBQUZNO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FBSVI7QUN6RkU7RURxRUY7SUFxQkksY0FBQTtFQUdGO0VBRkU7SUFDRSxjQUFBO0lBQ0EsY0FBQTtFQUlKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi9nbG9iYWwuc2Nzcyc7XG5kaXYudG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogODBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cbi5zb2NpYWwge1xuICBtYXJnaW46IDAgMjBweDtcbiAgYnV0dG9uLnRvZ2dsZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgd2lkdGg6IDUycHg7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG4gIGxpIHtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuICBAaW5jbHVkZSBnbG9iYWwucmVzcG9uc2l2ZSg3MDBweCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICB1bCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgMzBweCAzMHB4O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9uLnRvZ2dsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgdWwge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgfVxuICAgICAgYnV0dG9uLnRvZ2dsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjZweCAyNnB4IDAgMDtcbiAgICAgICAgdHJhbnNpdGlvbjogMHM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubWVudSB7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBsaSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYSB7XG4gICAgICBjb2xvcjogI2RkZDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQGluY2x1ZGUgZ2xvYmFsLnJlc3BvbnNpdmUoNzAwcHgpIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBsaSB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIG1hcmdpbjogMCAxMnB4O1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIHJlc3BvbnNpdmUoJHdpZHRoKSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR3aWR0aCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss'],
            }]
    }], function () { return []; }, { social: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['social']
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['icon']
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\neel\Downloads\New folder\neelbhikadiya portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map