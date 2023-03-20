import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss']
})
export class SaveDialogComponent {

  constructor(public dialogRef: MatDialogRef<SaveDialogComponent>) { }

  onSave(){
    this.dialogRef.close(true)
  }
}
