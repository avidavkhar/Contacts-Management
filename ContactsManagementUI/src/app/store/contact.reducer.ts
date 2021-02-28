import * as contactActions from './contact.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Contact } from '../models/contact.model';
import * as fromRoot from './app-state';

export interface ContactState extends EntityState<Contact> {
  selectedContactId: number | null;
  loading: boolean;
  loaded: boolean;
  error: any;
  contactUpdated: boolean;
}

export interface AppState extends fromRoot.AppState {
  contacts: ContactState;
}

export const contactAdapter: EntityAdapter<Contact> = createEntityAdapter<
  Contact
>({
  selectId: (contact) => contact.contactId
});

export const defaultContact: ContactState = {
  ids: [],
  entities: {},
  selectedContactId: null,
  loading: false,
  loaded: false,
  error: null,
  contactUpdated: false
};

export const initialState = contactAdapter.getInitialState(defaultContact);

export function contactReducer(
  state = initialState,
  action: contactActions.ActionTypes
): ContactState {
  switch (action.type) {
    case contactActions.ContactActionTypes.LOAD_CONTACTS_SUCCESS: {
      return contactAdapter.setAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case contactActions.ContactActionTypes.LOAD_CONTACTS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case contactActions.ContactActionTypes.LOAD_CONTACT_SUCCESS: {
      return contactAdapter.addOne(action.payload, {
        ...state,
        selectedContactId: action.payload.contactId
      });
    }
    case contactActions.ContactActionTypes.LOAD_CONTACT_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case contactActions.ContactActionTypes.CREATE_CONTACT_SUCCESS: {
      return contactAdapter.addOne(action.payload, {
        ...state,
        contactUpdated: true
      });
    }
    case contactActions.ContactActionTypes.CREATE_CONTACT_FAIL: {
      return {
        ...state,
        error: action.payload,
        contactUpdated: false
      };
    }

    case contactActions.ContactActionTypes.UPDATE_CONTACT_SUCCESS: {
      return contactAdapter.updateOne(action.payload, {
        ...state,
        contactUpdated: true
      });
    }
    case contactActions.ContactActionTypes.UPDATE_CONTACT_FAIL: {
      return {
        ...state,
        error: action.payload,
        contactUpdated: false
      };
    }

    default: {
      return state;
    }
  }
}

const getContactFeatureState = createFeatureSelector<ContactState>(
  'contacts'
);

export const getContacts = createSelector(
  getContactFeatureState,
  contactAdapter.getSelectors().selectAll
);

export const getContactsLoading = createSelector(
  getContactFeatureState,
  (state: ContactState) => state.loading
);

export const getContactsLoaded = createSelector(
  getContactFeatureState,
  (state: ContactState) => state.loaded
);

export const getError = createSelector(
  getContactFeatureState,
  (state: ContactState) => state.error
);

export const getCurrentContactId = createSelector(
  getContactFeatureState,
  (state: ContactState) => state.selectedContactId
);
export const getCurrentContact = createSelector(
  getContactFeatureState,
  getCurrentContactId,
  state => state.entities[state.selectedContactId]
);

export const getContactUpdate = createSelector(
  getContactFeatureState,
  (state: ContactState) => state.contactUpdated
);
