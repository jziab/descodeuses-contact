import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ComponentDialogComponent } from '../component-dialog/component-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  imports: [ MatListModule,
              RouterModule,
              MatIconModule,
              MatFormFieldModule,
              MatInputModule, 
              FormsModule,
              MatSelectModule,
              MatFormField,
              MatMenuModule,
              MatButtonModule,
              ReactiveFormsModule,
              MatSnackBarModule

  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
 
})
export class ContactListComponent implements OnInit {
// creer varible tableau "list contact"
// contient deux contacts moi et mon camarade
//avec "nom" et "prenom"


listContact = [
{ id: 1, nom: "Hira", prenom: "Amina"},
{ id: 2, nom: "Ferdaws", prenom: "Ramata"},
{id: 3, nom: "Hira", prenom: "Amina"},
{ id: 4, nom: "Ferdaws", prenom: "Ramata"}
];
listeContactFiltre : any [] = [];
countContacts = 0; 
textRecherche : string = '';

constructor(private snackbar: MatSnackBar,
  private  dialog: MatDialog,
  private service: ContactService,
){}

ngOnInit(): void {

  this.service.getContats().subscribe(data=>{
    this.listContact = data;
     this.onSearch();
  });
 
  //method 1 : .length;
  // this.countcontacts = this.listContact.length;

  //methode2: 
  for (let index = 0; index < this.listContact.length; index++) {
    this.countContacts = this.countContacts + 1 ; 
    
  }

}
onSearch(){
console.log(this.textRecherche);

    //Methode 1: par filter
    //Fonction toLowerCase: pour faire une recherche non sensible au majuscule
    //this.listeContactFiltre = this.listeContact.filter(contact=>
    //  contact.nom.toLowerCase().startsWith(this.textRecherche.toLowerCase()) || 
    //  contact.prenom.toLowerCase().startsWith(this.textRecherche.toLowerCase())
    //);

    //Methode 2: avec la boucle for
    //Utiliser .push pour ajouter à la liste listeContactFiltre

    //this.listeContactFiltre = [];
    //for (let index = 0; index < this.listeContact.length; index++) {
    //  const element = this.listeContact[index];
    //  const recherche= this.textRecherche.toLowerCase().trim();

    //  if(
    //    element.nom.toLowerCase().startsWith(recherche)|| 
    //    element.prenom.toLowerCase().startsWith(recherche) ) {
    //    this.listeContactFiltre.push(element);
    //  }
    //}

    //Methode 3: avec la boucle for of
    //pas acces à l'indexe
    this.listeContactFiltre = [];
    for(let element of this.listContact) {
      const recherche= this.textRecherche.toLowerCase();
      if(
        element.nom.toLowerCase().startsWith(recherche)|| 
        element.prenom.toLowerCase().startsWith(recherche) ) {
        this.listeContactFiltre.push(element);
      }
    }

  }
  onAdd(){
    
    const contact = {
      id:this.listContact.length+1,
      nom:this.textRecherche,
      prenom:this.textRecherche
    }
    console.log("contact new:",contact)
    this.listContact.push(contact)
    console.log(this.listContact)
    this.countContacts= this.listContact.length;
    this.textRecherche='';
    this.onSearch()
  }
   
  onDelete(id:number){
   /* const index = this.listContact.findIndex(c=>c.id===id)
    console.log("contact id",id,"index: ",index)
    const nom = this.listContact[index].nom
    this.listContact.splice(index,1);
    this.countContacts= this.listContact.length;
    this.onSearch()
   
    this.snackbar.open(nom,'is Deleted!', {duration: 1000});*/
    let dialogref =   this.dialog.open(ComponentDialogComponent);
   dialogref.afterClosed().subscribe(result=> {
    console.log('Dialog result: ', result);
    if (result){
      const index = this.listContact.findIndex(c=>c.id===id)
    console.log("contact id",id,"index: ",index)
    const nom = this.listContact[index].nom
    this.listContact.splice(index,1);
    this.countContacts= this.listContact.length;
    this.onSearch()
    }
   })
  }

   /*onDelete(id:number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
      console.log('L\'utilisateur a confirmé');
    } else if (result === false) {
      console.log('L\'utilisateur a annulé');
    } else {
      console.log('La boîte de dialogue a été fermée sans action explicite');
    }
  });

    //const index = this.listeContact.findIndex(item=>item.id==id)
    //this.listeContact.splice(index,1);
    //this.onSearch()

  }
}*/


  sendMail(){
      this.snackbar.open('Message envoyé !', 'Fermer', { duration: 1000 });
  }
   
}






