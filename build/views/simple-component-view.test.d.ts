import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { RouterLinkDirectiveStub } from "../router-link-stub.test";
export declare class SimpleComponentView<T> {
    fixture: ComponentFixture<T>;
    constructor(fixture: ComponentFixture<T>);
    get componentInstance(): T;
    get nativeElement(): any;
    get debugElement(): DebugElement;
    detectChanges(checkNoChanges?: boolean): this;
    /**
     * Query for first debug element containing attribute data-testid or data-testid='id'.
     *
     * @param id
     */
    queryByDataTestIdAttribute(id?: any): DebugElement;
    /**
     * Query for all debug elements containing attribute data-testid or data-testid='id'.
     *
     * @param id
     */
    queryAllByDataTestIdAttribute(id?: any): DebugElement[];
    queryByCss(selector: string): DebugElement;
    queryAllByCss(selector: string): DebugElement[];
    get routerLinks(): DebugElement[];
    getMockedRouterLinkDirective(element: DebugElement): RouterLinkDirectiveStub;
}
