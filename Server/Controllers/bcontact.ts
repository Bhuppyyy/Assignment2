import express from 'express';

import BusinessContact from '../Models/bcontact';

import { UserDisplayName } from '../Util';

export function DisplayBContactList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    BusinessContact.find(function(err, businesscontactcollection: any)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contact list', page: 'Business-contact-list', bcontact: businesscontactcollection, displayName: UserDisplayName(req) });
    });
}