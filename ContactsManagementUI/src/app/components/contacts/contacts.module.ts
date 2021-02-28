import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { contactReducer } from '../../store/contact.reducer';
import { ContactEffect } from '../../store/contact.effects';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('contacts', contactReducer),
    EffectsModule.forFeature([ContactEffect])
  ],
  declarations: [
    ContactsListComponent,
    ContactAddComponent,
    ContactEditComponent
  ]
})
export class ContactsModule { }
