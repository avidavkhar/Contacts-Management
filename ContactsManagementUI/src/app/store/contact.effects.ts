import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ContactService } from '../services/contact.service';
import * as contactActions from './contact.actions';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactEffect {
  constructor(
    private actions$: Actions,
    private contactService: ContactService
  ) { }

  // effect created for loading contacts
  loadContacts$ = createEffect(() => this.actions$.pipe(
    ofType<contactActions.LoadContacts>(
      contactActions.ContactActionTypes.LOAD_CONTACTS
    ),
    mergeMap(() =>
      this.contactService.getContacts().pipe(
        map(
          (contacts: Contact[]) =>
            new contactActions.LoadContactsSuccess(contacts)
        ),
        catchError(err => of(new contactActions.LoadContactsFail(err)))
      )
    )
  ));

  // effect created for loading individual contact
  loadContact$ = createEffect(() => this.actions$.pipe(
    ofType<contactActions.LoadContact>(
      contactActions.ContactActionTypes.LOAD_CONTACT
    ),
    mergeMap((action: contactActions.LoadContact) =>
      this.contactService.getContactById(action.payload).pipe(
        map(
          (contact: Contact) =>
            new contactActions.LoadContactSuccess(contact)
        ),
        catchError(err => of(new contactActions.LoadContactFail(err)))
      )
    )
  ));

  // effect created for adding a new contact
  createContact$ = createEffect(() => this.actions$.pipe(
    ofType<contactActions.CreateContact>(
      contactActions.ContactActionTypes.CREATE_CONTACT
    ),
    map((action: contactActions.CreateContact) => action.payload),
    mergeMap((contact: Contact) =>
      this.contactService.createContact(contact).pipe(
        map(
          (newContact: Contact) =>
            new contactActions.CreateContactSuccess(newContact)
        ),
        catchError(err => of(new contactActions.CreateContactFail(err)))
      ),
    )
  ));

  // effect created for upding a existing contact
  updateContact$ = createEffect(() => this.actions$.pipe(
    ofType<contactActions.UpdateContact>(
      contactActions.ContactActionTypes.UPDATE_CONTACT
    ),
    map((action: contactActions.UpdateContact) => action.payload),
    mergeMap((contact: Contact) =>
      this.contactService.updateContact(contact).pipe(
        map(
          (updateContact: Contact) =>
          new contactActions.UpdateContactSuccess({
            id: updateContact ? updateContact.contactId : null,
            changes: updateContact
          })
        ),
        catchError(err => of(new contactActions.UpdateContactFail(err)))
        ),
      )
    ));
}
