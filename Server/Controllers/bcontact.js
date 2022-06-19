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
    res.render('index', { title: 'Add', page: 'edit', bcontact: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddList = DisplayAddList;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    bcontact_1.default.findById(id, {}, {}, function (err, contactToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', bcontact: contactToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new bcontact_1.default({
        "Name": req.body.contactName,
        "Phone_Number": req.body.contactPNumber,
        "Email_Address": req.body.contactEAddress
    });
    bcontact_1.default.create(newContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/Business-contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=bcontact.js.map