import express from 'express';

import BusinessContact from '../Models/bcontact';

import { UserDisplayName } from '../Util';

export function DisplayBContactList(req: express.Request, res: express.Response, next: express.NextFunction): void
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

export function DisplayAddList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Add', page: 'edit', bcontact: '', displayName: UserDisplayName(req) })
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{

}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{

}