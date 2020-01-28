"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataFixtures = /** @class */ (function () {
    function DataFixtures() {
    }
    DataFixtures.randomInteger = function (e) {
        if (e === void 0) { e = 1000000000; }
        // https://stackoverflow.com/a/8378885/3437868
        return Math.floor(Math.random() * 10 * e) + 1;
    };
    /**
     * Source: https://stackoverflow.com/a/1349426/3437868
     * @param length
     */
    DataFixtures.randomString = function (length) {
        if (length === void 0) { length = 10; }
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    return DataFixtures;
}());
exports.DataFixtures = DataFixtures;
