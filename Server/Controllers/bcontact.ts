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
    let id = req.params.id;

    //pass the id to db and read the contact into the edit page
    BusinessContact.findById(id, {}, {}, function(err, contactToEdit)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //show the edit view with the data
        res.render('index', { title: 'Edit', page: 'edit', bcontact: contactToEdit, displayName: UserDisplayName(req) })
    });
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