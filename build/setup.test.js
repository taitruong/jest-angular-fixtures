"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var testing_2 = require("@angular/router/testing");
var rxjs_1 = require("rxjs");
var data_fixtures_test_1 = require("./fixtures/data-fixtures.test");
var router_link_stub_test_1 = require("./router-link-stub.test");
var Setup = /** @class */ (function () {
    function Setup(fixtures, moduleDef) {
        this.fixtures = fixtures;
        if (!moduleDef) {
            moduleDef = {};
        }
        if (!moduleDef.declarations) {
            moduleDef.declarations = [router_link_stub_test_1.RouterLinkDirectiveStub];
        }
        else {
            moduleDef.declarations.push(router_link_stub_test_1.RouterLinkDirectiveStub);
        }
        if (!moduleDef.imports) {
            moduleDef.imports = [testing_2.RouterTestingModule];
        }
        else {
            moduleDef.imports.push(testing_2.RouterTestingModule);
        }
        if (!moduleDef.providers) {
            moduleDef.providers = [
                { provide: material_1.MatDialogRef, useValue: {} },
                { provide: material_1.MAT_DIALOG_DATA, useValue: {} }
            ];
        }
        else {
            moduleDef.providers.push({ provide: material_1.MatDialogRef, useValue: {} });
            moduleDef.providers.push({ provide: material_1.MAT_DIALOG_DATA, useValue: {} });
        }
        this.testBedStatic = testing_1.TestBed.configureTestingModule(moduleDef)
            .overrideDirective(router_1.RouterLink, {
            set: {
                providers: [
                    {
                        provide: router_1.RouterLink,
                        useClass: router_link_stub_test_1.RouterLinkDirectiveStub
                    }
                ]
            }
        })
            .overrideDirective(router_1.RouterLinkWithHref, {
            set: {
                providers: [
                    {
                        provide: router_1.RouterLinkWithHref,
                        useClass: router_link_stub_test_1.RouterLinkDirectiveStub
                    }
                ]
            }
        });
    }
    Setup.create = function (fixtures, moduleDef) {
        if (fixtures === void 0) { fixtures = new data_fixtures_test_1.DataFixtures(); }
        return new Setup(fixtures, moduleDef);
    };
    Setup.prototype.stubRouteData = function (data) {
        this.testBedStatic.overrideProvider(router_1.ActivatedRoute, {
            useValue: {
                data: rxjs_1.of(data)
            }
        });
        return this;
    };
    return Setup;
}());
exports.Setup = Setup;
