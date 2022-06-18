import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayBContactList } from '../Controllers/bcontact';

router.get('/Business-contact-list', AuthGuard, DisplayBContactList);

export default router;
