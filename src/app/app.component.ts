import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isEditMode!: boolean;

constructor(public saveDiag: MatDialog){}

  onEditClick() {
    this.isEditMode = true;
  }
  onSaveClick() {
    this.isEditMode = false;
    alert("Saving...")
  }
  onNoteFocusOut(event: any) {
    if(event?.target?.value) {
      const diagRef = this.saveDiag.open(SaveDialogComponent);
      diagRef.afterClosed()
      .subscribe(diagResult => {
        if(diagResult){
          alert("Saving...")
          this.isEditMode = false;
        }
        else{
          alert("canceling...")
          this.isEditMode = true;
        }
      });
    }
  }
  updateCharCount(event: any){
    console.log(event.target.value);
  }
}
