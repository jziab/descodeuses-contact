import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiURL = 'api/contacts'

  constructor(private http : HttpClient) { }

  getContats() {
    return this.http.get<any[]>(this.apiURL);
  }

  getContact(id: number) {
    return this.http.get<any>(this.apiURL+'/'+id);
  }

  addContact(contact:any) {
return this.http.post<any>(this.apiURL, contact); 
  }

  updateContact(contact: any) {
return this.http.put<any>(this.apiURL +'/'+ contact.id, contact )
  }

  deleteContact(id:number) {
    return this.http.delete<any>(this.apiURL +'/'+ id); 
  }

}
