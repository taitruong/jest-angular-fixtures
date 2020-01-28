import { Directive, HostListener, Input } from "@angular/core";

/**
 * Source: https://angular.io/guide/testing#components-with-routerlink
 */
@Directive({
   selector: "[routerLink]"
})
export class RouterLinkDirectiveStub {
   @Input("routerLink")
   routerLink: string;

   routerLinkClicked = false;

   constructor() {}

   @HostListener("click")
   onClick() {
      this.routerLinkClicked = true;
   }

   //// mock for RouterLinkWithHref
   ngOnChanges = jest.fn();

   ngOnDestroy = jest.fn();
}
