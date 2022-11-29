import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'travel-place',
  templateUrl: './travel-place.component.html',
  styleUrls: ['./travel-place.component.scss']
})
export class TravelPlaceComponent {

  place;
  
  constructor(
    public dialogRef: MatDialogRef<TravelPlaceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.place = data.place;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
