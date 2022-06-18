"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const bcontact_1 = require("../Controllers/bcontact");
const index_1 = require("../Util/index");
router.get('/Business-contact-list', index_1.AuthGuard, bcontact_1.DisplayBContactList);
router.get('/add', index_1.AuthGuard, bcontact_1.DisplayAddList);
router.get('/edit/:id', index_1.AuthGuard, bcontact_1.DisplayEditPage);
router.post('/add', index_1.AuthGuard, bcontact_1.ProcessAddPage);
router.post('/edit/:id', index_1.AuthGuard, bcontact_1.ProcessEditPage);
router.get('/delete/:id', index_1.AuthGuard, bcontact_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=bcontact.js.map