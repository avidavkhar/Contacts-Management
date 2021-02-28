import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    // method used get contacts from GetConatcts rest API
    getContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>(`${this.baseUrl}GetContacts`);
    }

    // method used get contact based on contact id
    getContactById(payload: number): Observable<Contact> {
        return this.http.get<Contact>(`${this.baseUrl}GetContact?contactId=${payload}`);
    }

    // method used create contact through AddContact rest API
    createContact(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>(`${this.baseUrl}AddContact`, contact);
    }

    // method used create contact through UpdateContact rest API
    updateContact(contact: Contact): Observable<Contact> {
        return this.http.put<Contact>(
            `${this.baseUrl}UpdateContact`,
            contact
        );
    }
}
