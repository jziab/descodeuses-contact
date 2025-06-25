
import { Component, inject } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],

 templateUrl: './component-dialog.component.html',
  styleUrl: './component-dialog.component.css'
})
export class ComponentDialogComponent{
readonly dialog = inject(MatDialog); // on peut faire la méthode constructor ( )

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ComponentDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
}
}





