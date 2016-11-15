import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from './contact.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contact: Contact;
    contacts: Contact[];

    msg = 'Loading contacts ...';
    userName = '';

  constructor(private contactService: ContactService, private userService: UserService) {
    this.userName = userService.userName;
   }

  ngOnInit() {
    this.contactService.getContacts().then(contacts => {
        this.msg = '';
        this.contacts = contacts;
        this.contact = contacts[0];
    });
  }
  next(){
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix > this.contacts.length - 1) { ix = 0;}
    this.contact = this.contacts[ix];
  }
  onSubmit(){
    //post demo do something like save it
    this.displayMessage('Saved ' + this.contact.name);
  }
  newContact(){
    this.displayMessage('New Contact');
    this.contact = { id: 42, name: ''};
    this.contacts.push(this.contact);
  }
  displayMessage(msg: string){
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
}