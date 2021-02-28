import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as contactActions from '../../../store/contact.actions';
import * as fromContact from '../../../store/contact.reducer';
import { Contact } from '../../../models/contact.model';
import { AppUtils } from '../../../shared/helpers/apputils';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contactsList: Array<Contact> = [];
  error$: Observable<string>;

  constructor(private store: Store<fromContact.AppState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new contactActions.LoadContacts());
    this.store.pipe(select(fromContact.getContacts)).subscribe(custList => {
      this.contactsList = custList;
    });
  }

  // method used to navigate to edit contact page
  editContact(contact: Contact) {
    this.store.dispatch(new contactActions.LoadContact(contact.contactId));
    this.router.navigateByUrl('editcontact');
  }

  // method used to navigate to new contact page
  createContact() {
    this.router.navigateByUrl('createcontact');
  }

  // method used to search contacts by first name or last name
  searchContacts(event) {
    const searchText = event.target.value;
    this.store.pipe(take(1), select(fromContact.getContacts)).subscribe(custList => {
      if (!AppUtils.isNullOrWhitespace(searchText)) {
        this.contactsList = custList.filter(x => x.firstName.toLowerCase() === searchText ||
          x.lastName.toLowerCase() === searchText);
      } else {
        this.contactsList = custList;
      }
    });
  }
}
