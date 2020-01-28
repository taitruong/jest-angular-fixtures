/// <reference types="jest" />
/**
 * Source: https://angular.io/guide/testing#components-with-routerlink
 */
export declare class RouterLinkDirectiveStub {
    routerLink: string;
    routerLinkClicked: boolean;
    constructor();
    onClick(): void;
    ngOnChanges: jest.Mock<any, any>;
    ngOnDestroy: jest.Mock<any, any>;
}
