import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { ContactService } from './contact.service';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService implements InMemoryDbService {
listContact = [
{ id: 1, nom: "Hira", prenom: "Amina"},
{ id: 2, nom: "Ferdaws", prenom: "Ramata"},
{id: 3, nom: "Hira", prenom: "Amina"},
{ id: 4, nom: "Ferdaws", prenom: "Ramata"}
];
  constructor() { }

createDb(){
  return {
    contacts : this.listContact
  } ;
}

}
