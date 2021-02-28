import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  routerReducer
} from '@ngrx/router-store';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ContactsModule } from './components/contacts/contacts.module';
import { NotificationService } from './services/notification.service';
import { NotificationListComponent } from './shared/components/notification/notification.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, NotificationListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    StoreModule.forRoot(routerReducer, {
      runtimeChecks: {
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule,
    ContactsModule
  ],
  providers: [
    NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
