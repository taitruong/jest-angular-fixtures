import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterLinkDirectiveStub } from "../router-link-stub.test";

export class SimpleComponentView<T> {
   constructor(public fixture: ComponentFixture<T>) {}

   //// fixture helpers ////

   get componentInstance() {
      return this.fixture.componentInstance;
   }

   get nativeElement() {
      return this.fixture.nativeElement;
   }

   get debugElement() {
      return this.fixture.debugElement;
   }

   detectChanges(checkNoChanges?: boolean) {
      this.fixture.detectChanges(checkNoChanges);
      return this;
   }

   //// element lookups ////

   /**
    * Query for first debug element containing attribute data-testid or data-testid='id'.
    * 
    * @param id 
    */
   queryByDataTestIdAttribute(id?: any): DebugElement {
      const predicate =
         "[data-testid" +
         (id ? "='" + id + "']" : "]");
      return this.queryByCss(predicate);
   }

   /**
    * Query for all debug elements containing attribute data-testid or data-testid='id'.
    * 
    * @param id 
    */
   queryAllByDataTestIdAttribute(
      id?: any
   ): DebugElement[] {
      const predicate =
         "[data-testid" +
         (id ? "='" + id + "']" : "]");
      return this.queryAllByCss(predicate);
   }

   queryByCss(selector: string): DebugElement {
      return this.fixture.debugElement.query(By.css(selector));
   }

   queryAllByCss(selector: string): DebugElement[] {
      return this.fixture.debugElement.queryAll(By.css(selector));
   }

   //// getters

   get routerLinks(): DebugElement[] {
      return this.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
   }

   getMockedRouterLinkDirective(
      element: DebugElement
   ): RouterLinkDirectiveStub {
      return element.injector.get(RouterLinkDirectiveStub);
   }
}
