import { Injectable } from '@angular/core';

export class Contact {
    constructor(public id: number, public name: string){}
}

const CONTACTS: Contact[] = [
        new Contact(1, 'Wonderwoman'),
        new Contact(2, 'Superman'),
        new Contact(3, 'Batman')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ContactService {
    getContacts(){
        return new Promise<Contact[]>(resolve => {setTimeout(() => {resolve(CONTACTS);}, FETCH_LATENCY);});
    }
    getContact(id: number | string){
        return this.getContacts().then(contacts => contacts.find(contact => contact.id === +id));
    }
}