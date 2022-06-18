"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const bcontact_1 = require("../Controllers/bcontact");
router.get('/Business-contact-list', Util_1.AuthGuard, bcontact_1.DisplayBContactList);
exports.default = router;
//# sourceMappingURL=bcontact.js.map