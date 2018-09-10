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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<b>Company Profile</b>\r\n<p>\r\n  Founded in 2012, Maid agnecy has been growing steadily in the past years to become one of the major players in the industry. The main objective is to help resolve the issues of working-class Singaporeans with their household chores. OK MAID act as a mediator between employers and foreign domestic workers to ensure a suitable match for both parties.\r\n</p>\r\n<b>\r\n  About Us\r\n</b>\r\n<p>\r\n  Maid Agency specialized in foreign domestic workers, who are more service-driven and conservative. Under the leadership of our Directors, Ok Maid is now one of the leading employment agencies in Singapore. Other than handling foreign domestic workers, Ok Maid brings in skilled and unskilled workers from developing countries like China, Myanmar and the Philippines. These workers will be employed in industries like Shipbuilding, Manufacturing and Service line. Always going above and beyond, Ok Maid provides an unmatched, exemplary service that cannot be found elsewhere. Ok Maid has been expanding for the past few years, from a single branch in Katong Shopping Centre enter to 4 branches island-wide. This is made possible because of our valued customers who have been coming back to us as their preferred agency. To us, a satisfied customer is a living advertisement and we strongly believe in word-of-mouth. Service is one of our top priority and because of it, we were able to forge a long-lasting relationship with our customers.\r\n  </p>\r\n\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/administration/administration.component.html":
/*!**************************************************************!*\
  !*** ./src/app/administration/administration.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"userForm\" id=\"userForm\" class=\"css-form\" novalidate>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <!-- Profile tab starting-->\r\n\r\n      <ul class=\"nav nav-tabs \">\r\n        <li class=\"nav-item\"><a data-toggle=\"tab\" class=\"nav-link active\" href=\"#profile\">PROFILE</a></li>\r\n        <li class=\"nav-item\"><a data-toggle=\"tab\" class=\"nav-link \" href=\"#skill\">SKILLS</a></li>\r\n        <li class=\"nav-item\"><a data-toggle=\"tab\" class=\"nav-link \" href=\"#history_11\">HISTORY</a></li>\r\n      </ul>\r\n      <div class=\"tab-content\">\r\n        <div id=\"profile\" class=\"tab-pane fade show active\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n              <h4 style=\"text-decoration:underline\"><b>Personal Information</b></h4>\r\n            </div>\r\n\r\n            <!--Personal Information Starting-->\r\n            <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n\r\n              <label>Full Name</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"1\" />\r\n\r\n              <label>Code</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"2\" />\r\n\r\n              <label>Age</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"3\" />\r\n\r\n              <label>Date Of Birth</label>\r\n              <input type=\"date\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"4\" />\r\n\r\n              <label>Place Of Birth</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"5\" />\r\n\r\n\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n\r\n              <label>Height</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"6\" />\r\n\r\n              <label>Weight</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"7\" />\r\n\r\n              <label>Nationality</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"8\" />\r\n\r\n              <label>Religion</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"9\" />\r\n\r\n              <label>Education level</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"10\" />\r\n\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n              <label>Marital status</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"11\" />\r\n\r\n              <label>No.of childrens</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"12\" />\r\n\r\n              <label>Name of Port/Airport</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"13\" />\r\n\r\n              <label>Contact number</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"14\" />\r\n\r\n              <label>Residential address</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"15\" />\r\n\r\n\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n              <div style=\"border-radius: 25px;border: 1px solid #000;padding: 10px;width:296px;height: 240px; \">\r\n                <img src=\"#\" width=\"130\" height=\"200\" id=\"IMAGE_ID\" class=\"img-rounded\" alt=\"Image preview...\">\r\n\r\n              </div>\r\n              <label>\r\n                <input type=\"file\" name=\"\" id=\"\" fileread=\"uploadme\" />\r\n              </label>\r\n              <label>No.of siblings</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"16\" />\r\n            </div>\r\n\r\n            <!--Personal information ending-->\r\n            <!--Medical History/Dietary Restrictions starting-->\r\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n              <h4 style=\"text-decoration:underline\"><b>Medical History/Dietary Restrictions</b></h4>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\r\n                  Allergies(if any)\r\n                </div>\r\n                <div class=\"form-group col-lg-7 col-md-7 col-xs-12 col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"17\" />\r\n                </div>\r\n                <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Physical disabilities</div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Physical disabilities\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" tabindex=\"18\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Dietary restrictions</div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Dietary restrictions\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" tabindex=\"19\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  Food handling preferences:\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">No Pork</div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\r\n                  <label title=\"No pork\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" tabindex=\"20\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">No beef</div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\r\n                  <label title=\"No beef\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" tabindex=\"21\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Others</div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Others\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" tabindex=\"22\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  18. Past and existing illnesses (including chronic aliments and illnesses requiring medication):\r\n                </div>\r\n              </div>\r\n              <div class=\"row top-left-side-org\" style=\"min-height:97px;\">\r\n\r\n\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Mental&nbsp; illness</div>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Mental illness\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Epilepsy</div>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Epilepsy\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Asthma</div>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Asthma\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\" ></div>\r\n\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Diabetes</div>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Diabetes\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Hypertension</div>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Hypertension\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Tuberculosis</div>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Tuberculosis\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\" ></div>\r\n\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Heart disease</div>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Heart disease\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Malaria</div>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Malaria\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Operations</div>\r\n                </div>\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Operations\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12\"></div>\r\n\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Others</div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"Others\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <!--Medical History/Dietary Restrictions ending -->\r\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n              <h4 style=\"text-decoration:underline\"><b>Others</b></h4>\r\n            </div>\r\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n                  <label>Preference for rest day</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"\" />\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n                  <label>Any other remarks</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"\" tabindex=\"\" />\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-12\">\r\n                </div>\r\n              </div>\r\n           </div>\r\n         </div>\r\n        </div>\r\n        <!--Profile tab ending-->\r\n        <!--Skills tab starting-->\r\n\r\n        <div id=\"skill\" class=\"tab-pane fade \">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n              <h4 style=\"text-decoration:underline\"><b>Method of Evaluation of Skills</b></h4>\r\n            </div>\r\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n              Please indicate the method(s) used to evaluate the FDW’s skills (can tick more than one):\r\n            </div>\r\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-4 col-xs-12 col-sm-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\r\n                      <label title=\"Others\" class=\"toggle-check\">\r\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                        <span class=\"toggle-check-text\"></span>\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\r\n                      <div>Interviewed by Singapore EA</div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n\r\n                    <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\r\n                      <label title=\"Others\" class=\"toggle-check\">\r\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                        <span class=\"toggle-check-text\"></span>\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\r\n                      <div>Interviewed via telephone/teleconference</div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n\r\n                    <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\r\n                      <label title=\"Others\" class=\"toggle-check\">\r\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                        <span class=\"toggle-check-text\"></span>\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\r\n                      <div>Interviewed in person</div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-8 col-md-8 col-xs-12 col-sm-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                      <label title=\"Others\" class=\"toggle-check\">\r\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                        <span class=\"toggle-check-text\"></span>\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\r\n                      <div>Based on FDW’s declaration, no evaluation/observation by Singapore EA or overseas training centre/EA</div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n\r\n                    <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                      <label title=\"Others\" class=\"toggle-check\">\r\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                        <span class=\"toggle-check-text\"></span>\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\r\n                      <div>Interviewed via videoconference</div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n\r\n                    <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                      <label title=\"Others\" class=\"toggle-check\">\r\n                        <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                        <span class=\"toggle-check-text\"></span>\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\r\n                      <div>Interviewed in person and also made observation of FDW in the areas of work listed in table.</div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </div>\r\n\r\n                <table class=\"table\">\r\n                  <thead style=\"border:1px solid #000\">\r\n                    <tr>\r\n                      <th style=\"width:5%;text-align:center;\">S/No</th>\r\n                      <th style=\"width:30%;text-align:center;\">Areas of Work</th>\r\n                      <th style=\"width:10%;text-align:center;\">Willingness Yes/No</th>\r\n                      <th style=\"width:10%;text-align:center;\">Experience Yes/No If yes, state the no. of years</th>\r\n                      <th style=\"width:60%;text-align:center;\">Assessment/Observation Please state qualitative observations of FDW and/or rate the FDW (Indicate N.A. of no evaluation was done) Poor....................................Excellent.....N.A 1 2 3 4 5 N.A</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" value=\"1\" readonly /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of infants/children. Please specify age range:\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"2\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of elderly\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"3\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of disabled\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"4\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"General housework\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"5\" /></td>\r\n                      <td>\r\n                        <input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Cooking,\r\n\t\t\t\t\t\t\t\t\t\t\tPlease specify cuisines:\" />\r\n                      </td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"6\" /></td>\r\n                      <td>\r\n                        <input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Language abilities (spoken),\r\n\t\t\t\t\t\t\t\t\t\t\tPlease specify\" />\r\n                      </td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"7\" /></td>\r\n                      <td>\r\n                        <input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Other skills, if any\r\n\t\t\t\t\t\t\t\t\t\t\tPlease specify:\" />\r\n                      </td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">Interviewed by overseas training centre / EA (Please state name of foreign training centre / EA)</div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-xs-12 col-sm-12 \">\r\n                </div>\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">State if the third party is certified (e.g. ISO 9001) or audited periodically by the EA:</div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\r\n                          <label title=\"Others\" class=\"toggle-check\">\r\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                            <span class=\"toggle-check-text\"></span>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\r\n                          <div>Interviewed via videoconference</div>\r\n                        </div>\r\n\r\n                        <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\r\n                          <label title=\"\" class=\"toggle-check\">\r\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\r\n                            <span class=\"toggle-check-text\"></span>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\r\n                          <div>Interviewed in person</div>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                          <label title=\"\" class=\"toggle-check\">\r\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\r\n                            <span class=\"toggle-check-text\"></span>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\r\n                          <div>Interviewed via telephone/teleconference</div>\r\n                        </div>\r\n\r\n                        <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                          <label title=\"\" class=\"toggle-check\">\r\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\r\n                            <span class=\"toggle-check-text\"></span>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\r\n                          <div>Interviewed in person and also made observation of FDW in the areas of work listed in table.</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <table class=\"table\">\r\n                  <thead style=\"border:1px solid #000\">\r\n                    <tr>\r\n                      <th style=\"width:5%;text-align:center;\">S/No</th>\r\n                      <th style=\"width:30%;text-align:center;\">Areas of Work</th>\r\n                      <th style=\"width:10%;text-align:center;\">Willingness Yes/No</th>\r\n                      <th style=\"width:10%;text-align:center;\">Experience Yes/No If yes, state the no. of years</th>\r\n                      <th style=\"width:60%;text-align:center;\">Assessment/Observation Please state qualitative observations of FDW and/or rate the FDW (Indicate N.A. of no evaluation was done) Poor....................................Excellent.....N.A 1 2 3 4 5 N.A</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" value=\"1\" readonly /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of infants/children. Please specify age range:\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"2\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of elderly\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"3\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Care of disabled\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"4\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"General housework\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"5\" /></td>\r\n                      <td>\r\n                        <input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Cooking,Please specify cuisines:\" />\r\n                      </td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"6\" /></td>\r\n                      <td>\r\n                        <input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"Language abilities (spoken),Please specify\" />\r\n                      </td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" readonly value=\"7\" /></td>\r\n                      <td>\r\n                        <input type=\"text\" class=\"form-control\" name=\"\" disabled value=\"Other skills, if any\r\n\t\t\t\t\t\t\t\t\t\t\tPlease specify:\" />\r\n                      </td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Skills tab ending-->\r\n        <!--History tab strating-->\r\n\r\n        <div id=\"history_11\" class=\"tab-pane fade \">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n              <h4 style=\"text-decoration:underline\"><b>Employment History Overseas</b></h4>\r\n            </div>\r\n            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n              <div class=\"row\">\r\n                <table class=\"table\">\r\n                  <thead style=\"border:1px solid #000\">\r\n                    <tr>\r\n                      <th style=\"width:9%;text-align:center;\">From</th>\r\n                      <th style=\"width:9%;text-align:center;\">To</th>\r\n                      <th style=\"width:25%;text-align:center;\">Country (includingFDW’s homecountry)</th>\r\n                      <th style=\"width:12%;text-align:center;\">Employer</th>\r\n                      <th style=\"width:30%;text-align:center;\">Work Duties</th>\r\n                      <th style=\"width:30%;text-align:center;\">Remarks</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  <h4 style=\"text-decoration:underline\"><b>Employment History In Singapore</b></h4>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12 col-sm-12\">\r\n                  <div class=\"align-right\">\r\n                    Previous working experience in Singapore\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                  <label title=\"\" class=\"toggle-check\">\r\n                    <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\r\n                    <span class=\"toggle-check-text\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-lg-8 col-md-8 col-xs-12 col-sm-12 \">\r\n                </div>\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  <p>\r\n                    (The EA is required to obtain the FDW’s employment history from MOM and furnish the employer with the employment history of the FDW.\r\n                    The employer may also verify the FDW’s employment history in Singapore through WPOL using SingPass)\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  <h3 style=\"text-decoration:underline\"><b>Feedback from previous employer in Singapore</b></h3>\r\n                </div>\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  <p>Feedback was/was not obtained by the EA from the previous employers. If feedback was obtained (attach testimonial if possible),</p>\r\n                </div>\r\n\r\n                <table class=\"table\">\r\n                  <thead style=\"border:1px solid #000\">\r\n                    <tr>\r\n                      <th style=\"width:15%;text-align:center;\">No.</th>\r\n                      <th style=\"width:30%;text-align:center;\">Feedback</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" value=\"Employer 1\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" value=\"Employer 2\" /></td>\r\n                      <td><input type=\"text\" class=\"form-control\" name=\"\" /></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  <h4 style=\"text-decoration:underline\"><b>Availability of FDW to be Interviewed By Prospective Employer</b></h4>\r\n                </div>\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-5 col-md-5 col-xs-12 col-sm-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\r\n                          <label title=\"Others\" class=\"toggle-check\">\r\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                            <span class=\"toggle-check-text\"></span>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\r\n                          <div>FDW is not available for interview</div>\r\n                        </div>\r\n\r\n                        <div class=\"col-lg-2 col-md-2 col-xs-12 col-sm-12 \">\r\n                          <label title=\"\" class=\"toggle-check\">\r\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\r\n                            <span class=\"toggle-check-text\"></span>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-10 col-md-10 col-xs-12 col-sm-12\">\r\n                          <div>FDW can be interviewed by phone</div>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-7 col-md-7 col-xs-12 col-sm-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                          <label title=\"Others\" class=\"toggle-check\">\r\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"Availability of sample\" />\r\n                            <span class=\"toggle-check-text\"></span>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\r\n                          <div>FDW can be interviewed by video-conference</div>\r\n                        </div>\r\n\r\n                        <div class=\"col-lg-1 col-md-1 col-xs-12 col-sm-12 \">\r\n                          <label title=\"\" class=\"toggle-check\">\r\n                            <input type=\"checkbox\" class=\"toggle-check-input\" name=\"\" id=\"\" value=\"Y\" title=\"\" />\r\n                            <span class=\"toggle-check-text\"></span>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-11 col-md-11 col-xs-12 col-sm-12\">\r\n                          <div>FDW can be interviewed in person</div>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  <h4 style=\"text-decoration:underline\"><b>Other Remarks</b></h4>\r\n                </div>\r\n                <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\">\r\n                  <textarea style=\"width:75%\" ></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!--History tab ending-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/administration/administration.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/administration/administration.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n  padding: 0px 1px 0px 0px; }\n\n.toggle-check-input {\n  width: 1px;\n  height: 1px;\n  position: absolute; }\n\n.toggle-check-text {\n  display: inline-block;\n  position: relative;\n  text-transform: uppercase;\n  background: #CCC;\n  padding: 0px 4px 0px 32px;\n  border-radius: 1em;\n  min-width: 2em;\n  color: #FFF;\n  cursor: pointer;\n  transition: background-color 0.15s; }\n\n.toggle-check-text:after {\n  content: ' ';\n  display: block;\n  background: #FFF;\n  width: 15px;\n  height: 12px;\n  border-radius: 1em;\n  position: absolute;\n  left: 0.3em;\n  top: 0.25em;\n  transition: left 0.15s, margin-left 0.15s; }\n\n.toggle-check-text:before {\n  content: 'No'; }\n\n.toggle-check-input:checked ~ .toggle-check-text {\n  background: #8ad869;\n  padding-left: 0.5em;\n  padding-right: 2em; }\n\n.toggle-check-input:checked ~ .toggle-check-text:before {\n  content: 'Yes'; }\n\n.toggle-check-input:checked ~ .toggle-check-text:after {\n  left: 100%;\n  margin-left: -1.4em; }\n\ntable {\n  margin-left: 17px; }\n"

/***/ }),

