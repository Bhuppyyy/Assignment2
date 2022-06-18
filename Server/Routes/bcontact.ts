import express from 'express';
const router = express.Router();

import { DisplayAddList, DisplayBContactList, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/bcontact';

import { AuthGuard } from '../Util/index';

/* Display Movie List Page */
router.get('/Business-contact-list', AuthGuard, DisplayBContactList);

/* Display Add page */
router.get('/add', AuthGuard, DisplayAddList);

/* Display Edit page */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* Process Add page */
router.post('/add', AuthGuard, ProcessAddPage);

/* Process Edit page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* Process Delete page */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

export default router;
