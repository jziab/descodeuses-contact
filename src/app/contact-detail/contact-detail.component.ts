
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-detail',
  imports: [MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    

  ],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {

  listGenre = [
    { text:'Femme', value:'f'},
    { text:'Homme', value:'h'}
  ]

contact!: contact;
signUp!:FormGroup;
constructor(
  private formBuilder : FormBuilder,
  private route: ActivatedRoute,
  private service : ContactService,
  private router: Router,){}
ngOnInit(): void{

const id = Number(this.route.snapshot.paramMap.get('id'));
this.service.getContact(id).subscribe(data =>{
//this.contact = data
this.signUp = this.formBuilder.group(
  {
   id:[data.id],
   Nom: ['', [Validators.required]],
   prenom: ['', [Validators.required]],
   username: ['', [Validators.required]],
   password: ['',[Validators.required]]
  }
)
})


}
onSubmit(){
  if (this.signUp.valid) {
    console.log(this.signUp.value)
  }
}
}


