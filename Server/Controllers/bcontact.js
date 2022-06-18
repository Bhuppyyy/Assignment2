"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddList = exports.DisplayBContactList = void 0;
const bcontact_1 = __importDefault(require("../Models/bcontact"));
const Util_1 = require("../Util");
function DisplayBContactList(req, res, next) {
    bcontact_1.default.find(function (err, businesscontactcollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact list', page: 'Business-contact-list', bcontact: businesscontactcollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayBContactList = DisplayBContactList;
function DisplayAddList(req, res, next) {
}
exports.DisplayAddList = DisplayAddList;
function DisplayEditPage(req, res, next) {
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=bcontact.js.map