"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Source: https://angular.io/guide/testing#components-with-routerlink
 */
var RouterLinkDirectiveStub = /** @class */ (function () {
    function RouterLinkDirectiveStub() {
        this.routerLinkClicked = false;
        //// mock for RouterLinkWithHref
        this.ngOnChanges = jest.fn();
        this.ngOnDestroy = jest.fn();
    }
    RouterLinkDirectiveStub.prototype.onClick = function () {
        this.routerLinkClicked = true;
    };
    __decorate([
        core_1.Input("routerLink")
    ], RouterLinkDirectiveStub.prototype, "routerLink", void 0);
    __decorate([
        core_1.HostListener("click")
    ], RouterLinkDirectiveStub.prototype, "onClick", null);
    RouterLinkDirectiveStub = __decorate([
        core_1.Directive({
            selector: "[routerLink]"
        })
    ], RouterLinkDirectiveStub);
    return RouterLinkDirectiveStub;
}());
exports.RouterLinkDirectiveStub = RouterLinkDirectiveStub;