/***/ "./src/app/administration/administration.component.ts":
/*!************************************************************!*\
  !*** ./src/app/administration/administration.component.ts ***!
  \************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent() {
    }
    AdministrationComponent.prototype.ngOnInit = function () {
    };
    AdministrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administration',
            template: __webpack_require__(/*! ./administration.component.html */ "./src/app/administration/administration.component.html"),
            styles: [__webpack_require__(/*! ./administration.component.scss */ "./src/app/administration/administration.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdministrationComponent);
    return AdministrationComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administration/administration.component */ "./src/app/administration/administration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'admin',
        component: _administration_administration_component__WEBPACK_IMPORTED_MODULE_4__["AdministrationComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n  <!-- Navigation -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-red fixed-top\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"#\">Maid Portal</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" routerLink=\"\">\r\n              Home\r\n              <span class=\"sr-only\">(current)</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"about\">About</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Services</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Contact</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"admin\">Admin</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <!-- Footer -->\r\n  <footer class=\"py-5 bg-dark\">\r\n    <div class=\"container\">\r\n      <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2017</p>\r\n    </div>\r\n    <!-- /.container -->\r\n  </footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppBootstrapModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./administration/administration.component */ "./src/app/administration/administration.component.ts");
/* harmony import */ var ui_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ui-carousel */ "./node_modules/ui-carousel/dist/index.js");
/* harmony import */ var ui_carousel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ui_carousel__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    return AppBootstrapModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _administration_administration_component__WEBPACK_IMPORTED_MODULE_9__["AdministrationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ui_carousel__WEBPACK_IMPORTED_MODULE_10__["UICarouselModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n      <div style=\"padding:10px;\">\r\n        <img src=\"/assets/img/logo.png\" />\r\n      </div>\r\n      <div class=\"list-group\">\r\n        <a href=\"#\" class=\"list-group-item\">All Maids</a>\r\n        <a href=\"#\" class=\"list-group-item\">Indian Maids</a>\r\n        <a href=\"#\" class=\"list-group-item\">Philip Maids</a>\r\n        <a href=\"#\" class=\"list-group-item\">Ex-Singapore Maids</a>\r\n        <a href=\"#\" class=\"list-group-item\">New Maids</a>\r\n      </div>\r\n    </div>\r\n    <!-- /.col-lg-3 -->\r\n    <div class=\"col-lg-9\">\r\n      <div id=\"carouselExampleIndicators\" class=\"carousel slide my-4\" data-ride=\"carousel\">\r\n        <ui-carousel [infinite]=\"true\" [fade]=\"true\" [speed]=\"500\" height=\"300px\" width=\"850px\">\r\n          <ui-carousel-item>\r\n            <img src=\"./assets/img/slide1.png\" alt=\"\" draggable=\"false\">\r\n          </ui-carousel-item>\r\n          <ui-carousel-item>\r\n            <img src=\"../assets/img/slide2.png\" alt=\"\" draggable=\"false\">\r\n          </ui-carousel-item>\r\n          <ui-carousel-item>\r\n            <img src=\"./assets/img/slide3.png\" alt=\"\" draggable=\"false\">\r\n          </ui-carousel-item>\r\n        </ui-carousel>\r\n       </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-6 mb-4\">\r\n          <div class=\"card h-100\">\r\n            <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">\r\n                <a href=\"#\">Philp Maid - Exp(6)</a>\r\n              </h5>\r\n              <h6>Age - 25</h6>\r\n              <h6>Nationality - Myanmar</h6>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"pull-right\">\r\n                <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 mb-4\">\r\n          <div class=\"card h-100\">\r\n            <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">\r\n                <a href=\"#\">Philp Maid - Exp(3)</a>\r\n              </h5>\r\n              <h6>Age - 25</h6>\r\n              <h6>Nationality - Myanmar</h6>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"pull-right\">\r\n                <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 mb-4\">\r\n          <div class=\"card h-100\">\r\n            <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">\r\n                <a href=\"#\">Philp Maid - Exp(4)</a>\r\n              </h5>\r\n              <h6>Age - 25</h6>\r\n              <h6>Nationality - Myanmar</h6>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"pull-right\">\r\n                <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 mb-4\">\r\n          <div class=\"card h-100\">\r\n            <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">\r\n                <a href=\"#\">Philp Maid - Exp(0)</a>\r\n              </h5>\r\n              <h6>Age - 25</h6>\r\n              <h6>Nationality - Myanmar</h6>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"pull-right\">\r\n                <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 mb-4\">\r\n          <div class=\"card h-100\">\r\n            <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">\r\n                <a href=\"#\">Philp Maid - Exp(2)</a>\r\n              </h5>\r\n              <h6>Age - 25</h6>\r\n              <h6>Nationality - Myanmar</h6>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"pull-right\">\r\n                <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 mb-4\">\r\n          <div class=\"card h-100\">\r\n            <a href=\"#\"><img class=\"card-img-top\" src=\"/assets/img/Maid1.png\" alt=\"\"></a>\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">\r\n                <a href=\"#\">Philp Maid - Exp(1)</a>\r\n              </h5>\r\n              <h6>Age - 25</h6>\r\n              <h6>Nationality - Myanmar</h6>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"pull-right\">\r\n                <a href=\"#\"><span class=\"glyphicon glyphicon-envelope\">Send Request</span> </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n    </div>\r\n    <!-- /.col-lg-9 -->\r\n  </div>\r\n  <!-- /.row -->\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MaidPortal\MaidRouterAng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map