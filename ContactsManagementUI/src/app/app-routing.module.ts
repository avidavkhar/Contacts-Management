import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';
import { ContactEditComponent } from './components/contacts/contact-edit/contact-edit.component';
import { ContactAddComponent } from './components/contacts/contact-add/contact-add.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contacts',
    component: ContactsListComponent
  },
  { path: 'editcontact', component: ContactEditComponent },
  { path: 'createcontact', component: ContactAddComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
