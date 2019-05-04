import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-confirm',
  templateUrl: './app-confirm.component.html',
  styleUrls: ['./app-confirm.component.css']
})
export class AppConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {}

  ngOnInit() {
  }

}
