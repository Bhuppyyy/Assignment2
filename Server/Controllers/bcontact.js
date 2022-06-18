"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBContactList = void 0;
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
//# sourceMappingURL=bcontact.js.map