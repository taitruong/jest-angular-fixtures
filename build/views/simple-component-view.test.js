"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var router_link_stub_test_1 = require("../router-link-stub.test");
var SimpleComponentView = /** @class */ (function () {
    function SimpleComponentView(fixture) {
        this.fixture = fixture;
    }
    Object.defineProperty(SimpleComponentView.prototype, "componentInstance", {
        //// fixture helpers ////
        get: function () {
            return this.fixture.componentInstance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleComponentView.prototype, "nativeElement", {
        get: function () {
            return this.fixture.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleComponentView.prototype, "debugElement", {
        get: function () {
            return this.fixture.debugElement;
        },
        enumerable: true,
        configurable: true
    });
    SimpleComponentView.prototype.detectChanges = function (checkNoChanges) {
        this.fixture.detectChanges(checkNoChanges);
        return this;
    };
    //// element lookups ////
    /**
     * Query for first debug element containing attribute data-testid or data-testid='id'.
     *
     * @param id
     */
    SimpleComponentView.prototype.queryByDataTestIdAttribute = function (id) {
        var predicate = "[data-testid" +
            (id ? "='" + id + "']" : "]");
        return this.queryByCss(predicate);
    };
    /**
     * Query for all debug elements containing attribute data-testid or data-testid='id'.
     *
     * @param id
     */
    SimpleComponentView.prototype.queryAllByDataTestIdAttribute = function (id) {
        var predicate = "[data-testid" +
            (id ? "='" + id + "']" : "]");
        return this.queryAllByCss(predicate);
    };
    SimpleComponentView.prototype.queryByCss = function (selector) {
        return this.fixture.debugElement.query(platform_browser_1.By.css(selector));
    };
    SimpleComponentView.prototype.queryAllByCss = function (selector) {
        return this.fixture.debugElement.queryAll(platform_browser_1.By.css(selector));
    };
    Object.defineProperty(SimpleComponentView.prototype, "routerLinks", {
        //// getters
        get: function () {
            return this.debugElement.queryAll(platform_browser_1.By.directive(router_link_stub_test_1.RouterLinkDirectiveStub));
        },
        enumerable: true,
        configurable: true
    });
    SimpleComponentView.prototype.getMockedRouterLinkDirective = function (element) {
        return element.injector.get(router_link_stub_test_1.RouterLinkDirectiveStub);
    };
    return SimpleComponentView;
}());
exports.SimpleComponentView = SimpleComponentView;
