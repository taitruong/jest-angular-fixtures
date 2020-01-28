import { TestBedStatic, TestModuleMetadata } from "@angular/core/testing";
import { DataFixtures } from "./fixtures/data-fixtures.test";
export declare class Setup<T extends DataFixtures> {
    fixtures: T;
    testBedStatic: TestBedStatic;
    constructor(fixtures: T, moduleDef?: TestModuleMetadata);
    static create(fixtures?: DataFixtures, moduleDef?: TestModuleMetadata): Setup<DataFixtures>;
    stubRouteData(data: any): this;
}
