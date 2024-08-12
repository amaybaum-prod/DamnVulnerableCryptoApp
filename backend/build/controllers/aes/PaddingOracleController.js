"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaddingOracleController = void 0;
var PaddingOracleService_1 = require("../../services/PaddingOracleService");
var BaseController_1 = __importDefault(require("../BaseController"));
var PaddingOracleController = /** @class */ (function (_super) {
    __extends(PaddingOracleController, _super);
    function PaddingOracleController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaddingOracleController.prototype.home = function () {
        var token = PaddingOracleService_1.PaddingOracleService.getAnonymousToken();
        return { token: token };
    };
    PaddingOracleController.prototype.admin = function () {
        var token = this.getHeader("token");
        var isAdmin = false;
        isAdmin = PaddingOracleService_1.PaddingOracleService.isAdmin(token);
        if (isAdmin)
            return { isAdmin: isAdmin, flag: PaddingOracleService_1.PaddingOracleService.getFlag() };
        else
            return { isAdmin: isAdmin, flag: "" };
    };
    return PaddingOracleController;
}(BaseController_1.default));
exports.PaddingOracleController = PaddingOracleController;
