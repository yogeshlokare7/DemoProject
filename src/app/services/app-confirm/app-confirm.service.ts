import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { AppConfirmComponent } from './app-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class AppConfirmService {


  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<AppConfirmComponent>;
    dialogRef = this.dialog.open(AppConfirmComponent, {
      width: '380px',
      disableClose: true,
      data: {title, message}
    });
    return dialogRef.afterClosed();
  }
}
