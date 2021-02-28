import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Contact } from '../models/contact.model';

export enum ContactActionTypes {
  LOAD_CONTACTS = '[Contact] Load Contacts',
  LOAD_CONTACTS_SUCCESS = '[Contact] Load Contacts Success',
  LOAD_CONTACTS_FAIL = '[Contact] Load Contacts Fail',
  LOAD_CONTACT = '[Contact] Load Contact',
  LOAD_CONTACT_SUCCESS = '[Contact] Load Contact Success',
  LOAD_CONTACT_FAIL = '[Contact] Load Contact Fail',
  CREATE_CONTACT = '[Contact] Create Contact',
  CREATE_CONTACT_SUCCESS = '[Contact] Create Contact Success',
  CREATE_CONTACT_FAIL = '[Contact] Create Contact Fail',
  UPDATE_CONTACT = '[Contact] Update Contact',
  UPDATE_CONTACT_SUCCESS = '[Contact] Update Contact Success',
  UPDATE_CONTACT_FAIL = '[Contact] Update Contact Fail'
}

export class LoadContacts implements Action {
  readonly type = ContactActionTypes.LOAD_CONTACTS;
}

export class LoadContactsSuccess implements Action {
  readonly type = ContactActionTypes.LOAD_CONTACTS_SUCCESS;

  constructor(public payload: Contact[]) { }
}

export class LoadContactsFail implements Action {
  readonly type = ContactActionTypes.LOAD_CONTACTS_FAIL;

  constructor(public payload: string) { }
}

export class LoadContact implements Action {
  readonly type = ContactActionTypes.LOAD_CONTACT;

  constructor(public payload: number) { }
}

export class LoadContactSuccess implements Action {
  readonly type = ContactActionTypes.LOAD_CONTACT_SUCCESS;

  constructor(public payload: Contact) { }
}

export class LoadContactFail implements Action {
  readonly type = ContactActionTypes.LOAD_CONTACT_FAIL;

  constructor(public payload: any) { }
}

export class CreateContact implements Action {
  readonly type = ContactActionTypes.CREATE_CONTACT;

  constructor(public payload: Contact) { }
}

export class CreateContactSuccess implements Action {
  readonly type = ContactActionTypes.CREATE_CONTACT_SUCCESS;

  constructor(public payload: Contact) { }
}

export class CreateContactFail implements Action {
  readonly type = ContactActionTypes.CREATE_CONTACT_FAIL;

  constructor(public payload: any) { }
}

export class UpdateContact implements Action {
  readonly type = ContactActionTypes.UPDATE_CONTACT;

  constructor(public payload: Contact) { }
}

export class UpdateContactSuccess implements Action {
  readonly type = ContactActionTypes.UPDATE_CONTACT_SUCCESS;

  constructor(public payload: Update<Contact>) { }
}

export class UpdateContactFail implements Action {
  readonly type = ContactActionTypes.UPDATE_CONTACT_FAIL;

  constructor(public payload: any) { }
}

export type ActionTypes =
  | LoadContacts
  | LoadContactsSuccess
  | LoadContactsFail
  | LoadContact
  | LoadContactSuccess
  | LoadContactFail
  | CreateContact
  | CreateContactSuccess
  | CreateContactFail
  | UpdateContact
  | UpdateContactSuccess
  | UpdateContactFail;
