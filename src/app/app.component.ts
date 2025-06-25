import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { routes } from './app.routes';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule,
              MatSidenavModule,
              MatToolbarModule,
              MatButtonModule,
              MatIconModule,
              MatListModule,
              MatTableModule,
              MatInputModule,
              MatFormFieldModule, 
              FormsModule,
              MatDialogModule
       
              
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'descodeuses-contact';
  listMenu= routes;

}

