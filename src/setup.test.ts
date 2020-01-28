import {
  TestBed,
  TestBedStatic,
  TestModuleMetadata
} from "@angular/core/testing";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkWithHref
} from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { DataFixtures } from "./fixtures/data-fixtures.test";
import { RouterLinkDirectiveStub } from "./router-link-stub.test";

export class Setup<T extends DataFixtures> {
  testBedStatic: TestBedStatic;

  constructor(public fixtures: T, moduleDef?: TestModuleMetadata) {
    if (!moduleDef) {
      moduleDef = {};
    }
    if (!moduleDef.declarations) {
      moduleDef.declarations = [RouterLinkDirectiveStub];
    } else {
      moduleDef.declarations.push(RouterLinkDirectiveStub);
    }

    if (!moduleDef.imports) {
      moduleDef.imports = [RouterTestingModule];
    } else {
      moduleDef.imports.push(RouterTestingModule);
    }
    
    if (!moduleDef.providers) {
      moduleDef.providers = [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ];
    } else {
      moduleDef.providers.push({ provide: MatDialogRef, useValue: {} });
      moduleDef.providers.push({ provide: MAT_DIALOG_DATA, useValue: {} });
    }

    this.testBedStatic = TestBed.configureTestingModule(moduleDef)
      .overrideDirective(RouterLink, {
        set: {
          providers: [
            {
              provide: RouterLink,
              useClass: RouterLinkDirectiveStub
            }
          ]
        }
      })
      .overrideDirective(RouterLinkWithHref, {
        set: {
          providers: [
            {
              provide: RouterLinkWithHref,
              useClass: RouterLinkDirectiveStub
            }
          ]
        }
      });
  }

  static create(
    fixtures: DataFixtures = new DataFixtures(),
    moduleDef?: TestModuleMetadata
  ) {
    return new Setup(fixtures, moduleDef);
  }

  stubRouteData(data: any) {
    this.testBedStatic.overrideProvider(ActivatedRoute, {
      useValue: {
        data: of(data)
      }
    });
    return this;
  }
}
